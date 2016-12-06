<template>
    <div :id="id" v-if="valid" class="google-map">
        <img :src="mapSrc" alt="Google Map" class="google-map__image">
    </div>
</template>
<script>
    export default {
        name: 'GoogleMap',
        data: () => ({
            id: `google-map-${Math.random().toString(36).substring(7)}`,
            valid: false,
        }),
        computed: {
            escapedAddress() {
                return this.address.replace(' ', '+');
            },
            mapSrc() {
                return encodeURI(`https://maps.googleapis.com/maps/api/staticmap
                    ?center=${this.address ? this.escapedAddress : `${this.y},${this.x}`}
                    &zoom=${this.zoom}
                    &size=${this.width}x${this.height}
                    &scale=
                    ${this.scale}
                    &maptype=${this.mapType}
                    &markers=${this.customMarker ? `icon:${this.customMarker}|` : ''}${this.address ? this.escapedAddress : `${this.y},${this.x}`}
                    &key=${this.mapKey}
                `.replace(/\s/gm, ''));
            },
        },
        props: {
            mapKey: {
                type: String,
            },
            x: {
                type: Number,
            },
            y: {
                type: Number,
            },
            width: {
                type: Number,
                default: 600,
            },
            height: {
                type: Number,
                default: 300,
            },
            zoom: {
                type: Number,
                default: 16,
            },
            scale: {
                type: Number,
                default: 2,
            },
            mapType: {
                type: String,
                default: 'roadmap',
            },
            customMarker: {
                type: String,
            },
            address: {
                type: String,
            }
        },
        mounted() {
            if (!this.mapKey) {
                throw new TypeError('mapKey is required.');
            }
            if (!this.address) {
                if (!this.x || !this.y) {
                    throw new TypeError('address or x and y are required.');
                }
            }
            this.valid = true;
        }
    };
</script>




<!-- get_map() {
        if (this.props.this_building && this.props.this_building.loc) {
            let coords = this.props.this_building.loc.coordinates;
            let coords_string = coords[1] + ',' + coords[0];
            let place_string = coords[1] + '+' + coords[0];
            let directions_link = "https://www.google.com/maps/place/" + place_string + "/@" + coords_string + ',16z';
            let nearby_link = "https://www.google.com/maps/search/Restaurants/@" + coords_string + ',16z/data=!3m1!4b1!4m7!2m6!3m5!1sRestaurants!2s' + coords[1] + ',+' + coords[0] + '!4m2!1d' + coords[0] + '!2d' + coords[1];
            return (
                <div className="map_container">
                    <span className="map_address">
                        {this.get_address()}
                    </span>
                    <a className="get_directions" href={directions_link} target="_blank">
                        Get Directions
                    </a>
                    <a href={directions_link} target="_blank">
                        <GoogleMap coords={coords_string} width="640" height="188" />
                    </a>
                    <a className="explore_nearby" href={nearby_link} target="_blank">
                        Explore Nearby Food and Lodging
                    </a>
                </div>
            );
        }
    } -->

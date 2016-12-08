<style lang="scss" scoped>
    @import '~scss/vars';
    @import '~scss/mixins';
    .google-map {
        &__image {
            @include hoverable(2, 4);
            display: block;
            max-width: 100%;
            height: auto;
            border-radius: 5px;
        }
    }
</style>
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

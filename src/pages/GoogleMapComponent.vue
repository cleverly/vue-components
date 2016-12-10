<template>
    <div id="google-map-component" class="google-map-component">
        <h1>Google Map</h1>
        <div class="row">
            <div class="col s12 m8 mo2 center">
                <google-map address="36 S Central, Medford OR, 97501" map-key="AIzaSyAXzYlMjV_q3m8WnXnHO41TVOyUuq5IIVk" :zoom="18" custom-marker="http://eecs.mines.edu/Courses/csci448/resources/images/app_icons/doge_icon.png" />
            </div>
        </div>
    </div>
</template>
<script>
    import GoogleMap from 'components/GoogleMap';
    export default {
        name: 'GoogleMapComponent',
        components: {
            GoogleMap,
        },
    };
</script>

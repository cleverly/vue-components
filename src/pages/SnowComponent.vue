<style lang="scss" scoped>
    @import '~scss/vars';
    @import '~scss/mixins';
    .snow-container-container {
        background-color: $grey-color;
        padding: 50px;
        .snow-container {
            @include hoverable(2, 3);
            border-radius: 5px;
            position: relative;
            background-color: $shadow-color;
            height: 500px;
            .snow {
                position: absolute;
                z-index: 1;
            }
        }
    }
</style>
<template>
    <div id="snow-component" class="snow-component">
        <div class="row">
            <div class="col s12 m6 mo3">
                <h2>Snow</h2>
                <div class="snow-container-container">
                    <div class="snow-container">
                        <snow />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Snow from 'components/Snow';
    export default {
        name: 'SnowComponent',
        components: {
            Snow,
        },
    };
</script>

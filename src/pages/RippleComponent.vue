<template>
    <div id="ripple-component" class="ripple-component">
        <ripple color="secondary" :step="20">
            <h1>Ripple Component</h1>
        </ripple>
        <div class="row">
            <div class="col s12 m6 mo3">
                <div class="card">
                    <ripple :step="10">
                        <img src="http://lorempixel.com/1280/720/abstract/Placeholder Image" alt="" class="image-responsive rounded center--block">
                    </ripple>
                    <br />
                    <br />
                    <ripple :step="5" color="primary">
                        <a href="#!" class="button raised" @click.prevent>Primary</a>
                    </ripple>
                    <ripple :step="5" color="secondary">
                        <a href="#!" class="button raised" @click.prevent>Secondary</a>
                    </ripple>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Ripple from 'components/Ripple';
    export default {
        name: 'RippleComponent',
        components: {
            Ripple,
        },
    };
</script>

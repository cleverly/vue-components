<template>
    <div id="drop-down-component" class="drop-down-component">
        <h1>Drop Down</h1>
        <div class="row">
            <div class="col s12 m6 mo3 center">
                <dropdown :close-after="1000">
                    Dropdown Label
                    <div slot="menu">
                        <a href="#!" @click.prevent>Test 1</a>
                        <a href="#!" @click.prevent>Test 2</a>
                        <a href="#!" @click.prevent>Test 3</a>
                        <a href="#!" @click.prevent>Test 4</a>
                    </div>
                </dropdown>
            </div>
        </div>
    </div>
</template>
<script>
    import Dropdown from 'components/Dropdown';
    export default {
        name: 'DropDownComponent',
        components: {
            Dropdown,
        },
    };
</script>

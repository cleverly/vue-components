<template>
    <div id="tootltip-directive" class="tootltip-directive">
        <h1>Content</h1>
        <div class="row">
            <div class="col s12 m8 mo2">
                <h2>ToolTip</h2>
                <span v-tooltip.left="'I\m a little tooltip'">Left Tooltip</span>
                <span v-tooltip.top="'I\m a little tooltip'">Top Tooltip</span>
                <span v-tooltip.bottom="'I\m a little tooltip'">Bottom Tooltip</span>
                <span v-tooltip.right="'I\m a little tooltip'">Right Tooltip</span>
            </div>
        </div>
    </div>
</template>
<script>
    import '../directives/ToolTip.js';
    export default {
        name: 'ContentDirectives',
    };
</script>

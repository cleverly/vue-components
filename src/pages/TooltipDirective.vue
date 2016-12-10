<template>
    <div id="tootltip-directive" class="tootltip-directive">
        <h1>Tool Tip</h1>
        <div class="row">
            <div class="col s12 m8 mo2">
                <h2>ToolTip Directive</h2>
                <span v-tooltip="'I\m a little tooltip'">Hover Me!</span>
                <div v-tooltip="'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum iusto placeat vero expedita recusandae repellendus eos officiis delectus est in perferendis quos, culpa consequatur omnis deleniti asperiores dolorem laboriosam quod veritatis voluptatum dolores itaque optio alias error! Consectetur inventore nam unde doloremque? Eos incidunt harum iure omnis suscipit perspiciatis consequatur labore. Nihil blanditiis optio saepe sit sint cupiditate repudiandae hic sed voluptatum deserunt, est incidunt quae voluptatem modi veritatis doloribus aut, esse ipsam quod minus. Esse numquam repellendus inventore nostrum totam mollitia impedit quas ullam exercitationem blanditiis reprehenderit, a asperiores quasi enim ad vel nobis quibusdam laboriosam voluptatibus pariatur odio autem soluta maiores tenetur! Quam, placeat, dignissimos. Sunt voluptatum suscipit ratione illum molestiae vero accusamus atque, nulla similique commodi, sequi in! Et aut quidem consequatur, officiis cumque dicta, ex, temporibus illo eveniet magnam neque saepe dignissimos sed quos mollitia ipsam tempora architecto culpa excepturi harum, reprehenderit. Eum quam sit, est, mollitia labore dolor facere at inventore pariatur corporis doloremque esse saepe tempora beatae omnis odio autem enim quasi, amet nemo nam hic maxime. Nulla consectetur voluptates enim esse animi quos eligendi non ab possimus error laudantium obcaecati fuga cumque tenetur modi, aliquam labore saepe, tempora totam maxime placeat. Eius, dignissimos.'">No, Hover me!</div>
            </div>
        </div>
    </div>
</template>
<script>
    import '../directives/ToolTip.js';
    export default {
        name: 'TooltipDirective',
    };
</script>

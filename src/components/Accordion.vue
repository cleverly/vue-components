<style lang="scss" scoped>
    @import '~scss/vars';
    @import '~scss/mixins';
    $shadow-color: #5B5C60;
    .accordion {
        @include hoverable(2, 4)
        border-radius: 5px;
        background-color: $shadow-color;
        color: #fff;
        text-align: left;
    }
</style>
<template>
    <div :id="id" class="accordion">
        <accordion-item v-for="item in items" :header="item.header" :content="item.content" v-model="status" />
    </div>
</template>
<script>
    import AccordionItem from './_AccordionItem';
    export default {
        name: 'Accordion',
        data: function() {
            return {
                id: `accordion-${Math.random().toString(36).substring(7)}`,
                status: this.multiOpen ? [] : '',
            };
        },
        props: {
            items: {
                type: Array,
            },
            multiOpen: {
                type: Boolean,
                default: false,
            },
        },
        components: {
            AccordionItem,
        },
    };
</script>

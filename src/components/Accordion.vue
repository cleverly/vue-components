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

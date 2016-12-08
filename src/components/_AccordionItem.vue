<template>
    <div :id="id" :class="`accordion-item ${open ? 'accordion-item--open' : 'accordion-item--closed'}`">
        <div class="accordion-item__header" @click="onInput">
            {{header}}
        </div>
        <div class="accordion-item__content-container" :style="{height}">
            <div class="accordion-item__content">
                {{content}}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'AccodionItem',
        data: () => ({
            id: `accordion-item-${Math.random().toString(36).substring(7)}`,
            height: null,
        }),
        computed: {
            open() {
                let open = false;
                if (Array.isArray(this.value)) {
                    if (this.value.indexOf(this.id) !== -1) {
                        open = true;
                    }
                } else {
                    open = this.value === this.id;
                }
                return open;
            }
        },
        props: {
            header: {
                type: String,
                default: '',
            },
            content: {
                type: String,
                default: '',
            },
            value: {
                type: [String, Array],
            },
        },
        methods: {
            onInput() {
                let inputValue;
                if (Array.isArray(this.value)) {
                    inputValue = this.value.concat([]);
                    if (this.value.indexOf(this.id) === -1) {
                        inputValue.push(this.id);
                    } else {
                        inputValue.splice(this.value.indexOf(this.id), 1);
                    }
                } else {
                    inputValue = this.id === this.value ? '' : this.id;
                }
                this.$emit('input', inputValue);
            },
        },
        mounted() {
            this.height = `${this.$el.querySelector('.accordion-item__content-container').scrollHeight}px`;
        },
    };
</script>

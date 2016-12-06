<template>
    <div :id="id" :class="classString" @click="close">
        <div tabindex="0" :class="`modal__content ${title ? 'modal__content--title' : ''} ${hasButtons ? 'modal__content--buttons' : ''}`" @click.stop @keyup.esc="close">
            <div v-if="title" class="modal__title">{{title}}</div>
            <div class="modal__close" @click="close"></div>
            <div class="modal__scrollable">
                <slot></slot>
            </div>
            <div v-if="hasButtons" class="modal__buttons">
                <slot name="buttons"></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Modal',
        data: () => ({
            id: `modal-${Math.random().toString(36).substring(7)}`,
            hasButtons: false,
        }),
        props: [
            'open',
            'title',
        ],
        computed: {
            classString() {
                return `modal ${this.open ? 'modal--active' : ''}`
            }
        },
        watch: {
            open(n) {
                if (n) {
                    document.body.style.overflow = 'hidden';
                    this.$nextTick(() => {
                        setTimeout(() => {
                            document.getElementById(this.id).children[0].focus();
                        }, 100);
                    });
                } else {
                    document.body.style.overflow = 'initial';
                }
            }
        },
        methods: {
            close(e) {
                this.$emit('close')
            }
        },
        mounted() {
            this.hasButtons = Boolean(this.$slots.buttons);
        }
    }
</script>

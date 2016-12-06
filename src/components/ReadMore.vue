<template>
    <div :class="`read-more ${expanded ? 'read-more--expanded' : 'read-more--compressed'}`">
        <div class="read-more__content" :style="{height}">
            <slot></slot>
        </div>
        <div class="read-more__button" @click="expand">{{label}}</div>
    </div>
</template>
<script>
    export default {
        name: 'ReadMore',
        data: () => ({
            expanded: false,
            fullHeight: 0,
            height: false,
        }),
        props: {
            label: {
                type: String,
                default: 'Read More',
            },
            compressedHeight: {
                type: Number,
                default: 200,
            }
        },
        methods: {
            expand() {
                if (this.expanded) {
                    this.height = `${this.compressedHeight}px`
                } else {
                    this.height = this.fullHeight;
                }
                this.expanded = !this.expanded;
            }
        },
        mounted() {
            let slot = this.$slots.default[0];
            this.fullHeight = `${slot.elm.parentElement.scrollHeight}px`;
            this.height = `${this.compressedHeight}px`;
        },
    };
</script>

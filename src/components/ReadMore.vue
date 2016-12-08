<style lang="scss" scoped>
    @import '~scss/vars';
    @import '~scss/mixins';
    $shadow-color: #5B5C60;
    $long-transition: 500ms;
    .read-more {
        &__content {
            text-align: left;
            overflow: hidden;
            transition: height $long-transition;
        }
        &__button {
            @include hoverable(2, 3);
            border-radius: 5px;
            display: inline-block;
            padding: 10px;
            color: #000;
            user-select: none;
            cursor: pointer;
            font-weight: 600;
            background-color: $shadow-color;
            color: #fff;
            margin: 20px auto 0px;
            &:hover {
                color: #fff;
            }
        }
    }
</style>
<template>
    <div :id="id" :class="`read-more ${expanded ? 'read-more--expanded' : 'read-more--compressed'}`">
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
            id: `read-more-${Math.random().toString(36).substring(7)}`,
            expanded: false,
            fullHeight: null,
            height: null,
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

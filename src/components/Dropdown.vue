<style lang="scss" scoped>
    @import '~scss/vars';
    @import '~scss/mixins';
    $shadow-color: #5B5C60;
    $primary-color: #F17269;
    $short-transition: 250ms;
    .dropdown {
        @include hoverable(2, 4);
        padding: 20px;
        display: inline-block;
        position: relative;
        color: #fff;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border-bottom:  1px solid transparent;
        cursor: pointer;
        text-align: left;
        z-index: 1000;
        transition: border-color $short-transition, border-radius $short-transition, box-shadow $short-transition, top $short-transition, background-color $short-transition, color $short-transition;
        &__menu {
            position: absolute;
            top: calc(100% + 1px);
            width: 100%;
            left: 0;
            visibility: visible;
            overflow: hidden;
            background-color: $shadow-color;
            transition: visibility $short-transition, height $short-transition, border-radius $short-transition, box-shadow $short-transition;

            a {
                padding: 20px;
                display: block;
                color: #fff;
                &:hover {
                    background-color: $primary-color;
                }
            }
        }
        &--closed {
            background-color: $primary-color;
            .dropdown__menu {
                height: 0px !important;
                visibility: hidden;
            }
        }
        &:hover,
        &--open {
            background-color: $shadow-color;
        }
        &--open {
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
            border-color: #fff;
            .dropdown__menu {
                @include shadow(4);
                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 5px;
            }
        }
    }
</style>
<template>
    <div :id="id" :class="`dropdown ${status ? 'dropdown--open' : 'dropdown--closed'}`" @click="toggleState" @mouseover="cancelClose" @mouseout="autoClose">
        <slot></slot>
        <div class="dropdown__menu" :style="{height}" @mouseover="cancelClose" @mouseout="autoClose">
            <slot name="menu"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Dropdown',
        data: () => ({
            id: `dropdown-${Math.random().toString(36).substring(7)}`,
            status: false,
            height: null,
            timeout: null,
        }),
        props: {
            closeAfter: {
                type: Number,
            },
        },
        methods: {
            toggleState() {
                if (this.status) {
                    this.status = false;
                } else {
                    this.status = true;
                }
            },
            autoClose() {
                if (this.closeAfter) {
                    clearTimeout(this.timeout);
                    if (this.status) {
                        this.timeout = setTimeout(() => {
                            clearTimeout(this.timeout);
                            this.status = false;
                        }, this.closeAfter);
                    }
                }
            },
            cancelClose() {
                clearTimeout(this.timeout);
            },
        },
        mounted() {
            if (!this.$slots.menu) {
                throw new TypeError('Please add itemts to the dropdown with slot="menu" directive.');
            }
            this.height = `${this.$slots.menu[0].elm.clientHeight}px`;
        },
    };
</script>

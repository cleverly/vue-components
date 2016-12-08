<style lang="scss" scoped>
    @import '~scss/vars';
    @import '~scss/mixins';
    $shadow-color: #5B5C60;
    $toggle-color: #F17269;
    $toggle-disabled-color: #C4C6C9;
    $toggle-transition: 250ms;
    input[type="radio"] {
        border: 2px solid $shadow-color;
        outline: 5px solid transparent;
        outline-offset: -10px;
        width: 20px;
        height: 20px;
        border-radius: 3px;
        transition: outline-color $toggle-transition, background-color $toggle-transition;

        &:checked {
            background-color: $toggle-color;
            outline-color: rgba(#fff, 0.5);

        }
        &:disabled {
            border-color: transparentize($toggle-disabled-color, 0.5);
            &:checked {
                background-color: $toggle-disabled-color;
                outline-color: lighten($toggle-disabled-color, 10);
            }
        }
    }
    .toggle {
        input[type="checkbox"] {
            cursor: pointer;
            &:not(.slider) {
                width: 20px;
                height: 20px;
                border: 2px solid $shadow-color;
                border-radius: 3px;
                vertical-align: text-bottom;
                position: relative;
                transition: background-color $toggle-transition;

                &:after {
                    content: '';
                    display: none;
                    width: 5px;
                    height: 9px;
                    border-bottom: 2px solid #fff;
                    border-right: 2px solid #fff;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) rotate(45deg);
                }

                &:checked {
                    background-color: $toggle-color;
                    &:after {
                        display: block;
                    }
                }
                &:disabled {
                    border-color: transparentize($toggle-disabled-color, 0.5);
                    &:checked {
                        background-color: $toggle-disabled-color;
                    }
                }
            }
            &.slider {
                position: relative;
                background-color: $toggle-disabled-color;
                height: 20px;
                width: 42px;
                border-radius: 25px;
                transition: all 250ms;
                vertical-align: middle;
                margin: 2px;
                &.multi {
                    background-color: $toggle-color;
                    &:before {
                        background-color: lighten($toggle-color, 20) !important;
                    }
                }
                &:disabled {
                    background-color: transparentize($toggle-disabled-color, 0.5) !important;
                    &:before {
                        background-color: $toggle-disabled-color !important;
                        box-shadow: none !important;
                    }
                }
                &:before {
                    @include shadow(2);
                    content: '';
                    position: absolute;
                    left: -2px;
                    top: -2px;
                    width: 24px;
                    height: 24px;
                    background-color: white;
                    border-radius: 100%;
                    transition: all 250ms;

                }
                &:checked {
                    background-color: $toggle-color;
                    &:before {
                        background-color: lighten($toggle-color, 20);
                        transform: translateX(100%);
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="toggle">
        <label :for="id" v-if="label">{{label}}</label>
        <input v-if="radio" :id="id" :class="classString" :checked="value === (radioValue ? radioValue : label)" :value="(radioValue ? radioValue : label)" @change="onInput" type="radio" :disabled="disabled">
        <input v-else :id="id" :class="classString" :checked="value" @change="onInput" type="checkbox" :disabled="disabled">
        <label :for="id" v-if="multiLabel">{{multiLabel}}</label>
    </div>
</template>
<script>
    export default {
        name: 'Toggle',
        data: ()=> ({
            id: `toggle-${Math.random().toString(36).substring(7)}`,
        }),
        computed: {
            classString() {
                return `${(this.multi || this.slider) ? 'slider' : ''} ${this.multi ? 'multi' : ''}`;
            }
        },
        props: [
            'label',
            'value',
            'slider',
            'multi',
            'multiLabel',
            'disabled',
            'radio',
            'radioValue',
        ],
        methods: {
            onInput(e) {
                this.$emit('input', this.radio ? e.target.value : e.target.checked);
            }
        }
    };
</script>

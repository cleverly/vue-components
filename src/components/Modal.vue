<style lang="scss" scoped>
    @import '~scss/vars';
    @import '~scss/mixins';
    $shadow-color: #5B5C60;
    $long-transition: 500ms;
    .modal {
        position: fixed;
        visibility: hidden;
        opacity: 0;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,0.5);
        z-index: 1000;
        transition: opacity $long-transition, visibility $long-transition;
        &__close {
            @include hoverable($position: absolute, $top: 5);
            right: 5px;
            background-image: url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTE5IDYuNDFMMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnoiLz4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==');
            background-position: center;
            background-repeat: no-repeat;
            background-size: 20px 20px;
            background-color: $shadow-color;
            width: 20px;
            height: 20px;
            border-radius: 100%;
            z-index: 1010;
        }
        &__content {
            @include shadow(3);
            background-color: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 1280px;
            max-height: 90vh;
            width: 90%;
            margin: 0 auto;
            border-radius: 5px;
            padding: 30px;
            display: flex;
            flex-direction: column;
            @include mobile {
                max-height: 98vh;
            }
            @include tablet {
                width: 85%;
            }
            @include desktop {
                width: 75%;
            }
            .row {
                margin-left: -0.75rem;
                margin-right: -0.75rem;
            }
        }
        &__title {
            flex: auto;
            margin-top: -30px;
            padding: 30px 0;
            font-weight: 900;
            font-size: 1.5rem;
            line-height: 0;
            text-align: center;
        }
        &__scrollable {
            overflow-y: auto;
            overflow-x: hidden;
            flex: auto;
        }
        &__buttons {
            padding-top: 30px;
            flex: auto;
            .button {
                margin-right: 10px;
                &:last-child {
                    margin-right: 0px;
                }
            }
        }

        &--active {
            visibility: visible;
            opacity: 1;
        }
    }
</style>
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

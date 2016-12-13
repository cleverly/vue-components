<style lang="scss" scoped>
    @import '~scss/vars';
    @import '~scss/mixins';
    $shadow-color: #5B5C60;
    $primary-color: #F17269;
    $short-transition: 250ms;
    .scroll-to-top {
        @include hoverable(3, 4, $bottom: 20, $position: fixed);
        right: 20px;
        width: 40px;
        height: 40px;
        background-color: $shadow-color;
        background-image: url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+ICAgIDxwYXRoIGQ9Ik00IDEybDEuNDEgMS40MUwxMSA3LjgzVjIwaDJWNy44M2w1LjU4IDUuNTlMMjAgMTJsLTgtOC04IDh6Ii8+PC9zdmc+');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: 100%;
        transition: opacity $short-transition, visibility $short-transition, background-color $short-transition, bottom $short-transition, box-shadow $short-transition;

        &:hover {
            background-color: $primary-color;
        }

        &--hidden {
            visibility: hidden;
            opacity: 0;
        }
        &--visible {
            visibility: visible;
            opacity: 1;
        }
    }
</style>
<template>
    <div :id="id" :class="`scroll-to-top ${visible ? 'scroll-to-top--visible' : 'scroll-to-top--hidden'}`" @click="toTop">
        <slot></slot>
    </div>
</template>
<script>
    import raf from 'raf';
    export default {
        name: 'ScrollToTop',
        data: () => ({
            id: `scroll-to-top-${Math.random().toString(36).substring(7)}`,
            visible: false,
            scrollPos: 0,
            origPos: null,
            time: null,
            raf: null,
        }),
        props: {
            activeOffset: {
                type: Number,
                default: 500,
            },
            scrollDur: {
                type: Number,
                default: 1000,
            },
        },
        watch: {
            scrollPos(n) {
                if (n >= this.activeOffset) {
                    this.visible = true;
                } else {
                    this.visible = false;
                }
            },
        },
        methods: {
            toTop(i) {
                raf.cancel(this.raf);
                i = typeof i === 'number' ? i : 1;
                if (i === 1) {
                    this.origPos = this.scrollPos;
                    this.time = new Date().getTime();
                }
                let time = new Date().getTime() - this.time;
                let smoothStep = this.smoothStep(0, this.scrollDur, time);
                let step = parseInt(this.origPos / (30 * (this.scrollDur / 1000)), 10);
                let scrollAmount = step + (step * smoothStep);
                if (this.scrollPos > 0) {
                    window.scrollBy(0, -scrollAmount, 'smooth');
                    this.raf = raf(this.toTop.bind(this, i + 1));
                } else {
                    this.clearScroll();
                }
            },
            smoothStep(min, max, value) {
                let x = Math.max(0, Math.min(1, (value - min) / (max - min)));
                return x * x * (3 - (2 * x));
            },
            scrollHandler(e) {
                if (this.origPos && this.scrollPos - document.body.scrollTop < parseInt(this.origPos / (30 * (this.scrollDur / 1000)), 10)) {
                    this.clearScroll();
                }
                this.scrollPos = document.body.scrollTop;
            },
            clearScroll() {
                raf.cancel(this.raf);
                this.origPos = null;
                this.time = null;
            },
        },
        mounted() {
            window.addEventListener('scroll', this.scrollHandler);
        },
        destroyed() {
            window.removeEventListener('scroll', this.scrollHandler);
        },
    };
</script>

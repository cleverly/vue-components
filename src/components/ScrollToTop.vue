<template>
    <div :id="id" :class="`scroll-to-top ${visible ? 'scroll-to-top--visible' : 'scroll-to-top--hidden'}`" @click="toTop">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'ScrollToTop',
        data: () => ({
            id: `scroll-to-top-${Math.random().toString(36).substring(7)}`,
            visible: false,
            scrollPos: 0,
            timeout: false,
        }),
        props: {
            activeOffset: {
                type: Number,
                default: 500,
            },
            scrollAmount: {
                type: Number,
                default: 50,
            },
            scrollDelay: {
                type: Number,
                default: 10,
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
            toTop() {
                clearTimeout(this.timeout);
                if (this.scrollPos > 0) {
                    window.scrollBy(0, -this.scrollAmount);
                    this.timeout = setTimeout(this.toTop, this.scrollDelay);
                } else {
                    clearTimeout(this.timeout);
                }
            },
            scrollHandler() {
                this.scrollPos = document.body.scrollTop;
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

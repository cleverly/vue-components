<template>
    <div @mouseout="setStyles" @click.stop="ripple" class="ripple" :style="outerStyle">
        <svg class="ripple__svg" v-if="animating" :style="`${style} opacity: ${opacity}`">
            <circle :class="`ripple__svg__circle ${color}`" :cx="cx" :cy="cy" :r="r"></circle>
        </svg>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'Ripple',
        data: () => ({
            animating: false,
            animation: false,
            cx: 0,
            cy: 0,
            r: 0,
            style: '',
            outerStyle: '',
            opacity: 1,
            windowListener: null,
        }),
        props: {
            color: {
                type: String,
                default: 'white',
            },
            step: {
                type: Number,
                default: 4,
            },
            interval: {
                type: Number,
                default: 1,
            },
        },
        methods: {
            name: 'ripple',
            ripple(e) {
                this.setStyles();
                this.cx = e.offsetX;
                this.cy = e.offsetY;
                this.r = 0;
                if (this.animating) {
                    clearInterval(this.animation);
                    this.animating = false;
                }
                this.opacity = 1;
                this.animating = true;
                this.animation = setInterval(this.rippleAnimation, this.interval);

            },
            setStyles() {
                setTimeout(() => {
                    let computedStyles = getComputedStyle(this.$slots.default[0].elm);
                    let borderRadius = computedStyles.borderRadius;
                    let top = computedStyles.top;
                    let right = computedStyles.right;
                    let bottom = computedStyles.bottom;
                    let left = computedStyles.left;
                    let display = computedStyles.display;
                    let width = computedStyles.width;
                    let height = computedStyles.height;
                    let marginTop = computedStyles.marginTop;
                    let marginRight = computedStyles.marginRight;
                    let marginBottom = computedStyles.marginBottom;
                    let marginLeft = computedStyles.marginLeft;
                    if (display === 'inline') {
                        throw new Error('Child of ripple may not be inline');
                    }
                    let base = `
                        display: ${display};
                        border-radius: ${borderRadius};
                    `;
                    this.style = `
                        top: ${top !== 'auto' ? top : '0'};
                        right: ${right !== 'auto' ? right : '0'};
                        bottom: ${bottom !== 'auto' ? bottom : '0'};
                        left: ${left !== 'auto' ? left : '0'};
                        margin-top: ${display !== 'block' ? marginTop : 'initial'};
                        margin-right: ${display !== 'block' ? marginRight : 'initial'};
                        margin-bottom: ${display !== 'block' ? marginBottom : 'initial'};
                        margin-left: ${display !== 'block' ? marginLeft : 'initial'};
                        max-width: ${parseInt(width, 10) + 1}px;
                        max-height: ${parseInt(height, 10) + 1}px;
                        ${base}
                    `;
                    if (!this.outerStyle) {
                        this.outerStyle = `
                            margin-top: ${marginTop};
                            margin-right: ${marginRight};
                            margin-bottom: ${marginBottom};
                            margin-left: ${marginLeft};
                            ${base}
                        `;
                    }
                }, 105);
            },
            rippleAnimation() {
                let box = this.$slots.default[0].elm;
                let width = box.scrollWidth;
                let height = box.scrollHeight;
                let maxRad = Math.ceil(Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)));
                if (this.r >= maxRad) {
                    clearInterval(this.animation);
                    this.animation = setInterval(this.fadeAnimation, this.interval);
                } else {
                    this.r += this.step;
                }
            },
            fadeAnimation() {
                if (this.opacity <= 0) {
                    clearInterval(this.animation);
                    this.animating = false;
                } else {
                    this.opacity -= this.step / 100;
                }
            },
        },
        mounted() {
            if (this.$slots.default.length > 1) {
                throw new RangeError('Ripple may only have one child element.');
            }
            this.outerStyle = '';
            let slot = this.$slots.default[0];
            let target = slot.elm;
            this.windowListener = () => {
                this.outerStyle = '';
                this.setStyles(target);
            };
            window.addEventListener('resize', this.windowListener);
            if (slot.tag === 'img') {
                target.addEventListener('load', () => {
                    this.$nextTick(() => {
                        this.outerStyle = '';
                        this.setStyles(target)
                    });
                });
            } else {
                this.$nextTick(() => {
                    this.setStyles(target);
                });
            }
        },
        destroyed() {
            window.removeEventListener('resize', this.windowListener);
        }
    };
</script>
<style lang="scss" scoped>
    .ripple {
        display: inline;
        position: relative;
        user-select: none;
        cursor: pointer;
        &__svg {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            &__circle {
                fill-opacity: 0.1;
                &.white {
                    fill: #fff;
                }
            }
        }
    }
</style>

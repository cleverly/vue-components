<template>
    <canvas class="snow"></canvas>
</template>
<script>
    import raf from 'raf';
    export default {
        name: 'Snow',
        data: () => ({
            ctx: null,
            particles: [],
            angle: 0,
            width: null,
            height: null,
        }),
        props: {
            maxParticles: {
                type: Number,
                default: 25,
            },
        },
        methods: {
            draw() {
                this.ctx.clearRect(0, 0, this.width, this.height);
                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                this.ctx.beginPath();
                for (let i = 0; i < this.maxParticles; i++) {
                    let p = this.particles[i];
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
                }
                this.ctx.fill();
                this.update();
            },
            update() {
                this.angle += 0.01;
                for (let i = 0; i < this.maxParticles; i++) {
                    let p = this.particles[i];
                    p.y += (Math.cos(this.angle + p.d) + 1 + p.r) / 2;
                    p.x += Math.sin(this.angle) * 2;

                    if (p.x > this.width + 5 || p.x < -5 || p.y > this.height) {
                        if (i % 3 > 0) {
                            this.particles[i] = {
                                x: Math.random() * this.width,
                                y: -10,
                                r: p.r,
                                d: p.d,
                            };
                        } else if (Math.sin(this.angle) > 0) {
                            this.particles[i] = {
                                x: -5,
                                y: Math.random() * this.height,
                                r: p.r,
                                d: p.d,
                            };
                        } else {
                            this.particles[i] = {
                                x: this.width + 5,
                                y: Math.random() * this.height,
                                r: p.r,
                                d: p.d,
                            };
                        }
                    }
                }
                raf(this.draw)
            },
            resize() {
                this.width = this.$el.scrollWidth;
                this.height = this.$el.scrollHeight;
                this.$el.width = this.width;
                this.$el.height = this.height;
            }
        },
        mounted() {
            this.ctx = this.$el.getContext('2d');
            this.resize();
            window.addEventListener('resize', this.resize);
            for (let i = 0; i < this.maxParticles; i++) {
                this.particles.push({
                    x: Math.random() * this.width,
                    y: Math.random() * this.height,
                    r: (Math.random() * 4) + 1,
                    d: Math.random() * this.maxParticles,
                });
            }
            raf(this.draw);
        },
        destroyed() {
            window.removeEventListener('resize', this.resize);
        }
    };
</script>
<style lang="scss" scoped>
    canvas {
        display: block;
        pointer-events: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
</style>

<template>
    <div :id="id" :class="`dropdown ${status ? 'dropdown--open' : 'dropdown--closed'}`" @click="toggleState" @mouseout="autoClose">
        <slot></slot>
        <div class="dropdown__menu" :style="{height}">
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
            height: false,
            timeout: false,
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
        },
        mounted() {
            if (!this.$slots.menu) {
                throw new TypeError('Please add itemts to the dropdown with slot="menu" directive.');
            }
            this.height = `${this.$slots.menu[0].elm.clientHeight}px`;
        },
    };
</script>

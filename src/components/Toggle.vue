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

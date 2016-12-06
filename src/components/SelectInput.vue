<template>
    <div class="select-input">
        <label :for="id" v-if="label" :class="hasValue">{{label}}</label>
        <select :id="id" type="text" :class="hasValue" :value="value" @input="onInput" @focus="hasValue=''" @blur="hasValue = value ? '' : ' empty'">
            <option value=""></option>
            <option v-for="option in options" :value="option.value">{{option.text}}</option>
        </select>
    </div>
</template>
<script>
    export default {
        name: 'SelectInput',
        data: function() {
            return {
                id: `select-input-${Math.random().toString(36).substring(7)}`,
                hasValue: this.value ? '' : ' empty',
            };
        },
        watch: {
            value(value) {
                if (value === '') {
                    this.hasValue = ' empty';
                } else {
                    this.hasValue = '';
                }
            }
        },
        props: [
            'value',
            'options',
            'label'
        ],
        methods: {
            onInput(e) {
                this.$emit('input', e.target.value);
            }
        }
    }
</script>

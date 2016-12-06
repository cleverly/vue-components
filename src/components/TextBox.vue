<template>
    <div class="text-box">
        <label :for="id" v-if="label" :class="hasValue">{{label}}</label>
        <textarea
            :id="id"
            :class="hasValue"
            :value="value"
            @input="onInput"
            @focus="hasValue=''"
            @blur="hasValue = value ? '' : ' empty'"
            ></textarea>
    </div>
</template>
<script>
    export default {
        name: 'TextBox',
        data: function() {
            return {
                id: `text-box-${Math.random().toString(36).substring(7)}`,
                hasValue: this.value ? '' : ' empty'
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
            'label'
        ],
        methods: {
            resize() {
                let textarea = document.getElementById(this.id);
                textarea.style.height = '1px';
                textarea.style.height = `${textarea.scrollHeight}px`;
            },
            onInput(e) {
                this.resize();
                this.$emit('input', e.target.value);
            }
        },
        mounted() {
            this.resize();
        }
    };
</script>

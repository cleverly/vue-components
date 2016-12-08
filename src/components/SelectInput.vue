<style lang="scss" scoped>
    .select-input {
        select {
            background-image: url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTcuNDEgNy44NEwxMiAxMi40Mmw0LjU5LTQuNThMMTggOS4yNWwtNiA2LTYtNnoiLz4gICAgPHBhdGggZD0iTTAtLjc1aDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+');
            background-repeat: no-repeat;
            background-size: 24px 24px;
            background-position: right center;
            &.empty {
                background-image: url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjY2NjY2NjIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTcuNDEgNy44NEwxMiAxMi40Mmw0LjU5LTQuNThMMTggOS4yNWwtNiA2LTYtNnoiLz4gICAgPHBhdGggZD0iTTAtLjc1aDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+');
            }
        }
    }
</style>
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

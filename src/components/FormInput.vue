<template>
    <div class="form-input">
        <label :for="id" v-if="label" :class="hasValue" :required="required">{{label}}</label>
        <input
            :id="id"
            :class="hasValue"
            :type="type ? type : 'text'"
            :value="value"
            @input="onInput"
            :disabled="disabled"
            :label="label"
            :max="max"
            :maxlength="maxlength"
            :min="min"
            :pattern="pattern"
            :placeholder="placeholder"
            :readonly="readonly"
            :required="required"
            :size="size"
            :step="step"
            @focus="hasValue=''"
            @blur="hasValue = value ? '' : ' empty'"
        />
    </div>
</template>
<script>
    export default {
        name: 'FormInput',
        data: function () {
            return {
                id: `form-input-${Math.random().toString(36).substring(7)}`,
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
            'disabled',
            'label',
            'max',
            'maxlength',
            'min',
            'pattern',
            'placeholder',
            'readonly',
            'required',
            'size',
            'step',
            'type',
            'value'
        ],
        methods: {
            onInput(e) {
                this.$emit('input', e.target.value);
            }
        }
    }
</script>

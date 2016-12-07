import Vue from 'vue';
import FormInput from 'src/components/FormInput';

describe('FormInput.vue', () => {
    it('should have an onInput method', () => {
        expect(typeof FormInput.methods.onInput).to.equal('function');
    });
    it('should accept a value prop', () => {
        expect(FormInput.props.indexOf('value'))
            .to.not.equal(-1);
    });
    it('should render an input', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render: (h) => h(FormInput),
        });
        expect(vm.$el.querySelector('input'))
            .to.not.equal(null);
    });
});

import Vue from 'vue';

Vue.directive('tooltip', {
    inserted(el, binding) {
        el.tooltip = document.createElement('div');
        el.tooltip.className = 'tooltip__text';
        el.tooltip.innerHTML = binding.value;
        let modifier = 'top';
        let modifiers = Object.keys(binding.modifiers);
        if (modifiers.length) {
            if (modifiers.length > 1) {
                throw new TypeError('Please only specify one directional modifier - eg top, right, bottom, left');
            }
            if (modifiers[0] === 'top' || modifiers[0] === 'right' || modifiers[0] === 'bottom' || modifiers[0] === 'left') {
                modifier = modifiers[0];
            } else {
                throw new TypeError(`Unknown modifier: ${modifiers[0]}`);
            }
        }
        el.appendChild(el.tooltip);
        el.className = `${el.className} tooltip tooltip--${modifier}`;
        el.tooltip.addEventListener('mouseover', (e) => {
            e.stopPropagation();
        });
        el.addEventListener('mouseover', () => {
            el.className = `${el.className} tooltip--active`;
        });
        el.addEventListener('mouseout', () => {
            el.className = el.className.replace('tooltip--active', '').replace('  ', ' ');
        });
    },
});

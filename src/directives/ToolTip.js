import Vue from 'vue';

Vue.directive('tooltip', {
    inserted(el, binding) {
        let parentPosition = getComputedStyle(el).position;
        if (parentPosition === 'static') {
            el.style.position = 'relative';
        }
        el.tooltip = document.createElement('div');
        el.tooltip.className = 'tooltip';
        el.tooltip.innerHTML = binding.value;
        el.tooltip.style.position = 'absolute';
        el.tooltip.style.top = '0';
        el.tooltip.style.left = '50%';
        el.tooltip.style.transform = 'translate(-50%, -100%)';
        el.tooltip.style.visiblity = 'hidden';
        el.tooltip.style.opacity = '0';
        el.addEventListener('mouseover', () => {
            el.tooltip.style.visiblity = 'visible';
            el.tooltip.style.opacity = '1';
        });
        el.addEventListener('mouseout', () => {
            el.tooltip.style.visiblity = 'hidden';
            el.tooltip.style.opacity = '0';
        });
        el.appendChild(el.tooltip);
    },
});

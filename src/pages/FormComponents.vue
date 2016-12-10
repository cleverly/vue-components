<template>
    <div id="form-components" class="form-components">
        <h1>Forms</h1>
        <div class="row">
            <div class="col s12 m6 mo3">
                <h2>Form Input</h2>
                <form-input v-model="formInputValue" label="Form Input" />
                <br />
                <strong>formInputValue</strong>: {{formInputValue}}
                <br />
                <br />
                <strong>code</strong>:
                <pre><code>&lt;form-input v-model="formInputValue" label="Form Input" /&gt;</code></pre>
            </div>
            <div class="col s12 m6 mo3">
                <h2>Text Box</h2>
                <text-box v-model="textBoxValue" label="Text Box" />
                <br />
                <strong>textBoxValue</strong>: {{textBoxValue}}
                <br />
                <br />
                <strong>code</strong>:
                <pre><code>&lt;text-box v-model="textBoxValue" label="Text Box" /&gt;</code></pre>
            </div>
            <div class="col s12 m6 mo3">
                <h2>Select Input</h2>
                <select-input v-model="selectInputValue.value" :options="selectInputValue.options" label="Select Input" />
                <br />
                <strong>selectInputValue.value</strong>: {{selectInputValue.value}}
                <br />
                <br />
                <strong>code</strong>:
                <pre><code>data: () => ({
    selectInputValue: {
        value: '',
        options: [
            {text: 'Cleverly', value: 'cleverly'},
            {text: 'Snapshot', value: 'snapshot'},
        ],
    },
}),</code></pre>
                <br />
                <pre><code>&lt;select-input v-model="selectInputValue.value" :options="selectInputValue.options" label="Select Input" /&gt;</code></pre>
            </div>
            <div class="col s12 m6 mo3">
                <h2>Toggle</h2>
                <toggle v-model="toggleValue" label="Toggle" slider="true" multi="true" multi-label="Toggle2" />
                <br />
                <toggle v-model="toggleValue" label="Toggle" slider="true" />
                <br />
                <toggle v-model="toggleValue" label="Toggle" />
                <br />
                <toggle v-model="radioValue" radio="true" radio-value="radio-1" label="Toggle Radio 1" />
                <toggle v-model="radioValue" radio="true" radio-value="radio-2" label="Toggle Radio 2" />
                <br />
                <toggle v-model="toggleValue" label="Toggle" slider="true" multi="true" multi-label="Toggle2" disabled="true" />
                <br />
                <toggle v-model="toggleValue" label="Toggle" slider="true" disabled="true" />
                <br />
                <toggle v-model="toggleValue" label="Toggle" disabled="true" />
                <br />
                <toggle v-model="radioValue" radio="true" radio-value="radio-1" label="Toggle Radio 1" disabled />
                <toggle v-model="radioValue" radio="true" radio-value="radio-2" label="Toggle Radio 2" disabled />
                <br />
                <strong>toggleValue</strong>: {{toggleValue}}
                <br />

                <strong>radioValue</strong>: {{radioValue}}
                <br />
                <br />
                <strong>code</strong>:
                <pre><code>&lt;toggle v-model="toggleValue" label="Toggle" slider="true" multi="true" multi-label="Toggle2" /&gt;
&lt;br /&gt;
&lt;toggle v-model="toggleValue" label="Toggle" slider="true" /&gt;
&lt;br /&gt;
&lt;toggle v-model="toggleValue" label="Toggle" /&gt;
&lt;br /&gt;
&lt;toggle v-model="radioValue" radio="true" radio-value="radio-1" label="Toggle Radio 1" /&gt;
&lt;toggle v-model="radioValue" radio="true" radio-value="radio-2" label="Toggle Radio 2" /&gt;
&lt;br /&gt;
&lt;toggle v-model="toggleValue" label="Toggle" slider="true" multi="true" multi-label="Toggle2" disabled="true" /&gt;
&lt;br /&gt;
&lt;toggle v-model="toggleValue" label="Toggle" slider="true" disabled="true" /&gt;
&lt;br /&gt;
&lt;toggle v-model="toggleValue" label="Toggle" disabled="true" /&gt;
&lt;br /&gt;
&lt;toggle v-model="radioValue" radio="true" radio-value="radio-1" label="Toggle Radio 1" disabled /&gt;
&lt;toggle v-model="radioValue" radio="true" radio-value="radio-2" label="Toggle Radio 2" disabled /&gt;</code></pre>
            </div>
        </div>
    </div>
</template>
<script>
    import FormInput from 'components/FormInput';
    import TextBox from 'components/TextBox';
    import SelectInput from 'components/SelectInput';
    import Toggle from 'components/Toggle';
    export default {
        name: 'FormComponents',
        data: () => ({
            formInputValue: '',
            textBoxValue: '',
            selectInputValue: {
                value: '',
                options: [
                    {text: 'Cleverly', value: 'cleverly'},
                    {text: 'Snapshot', value: 'snapshot'},
                ],
            },
            toggleValue: false,
            radioValue: '',
        }),
        components: {
            FormInput,
            TextBox,
            SelectInput,
            Toggle,
        },
    };
</script>

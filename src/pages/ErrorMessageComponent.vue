<template>
    <div id="error-message-component" class="error-message-component">
        <h1>Error Message</h1>
        <div class="row">
            <div class="col s12 m8 mo2 center">
                <error-message v-model="errorMessage" />
                <br />
                <a href="#!" class="button primary raised" @click.prevent="errorMessage='I Am Error!'">Make An Error</a>
                <a href="#!" class="button cancel raised" @click.prevent="errorMessage='I Am Another Error!'">Make Another Error</a>
            </div>
        </div>
    </div>
</template>
<script>
    import ErrorMessage from 'components/ErrorMessage';
    export default {
        name: 'ErrorMessageComponent',
        data: () => ({
            errorMessage: '',
        }),
        components: {
            ErrorMessage,
        },
    };
</script>

<template>
    <div>
        <DefaultForm @submit.prevent="submitForm" :APIEndPoint="URL" btnText="Login">
            <label>Email:</label>
            <input type="email" name="email" required v-model="userData.email">

            <label>Password:</label>
            <input type="password" name="password" required v-model="userData.password">
        </DefaultForm>
    </div>
</template>

<script>
import DefaultForm from '../components/DefaultForm.vue'

export default {
    components: {
        DefaultForm
    },

    data() {
        return {
            URL: 'http://localhost:8080/wesweb01/webstore/server/api/Login.php',
            userData: {
                email: '',
                password: ''
            }
        }
    },

    methods: {
        submitForm() {
            axios.post(this.URL, this.userData)
                .then(response => {
                    console.log('User created', response)
                })
                .catch(error => {
                    console.log('Error while posting data', error)
                })
        }
    }
}
</script>

<style></style>
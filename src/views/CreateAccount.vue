<template>
    <div>
        <DefaultForm @submit.prevent="submitForm" :APIEndPoint="URL" btnText="Create an Account">
            <label>Email:</label>
            <input type="email" name="email" required v-model="userData.email">
    
            <label>Password:</label>
            <input type="password" name="password" required v-model="userData.password">

            <label>Phone:</label>
            <input type="tel" name="tel" required v-model="userData.tel">

            <div class="terms">
                <input type="checkbox" required>
                <label>Accept terms and conditions</label>
            </div>
        </DefaultForm>
    </div>
</template>

<script>
import axios from 'axios';
import DefaultForm from '../components/DefaultForm.vue'

export default {
    components: {
        DefaultForm
    },

    data() {
        return {
            URL: 'http://localhost:8080/wesweb01/webstore/server/api/CreateUser.php',
            userData: {
                email: '',
                password: '',
                tel: ''
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

<style>
body {
    overflow: hidden;
}
</style>
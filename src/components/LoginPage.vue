<template>
    <div>
        <form @submit.prevent="login">
            <input v-model="email" type="email" placeholder="Email">
            <input v-model="password" type="password" placeholder="Password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        login() {
            this.$store.dispatch('login', {
                email: this.email,
                password: this.password
            });
        }
    }
};
</script>

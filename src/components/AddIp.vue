<template>
    <div>
        <form @submit.prevent="addIP">
            <input v-model="address" type="text" placeholder="IP Address">
            <input v-model="label" type="text" placeholder="Label">
            <button type="submit">Add IP</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            address: '',
            label: ''
        };
    },
    methods: {
        addIP() {
            axios.post('/api/ip', {
                address: this.address,
                label: this.label
            });
        }
    }
};
</script>

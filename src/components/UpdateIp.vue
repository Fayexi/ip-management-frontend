<template>
    <div>
        <form @submit.prevent="updateIP">
            <input v-model="address" type="text" placeholder="IP Address" readonly>
            <input v-model="label" type="text" placeholder="New Label">
            <button type="submit">Update Label</button>
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
        updateIP() {
            axios.put(`/api/ip/${this.address}`, {
                label: this.label
            });
        }
    }
};
</script>

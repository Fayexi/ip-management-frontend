<template>
    <div>
        <ul>
            <li v-for="audit in audits" :key="audit.id">
                {{ audit.action }} by {{ audit.user.name }} at {{ audit.performed_at }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            audits: []
        };
    },
    mounted() {
        axios.get('/api/audit')
            .then(response => {
                this.audits = response.data;
            });
    }
};
</script>

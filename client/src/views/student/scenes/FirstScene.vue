<template>
    <p>Super tu es à la première scène</p>
</template>

<script>
    import openSocket from 'socket.io-client';
    import {BASE_API_URL} from "../../../utils/constant";
    export default {
        name: "FirstScene",
        mounted() {
            openSocket(BASE_API_URL)
        }
    }
</script>

<style scoped>

</style>
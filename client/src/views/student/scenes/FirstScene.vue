<template>
    <div>
        <p>Super tu es à la première scène</p>
        <p>Compteur : {{ counter }}</p>
        <button @click="emitEvent">Envoyer un poke</button>
    </div>
</template>

<script>
    import openSocket from 'socket.io-client';
    import {BASE_API_URL} from "../../../utils/constant";

    export default {
        name: "FirstScene",
        data: () => ({
            counter: 0,
            socket: null,
        }),
        mounted() {
            this.socket = openSocket(BASE_API_URL);
            this.socket.on('poke', counter =>  {
                console.log(counter);
            });

        },
        methods: {
            emitEvent() {
                console.log(this.socket);
                this.counter +=5;
                this.socket.emit('poke', this.counter);
            }
        }
    }
</script>

<style scoped>

</style>
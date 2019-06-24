<template>
    <div>
        <h1>Entrez l'identifiant de la session</h1>
        <input type="text" class="room-input" v-model="roomId">
        <button @click="pushRoom">Entrer</button>
    </div>
</template>

<script>
    export default {
        name: "RoomEntry",
        data: () => ({
            roomId: null
        }),
        methods: {
            pushRoom() {
                const route = 'student/signup/' +  this.roomId;
                this.$router.push(route);
            }
        }
    }
</script>

<style scoped lang="scss">
    .room-input {
        border: 1px solid $violet;
    }
</style>
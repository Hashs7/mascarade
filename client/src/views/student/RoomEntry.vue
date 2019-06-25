<template>
    <div class="room-app bg-anim">
        <div class="room-container">
            <h1>Entrez l'identifiant de la session</h1>
            <input type="text" class="room-input" v-model="roomId">
            <RippleButton :clickAction="pushRoom" name="Entrer"></RippleButton>
        </div>
    </div>
</template>

<script>
    import RippleButton from '@/components/UI/RippleButton';

    export default {
        name: "RoomEntry",
        components: {
            RippleButton
        },
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
    .room-app {
        display: flex;
        height: 100%;
        color: $violet;
    }
    .room-container {
        margin: auto;
        padding: 36px;
        border-radius: 8px;
        background-color: white;
        text-align: center;
    }
    .room-input {
        display: block;
        text-align: center;
        width: 150px;
        margin: 56px auto 36px auto;
        font-size: 24px;
        border-bottom: 1px solid $violet;
    }
</style>
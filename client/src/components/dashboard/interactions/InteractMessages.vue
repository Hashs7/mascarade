<template>
    <div>
        <div
                v-for="(msg, i) in getMessages"
                class="msg"
                :class="{active: msg.isActive}"
                :key="i">
            <span class="msg-actived" @click="activeMsg(i, msg.type)">{{msg.isActive ? active : disable}}</span>
            <span class="msg-info">{{msg.info}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InteractMessages",
        data: () => ({
            active: 'Activé',
            disable: 'Désactivé'
        }),
        computed: {
            getMessages() {
                return this.$store.state.interact.messages;
            }
        },
        methods: {
            sendMsg(type) {
                console.log('emit newMessage', type);
                this.$socket.emit('newMsg', type)
            },
            activeMsg(index, type) {
                if (this.getMessages[index].isActive) return;
                this.getMessages[index].isActive = true;
                this.sendMsg(type);
            }
        }
    }
</script>

<style scoped lang="scss">
    .msg {
        margin: 50px 0;
        user-select : none;
    }
    .msg-actived {
        text-align: center;
        display: inline-block;
        width: 110px;
        border-radius: 50px;
        border: 1px solid gray;
        cursor: pointer;
        .active &{
            color: $violet;
            border-color: $violet;
        }
    }
    .msg-info {
        margin-left: 30px;
    }
</style>
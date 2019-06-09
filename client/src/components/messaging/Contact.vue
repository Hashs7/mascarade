<template>
    <div class="contact-container" @click="selectContact" :class="{active: selected}">
        <img class="contact-img" src="https://randomuser.me/api/portraits/men/84.jpg" alt="">
        <div class="contact-info">
            <span class="name">{{name}}</span>
            <span class="last-answer">{{lastAnswer}}</span>
        </div>
        <span class="date">{{currentDate}}</span>
    </div>
</template>

<script>
    import dayjs from 'dayjs';
    import {MONTH} from "../../utils/constant";

    export default {
        name: "Contact",
        props: ['name', 'lastAnswer', 'img', 'id', 'selected'],
        data: () => ({
            currentDate: null
        }),
        created() {
            const day = dayjs().date();
            const month = MONTH[dayjs().month()];
            this.currentDate = day + ' ' + month;
        },
        methods: {
            selectContact() {
                this.$store.commit('selectConversation', {id: this.id})
            }
        }
    }
</script>

<style scoped lang="scss">
    .contact-container {
        position: relative;
        border: 1px solid black;
        cursor: pointer;
        background-color: rgba(255, 170, 170, .5);
        transition: background-color .2s ease;
        &.active {
            background-color: rgba(255, 170, 170, 1);
        }
        &:hover:not(.active) {
            background-color: rgba(255, 170, 170, .8);
        }
    }
    .contact-img {
        display: inline-block;
        width: 50px;
        vertical-align: middle;
    }
    .contact-info {
        width: calc(100% - 50px);
        display: inline-block;
        vertical-align: middle;
    }
    .name {
        display: block;
        font-weight: bold;
    }
    .date {
        position: absolute;
        top: 10px;
        right: 10px;
    }
</style>
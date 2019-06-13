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
        display: flex;
        align-items: center;
        border: 1px solid black;
        cursor: pointer;
        background-color: $black;
        transition: background-color .2s ease;
        &:first-child {
            border-top-left-radius: 0.5rem;
        }
        &.active {
            background-color: rgba(252, 237, 24, 0.904);
        }
        &:hover:not(.active) {
            background-color: rgba(241, 243, 128, 0.8);
        }
    }
    .contact-img {
        display: inline-block;
        width: 3.2rem;
        vertical-align: middle;
        border-radius: 100%;
        margin-left: 1rem;
        margin-right: 1rem;
    }
    .contact-info {
        width: calc(100% - 5rem);
        display: flex;
        flex-direction: column;
        vertical-align: middle;
    }
    .name {
        font-weight: bold;
        font-size: 1.4rem;
    }
    .date {
        font-size: 1.2rem;
    }
    .last-answer {
        font-size: 1.2rem;
    }
</style>
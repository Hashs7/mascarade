<template>
    <div class="contact-container">
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
        props: ['name', 'lastAnswer', 'img'],
        data: () => ({
            currentDate: null
        }),
        created() {
            const day = dayjs().date();
            const month = MONTH[dayjs().month()];
            this.currentDate = day + ' ' + month;
        },
    }
</script>

<style scoped>
    .contact-container {
        position: relative;
        border: 1px solid black;
    }
    .contact-img {
        display: inline-block;
        width: 50px;
        vertical-align: middle;
    }
    .contact-info {
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
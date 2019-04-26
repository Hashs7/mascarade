import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TeacherDashboard from './views/teacher/TeacherDashboard.vue'
import TeacherLogin from './views/teacher/TeacherLogin.vue';
import StudentSignup from './views/student/StudentSignup.vue';
import StudentLogin from './views/student/StudentLogin.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/teacher/login',
            name: 'TeacherLogin',
            component: TeacherLogin
        },
        {
            path: '/dashboard',
            name: 'TeacherDashboard',
            component: TeacherDashboard
        },
        {
            path: '/student/signup',
            name: 'StudentSignup',
            component: StudentSignup
        },
        {
            path: '/student/login',
            name: 'StudentLogin',
            component: StudentLogin
        }
    ]
})

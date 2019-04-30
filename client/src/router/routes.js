import Home from '../views/Home.vue';
import TeacherDashboard from '../views/teacher/TeacherDashboardView.vue';
import TeacherLogin from '../views/teacher/TeacherLoginView.vue';
import StudentSignup from '../views/student/StudentSignupView.vue';
import StudentLogin from '../views/student/StudentLoginView.vue';
import FirstScene from '../views/student/scenes/FirstScene.vue';
import {tokenIsValid} from "../utils/API";

export default [
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
        component: TeacherDashboard,
        beforeEnter: (to, from, next) => {
            tokenIsValid()
                .then(_ => next())
                .catch(_ => next('/'))
        }
    },
    {
        path: '/student/signup/:room',
        name: 'StudentSignup',
        component: StudentSignup
    },
    {
        // temporary route
        path: '/student/login',
        name: 'StudentLogin',
        component: StudentLogin
    },
    {
        path: '/student/first',
        name: 'FirstScene',
        component: FirstScene
    }
]

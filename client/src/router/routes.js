import Home from '../views/Home.vue';
import TeacherDashboard from '../views/teacher/TeacherDashboardView.vue';
import TeacherSignup from '../views/teacher/TeacherSignupView.vue';
import TeacherLogin from '../views/teacher/TeacherLoginView.vue';
import StudentSignup from '../views/student/StudentSignupView.vue';
import StudentLogin from '../views/student/StudentLoginView.vue';
import FirstScene from '../views/student/scenes/FirstScene.vue';
import {tokenIsValid} from "../utils/API";
import store from '../store';

async function redirectIfNotAuth (to, from, next) {
    const token = await getTokenState();
    if (token !== null) {
        tokenIsValid(token)
            .then(_ => next())
            .catch(_ => next('/'))
    } else {
        next('/')
    }
}

export const getTokenState = () => {
    return new Promise((resolve, reject) => {
        if (store.state.token === undefined) {
            const unwatch = store.watch(
                () => store.state.token,
                (value) => {
                    unwatch();
                    resolve(value);
                }
            )
        } else {
            resolve(store.state.token)
        }
    })
}

export default [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: 'Accueil',
        }
    },
    {
        path: '/teacher/signup',
        name: 'TeacherSignup',
        component: TeacherSignup,
        meta: {
            title: 'Inscription - Professeur',
        }
    },
    {
        path: '/teacher/login',
        name: 'TeacherLogin',
        component: TeacherLogin,
        meta: {
            title: 'Connexion - Professeur',
        }
    },
    {
        path: '/dashboard',
        name: 'TeacherDashboard',
        component: TeacherDashboard,
        beforeEnter: redirectIfNotAuth,
        meta: {
            title: 'Dashboard',
        }
    },
    {
        path: '/student/signup/:room',
        name: 'StudentSignup',
        component: StudentSignup,
        meta: {
            title: 'Inscription - Élève',
        }
    },
    {
        // temporary route
        path: '/student/login',
        name: 'StudentLogin',
        component: StudentLogin,
        meta: {
            title: 'Connexion - Élève',
        }
    },
    {
        path: '/student/first',
        name: 'FirstScene',
        component: FirstScene,
        meta: {
            title: 'Scène 1',
        }
    }
]

import Home from '../views/Home.vue';
import TeacherDashboard from '../views/teacher/TeacherDashboardView.vue';
import TeacherSignup from '../views/teacher/TeacherSignupView.vue';
import TeacherLogin from '../views/teacher/TeacherLoginView.vue';
import StudentSignup from '../views/student/StudentSignupView.vue';
import StudentLogin from '../views/student/StudentLoginView.vue';
import Tutorial from '../views/student/scenes/Tutorial.vue';
import FirstScene from '../views/student/scenes/FirstScene.vue';
import FakeNewsScene from '../views/student/scenes/FakeNewsScene.vue';
import {tokenIsValid} from "../utils/API";
import {getTokenState} from "../utils/methods";

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
            title: 'Inscription - Administrateur',
        }
    },
    {
        path: '/teacher/login',
        name: 'TeacherLogin',
        component: TeacherLogin,
        meta: {
            title: 'Connexion - Administrateur',
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
    },
    {
        path: '/student/fakenews',
        name: 'FakeNewsScene',
        component: FakeNewsScene,
        meta: {
            title: 'Scène fake news',
        }
    },
    {
        path: '/student/tuto',
        name: 'Tutorial',
        component: Tutorial,
        meta: {
            title: 'Tutoriel',
        }
    },
]

import Home from '../views/Home.vue';
import TeacherDashboard from '../views/teacher/TeacherDashboardView.vue';
import TeacherSignup from '../views/teacher/TeacherSignupView.vue';
import TeacherLogin from '../views/teacher/TeacherLoginView.vue';
import StudentSignup from '../views/student/StudentSignupView.vue';
import StudentLogin from '../views/student/StudentLoginView.vue';
import Tutorial from '../views/student/scenes/Tutorial.vue';

import FakeNewsScene from '../views/student/scenes/FakeNewsScene.vue';
import SceneLayout from '../views/student/scenes/SceneLayout.vue';
import MessageLayout from '../views/student/scenes/MessageLayout.vue';

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

export const routePath = {
    HOME: '/',
    TEACHER_SIGNUP: '/teacher/signup',
    TEACHER_LOGIN: '/teacher/login',
    TEACHER_DASHBOARD: '/dashboard',
    STUDENT_SIGNUP: '/student/signup/:room',
    STUDENT_LOGIN: '/teacher/login',
    STUDENT_TUTO: '/student/tuto',
    STUDENT_HOME: '/student/exp',
    STUDENT_MSG: '/student/messages',
};

export default [
    {
        path: routePath.HOME,
        name: 'home',
        component: Home,
        meta: {
            title: 'Accueil',
        }
    },
    {
        path: routePath.TEACHER_SIGNUP,
        name: 'TeacherSignup',
        component: TeacherSignup,
        meta: {
            title: 'Inscription - Administrateur',
        }
    },
    {
        path: routePath.TEACHER_LOGIN,
        name: 'TeacherLogin',
        component: TeacherLogin,
        meta: {
            title: 'Connexion - Administrateur',
        }
    },
    {
        path: routePath.TEACHER_DASHBOARD,
        name: 'TeacherDashboard',
        component: TeacherDashboard,
        beforeEnter: redirectIfNotAuth,
        meta: {
            title: 'Dashboard',
        }
    },
    {
        path: routePath.STUDENT_SIGNUP,
        name: 'StudentSignup',
        component: StudentSignup,
        meta: {
            title: 'Inscription - Élève',
        }
    },
    {
        // temporary route
        path: routePath.STUDENT_LOGIN,
        name: 'StudentLogin',
        component: StudentLogin,
        meta: {
            title: 'Connexion - Élève',
        }
    },
    {
        path: routePath.STUDENT_HOME,
        name: 'SceneLayout',
        component: SceneLayout,
        meta: {
            title: 'Mascarade',
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
        path: routePath.STUDENT_TUTO,
        name: 'Tutorial',
        component: Tutorial,
        meta: {
            title: 'Tutoriel',
        }
    },
    {
        path: routePath.STUDENT_MSG,
        name: 'Message',
        component: MessageLayout,
        meta: {
            title: 'Mascarade - Messages',
        }
    },
]

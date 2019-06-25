import Home from '../views/Home';
import TeacherDashboard from '../views/teacher/TeacherDashboardView';
import TeacherSignup from '../views/teacher/TeacherSignupView';
import TeacherLogin from '../views/teacher/TeacherLoginView';
import StudentSignup from '../views/student/StudentSignupView';
import StudentLogin from '../views/student/StudentLoginView';
import Tutorial from '../views/student/scenes/Tutorial';
import SceneLayout from '../views/student/scenes/SceneLayout';
import MessageLayout from '../views/student/scenes/MessageLayout';
import StudentSummary from '../views/student/StudentSummary';
import {tokenIsValid} from "../utils/API";
import {getTokenState} from "../utils/methods";
import RoomEntry from "../views/student/RoomEntry";

async function redirectIfNotAuth (to, from, next) {
    const token = await getTokenState();
    if (token !== null) {
        tokenIsValid(token)
            .then(_ => next())
            .catch(_ => next({ path: '/' }))
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
    STUDENT_SUMMARY: '/student/bilan',
    STUDENT_ENTRY: '/room',
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
        path: routePath.STUDENT_ENTRY,
        name: 'RoomEntry',
        component: RoomEntry,
        meta: {
            title: 'Inscription - Élève',
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
    {
        path: routePath.STUDENT_SUMMARY,
        name: 'Bilan',
        component: StudentSummary,
        meta: {
            title: 'Mascarade - Bilan',
        }
    }
]

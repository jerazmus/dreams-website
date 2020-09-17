import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import AboutPage from "../components/AboutPage"
import RosterPage from "../components/RosterPage"
import ProgressPage from "../components/ProgressPage"

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'AboutPage',
            component: AboutPage
        },
        {
            path: '/roster',
            name: 'RosterPage',
            component: RosterPage
        },
        {
            path: '/progress',
            name: 'ProgressPage',
            component: ProgressPage
        }
    ]
})

export default router
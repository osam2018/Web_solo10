import Vue from 'vue'
import Router from 'vue-router'
import Hooker from './views/Hooker.vue'
import DataPage from './views/DataPage.vue'
import DashBoard from './views/DashBoard.vue'

import HookerTableView from './views/hooker-page-sub/HookerTableView.vue'
import HookerGraphView from './views/hooker-page-sub/HookerGraphView.vue'
import HookerFrameView from './views/hooker-page-sub/HookerFrameView.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: DashBoard
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashBoard
        },
        {
            path: '/datapage',
            name: 'dataPage',
            component: DataPage
        },
        {
            path: '/hooker',
            name: 'hooker',
            component: Hooker,
            children: [
                {
                    path: '/',
                    component: HookerTableView
                },
                {
                    path: 'tableView',
                    component: HookerTableView
                },
                {
                    path: 'graphView',
                    component: HookerGraphView
                },{
                    path: 'frameView',
                    component: HookerFrameView
                }
            ]
        }
    ]
})

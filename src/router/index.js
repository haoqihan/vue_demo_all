import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () =>
                import ( /* webpackChunkName:"home"  */ '../components/common/Home.vue'),
            meta: { title: "基础文件" },
            children: [{
                    path: '/dashboard',
                    component: () =>
                        import ( /* webpackChunkName:"dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '仪表盘' }
                },
                {
                    path: '/404',
                    component: () =>
                        import ( /* webpackChunkName:"404" */ '../components/page/404.vue')
                }
            ]
        },
        {
            path: '/login',
            component: () =>
                import ( /* webpackChunkName:"login" */ '../components/page/Login.vue'),
            meta: { title: "登录" }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
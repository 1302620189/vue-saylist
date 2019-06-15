import Vue from 'vue'
import Router from 'vue-router'
import dongtai from '@/views/dongtai'
import xiaoxi from '@/views/xiaoxi'
import renmai from '@/views/renmai'
import wode from '@/views/wode'
import detail from '@/views/detail'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: '/',
        redirect: '/dongtai',
        component: () =>
            import ('../views/dongtai')
    }, {
        path: '/dongtai',
        name: '/dongtai',
        component: () =>
            import ('../views/dongtai')
    }, {
        path: '/xiaoxi',
        name: '/xiaoxi',
        component: () =>
            import ('../views/xiaoxi')
    }, {
        path: '/renmai',
        name: '/renmai',
        component: () =>
            import ('../views/renmai')
    }, {
        path: '/wode',
        name: '/wode',
        component: () =>
            import ('../views/wode')
    }, {
        path: '/detail/:id',
        name: '/detail',
        component: () =>
            import ('../views/detail')
    }]
})
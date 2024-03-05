import Vue from 'vue'
import Router from 'vue-router'
import { i18n } from '@/langs';

const t = i18n.t.bind(i18n);

Vue.use(Router)

import Layout from '@/layout'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: t('nav.dashboard'), icon: 'dashboard', affix: true }
      }
    ]
  },

  // todo
  {
    path: '/product',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/product/index'),
        name: 'Product',
        meta: { title: t('nav.product'), icon: 'table', affix: true }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/order/index'),
        name: 'Order',
        meta: { title: t('nav.order'), icon: 'chart', affix: true }
      }
    ]
  },
  {
    path: '/customer',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/customer/index'),
        name: 'Customer',
        meta: { title: t('nav.customer'), icon: 'user', affix: true }
      }
    ]
  },
  {
    path: '/message',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/message/index'),
        name: 'Message',
        meta: { title: t('nav.message'), icon: 'message', affix: true }
      }
    ]
  },
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: t('nav.permission'),
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: t('nav.pagePermission'),
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventDetailsView from '../views/event/DetailsView.vue'
import EventLayout from '../views/event/Layout.vue'
import EventEditView from '../views/event/EditView.vue'
import EventRegisterView from '../views/event/RegisterView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import NetworkError from '../views/NetworkError.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    },
    {
      path: '/events/:id',
      name: 'EventLayout',
      props: true,
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'EventDetails',
          component: EventDetailsView,
        },
        {
          path: 'edit',
          name: 'EventEdit',
          component: EventEditView,
        },
        {
          path: 'register',
          name: 'EventRegister',
          component: EventRegisterView,
        },
      ],
    },
    {
      // path: '/event/:id',
      // redirect: () => {
      //   return { name: 'EventDetails' }
      // },
      // children: [
      //   { path: 'register', redirect: () => ({ name: 'EventRegister' }) },
      //   { path: 'edit', redirect: () => ({ name: 'EventEdit' }) },
      // ],
      path: '/event/:afterEvent(.*)',
      redirect: (to) => {
        return { path: '/events/' + to.params.afterEvent }
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/404/:resource',
      name: '404Resource',
      component: NotFound,
      props: true,
    },
    {
      path: '/network-error',
      name: 'NetworkError',
      component: NetworkError,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router

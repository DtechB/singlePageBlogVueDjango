import { createRouter, createWebHistory } from 'vue-router'
import store from "@/store"
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Register from '../views/Register.vue'
import Detail from '../views/Detail.vue'
import AddArticle from '../views/AddArticle.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresLogin: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { redirectProf: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { redirectProf: true }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
    meta: { requiresLogin: true }
  },
  {
    path: '/article/:slug',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/add',
    name: 'AddArticle',
    component: AddArticle,
    meta: { requiresLogin: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin)) {
    if (store.state.isAuthenticated) {
      next()
    } else {
      next('/login')
    }
  }
  else if (to.matched.some(record => record.meta.redirectProf)) {
    if (!store.state.isAuthenticated) {
      next()
    } else {
      next('/profile')
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Me from '../views/Me.vue'
import Tasks from '../views/Tasks.vue'
import Task from '../views/Task.vue'
import Create from '../views/Create.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/me',
    name: 'Me',
    component: Me
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/tasks/:id',
    name: 'Task',
    component: Task
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import About from '../views/About'
import { createRouter, createWebHistory} from 'vue-router'

// import App from '../App.vue'

const routes = [
  {
    path: '/about',
    name: 'about',
    component: About
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;

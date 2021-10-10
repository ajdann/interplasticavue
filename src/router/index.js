import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/home/Home.vue";
import About from '../components/about/About.vue'
import Contact from '../components/contact/Contact.vue'
import Development from '../components/development/Development.vue'
import Fences from '../components/fences/Fences.vue'
import Filters from '../components/filters/Filters.vue'
import Profiles from '../components/profiles/Profiles.vue'
import Tools from '../components/tools/Tools.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/onama', component: About },
  { path: '/contact', component: Contact },
  { path: '/razvoj', component: Development },
  { path: '/precistaci', component: Filters },
  { path: '/fences', component: Fences },
  { path: '/profiles', component: Profiles },
  { path: '/alati', component: Tools },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

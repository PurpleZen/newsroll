import Home from './views/Home.vue'
import Faq from './views/Faq.vue'
import About from './views/About.vue'
import NotFound from './views/404.vue'

export const routes = [
  { 
    path: '/', 
    component: Home,
  },
  {
    path: '/faq',
    component: Faq,
  },
  {
    path: '/about',
    component: About,
  },
  { path: '/:path(.*)', component: NotFound },
]
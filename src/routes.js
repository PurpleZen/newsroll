import Home from './pages/Home.vue'
import Article from './pages/Article.vue'
import Mission from './pages/Mission.vue'
import NotFound from './pages/404.vue'


export const routes = [
  { 
    path: '/', 
    component: Home,
  },
  {
    path: '/:category/:name/',
    component: Article,
  },
  {
    path: '/mission/',
    component: Mission,
  },
  { path: '/:path(.*)', component: NotFound },
]
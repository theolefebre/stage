import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import CouvreurZingueur from '../views/CouvreurZingueur.vue';
import BardageIsolation from '../views/BardageIsolation.vue';
import PlomberieSanitaire from '../views/PlomberieSanitaire.vue';
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
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  { path: '/services/couvreur-zingueur',
    name: 'CouvreurZingueur',
    component: CouvreurZingueur
  },
  { path: '/services/bardage-isolation',
    name: 'BardageIsolation',
    component: BardageIsolation
  },
  { path: '/services/plomberie-sanitaire',
    name: 'PlomberieSanitaire',
    component: PlomberieSanitaire
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

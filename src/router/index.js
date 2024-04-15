import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";
import articles from "../views/articles.vue";
import contact from "../views/contact.vue";
import journey from "../views/articles/journey.vue";
import experience from "../views/articles/experience.vue";
import hobby from "../views/articles/hobby.vue";
import projects from "../views/articles/projects.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/articles",
    name: "articles",
    component: articles,
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
  },
  {
    path: "/articles/journey",
    name: "journey",
    component: journey,
  },
  {
    path: "/articles/experience",
    name: "experience",
    component: experience,
  },
  {
    path: "/articles/hobby",
    name: "hobby",
    component: hobby,
  },
  {
    path: "/articles/projects",
    name: "projects",
    component: projects,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

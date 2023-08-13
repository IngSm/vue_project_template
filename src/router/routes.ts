import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"), // Example component for the home route
  },
  {
    path: "/people",
    name: "People",
    component: () => import("@/views/People.vue"), // Example component for the people route
  },
  {
    path: "/people/:id",
    name: "Person",
    component: () => import("@/views/Person.vue"), // Example component for the person route
    props: true, // Enable passing the ':id' parameter as a prop to the component
  },
  {
    path: "/favourites",
    name: "Favourites",
    component: () => import("@/views/Favourites.vue"), // Example component for the favourites route
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

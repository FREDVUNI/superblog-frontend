import { createRouter,createWebHistory } from "vue-router";
import Home from "./components/HomeComponent"
import SinglePost from "./components/SinglePost"
import BlogPost from "./components/BlogPost"

const routes = [
    {
        path:"/",
        name:"home",
        component:Home
    },
    {
        path:"/post/:id",
        name:"singlePost",
        component:SinglePost
    },
    {
        path:"/category/:id",
        name:"blogPost",
        component:BlogPost
    },
    
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router
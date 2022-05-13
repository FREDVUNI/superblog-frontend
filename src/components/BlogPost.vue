<template>
      <div class="container">
        <div class="row">
          <div class="span8">
            <article v-for="post in posts" :key="post.id">
              <div class="row">
                <div class="span8">
                  <div class="row">
                    <div class="span5">
                    <div class="post-heading">
                      <h3><router-link :to="`/post/${post.id}`">{{ post.title }}</router-link></h3>
                    </div>
                  </div>
                  <div class="span3">
                    <div class="post-image">
                    <img :src="`http://127.0.0.1:8000/uploads/posts/${post.image}`" alt="" width="800"/>
                  </div>
                  </div>
                  </div>
                  <p>
                    {{ post.description }}
                  </p>
                  <div class="bottom-article">
                    <ul class="meta-post">
                      <li><i class="icon-calendar"></i><a href="#"> {{ post.created_at }}</a></li>
                      <li><i class="icon-user"></i><a href="#"> {{ post.user.name }}</a></li>
                      <li><i class="icon-folder-open"></i><a href="#"> {{ post.category.category }}</a></li>
                      <li><i class="icon-comments"></i><a href="#">4 Comments</a></li>
                    </ul>
                    <router-link :to="`/post/${post.id}`" class="pull-right">Continue reading <i class="icon-angle-right"></i></router-link>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="span4">
            <aside class="right-sidebar">
              <div class="widget">
                <form class="form-search">
                  <input placeholder="Type something" type="text" class="input-medium search-query">
                  <button type="submit" class="btn btn-square btn-theme">Search</button>
                </form>
              </div>
              <Sidebar/>
              <LatestPosts/>
              <div class="widget">
                <h5 class="widgetheading">Popular tags</h5>
                <ul class="tags">
                  <li><a href="#">Web design</a></li>
                  <li><a href="#">Trends</a></li>
                  <li><a href="#">Technology</a></li>
                  <li><a href="#">Internet</a></li>
                  <li><a href="#">Tutorial</a></li>
                  <li><a href="#">Development</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
</template>
<script>
    import {useRoute} from "vue-router"
    import Sidebar from "./Sidebar.vue"
    import axios from "axios"
    import LatestPosts from './LatestPosts.vue'
    export default{
        data(){
            return{
                posts:[]
            }
        },
        components:{
            Sidebar,
            LatestPosts
        },
        methods:{
            getpostcategory(){
                let route = useRoute();
                let id = route.params.id;
                axios.get("http://127.0.0.1:8000/api/category/"+id)
                .then((response)=>{
                    this.posts = response.data
                    console.log(this.posts);
                })
                .catch((error)=>{
                    console.log(`something went wrong ${error}`)
                })
            }
        },
        computed:{
            
        },
        created(){
            this.getpostcategory()
        },
        mounted(){
            this.getpostcategory()
        }
    }
</script>

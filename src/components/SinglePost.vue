<template>
    <section id="inner-headline">
      <div class="container">
        <div class="row">
          <div class="span12">
            <div class="inner-heading">
              <h2>{{ post.title }}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  <section id="content">
      <div class="container">
        <div class="row">
          <div class="span8">
            <article>
              <div class="row">
                <div class="post-heading">
                      <h3><router-link :to="`/post/${post.id}`">{{ post.title }}</router-link></h3>
                  </div>
                <div class="row">
                  <div class="span3">
                  <div class="post-image">
                    <img :src="`http://127.0.0.1:8000/uploads/posts/${post.image}`" alt="" width="800"/>
                    </div>
                  </div>
                  <div class="span5">
                  <p>
                    {{ post.description }}
                  </p>
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
    </section>
</template>

<script>
    import {useRoute} from "vue-router"
    import Sidebar from "./Sidebar.vue"
    import LatestPosts from "./LatestPosts.vue"
    import axios from "axios"
    export default{
        data(){
            return{
                post:{}
            }
        },
        components:{
            Sidebar,
            LatestPosts
        },
        methods:{
            getPost(){
              let route = useRoute();
              let id = route.params.id;
                axios.get("http://127.0.0.1:8000/api/post/"+ id)
                .then((response)=>{
                    this.post = response.data
                })
                .catch((error)=>{
                    console.log(`something went wrong ${error}`)
                })
            }
        },
        computed:{
            
        },
        created(){
            this.getPost()
        }
    }
</script>

<style>
    
</style>
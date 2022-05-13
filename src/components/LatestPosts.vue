<template>
    <div class="widget">
        <h5 class="widgetheading">Latest posts</h5>
            <ul class="recent">
                <li v-for="post in latest" :key="post.id">
                    <img :src="`http://127.0.0.1:8000/uploads/posts/${post.image}`" class="pull-left" alt="" width="50" />
                    <h6><router-link :to="'/post/'+post.id">{{ post.title }}</router-link></h6>
                    <p>
                      {{ post.description }}
                    </p>
                </li>
            </ul>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: 'latest',
        data() {
            return {
                latest:[]
            }
        },
        methods:{
            get_latest(){
                axios.get("http://127.0.0.1:8000/api/latest-posts")
                .then(response=>{
                    this.latest = response.data
                })
                .catch((error)=>{
                    console.log(`something went wrong ${error}`);
                })
            }
        },
        created(){
            this.get_latest()
        }
    }
</script>

<style lang="" scoped>
    
</style>
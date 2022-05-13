<template>
    <div class="widget">
        <h5 class="widgetheading">Categories</h5>
        <ul class="cat" v-for="category in categories" :key="category.id">
            <li><i class="icon-angle-right"></i><router-link :to="`/category/${category.id}`">{{ category.category }}</router-link><span> (20)</span></li>
        </ul>
    </div>
</template>
<script>
    import axios from "axios";
    export default{
        data(){
            return{
                categories:[]
            }
        },
        methods:{
            getcategories(){
                axios.get("http://127.0.0.1:8000/api/blogcategories")
                .then((response)=>{
                    this.categories = response.data
                })
                .catch((error)=>{
                    console.log(`something went wrong ${error}`);
                })
            }
        },
        mounted(){
            this.getcategories()
        }
    }
</script>
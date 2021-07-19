<template>
<i class="fas fa-arrow-left arrow_post" onclick="window.location.href='/';"></i>
  <section class="carousel">
        <div class="card" v-if="post && post.id">
          <h2 class="card-title">{{post.title}}</h2>
          <div class="card-content">
            <p class="card_text">{{post.text}}</p>
            <button @click="signalPost(post.id)" class="signal_button">signaler</button>
            <AllComment :postId="post.id"/>
          </div>
          
          <Comment :postId="post.id"/>
        </div>
  </section>
</template>

<script>
import axios from "axios";

import Comment from '@/components/Comment.vue'
import AllComment from '@/components/AllComment.vue'

export default {
    name:"OnePost",
    components:{
        Comment, AllComment
    },
    data(){
        return{
            post:{},
        };
    },
    props:[
        "postId"
    ],
    mounted(){
        console.log("postid consolelog", this.postId)
        const storageInfo = JSON.parse(localStorage.getItem("lucasp7groupomania"));
        axios.get(`http://localhost:3000/api/post/findOne/${this.postId}`,{
            headers:{
                authorization: `Bearer ${storageInfo.token}`,
            },
        })
        .then((post)=>{
            console.log(this.postId)
            console.log("post consolelog", post);
            this.post = post.data;
        })
    },
    methods:{
      signalPost(postId){
        console.log(postId)
        const storageInfo = JSON.parse(localStorage.getItem("lucasp7groupomania"));
        axios.get(`http://localhost:3000/api/post/signal/${postId}`,{
            headers:{
                authorization: `Bearer ${storageInfo.token}`,
            },
        })
        .then((response)=>{
            console.log(response);
        })
      }
    },
};
</script>

<style scoped>
.arrow_post {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 20px;
  width: 40px;
  color: white;
  border: 2px solid white;
  border-radius: 30px;
  padding: 5px;
  cursor: pointer;
}

.arrow_post:hover{
  color: black;
  background-color: white;
  mix-blend-mode: screen;
  display: block;
  cursor: pointer;
  transition: all ease .5s;
}

* {
  box-sizing: border-box;
}

body,
button,
input,
select,
optgroup,
textarea {
  color: white;
  font-size: 1rem;
  line-height: 1.6;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 30px;
}

h1 {
  font-size: 2rem;
  margin: 2rem auto 1rem;
  line-height: 1;
}

h2 {
  font-size: 1.5rem;
  margin-top: 0;
  color: white;
}

a {
  color: inherit;
  transition: 0.25s all ease-in-out;
}


a.button {
  align-items: center;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  display: inline-flex;
  padding: 0.25rem 0.75rem;
  text-decoration: none;
  transition: all 0.25s ease-in-out;
}

.signal_button{
  background-color: transparent;
  border: 2px solid white;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 12px;
}

.signal_button:hover{
  background-color: white;
  border: none;
  color: black;
  mix-blend-mode: screen;
  transition: all ease .5s;
  cursor: pointer;
}



ul {
  margin: 0 0 1.5rem;
  padding: 0;
}

li {
  display: inline-block;
}

svg {
  fill: currentColor;
  width: 1.5rem;
  height: 1.5rem;
}

img {
  height: auto;
  margin-bottom: 0.5rem;
  max-width: calc(100% + 2rem);
  position: relative;
  left: -1rem;
  right: -1rem;
}

p {
  margin: 0 0 0.5rem;
  font-size: 20px;
  color: white;
}

main {
  padding: 1rem 2rem;
  margin: auto;
}

header {
  padding: 1rem 2rem;
  text-align: center;
}

.card {
  border: 2px solid white;
  border-radius: 8px;
  padding: 1rem;
  position: relative;
  width: 800px;
}

.card_title{
  border-radius: 20px;
  height: 50px;
  width: 300px;
  color: white;
  border: 1px solid white;
  background-color: transparent;
  margin-bottom: 20px;
}

.card_text{
  color: white;
  font-weight: 600;
}

.card_input {
  border-radius: 20px;
  height: 100px;
  width: 300px;
  color: white;
  border: 1px solid white;
  background-color: transparent;
}
/********************************
* Carousel styles
*********************************/
.carousel{
  display: flex;
  justify-content: center;
}
.carousel-items {
  display: flex;
  overflow-x: scroll;
  padding: 1rem 0;
  scroll-snap-type: x mandatory;
}

.carousel-item {
  flex: 1 0 250px;
  margin-left: 1rem;
  scroll-snap-align: start;
}

::-webkit-scrollbar-track {
  background-color: #f5f5f5;
}

::-webkit-scrollbar {
  height: 6px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  background-color: #3d4852;
  border-radius: 3px;
}

/********************************
* Breakpoints
*********************************/
@media screen and (min-width: 576px) {
  .carousel-item {
    flex-basis: 300px;
  }
}

@media screen and (min-width: 992px) {
  body,
  button,
  input,
  select,
  optgroup,
  textarea {
    font-size: 1.125rem;
  }

  h1 {
    font-size: 2.75rem;
  }

  .carousel-item {
    flex-basis: 325px;
  }
}

@media screen and (min-width: 1280px) {
  h1 {
    font-size: 4rem;
  }

  .carousel-item {
    flex-basis: 450px;
  }
}

@media screen and (min-width: 1600px) {
  body,
  button,
  input,
  select,
  optgroup,
  textarea {
    font-size: 1.25rem;
  }
}
</style>
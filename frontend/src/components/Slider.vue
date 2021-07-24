<template>
  <main>
    <section class="posts">
        <li class="section_post" v-for="post in posts" :key="post.id">
          <div class="card_post">
            <h2 class="card_username">{{ post.user.username + " " +"a posté :"}}</h2>
            <h2 class="card_title">{{ post.title }}</h2>
            <div class="card_content">
              <p>{{ post.text }}</p>
              <router-link :to="{name:'OnePost', params:{postId:post.id}}" ><a class="comments_button">Commentaires</a></router-link>
            </div>
          </div>
        </li>

    </section>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "Slider",
  data() {
    return {
      posts: [],
      title: "",
      text: "",
    };
  },
  mounted() {
    const storageInfo = JSON.parse(localStorage.getItem("lucasp7groupomania"));
    if(!storageInfo) return;
    axios
      .get("http://localhost:3000/api/post/findAll", {
        headers: {
          Authorization: `Bearer ${storageInfo.token}`,
        },
      })
      .then((posts) => {
        this.posts = posts.data;
      });
  },
  methods: {},
};
</script>

<style scoped>
li{
  list-style: none;
}

a{
  text-decoration: none;
}

.posts{
  color: white;
  border-radius: 20px;
  border: 2px white solid;
  margin-left: 20px;
  margin-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.card_username{
  font-size: 17px;
  padding-top: 10px;
  font-weight: 100;
}

.card_post{
  margin-left: 20px;
  margin-right: 20px;
  border: 2px solid white;
  border-radius: 20px;
  margin-bottom: 20px;
  height: 200px;
}

.comments_button {
  font-weight: 800;
  font-size: 15px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 35px;
  border: none;
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.comments_button:hover{
  color: black;
  background-color: white;
  mix-blend-mode: screen;
  cursor: pointer;
  transition: all ease .5s;
}


</style>
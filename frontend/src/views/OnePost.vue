<template>
  <router-link to="/home" class="nav_text">
    <i class="fas fa-arrow-left arrow_post"></i>
  </router-link>
  <section class="post">
    <div class="post_ctnr" v-if="post && post.id">
      <div class="post_content">
        <h2 class="post_username">
          {{ post.user.username + " " + "a posté :" }}
        </h2>
        <h2 class="post_title">{{ post.title }}</h2>
        <p class="post_text">{{ post.text }}</p>
        <button
          v-if="!storageInfo.isAdmin && storageInfo.userId != post.userId"
          @click="signalPost(post.id)"
          class="signal_button"
        >
          Signaler
        </button>
        <button
          v-if="storageInfo.isAdmin || storageInfo.userId == post.userId"
          @click="deletePost(post.id)"
          class="signal_button"
        >
          Supprimer
        </button>
        <AllComment :postId="post.id" />
        <p class="post_date">{{ "posté le : " + post.createdAt }}</p>
      </div>
    </div>
  </section>
  <Comment :postId="post.id" />
  <Footer />
</template>

<script>
import axios from "axios";

import Comment from "@/components/Comment.vue";
import AllComment from "@/components/AllComment.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "OnePost",
  components: {
    Comment,
    AllComment, Footer
  },
  data() {
    return {
      post: {},
      storageInfo: {},
    };
  },
  props: ["postId"],
  mounted() {
    this.storageInfo = JSON.parse(localStorage.getItem("lucasp7groupomania"));

    axios
      .get(`http://localhost:3000/api/post/findOne/${this.postId}`, {
        headers: {
          authorization: `Bearer ${this.storageInfo.token}`,
        },
      })
      .then((post) => {
        console.log(this.postId);
        console.log("post consolelog", post);
        this.post = post.data;
        this.post.createdAt = this.post.createdAt
          .split("-")
          .reverse()
          .join("/");
      });
  },
  methods: {
    signalPost(postId) {
      axios
        .get(`http://localhost:3000/api/post/signal/${postId}`, {
          headers: {
            authorization: `Bearer ${this.storageInfo.token}`,
          },
        })
        .then((response) => {
          console.log(response);
        });
    },
    deletePost(postId) {
      axios
        .delete(`http://localhost:3000/api/post/deleteSignaledPost/${postId}`, {
          headers: {
            authorization: `Bearer ${this.storageInfo.token}`,
          },
        })
        .then((response) => {
          console.log(response);
          this.$router.push("/home");
        });
    },
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
  color: black;
  border: 2px solid black;
  border-radius: 30px;
  padding: 5px;
  cursor: pointer;
}

.arrow_post:hover {
  color: white;
  border: 2px solid black;
  background-color: black;
  display: block;
  cursor: pointer;
  transition: all ease 0.5s;
}

.post {
  border: 2px solid black;
  border-radius: 20px;
}

.post_username {
  color: black;
  font-size: 17px;
  font-weight: 200;
}

.post_title {
  color: black;
  font-size: 23px;
  font-weight: 800;
}

.post_content {
  color: black;
  font-size: 20px;
  font-weight: 500;
  position: relative;
  padding-bottom: 50px;
  padding-top: 20px;
}

.post_date {
  position: absolute;
  bottom: 0;
  right: 20px;
  font-size: 10px;
}

.signal_button {
  background-color: transparent;
  border: 2px solid black;
  position: absolute;
  border-radius: 20px;
  color: black;
  top: 6px;
  right: 20px;
  font-size: 12px;
}

.signal_button:hover {
  color: white;
  border: 2px solid black;
  background-color: black;
  transition: all ease 0.5s;
  cursor: pointer;
}
</style>
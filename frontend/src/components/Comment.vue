<template>
  <form v-on:submit.prevent="createComment">
    <p class="add_comment">Ajouter un commentaire</p>
    <input
      class="comment_content"
      type="text"
      v-model="content"
      name="content"
      placeholder="Ajouter un commentaire"
    />
    <div class="button">
      <button class="post_button">Publier le commentaire</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "sendComment",
  data() {
    return {
      content: "",
    };
  },
  props: ["postId"],

  methods: {
    createComment() {
      const storageInfo = JSON.parse(
        localStorage.getItem("lucasp7groupomania")
      );

      const data = {
        content: this.content,
        userId: storageInfo.userId,
        postId: this.postId,
      };
      if (!data.content) {
        alert("error");
        return;
      }
      axios
        .post("http://localhost:3000/api/comment", data, {
          headers: {
            Authorization: `Bearer ${storageInfo.token}`,
          },
        })
        .then(() => {
          this.$router.push("/home");
          alert("Bravo ! Votre commentaire est bien crée");
        })
        .catch((e) => {
          console.log(
            e + "impossible d'éditer le commentaire, une erreur est survenue"
          );
        });
    },
  },
};
</script>

<style scoped>
.add_comment {
  color: white;
  font-size: 20px;
  font-weight: 800;
}

.comment_content {
  border: 2px white solid;
  background-color: transparent;
  border-radius: 20px;
  width: 100%;
  height: 75px;
  margin-bottom: 20px;
}

.comment_content::placeholder {
  color: white;
}

.post_button {
  background-color: transparent;
  border: 2px white solid;
  border-radius: 35px;
  color: white;
  width: 100%;
  height: 25px;
}

.post_button:hover {
  background-color: white;
  border: none;
  color: black;
  mix-blend-mode: screen;
  transition: all ease 0.5s;
}




</style>
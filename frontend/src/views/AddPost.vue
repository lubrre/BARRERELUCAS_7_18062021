<template>
  <div class="body">
    <router-link to="/home" class="nav_text">
      <i class="fas fa-arrow-left arrow_post"></i>
    </router-link>

    <form class="profil_cart" v-on:submit.prevent="createPost">
      <p class="title_addpost">Ajouter un post</p>

      <input
        class="addpost_title"
        type="text"
        v-model="title"
        name="title"
        placeholder="Ajouter un titre"
      />

      <input
        class="addpost_input"
        type="text"
        v-model="text"
        name="text"
        placeholder="Quoi de neuf ?"
      />

      <!-- <label for="image">
        <input
          type="file"
          name="image"
          id="image"
          ref="image"
          v-on:change="handleFileUpload()"
        />
      </label> -->

      <div class="button">
        <button class="post_button">Publier</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "sendPost",
  data() {
    return {
      title: "",
      text: "",
      // imageUrl: "",
    };
  },

  methods: {
    handleFileUpload() {
      this.image = this.$refs.image.files[0];
    },
    createPost() {
      const storageInfo = JSON.parse(
        localStorage.getItem("lucasp7groupomania")
      );

      axios
        .post(
          "http://localhost:3000/api/post",
          {
            title: this.title,
            text: this.text,
            userId: storageInfo.userId,
          },
          {
            headers: {
              Authorization: `Bearer ${storageInfo.token}`,
            },
          }
        )
        .then(() => {
          this.$router.push("/home");
          alert("Bravo ! Votre post est bien crée");
        })
        .catch((e) => {
          console.log(
            e + "impossible d'éditer le post, une erreur est survenue"
          );
        });
    },
  },
};
</script>

<style scoped>
/* fonts */

@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

/* style */

.body {
  display: flex;
  justify-content: center;
}

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

/* profil */

.profil_cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 20px;
  padding-top: 20px;
  padding-bottom: 40px;
  width: 500px;
  font-family: "Poppins";
}

@media screen and (max-width: 375px) {
  .profil_cart {
    width: 350px;
  }
}

/* input */

.title_addpost {
  color: black;
  font-size: 25px;
  font-weight: 800;
}

.addpost_title {
  border-radius: 20px;
  height: 50px;
  width: 300px;
  color: black;
  border: 1px solid black;
  background-color: transparent;
  margin-bottom: 20px;
}

.addpost_title::placeholder {
  color: black;
}

.addpost_input {
  border-radius: 20px;
  height: 100px;
  width: 300px;
  color: black;
  border: 1px solid black;
  background-color: transparent;
}

.addpost_input::placeholder {
  color: black;
}

/* button post */

.button {
  padding: 20px;
  background-color: transparent;
}

.post_button {
  background-color: transparent;
  font-family: "Poppins";
  width: 150px;
  font-weight: 600;
  font-size: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 25px;
  border: 2px black solid;
  color: black;
  font-size: 17px;
}

.post_button:hover {
  color: white;
  border: 2px solid black;
  background-color: black;
  transition: all 0.5s;
}
</style>
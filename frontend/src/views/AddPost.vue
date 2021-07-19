<template>
  <div class="body">
    <i class="fas fa-arrow-left arrow_post" onclick="window.location.href='/';"></i>
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
        <button class="post_button">
          Publier
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
    name: "sendPost",
    data(){
        return {
            title: "",
            text: "",
            // imageUrl: "",
        }
    },
  
    
    methods: {
      handleFileUpload(){
        this.image = this.$refs.image.files[0];
      },
      createPost() {
      const storageInfo = JSON.parse(localStorage.getItem("lucasp7groupomania"));
      const formData = new FormData();
        if(this.image !== null){
          // formData.append("image", this.image);
          formData.append("title", this.title);
          formData.append("text", this.text);
          formData.append("userId", storageInfo.userId);
        } else {
          formData.append("title", this.title);
          formData.append("text", this.text);
          formData.append("userId", storageInfo.userId);
        }
      axios.post('http://localhost:3000/api/post', formData, {
        headers: {
          "Content-Type": "multipart/formData",
          Authorization: `Bearer ${storageInfo.token}`
        }
      })
      .then((res) => {
        console.log(formData);
        this.$router.push('/');
        console.log(res);
        alert("Bravo ! Votre post est bien crée");
      })
      .catch(e => {
        console.log(e + "impossible d'éditer le post, une erreur est survenue");
        console.log(formData);
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

/* profil */

.profil_cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: 2px solid white;
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
/* profil img */

.profil_img {
  background-image: url(../assets/profil.jpeg);
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  border: 1px solid black;
  border-radius: 100px;
  width: 100px;
  height: 100px;
}

/* username */
.profil_name {
  font-size: 25px;
  font-weight: 900;
  padding-top: 20px;
  margin-bottom: 15px;
}

/* input */

.title_addpost{
  color: white;
  font-size: 25px;
  font-weight: 800;
}

.addpost_title{
  border-radius: 20px;
  height: 50px;
  width: 300px;
  color: white;
  border: 1px solid white;
  background-color: transparent;
  margin-bottom: 20px;
}

.addpost_title::placeholder{
  color: white;
}

.addpost_input {
  border-radius: 20px;
  height: 100px;
  width: 300px;
  color: white;
  border: 1px solid white;
  background-color: transparent;
}

.addpost_input::placeholder{
  color: white;
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
  border: 2px white solid;
  color: white;
  font-size: 17px;
}

.post_button:hover{
  background-color: white;
  color: black;
  mix-blend-mode: screen;
  transition: all .5s;

}
</style>
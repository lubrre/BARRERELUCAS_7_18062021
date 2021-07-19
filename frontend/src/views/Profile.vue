<template>
  <i class="fas fa-arrow-left arrow_post" onclick="window.location.href='/';"></i>
  <div class="body">  
    <div class="profil_cart">
      <a class="login_title">Profil</a>

      <a class="profil_name">{{username}}</a>

      <div class="button">
        <button class="forum_button" onclick="window.location.href='/';">
          Accéder au forum
        </button>
      </div>

      <div class="button">
        <button class="post_button" onclick="window.location.href='/AddPost';">
          Rédiger un post
        </button>
      </div>

      <div class="button">
        <button
          class="disconnection_button"
          onclick="window.location.href='/login';"
        >
          Déconnexion
        </button>
      </div>

      <div class="button">
        <button class="delete_button" v-on:click="delete_account">
          Supprimer mon compte
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Profile",

  data() {
    return {
        username: "",
    };
  },
  // Définissez les méthodes de l'objet
  methods: {
    delete_account: function () {
      // `this` fait référence à l'instance de Vue à l'intérieur de `methods`
      const confirm_delete = confirm(
        "Etes vous sûr de supprimer votre compte ?"
      );
      //
      if (confirm_delete) {
        const userData = JSON.parse(localStorage.getItem('lucasp7groupomania'))
        axios.delete(`http://localhost:3000/api/auth/${userData.userId}`, {
          headers: {
            Authorization: userData.token,
          },
        }).then(()=>{
            localStorage.removeItem('lucasp7groupomania')
            this.$router.push("/login")
        })
      }
    },
  },
};
</script>

<style scoped>
/* fonts */

/* style */

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


.body {
  display: flex;
  justify-content: center;
}

.login_title{
  color: white;
  font-weight: 800;
  font-size: 25px;
}

/* profil */

.profil_cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 500px;
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
}

/* button forum */

.button {
  padding: 20px;
}

.forum_button {
  width: 300px;
  font-weight: 800;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 35px;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  cursor: pointer;
} 
.forum_button:hover{
  background-color: white;
  transition: all ease .5s;
  mix-blend-mode: screen;
  color: black;
}


/* button post */

.button {
  padding: 20px;
}

.post_button {
  width: 300px;
  font-weight: 800;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 35px;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  cursor: pointer;
}

.post_button:hover{
  background-color: white;
  transition: all ease .5s;
  mix-blend-mode: screen;
  color: black;
}

/* button disconnection */

.button {
  padding: 20px;
}

.disconnection_button {
  width: 300px;
  font-weight: 800;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 35px;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  cursor: pointer;
}

.disconnection_button:hover{
  background-color: white;
  transition: all ease .5s;
  mix-blend-mode: screen;
  color: black;
}

/* button delete */

.button {
  padding: 20px;
}
.delete_button {
  width: 300px;
  font-weight: 800;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 35px;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  cursor: pointer;
}

.delete_button:hover{
  background-color: #9e0000;
  transition: all ease .5s;
  border: 2px solid #9e0000;
}
</style>

<template>
  <router-link to="/home" class="nav_text">
    <i class="fas fa-arrow-left arrow_post"></i>
  </router-link>
  <div class="body">
    <div class="profil_cart">
      <a class="login_title">Profil</a>

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
        <button class="modify_button" v-on:click="modify_account">
          Modifier mon profil
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
// import ModifyProfile from "./ModifyProfile"

export default {
  name: "Profile",
  // components:{
  //   ModifyProfile,
  // },
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
        const userData = JSON.parse(localStorage.getItem("lucasp7groupomania"));
        axios
          .delete(`http://localhost:3000/api/auth/delete/${userData.userId}`, {
            headers: {
              Authorization: userData.token,
            },
          })
          .then(() => {
            localStorage.removeItem("lucasp7groupomania");
            this.$router.push("/");
          });
      }
    },
    modify_account: function () {
      // `this` fait référence à l'instance de Vue à l'intérieur de `methods`
      const confirm_modify = confirm(
        "Etes vous sûr de modifier votre compte ?"
      );
      //
      if (confirm_modify) {
        this.$router.push("/modifyProfile");
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

.body {
  display: flex;
  justify-content: center;
}

.login_title {
  color: black;
  font-weight: 800;
  font-size: 25px;
}

/* profil */

.profil_cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: 2px solid black;
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
  border: 2px solid black;
  color: black;
  cursor: pointer;
}
.forum_button:hover {
  color: white;
  border: 2px solid black;
  background-color: black;
  transition: all ease 0.5s;
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
  border: 2px solid black;
  color: black;
  cursor: pointer;
}

.post_button:hover {
  color: white;
  border: 2px solid black;
  background-color: black;
  transition: all ease 0.5s;
}

/* button modify */

.button {
  padding: 20px;
}

.modify_button {
  width: 300px;
  font-weight: 800;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 35px;
  background-color: transparent;
  border: 2px solid black;
  color: black;
  cursor: pointer;
}

.modify_button:hover {
  color: white;
  border: 2px solid black;
  background-color: black;
  transition: all ease 0.5s;
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
  border: 2px solid black;
  color: black;
  cursor: pointer;
}

.disconnection_button:hover {
  color: white;
  border: 2px solid black;
  background-color: black;
  transition: all ease 0.5s;
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
  border: 2px solid black;
  color: black;
  cursor: pointer;
}

.delete_button:hover {
  background-color: #9e0000;
  transition: all ease 0.5s;
  border: 2px solid #9e0000;
}
</style>

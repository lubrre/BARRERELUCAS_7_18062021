<template>
<Modal 
  v-if="modalMessage" 
  :modalMessage="modalMessage" 
   v-on:close-me="closeModal"
  />
<router-link to="/home" class="nav_text">
    <i class="fas fa-arrow-left arrow_post"></i>
  </router-link>
  
<div class="body">
    <div @submit.prevent="modify" class="login_cart">
      <a class="login_title">Modifier votre profil</a>
      <div class="input_cart">
        <div data-validate="Username is required" class="setting_input">
          <a class="title_input">Prénom</a>
          <input
            class="input"
            v-model="first_name"
            type="text"
            name="first_name"
            placeholder="Modifier votre prénom"
          />
        </div>
        <div data-validate="Username is required" class="setting_input">
          <a class="title_input">Nom de famille</a>
          <input
            class="input"
            v-model="last_name"
            type="text"
            name="last_name"
            placeholder="Modifier votre nom de famille"
          />
        </div>
        <div data-validate="Username is required" class="setting_input">
          <a class="title_input">Nom d'utilisateur</a>
          <input
            class="input"
            v-model="username"
            type="text"
            name="username"
            placeholder="Modifier votre nom d'utilisateur"
          />
        </div>

        <div data-validate="Username is required" class="setting_input">
          <a class="title_input">Email</a>
          <input
            class="input"
            v-model="email"
            type="text"
            name="Email"
            placeholder="Modifier votre email"
          />
        </div>

        <div data-validate="Password is required" class="setting_input">
          <a class="title_input">Mot de passe</a>
          <input
            class="input"
            v-model="password"
            type="password"
            name="password"
            placeholder="Modifier votre mot de passe"
          />
        </div>
      </div>

      <div class="button">
        <button class="login_button" v-on:click="modify">Modifier</button>
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from "axios";
import Modal from "../components/Modal.vue";
export default {
    name: "ModifyProfile",
    components: {
    Modal
  },
    data(){
    return {
      email: "",
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      modalMessage: "",
    };
  },
  methods: {
    modify() {
        const userData = JSON.parse(localStorage.getItem("lucasp7groupomania"));
      axios
        .post(`http://localhost:3000/api/auth/modify/${userData.userId}`, {
          email: this.email,
          first_name: this.first_name,
          last_name: this.last_name,
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.$router.push("/home");
        })
        .catch(error => {
          this.modalMessage = error.response.data.message;
        });
    },
    closeModal() {
      this.modalMessage = "";
    }
  },
};
</script>

<style scoped>
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
  color: black;
  background-color: black;
  mix-blend-mode: screen;
  display: block;
  cursor: pointer;
  transition: all ease 0.5s;
}

.body {
  display: flex;
  justify-content: center;
}

/*login_cart */

.login_cart {
  border: 2px solid black;
  border-radius: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 500px;
  font-family: "Poppins";
}

.login_title {
  font-weight: 900;
  font-size: 25px;
  width: 100%;
  color: black;
}

@media screen and (max-width: 375px) {
  .login_cart {
    width: 350px;
  }
}

/* input username + password */

.input_cart {
  padding-top: 15px;
}

.setting_input {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100px;
}
.title_input {
  font-size: 20px;
  font-weight: 800;
  padding-top: 10px;
  color: black;
}

.input {
  width: 250px;
  height: 20px;
  border-radius: 10px;
  border: 2px solid black;
  background-color: transparent;
  margin: auto;
}

.input::placeholder {
  color: black;
}

/* button */

.button {
  padding: 20px;
}

.login_button {
  font-weight: 800;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 35px;
  border: none;
  background-color: transparent;
  color: black;
  border: 2px solid black;
}

.login_button:hover {
color: white;
  border: 2px solid black;
  background-color: black;
  cursor: pointer;
  transition: all ease 0.5s;
}

/* sign up */

.link_signup {
  color: black;
  text-decoration: none;
}
</style>
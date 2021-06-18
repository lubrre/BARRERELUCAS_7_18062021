<template>
  <div class="body">
    <div @submit.prevent="signup" class="login_cart" >
      <a class="login_title">Inscrivez-vous</a>
      <div class="input_cart">
        <div data-validate="Username is required" class="setting_input">
          <a class="title_input">first name</a>
          <input
            class="input"
            v-model="first_name"
            type="text"
            name="first_name"
            placeholder="Inscrivez votre first name"
          />
        </div>
        <div data-validate="Username is required" class="setting_input">
          <a class="title_input">last name</a>
          <input
            class="input"
            v-model="last_name"
            type="text"
            name="last_name"
            placeholder="Inscrivez votre last name"
          />
        </div>
        <div data-validate="Username is required" class="setting_input">
          <a class="title_input">Nom d'utilisateur</a>
          <input
            class="input"
            v-model="username"
            type="text"
            name="username"
            placeholder="Inscrivez votre nom d'utilisateur"
          />
        </div>

        <div data-validate="Username is required" class="setting_input">
          <a class="title_input">Email</a>
          <input
            class="input"
            v-model="email"
            type="text"
            name="Email"
            placeholder="Inscrivez votre email"
          />
        </div>

        <div data-validate="Password is required" class="setting_input">
          <a class="title_input">Mot de passe</a>
          <input
            class="input"
            v-model="password"
            type="text"
            name="password"
            placeholder="Inscrivez votre mot de passe"
          />
        </div>
      </div>

      <div class="button">
        <button class="login_button" v-on:click="signup">S'inscrire</button>
      </div>

      <router-link to="/" class="link_signup">Vous avez un compte</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Signup",
  data() {
    return {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        username: "",
    }
  },
  methods: {
    signup() {
      this.$axios.post('',{
        username: this.username,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password
      }).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      })
    }
  }
}
      // axios
      //   .post("http://localhost:3000/api/auth/signup", this.user)
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
   
</script>

<style scoped>
/* fonts */

@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

/* style */

body {
  background-color: #f0f0f0;
}

.body {
  display: flex;
  justify-content: center;
}

/*login_cart */

.login_cart {
  background-color: white;
  border-radius: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 500px;
  font-family: "Poppins";
}

.login_title {
  font-weight: 900;
  font-size: 20px;
  width: 100%;
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
  padding-top: 10px;
}

.input {
  width: 200px;
  height: 20px;
  border-radius: 10px;
  border: 0.5px solid #c0c0c0;
  margin: auto;
}

/* button */

.button {
  padding: 20px;
}

.login_button {
  font-family: "Poppins";
  font-weight: 800;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 20px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
}

/* sign up */

.link_signup {
  color: black;
  text-decoration: none;
}
</style>
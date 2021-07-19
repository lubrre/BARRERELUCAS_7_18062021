<template>
  <i class="fas fa-arrow-left arrow_post" onclick="window.location.href='/';"></i>
  <div class="body">
    <div @submit.prevent="signup" class="login_cart">
      <a class="login_title">Inscrivez-vous</a>
      <div class="input_cart">
        <div data-validate="Username is required" class="setting_input">
          <a class="title_input">Prénom</a>
          <input
            class="input"
            v-model="first_name"
            type="text"
            name="first_name"
            placeholder="Inscrivez votre prénom"
          />
        </div>
        <div data-validate="Username is required" class="setting_input">
          <a class="title_input">Nom de famille</a>
          <input
            class="input"
            v-model="last_name"
            type="text"
            name="last_name"
            placeholder="Inscrivez votre nom de famille"
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
            type="password"
            name="password"
            placeholder="Inscrivez votre mot de passe"
          />
        </div>
      </div>

      <div class="button">
        <button class="login_button" v-on:click="signup">S'inscrire</button>
      </div>

      <router-link to="/login" class="link_signup">Vous avez un compte</router-link>
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
    };
  },
  methods: {
    signup() {
      axios
        .post("http://localhost:3000/api/auth/signup", {
          email: this.email,
          password: this.password,
          first_name: this.first_name,
          last_name: this.last_name,
          username: this.username,
        })
        .then(()=>{
          this.$router.push("/login")
        })
        .catch(function (error) {
          console.log(error);
        });
    },
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

/*login_cart */

.login_cart {
  border: 2px solid white;
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
  color: white;
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
  color: white;
}

.input {
  width: 250px;
  height: 20px;
  border-radius: 10px;
  border: 2px solid white;
  background-color: transparent;
  margin: auto;
}

.input::placeholder{
  color: white;
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
  color: white;
  border: 2px solid white;
}

.login_button:hover{
  color: black;
  background-color: white;
  mix-blend-mode: screen;
  cursor: pointer;
  transition: all ease .5s;
}

/* sign up */

.link_signup {
  color: white;
  text-decoration: none;
}
</style>
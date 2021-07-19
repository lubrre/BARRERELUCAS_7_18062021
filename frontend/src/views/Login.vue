<template>
  <i class="fas fa-arrow-left arrow_post" onclick="window.location.href='/';"></i>
  <div class="body">
    <div class="login_cart">
      <a class="login_title">Connecter vous à votre compte</a>
      <div class="input_cart">
        <div data-validate="Email is required" class="setting_input">
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
            type="password"
            v-model="password"
            name="password"
            placeholder="Inscrivez votre mot de passe"
          />
        </div>
      </div>

      <div class="button">
        <button class="login_button" v-on:click="login">
          S'identifier
        </button>
      </div>

      <router-link to="/inscription" class="link_signup"
        >Pas encore de compte</router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    }
  },

  methods:{
      login(){
          axios.post('http://localhost:3000/api/auth/login',{
              email:this.email,
              password:this.password,
          })
          .then((res)=>{
            console.log(res)
            localStorage.setItem("lucasp7groupomania", JSON.stringify(res.data))
            this.$router.push("/")
          })
      }
  }
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
}

.login_title {
  color: white;
  font-weight: 900;
  font-size: 25px;
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

<template>
  <Modal
    v-if="modalMessage"
    :modalMessage="modalMessage"
    v-on:close-me="closeModal"
  />
  <div>
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
          <button class="login_button" v-on:click="login">S'identifier</button>
        </div>

        <router-link to="/inscription" class="link_signup"
          >Pas encore de compte</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Modal from "../components/Modal.vue";

export default {
  name: "Login",
  components:{
    Modal,
  },
  data() {
    return {
      email: "",
      password: "",
      modalMessage: "",
    };
  },

  methods: {
    login() {
      axios
        .post("http://localhost:3000/api/auth/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("lucasp7groupomania", JSON.stringify(res.data));
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
}

.login_title {
  color: black;
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

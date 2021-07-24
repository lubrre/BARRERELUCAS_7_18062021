<template>
  <div class="header">
    <div class="logo" onclick="window.location.href='/home';"></div>
    <nav class="nav">
      <ul class="nav_links">
        <router-link to="/AddPost" class="nav_text"
          >Ajouter un post</router-link
        >
        <router-link to="/Profile" class="nav_text">Profil</router-link>
        
        <router-link v-if="isAdmin" to="/Administrateur" class="nav_text"
          >Administrateur</router-link
        >
      </ul>
    </nav>

    <button v-if="isLoggedIn" class="cta log-btn" @click="logout"
          >Se déconnecter</button>
    <router-link v-else to="/" class="cta log-btn"
          >S'identifier</router-link>

    
    
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isAdmin: false,
      isLoggedIn: false
    };
  },
  mounted() {
    const storageInfo = JSON.parse(localStorage.getItem("lucasp7groupomania"));
    // console.log("storageinfo navbar", storageInfo);
    this.isLoggedIn = storageInfo ? true : false;
    if (storageInfo && storageInfo.isAdmin) {
      this.isAdmin = true;
    }
  },

  methods: {
    logout() {
      localStorage.removeItem("lucasp7groupomania");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.logo {
  background-image: url(../assets/icon-left-font-monochrome-white.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 250px;
  height: 40px;
  cursor: pointer;
}

li,
a,
button {
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  color: white;
}

.header {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
}

.nav_links {
  display: flex;
  justify-content: space-evenly;
  width: 800px;
  list-style: none;
}

.nav_text {
  font-weight: 800;
  font-size: 20px;
}

.nav_text:hover {
  color: black;
}

.login_button {
  border: 2px white solid;
  border-radius: 50px;
  padding: 10px;
  background-color: transparent;
  font-weight: 800;
}

.login_button:hover {
  color: black;
  transition: all 0.3s ease 0s;
  background-color: white;
  mix-blend-mode: screen;
}

.log-btn {
  background-color: transparent;
  border: 2px solid;
  border-radius: 17px;
  height: 34px;
  width: 160px;
}

@media screen and (max-width: 1024px) {
  .nav_links {
    width: 600px;
    font-size: 15px;
  }
}

@media screen and (max-width: 768px) {
  .logo {
    background-image: url(../assets/iconwhite.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  .nav_links{
    width: 500px;
  }
}

@media screen and (max-width: 425px){
  .header{
    justify-content: center;
    flex-direction: column;
  }
  .nav{
    width: 375px;
  }
  .nav_links{
    width: 340px;
    flex-direction: column;
  }
  .nav_text{
    margin-bottom: 10px;
  }
  
}
</style>

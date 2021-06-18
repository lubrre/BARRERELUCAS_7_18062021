<template>
  <div class="header">
    <div class="logo" onclick="window.location.href='/';"></div>
    <nav>
      <ul class="nav_links">
        <li><a onclick="window.location.href='/AddPost';">Ajouter un post</a></li>
        <li><a onclick="window.location.href='/AllPost';">Forum</a></li>
        <li><a onclick="window.location.href='/Profile';">Profil</a></li>
      </ul>
    </nav>
    <a class="cta" href="#"><button class="login_button" onclick="window.location.href='/Login';">S'identifier</button></a>
  </div>
</template>

<script>

export default {
  name: 'Navbar'
}
</script>

<style scoped>
/* fonts */

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.logo{
  background-image: url(../assets/icon-left-font-monochrome-black.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 250px;
  height: 40px;
  cursor: pointer;
}
* {
  box-sizing: border-box;
}

li, a, button{
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
}

.nav_links{
  display: flex;
  justify-content: space-between;
  width: 500px;
  list-style: none;
} 

.login_button{
  border: .5px black solid;
  border-radius: 50px;
  background-color: white;
}

.login_button:hover{
  background-color: black;
  color: white;
  transition: all .3s ease 0s;
}

</style>

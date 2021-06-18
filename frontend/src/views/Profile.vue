<template>
    <div class="body">
        <i class="fas fa-arrow-left arrow_post" onclick="window.location.href='/';"></i>
        <div class="profil_cart">
            <a class="login_title">Profil</a>

            <div class="profil_img"></div>

            <a class="profil_name">Username</a>

            <div class="button">
				<button class="forum_button"  onclick="window.location.href='/AllPost';">
					Accéder au forum
				</button>
			</div>

            <div class="button">
				<button class="post_button"  onclick="window.location.href='/AddPost';">
					Rédiger un post
				</button>
			</div>
            
            <div class="button">
				<button class="disconnection_button" onclick="window.location.href='/login';">
					Déconnexion
				</button>
			</div>

            <div class="button">
				<button class="delete_button"  onclick="window.location.href='#';">
					Supprimer mon compte
				</button>
			</div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Profile'
}
</script>

<style scoped>
/* fonts */

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

/* style */

.body{
    display: flex;
    justify-content: center;
}

/* profil */

.profil_cart{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
    width: 500px;
    font-family: 'Poppins';
}

@media screen and (max-width: 375px){
    .profil_cart{
        width: 350px;
    } 
}
/* profil img */

.profil_img{
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
.profil_name{
    font-size: 25px;
    font-weight: 900;
    padding-top: 20px;
}

/* button forum */

.button{
    padding: 20px;
}

.forum_button{
    font-family: 'Poppins';
    width: 150px;
    font-weight: 600;
    font-size: 12px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 20px;
    border: none;
    background-color: #f0f0f0;
}

/* button post */

.button{
    padding: 20px;
    
}

.post_button{
    font-family: 'Poppins';
    width: 150px;
    font-weight: 600;
    font-size: 12px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 20px;
    border: none;
    background-color: #f0f0f0;
}

/* button disconnection */

.button{
    padding: 20px;
}

.disconnection_button{
    font-family: 'Poppins';
    font-weight: 800;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 20px;
    border: none;
    background-color: #f0f0f0;
}

/* button delete */

.button{
    padding: 20px;
}

.delete_button{
    font-family: 'Poppins';
    width: 140px;
    font-weight: 600;
    font-size: 9px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 20px;
    border: none;
    color: white;
    background-color: #9e0000;
}

</style>

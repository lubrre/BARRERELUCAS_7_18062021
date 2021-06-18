<template>
    <div class="body">
        <i class="fas fa-arrow-left arrow_post" onclick="window.location.href='/AllPost';"></i>
        <div class="profil_cart">
            <div class="profil_img"></div>

            <a class="profil_name">Username</a>

            <input class="addpost_input" type="text" name="addpost" placeholder="Quoi de neuf, Username ?">

            <div class="button">
				<button class="post_button"  onclick="window.location.href='/AllPost';">
					Publier
				</button>
			</div>
        </div>
    </div>
</template>

<script>
export default {

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

.arrow_post{
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 20px;
    color: black;
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
    margin-bottom: 15px;
}

/* input */
.addpost_input{
    border-radius: 20px;
    height: 100px;
    width: 200px;
    border: .5px solid #c0c0c0;
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
</style>
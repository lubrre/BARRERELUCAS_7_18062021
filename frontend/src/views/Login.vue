<template>
    
    <div class="body">
        <div class="login_cart">
            <a class="login_title">Connecter vous à votre compte</a>
            <div class="input_cart">
                <div data-validate = "Username is required" class="setting_input">
                    <a class="title_input">Nom d'utilisateur</a>
                    <input class="input" type="text" name="username" placeholder="Inscrivez votre nom d'utilisateur">
                </div>

                <div data-validate = "Password is required" class="setting_input">
                    <a class="title_input">Mot de passe</a>
                    <input class="input" type="text" name="password" placeholder="Inscrivez votre mot de passe">
                </div>
            </div>
            
            <div class="button">
				<button class="login_button"  onclick="window.location.href='/profile';">
					S'identifier
				</button>
			</div>

            <router-link to="/inscription" class="link_signup">Pas encore de compte</router-link>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Login'
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


/*login_cart */


.login_cart{
    background-color: white;
    border-radius: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
    width: 500px;
    font-family: 'Poppins';
}

.login_title{
    font-weight: 900;
    font-size: 20px;
    width: 100%;
}

@media screen and (max-width: 375px){
    .login_cart{
        width: 350px;
    } 
}

/* input username + password */

.input_cart{
    padding-top: 15px;
}

.setting_input{
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100px;
}
.title_input{
    font-size: 20px;
    padding-top: 10px;
}

.input{
    width: 200px;
    height: 20px;
    border-radius: 10px;
    border: .5px solid #c0c0c0;
    margin: auto;
}

/* button */

.button{
    padding: 20px;
}

.login_button{
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

/* sign up */

.link_signup{
    color: black;
    text-decoration: none;

}

</style>

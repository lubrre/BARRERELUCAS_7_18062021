<template>
    <div>
        <div class="button_forum_disconnection">
				<button class="disconnection_forum_button" onclick="window.location.href='/';">
					Déconnexion
				</button>
			</div>
        <h1>Bienvenue sur le forum de Groupomania</h1>
        <div class="forum_post">
            <div class="forum_post_user">
                <div class="forum_img_user" onclick="window.location.href='/profile'"></div>
                <a class="username_forum">Username</a>
            </div>

            <div class="post_content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis dolorem suscipit corrupti sequi. At dolores assumenda labore odit illum nam soluta repudiandae amet omnis, doloremque obcaecati aut earum tenetur!</p>
            </div>
        </div>

        <div class="forum_post">
            <div class="forum_post_user">
                <div class="forum_img_user"></div>
                <a class="username_forum">Username</a>
            </div>

            <div class="post_content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis dolorem suscipit corrupti sequi. At dolores assumenda labore odit illum nam soluta repudiandae amet omnis, doloremque obcaecati aut earum tenetur!</p>
            </div>
        </div>
        
    </div>
</template>

<script>

export default {
  name: 'AllPost',
}
</script>

<style scoped>

/* button disconnection */

.button_forum_disconnection{
    padding: 20px;
    position: absolute;
    top: 0;
    right: 0;
}

.disconnection_forum_button{
    font-family: 'Poppins';
    font-weight: 800;
    font-size: 8px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 10px;
    border: none;
    color: white;
    background-color: #9e0000;
}

/* forum post */

.forum_post{
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    width: auto;
    height: auto;
    margin-bottom: 10px;
}
.forum_post_user{
    display: flex;
    justify-content: space-between;
    width: 150px;
}

.forum_img_user{
    background-image: url(../assets/profil.jpeg);
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    border: 1px solid black;
    border-radius: 10px;
    width: 40px;
    height: 40px;
}

.username_forum{
    font-size: 20px;
    font-weight: 600;
}

.post_content{
    text-align: start;
}

</style>
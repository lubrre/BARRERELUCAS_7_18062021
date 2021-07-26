<template>
  <div class="#">
        <footer class="footer">
            <ul class="footer_list">
                <li class="#"><a href="#">Mentions légales</a></li>
                <li class="#"><a href="#">Signaler un bug</a></li>
                <li class="#"><a class="profile_link" onclick="window.location.href='/Profile';">Mon compte</a></li>
            </ul>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>

.footer{
    display: flex;
    justify-content: center;
    width: 100%;
}

.footer_list{
    display: flex;
    justify-content: space-between;
    width: 500px;
    list-style: none;
    margin-right: 50px;
}

li a{
    text-decoration: none;
    color: black;
    cursor: pointer;
}
</style>
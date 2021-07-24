<template>
<div class="comments">
  <div class="comment" v-for="comment in comments" :key="comment.id">
    <p class="comment_username">{{ comment.user.username + " " +"a posté :"}}</p>
    <p class="comment_content">{{comment.content}}</p>

    <p class="comment_date">{{"posté le : " + comment.createdAt}}</p>

    <!-- signal button -->
    <button 
    @click="signalComment(comment.id)" 
    class="signal_button"
    v-if="!storageInfo.isAdmin && storageInfo.userId != comment.userId">
    signaler
    </button>
    <!-- delete button (if admin) -->
    <button 
    @click="deleteComment(comment.id)"
    class="signal_button"
    v-if="storageInfo.isAdmin || storageInfo.userId == comment.userId">
    supprimer
    </button>
    
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "AllComment",
  data() {
    return {
      comments: [],
      content: "",
      storageInfo: {}
    };
  },
  props:["postId"],
  mounted() {
        this.storageInfo = JSON.parse(localStorage.getItem("lucasp7groupomania"));

    axios
      .get(`http://localhost:3000/api/comment/getOne/${this.postId}`, {
        headers: {
          Authorization: `Bearer ${this.storageInfo.token}`,
        },
      })
      .then((comments) => {
        console.log("consolelog allcomment", comments);
        this.comments = comments.data.map((comment)=>{
          comment.createdAt = comment.createdAt.split("-").reverse().join("/")
          return comment
        });
        this.$router.push("/OnePost");
      });
  },
  methods: {
      signalComment(postId){
        console.log(postId)
        axios.get(`http://localhost:3000/api/comment/signal/${postId}`,{
            headers:{
                authorization: `Bearer ${this.storageInfo.token}`
            },
        })
        .then((response)=>{
            console.log(response);
        })
      },
      deleteComment(postId){
        axios.delete(`http://localhost:3000/api/comment/delete/${postId}`, {
          headers:{
                authorization: `Bearer ${this.storageInfo.token}`
            },
        })
        .then((response)=>{
          console.log(response);
        })
      }
  },
};
</script>

<style scoped>
.comments{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  border: 1px solid white;
  border-radius: 20px;
  width: auto;
}
.comment{
  color: white;
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: .5px white solid;
}

.comment_username{
  font-size: 13px;
}

.comment_content{
  font-size: 17px;
  font-weight: 600;
}

.comment_date{
  font-size: 10px;
  position: absolute;
  bottom: 0;
  right: 10px;
}

.signal_button{
  background-color: transparent;
  font-size: 10px;
  border: 2px solid white;
  border-radius: 20px;
  color: white;
  position: absolute;
  top: 10px;
  right: 10px;
}

.signal_button:hover{
  background-color: white;
  border: none;
  color: black;
  mix-blend-mode: screen;
  transition: all ease .5s;
  cursor: pointer;
}

.signal_text{
  font-size: 15px;
}

@media screen and (max-width: 425px){

}

</style>
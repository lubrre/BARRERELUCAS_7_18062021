<template>
<div class="comments">
  <div class="comment" v-for="comment in comments" :key="comment.id">
    <p class="comment_content">{{ comment.content }}</p>
    <button @click="signalComment(comment.id)" class="signal_button">signaler</button>
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
    };
  },
  props:[
        "postId"
    ],
  mounted() {
    console.log("allcomment", this.postId)
        const storageInfo = JSON.parse(localStorage.getItem("lucasp7groupomania"));
    axios
      .get(`http://localhost:3000/api/comment/${this.postId}`, {
        headers: {
          Authorization: `Bearer ${storageInfo.token}`,
        },
      })
      .then((comments) => {
        console.log("consolelog allcomment", comments);
        this.comments = comments.data;
        this.$router.push("/OnePost");
      });
  },
  methods: {
      signalComment(postId){
        console.log(postId)
        const storageInfo = JSON.parse(localStorage.getItem("lucasp7groupomania"));
        axios.get(`http://localhost:3000/api/comment/signal/${postId}`,{
            headers:{
                authorization: `Bearer ${storageInfo.token}`,
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
}
.comment{
  color: white;
  position: relative;
  border: 1px solid white;
  border-radius: 20px;
  width: 400px;
  margin-bottom: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.signal_button{
  background-color: transparent;
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

</style>
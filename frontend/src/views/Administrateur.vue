<template>
  <router-link to="/home" class="nav_text">
    <i class="fas fa-arrow-left arrow_post"></i>
  </router-link>
  <!-- posts -->
  <div class="report_post">
    <ul>
      <li v-for="(signaledPost, index) in signaledPosts" :key="signaledPost.id">
        <p class="title_signal">Post signalé</p>
        <div class="signal">
          <h2 class="card_title">{{ signaledPost.title }}</h2>
          <p class="card_text">{{ signaledPost.text }}</p>
          <div class="button_signal">
            <button
              @click="cancelSignalPost(signaledPost.id)"
              class="cancel_button"
            >
              Annuler le signalement
            </button>
            <button
              @click="deletePost(signaledPost.id, index)"
              class="delete_button"
            >
              Supprimer le post
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <!-- comments -->
  <div class="report_post">
    <ul>
      <li
        v-for="(signaledComment, index) in signaledComments"
        :key="signaledComment.id"
      >
        <p class="title_signal">Commentaire signalé</p>
        <div class="signal">
          <p class="card_text">{{ signaledComment.content }}</p>
          <div class="button_signal">
            <button
              @click="cancelSignalComment(signaledComment.id, index)"
              class="cancel_button"
            >
              Annuler le signalement
            </button>
            <button
              @click="deleteComment(signaledComment.id, index)"
              class="delete_button"
            >
              Supprimer le commentaire
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Administrateur",
  data() {
    return {
      signaledPosts: [],
      signaledComments: [],
    };
  },
  mounted() {
    const storageInfo = JSON.parse(localStorage.getItem("lucasp7groupomania"));
    axios
      .get("http://localhost:3000/api/post/signaledPost", {
        headers: {
          Authorization: `Bearer ${storageInfo.token}`,
        },
      })
      .then((posts) => {
        console.log("333posts", posts.data);
        this.signaledPosts = posts.data;
      });

    axios
      .get("http://localhost:3000/api/comment/signalComment", {
        headers: {
          Authorization: `Bearer ${storageInfo.token}`,
        },
      })
      .then((comments) => {
        this.signaledComments = comments.data;
      });
  },
  methods: {
    // posts
    // cancel post (ok)
    cancelSignalPost(postId, index) {
      const confirmCancel = confirm(
        "Etes vous sûr de retirer le signalement sur ce post ?"
      );
      if (confirmCancel) {
        const userData = JSON.parse(localStorage.getItem("lucasp7groupomania"));
        const auth = {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
        axios
          .delete(`http://localhost:3000/api/post/modifySignaledPost/${postId}`, auth)
          .then(() => {
            this.signaledPosts.splice(index, 1);
          });
      }
    },
    // delete post (ok)
    deletePost(postId, index) {
      const confirmDelete = confirm("Etes vous sûr de supprimer votre post ?");
      //
      if (confirmDelete) {
        const userData = JSON.parse(localStorage.getItem("lucasp7groupomania"));
        axios
          .delete(
            `http://localhost:3000/api/post/deleteSignaledPost/${postId}`,
            {
              headers: {
                Authorization: `Bearer ${userData.token}`,
              },
            }
          )
          .then(() => {
            this.signaledPosts.splice(index, 1);
          });
      }
    },

    // comments
    // delete Comment (ok)
    deleteComment(commentId, index) {
      console.log("889", commentId);
      const confirmDelete = confirm(
        "Etes vous sûr de supprimer votre commentaire ?"
      );
      //
      if (confirmDelete) {
        const userData = JSON.parse(localStorage.getItem("lucasp7groupomania"));
        console.log(userData);
        axios
          .delete(
            `http://localhost:3000/api/comment/delete/${commentId}`,
            {
              headers: {
                Authorization: `Bearer ${userData.token}`,
              },
            }
          )
          .then(() => {
            this.signaledComments.splice(index, 1);
          });
      }
    },

    //cancel (ok)
    cancelSignalComment(commentId, index) {
      const confirmCancel = confirm(
        "Etes vous sûr de vouloir annuler le signalement sur ce commentaire ?"
      );
      //
      if (confirmCancel) {
        const userData = JSON.parse(localStorage.getItem("lucasp7groupomania"));
        console.log(userData);
        axios
          .delete(
            `http://localhost:3000/api/comment/unsignal/${commentId}`,
            {
              headers: {
                Authorization: `Bearer ${userData.token}`,
              },
            }
          )
          .then(() => {
            this.signaledComments.splice(index, 1);
          });
      }
    },
  },
};
</script>

<style scoped>
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
    color: white;
  border: 2px solid black;
  background-color: black;
  display: block;
  cursor: pointer;
  transition: all ease 0.5s;
}

.report_post {
  display: flex;
  justify-content: center;
}

li {
  list-style: none;
}

.title_signal {
  color: black;
  font-size: 25px;
  font-weight: 800;
}

.signal {
  border: 2px solid black;
  border-radius: 20px;
  padding-top: 10px;
  padding-bottom: 20px;
  width: 500px;
}

.card_title {
  color: black;
}

.card_text {
  color: black;
  font-size: 20px;
}

.button_signal {
  display: flex;
  justify-content: space-evenly;
}

.cancel_button {
  font-weight: 800;
  font-size: 13px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 35px;
  border: none;
  background-color: transparent;
  color: black;
  border: 2px solid black;
}

.cancel_button:hover {
  color: white;
  border: 2px solid black;
  background-color: black;
  cursor: pointer;
  transition: all ease 0.5s;
}

.delete_button {
  font-weight: 800;
  font-size: 13px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 35px;
  border: none;
  background-color: transparent;
  color: black;
  border: 2px solid black;
}

.delete_button:hover {
  background-color: #9e0000;
  border: 2px solid #9e0000;
  cursor: pointer;
  transition: all ease 0.5s;
}
</style>
<template>
  <!-- <div>
    <div>
      <button @click='addLike'>Like</button>
      <button @click='addDislike'>Dislike</button>
    </div>
    <div>Count likes: <strong>{{ likes }}</strong></div>
    <div>Count dislikes: <strong>{{ dislikes }}</strong></div>
  </div> -->

  <div class="app">
    
    <post-form 
      @create="createPost" 
      />
    <post-list 
      :posts="posts"
      @remove="removePost"
    />

  </div>
</template>



<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';

export default {
  components: {
    PostList,
    PostForm
  },
  data() {
    return {
      likes: 0,
      dislikes: 0,
      
      posts: [
        {id: 1, title: "Javascript", body: "description JS"},
        {id: 2, title: "PHP", body: "description PHP"},
        {id: 3, title: "Vue", body: "description Vue"},
        {id: 4, title: "React", body: "description React"},
      ],
    }
  }, 
  methods: {
    addLike() {
      this.likes += 1;
    }, 
    addDislike() {
      this.dislikes += 1;
    },
    createPost(post) {
      this.posts.push(post);
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    }
  }
}

</script>

<style>
* { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  width: 80%;
  height: 100%;
  padding: 20px;
  margin: 0 auto;
  -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
}

/* .post {
  padding: 15px;
  margin: 5px 10px;
  border: 3px solid teal;
} */
/* 
form {
  display: flex;
  flex-direction: column;

}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top:15px;
}

.btn {
  margin: 15px 0;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
} */
</style>
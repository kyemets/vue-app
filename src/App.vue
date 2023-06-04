<template>
  <div class="app">
    <h1>Page with posts</h1>
    <my-input 
      v-model="searchQuery"
      placeholder="Search..."
    />
    <div class="app__btns">
      <my-button
      @click="showDialog"
      style="margin: 15px 0;"
      >Create post
    </my-button>
    <my-select 
      v-model="selectedSort"
      :options="sortOptions"
    />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form 
        @create="createPost" 
      />
    </my-dialog>

    <post-list 
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Loading...</div>
  </div>
</template>



<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';
import MyDialog from './components/UI/MyDialog.vue';
import MySelect from './components/UI/MySelect.vue';
import axios from 'axios';

export default {
  components: {
    PostList,
    PostForm,
    MyDialog,
    MySelect
  },
  data() {
    return {
      likes: 0,
      dislikes: 0,
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      sortOptions: [
        {value: 'title', name: 'By name'},
        {value: 'body', name: 'By description'}
      ]
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
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
         setTimeout( async () =>{
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
          this.posts = response.data;
        }, 1000)
      } catch (e) {
        alert("Error fetching users");
      }
    },
  },
  mounted() {
      this.fetchPosts();
    },
    computed: {
      sortedPosts() {
        return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
      },
      sortedAndSearchedPosts() {
        return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
    },
    watch: {
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

.app__btns{
  margin: 15px 0;
  display: flex;
  justify-content: space-between;

}
</style>
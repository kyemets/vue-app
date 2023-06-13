<template>
    <div>
      <h1>
        {{ $store.state.isAuth 
          ? "The user is authorized" 
          : "Please authorize" }}
      </h1>

      <h1>Page with store</h1>
      <my-input 
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Search..."
        v-focus
      />

      <div class="app__btns">
        <my-button
        @click="showDialog"
        style="margin: 15px 0;"
        >Create post
      </my-button>
      <my-select 
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
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
      <div v-intersection="loadMorePosts" class="observer"></div>
      
      <div class="page__wrapper">
        <div 
          v-for="pageNumber in totalPages" 
          :key="pageNumber"
          class="page"
          :class="{
            'current-page': page === pageNumber
          }"
          @click="changePage(pageNumber)"
          >
          {{ pageNumber }}
        </div>
      </div>
    </div>
</template>
    
<script>
import PostForm from '../components/PostForm.vue';
import PostList from '../components/PostList.vue';
import MyDialog from '../components/UI/MyDialog.vue';
import MySelect from '../components/UI/MySelect.vue';
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
  
export default {
  components: {
    PostList,
    PostForm,
    MyDialog,
    MySelect
  },
  data() {
    return {
      dialogVisible: false,
    }
  }, 
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts',
    }),
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
    },
    mounted() {
      this.fetchPosts();
    },
    computed: {
      ...mapState({
        likes: 0,
        dislikes: 0,
        posts: state => state.post.posts,
        isPostsLoading: state => state.post.isPostsLoading,
        selectedSort: state => state.post.selectedSort,
        searchQuery: state => state.post.searchQuery,
        page: state => state.post.page,
        limit: state => state.post.limit,
        totalPages: state => state.post.totalPages,
        sortOptions: state => state.post.sortOptions,
      }),
      ...mapGetters({
        sortedPosts: 'post/sortedPosts',
        sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
      })
    },
  watch: {
  }
}
  
</script>
  
<style>
.app__btns{
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
} 
.page__wrapper{
  display: flex;
  margin-top: 15px;
} 
.page {
  border: 1px solid #000;
  padding: 10px;
  cursor: pointer;
} 
.current-page {
  border: 3px solid teal;
}
.observer {
  height: 30px;
  background: green;
}
</style>
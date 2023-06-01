<template>
     <form @submit.prevent>
      <h4>Add post</h4>
      <my-input
        v-model="post.title"
        type="text" 
        placeholder="Name"
      />
      <my-input 
        v-model="post.body"
        type="text" 
        placeholder="Description"
      />
      <my-button 
        class="btn"
        @click="createPost"
        >Add
      </my-button>
    </form>
</template>

<script>
// import MyButton from './UI/MyButton.vue'
export default {
    components: {
        // MyButton
    },
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: '',
            }
        }
    }
}
</script>

<style scoped>

form {
  display: flex;
  flex-direction: column;

}


.btn {
  margin: 15px 0;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
}
</style>
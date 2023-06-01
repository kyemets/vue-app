<template>
   <div class="post">
    <div>
        <div><strong>Name: </strong>{{ post.title }}</div>
        <div><strong>Description: </strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
        <my-button
            @click="$emit('remove', post)"
            >Delete
        </my-button> 
    </div>
    </div>   
 </template>
 
 <script>
//  import MyButton from './UI/MyButton.vue';
 export default {
    components: {
        // MyButton
    },
     props: {
        post: {
            type: Array,
            required: true,
        }
     }
 }
 </script>
 
 <style scoped>
.post {
    display: flex;
    align-items: center;
    padding: 15px;
    margin: 5px 10px;
    border: 3px solid teal;
    justify-content: space-between;
}

/* .btn {
  margin: 15px 0;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
}  */
 </style>
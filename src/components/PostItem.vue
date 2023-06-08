<template>
   <div class="post">
    <div>
        <div><strong>Id: </strong>{{ post.id }}</div>
        <div><strong>Name: </strong>{{ post.title }}</div>
        <div><strong>Description: </strong>{{ post.body }}</div>
    </div>
    
    <div class="post__btns">
        <my-button
            @click="$router.push(`/posts/${post.id}`)"
            >Open
        </my-button> 
        <my-button
            @click="$emit('remove', post)"
            >Delete
        </my-button> 
    </div>
    </div>   
</template>
 
<script>
export default {
    components: {
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
.post__btns {
    display: flex;

}

 </style>
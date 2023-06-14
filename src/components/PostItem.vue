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
    margin: 10px;
    border: 1px solid rgb(186, 215, 18);
    border-radius: 6px;
    justify-content: space-between;
    font-size: 16px;
}
.post__btns {
    display: flex;
    justify-content: space-between;
}

 </style>
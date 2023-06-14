import axios from 'axios';
import {onMounted, ref} from 'vue'

export function usePosts(limit) {
    const posts = ref([])
    const totalPages = ref(0)
    const isPostsLoading = ref(true)
    const page = ref(1) // number of page 

    const fetching = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
                params: {
                    _page: page, // page number
                    _limit: limit
                }
            })
            totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
            posts.value = response.data;

            console.log(posts.value)
        } catch (e) {
            console.log("Error fetching...");
        } finally {
            isPostsLoading.value = false;
        } 
    }
    onMounted(fetching)

    return {
        posts,
        isPostsLoading,
        totalPages
    }
}
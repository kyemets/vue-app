import axios from 'axios';

export const postModule = {
    state: () => ({
        _URL: 'https://jsonplaceholder.typicode.com/posts',
        likes: 0,
        dislikes: 0,
        posts: [],
        isPostsLoading: false,
        selectedSort: '',
        searchQuery: '',
        page: 1,
        limit: 10,
        totalPages: 0,
        sortOptions: [
          {value: 'title', name: 'By name'},
          {value: 'body', name: 'By description'}
        ]
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    }, 
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setLoading(state, bool) {
            state.isPostsLoading = bool;
        },
        setPage(state, page) {
            state.page = page;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
    },
    actions: {
        async fetchPosts({state, commit}) {
            try {
                commit('setLoading', true)
                const response = await axios.get(state._URL, {
                  params: {
                    _page: state.page,
                    _limit: state.limit
                  }
                })
                commit('setTotalPages',  Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', response.data);
            } catch (e) {
              console.log("Error fetching...", e);
            } finally {
                commit('setLoading', false)
            }
          },
        async loadMorePosts({state, commit}) {
            try {
                commit('isPostsLoading', true)
                commit('setPage', state.page + 1)
                const response = await axios.get(state._URL, {
                  params: {
                    _page: state.page,
                    _limit: state.limit
                  }
                })
                commit('totalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', [...state.posts, ...response.data])
            } catch (e) {
              console.log("Error fetching...", e);
            } finally {
                commit('isPostsLoading', false)
            }
        },
    },
    namespaced: true
}
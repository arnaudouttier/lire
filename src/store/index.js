import { createStore } from 'vuex'
import postsData from '@/assets/data/posts.json'

export default createStore({
  state: {
    posts: postsData.posts
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

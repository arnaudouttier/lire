import { createStore } from 'vuex'
import postsData from '@/assets/data/posts.json'

export default createStore({
  state: {
    posts: postsData.posts,
    toolerid: false
  },
  mutations: {
    tolerid (state) {
      state.toolerid = !state.toolerid
    }
  },
  actions: {
  },
  modules: {
  }
})

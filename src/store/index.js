import { createStore } from 'vuex'
import postsData from '@/assets/data/posts.json'

export default createStore({
  state: {
    posts: postsData.posts,
    toolerid: false,
    sidebarActive: false
  },
  mutations: {
    tolerid (state) {
      state.toolerid = !state.toolerid
    },
    sidebarActive (state) {
      state.sidebarActive = !state.sidebarActive
    }
  },
  actions: {
  },
  modules: {
  }
})

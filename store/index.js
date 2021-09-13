import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    memos: [
      {
        id: 1,
        title: '牛乳を買う'
      },
      {
        id: 2,
        title: 'Vue.jsの本を買う'
      }
    ],
    nextMemoId: 3,
  },

  mutations: {
    addMemo (state, { title }) {
      state.memos.push({
        id: state.nextMemoId,
        title
      })
      state.nextMemoId++
    },
  },

  actions: {
    save ({ state }) {
      const data = {
        memos: state.memos,
        nextMemoId: state.nextMemoId
      }
      localStorage.setItem('memo-app-data', JSON.stringify(data))
    }
  }
})

export default store

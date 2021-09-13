import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    memos: [
      {
        id: 1,
        title: 'サンプル１'
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
      state.nextMemoId++,
      state.save
    },
  },

  actions: {
    save ({ state }) {
      const data = {
        memos: state.memos,
        nextMemoId: state.nextMemoId
      }
      localStorage.setItem('memo-app-data', JSON.stringify(data))
    },
    load({ state }) {
      if (localStorage.getItem('memo-app-data')) {
        const store = JSON.parse(localStorage.getItem('memo-app-data'))
        this.replaceState(Object.assign(state, store))
      }
    }
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('memo-app-data', JSON.stringify(state))
})

export default store

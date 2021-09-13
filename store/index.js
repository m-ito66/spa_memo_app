import Vue from 'vue'
import Vuex from 'vuex'
import router from '../src/router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    memos: [
      {
        id: 1,
        content: 'サンプル'
      },
    ],
    nextMemoId: 3,
  },

  getters: {
    getMemoById (state) {
      return function (id) {
        return state.memos.find(element => element.id === id)
      }
    },
  },

  mutations: {
    addMemo (state, { memo }) {
      state.memos.push({
        id: state.nextMemoId,
        content: memo,
      })
      state.nextMemoId++,
      state.save,
      router.push('./')
    },
    updateMemo (state, { memo, memoId }) {
      const target = state.memos.find(element => element.id === memoId)
      target.content = memo
      state.save,
      router.push('./')
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

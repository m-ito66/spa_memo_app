import Vue from 'vue'
import Vuex from 'vuex'
import router from '../src/router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    memos: [],
    nextMemoId: 1,
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
      state.nextMemoId++
      store.dispatch('save')
      router.push('./')
    },
    updateMemo (state, { memo, memoId }) {
      const target = state.memos.find(element => element.id === memoId)
      target.content = memo
      store.dispatch('save')
      router.push('./')
    },
    deleteMemo (state, { memoId }) {
      const key = state.memos.findIndex(element => element.id === memoId)
      state.memos.splice(key,1)
      store.dispatch('save')
      router.push('./')
    }
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
        router.push('./')
      }
    }
  }
})

export default store

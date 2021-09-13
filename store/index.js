import Vue from 'vue'
import Vuex from 'vuex'
import router from '../src/router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    memos: [
      {
        id: 1,
        title: 'サンプル１',
        content: 'サンプル１の内容'
      },
    ],
    nextMemoId: 3,
  },

  mutations: {
    addMemo (state, { memo }) {
      let memoAry = memo.split('\n')
      state.memos.push({
        id: state.nextMemoId,
        title: memoAry.shift(),
        content: memoAry.join('\n')
      })
      state.nextMemoId++,
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

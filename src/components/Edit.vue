<template>
  <div>
    <textarea type='text' v-model='memo'></textarea>
    <button @click='updateMemo'>更新</button>
    <button @click='deleteMemo'>削除</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        Memo: ''
      }
    },
    computed: {
      memos () {
        return this.$store.state.memos
      },
      memo: {
        get() {
          return this.$store.getters.getMemoById(this.$route.params.id).content
        },
        set(val) {
          return this.Memo = val
        }
      }
    },

    methods: {
      updateMemo () {
        this.$store.commit('updateMemo', {
          memo: this.Memo,
          memoId: this.$route.params.id
        })
        this.Memo = ''
      },

      deleteMemo () {
        this.$store.commit('deleteMemo', {
          memoId: this.$route.params.id
        })
      },

      save () {
        this.$store.dispatch('save')
      }
    }
  }
</script>

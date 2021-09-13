<template>
  <div>
    <textarea type='text' v-model='Memo' placeholder='新しいメモ'></textarea>
    <button @click='updateMemo'>更新</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        Memo: '',
      }
    },
    computed: {
      memos () {
        return this.$store.state.memos
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

      save () {
        this.$store.dispatch('save')
      }
    }
  }
</script>
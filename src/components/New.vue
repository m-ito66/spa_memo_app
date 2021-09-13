<template>
  <div>
    <textarea type='text' v-model='newMemo' placeholder='新しいメモ'></textarea>
    <button @click='addMemo'>登録</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        newMemo: '',
      }
    },
    computed: {
      memos () {
        return this.$store.state.memos
      }
    },

    methods: {
      addMemo () {
        this.$store.commit('addMemo', {
          memo: this.newMemo,
        })
        this.newMemo = ''
      },

      save () {
        this.$store.dispatch('save')
      }
    }
  }
</script>

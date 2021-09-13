<template>
  <div>
    <textarea type='text' v-model='newMemoTitle' placeholder='新しいメモ'></textarea>
    <button @click='addMemo'>登録</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        newMemoTitle: '',
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
          title: this.newMemoTitle,
        })
        this.newMemoTitle = ''
      },

      save () {
        this.$store.dispatch('save')
      }
    }
  }
</script>


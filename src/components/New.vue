<template>
  <div>
    <form v-on:submit.prevent='addMemo'>
      <input type='text' v-model='newMemoTitle' placeholder='新しいメモ'>
    </form>
    <button type='button' v-on:click='save'>保存</button>
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


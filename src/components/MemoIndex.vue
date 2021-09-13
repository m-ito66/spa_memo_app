<template>
  <div>
    <ul>
      <li v-for='memo in memos' v-bind:key='memo.id'>
        {{ memo.title }}
      </li>
      <li><router-link to="/new">＋新規作成</router-link></li>
    </ul>
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
    }
  }
</script>

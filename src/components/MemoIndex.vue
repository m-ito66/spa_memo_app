<template>
  <div>
    <ul>
      <li v-for='memo in memos' v-bind:key='memo.id'>
        {{ memo.title }}
      </li>
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

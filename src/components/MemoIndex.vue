<template>
  <div>
    <ul>
      <li v-for='memo in memos' v-bind:key='memo.id'>
        <router-link :to="{ name: 'memo', params: { id: memo.id }}">{{ title(memo) }}</router-link>
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
    },
    methods: {
      title (memo) {
        console.log(memo)
        console.log(memo.content)
        return memo.content.split('\n')[0]
      }
    }
  }
</script>

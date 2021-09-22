<template>
  <div>
    <textarea type='text' v-model='targetMemo.content'></textarea>
    <button @click='updateMemo'>
      更新
    </button>
    <button @click='deleteMemo'>
      削除
    </button>
  </div>
</template>

<script>
  export default {
    props: ['targetMemo'],
    data () {
      return {
        Memo: ''
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
          memo: this.targetMemo.content,
          memoId: this.$route.params.id
        })
      },
      deleteMemo () {
        this.$store.commit('deleteMemo', {
          memoId: this.$route.params.id
        })
      },
    }
  }
</script>

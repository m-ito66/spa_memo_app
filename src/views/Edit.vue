<template>
  <div>
    <header>
      <Header/>
    </header>
    <div class='index'>
      <Index/>
    </div>
    <div class='form'>
      <Edit :targetMemo='memo'/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Index from '@/components/Index.vue'
import Edit from '@/components/Edit.vue'

export default {
  name: 'edit',
  components: {
    'Header' :Header,
    'Index' :Index,
    'Edit' :Edit
  },
  created() {
    this.getMemo()
  },
  watch: {
    $route: 'getMemo'
  },
    computed: {
    memo() {
      return this.getMemo()
    }
  },
  methods: {
    getMemo() {
      return this.$store.getters.getMemoById(this.$route.params.id)
    }
  }
}
</script>

<style>
  .edit {
    position: fixed;
    top: 120px;
    left: 35%;
  }
</style>

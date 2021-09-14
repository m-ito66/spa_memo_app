<template>
  <div>
    <header>
      <Header/>
    </header>
    <div class='index'>
      <MemoIndex/>
    </div>
    <div class='form'>
      <Edit/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import MemoIndex from '@/components/MemoIndex.vue'
import Edit from '@/components/Edit.vue'

export default {
  name: 'edit',
  components: {
    'Header' :Header,
    'MemoIndex' :MemoIndex,
    'Edit' :Edit
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

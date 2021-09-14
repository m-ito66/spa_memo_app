<template>
  <div>
    <header>
      <Header/>
    </header>
    <div class='index'>
      <Index/>
    </div>
    <div class='form'>
      <Edit/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Index from '@/components/Index.vue'
import Edit from '@/components/Edit.vue'

export default {
  name: 'edit',
  components: {
    'Header' :Header,
    'Index' :Index,
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

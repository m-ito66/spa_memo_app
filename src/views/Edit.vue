<template>
  <div class="edit">
    <Header/>
    <Edit/>
    <MemoIndex/>
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
<template>
  <div>
    <Header/>
    <div class='list-memos'>
      <ListMemos/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ListMemos from '@/components/ListMemos.vue'

export default {
  name: 'Home',
  components: {
    Header,
    ListMemos
  }
}
</script>

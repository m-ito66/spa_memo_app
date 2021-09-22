<template>
  <div>
    <Header/>
    <div class='contents'>
      <div class='list-memos'>
        <ListMemos/>
      </div>
      <div class='form'>
        <New/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ListMemos from '@/components/ListMemos.vue'
import New from '@/components/New.vue'

export default {
  name: 'new',
  components: {
    Header,
    ListMemos,
    New
  }
}
</script>

<template>
  <div class="edit">
    <Header/>
    <New/>
    <MemoIndex/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import MemoIndex from '@/components/MemoIndex.vue'
import New from '@/components/New.vue'

export default {
  name: 'new',
  components: {
    'Header' :Header,
    'MemoIndex' :MemoIndex,
    'New' :New
  }
}
</script>
<template>
  <div>
    <header>
      <Header/>
    </header>
    <div class='contents'>
      <div class='index'>
        <MemoIndex/>
      </div>
      <div class='form'>
        <New/>
      </div>
    </div>
  </div>
</template>

<script>
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

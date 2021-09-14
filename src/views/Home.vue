<template>
  <div>
    <header>
      <Header/>
    </header>
    <div class='index'>
      <MemoIndex/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import MemoIndex from '@/components/MemoIndex.vue'

export default {
  name: 'Home',
  components: {
    'Header' :Header,
    'MemoIndex' :MemoIndex
  }
}
</script>

<style>
  
</style>

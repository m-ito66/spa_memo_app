<template>
  <div>
    <header>
      <Header/>
    </header>
    <div class='index'>
      <Index/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Index from '@/components/Index.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Index
  }
}
</script>

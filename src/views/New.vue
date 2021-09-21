<template>
  <div>
    <header>
      <Header/>
    </header>
    <div class='contents'>
      <div class='index'>
        <Index/>
      </div>
      <div class='form'>
        <New/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Index from '@/components/Index.vue'
import New from '@/components/New.vue'

export default {
  name: 'new',
  components: {
    Header,
    Index,
    New
  }
}
</script>

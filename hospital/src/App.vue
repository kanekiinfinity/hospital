<template>
  <div class="bg-[#f5f7fa] flex max-w-[1440px] w-full ml-auto mr-auto">
    <Aside></Aside>
    <Header></Header>
    
  </div>
</template>

<script>
import Aside from './components/Aside.vue'
import Header from './components/Header.vue'
export default {
 components: {
    Aside,
    Header
 } 
}
</script>

<style lang="scss" scoped></style>
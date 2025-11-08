<template>
  <div>
    <Aside></Aside>
    <Header/>
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
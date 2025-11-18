<template>
  <div class="bg-[#f5f7fa] flex w-full ml-auto mr-auto">
    <Aside></Aside>
    <div class="w-full pl-9 pr-9">
      <Header></Header>
      <DoctorsPage/>
    </div>
    
  </div>
</template>

<script>
import Aside from './components/Aside.vue'
import Header from './components/Header.vue'
import DoctorsPage from './views/DoctorsPage.vue';
export default {
 components: {
    Aside,
    Header,
    DoctorsPage
 } 
}
</script>

<style lang="scss" scoped></style>
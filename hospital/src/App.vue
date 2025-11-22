<template>

  <div class="bg-[#F6F8FB] flex">
    <Aside></Aside>
    <div class="w-full">
      <Header></Header>
      <Spec></Spec>
      <Doctors></Doctors>
      <!-- <Login></Login> -->
      
    </div>
  </div>
</template>

<script>
import Aside from './components/Aside.vue'
import Header from './components/Header.vue';
import Spec from './views/Spec.vue'
import Doctors from './components/Doctor.vue';
import Login from './views/Login.vue';
export default {
  components: {
    Aside,
    Spec,
    Header,
    Doctors,
    Login
  }
}
</script>

<style lang="scss" scoped></style>
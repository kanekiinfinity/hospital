<template>

  <div class="bg-[#F6F8FB] flex">
    <Aside></Aside>
    <div class="w-full">
      <Header></Header>
      <Spec></Spec>
    </div>
  </div>
</template>

<script>
import Aside from './components/Aside.vue'
import Header from './components/Header.vue';
import Spec from './views/Spec.vue'
export default {
  components: {
    Aside,
    Spec,
    Header
  }
}
</script>

<style lang="scss" scoped></style>
<template>
  <div class="bg-[#E8E8E8] flex">
    <Aside></Aside>
    <Spec></Spec>
  </div>
</template>

<script>
import Aside from './components/Aside.vue'
import Spec from './views/Spec.vue'
export default {
 components: {
    Aside, 
    Spec
 } 
}
</script>

<style lang="scss" scoped></style>
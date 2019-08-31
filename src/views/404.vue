<template><div>

  <Nav />

  <main id="content">
    <img src="" alt="404 image">
    <h1><span>404</span> NOT FOUND</h1>
  </main>

</div></template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';

@Component({
  components: {
    Nav,
  },
})
export default class Page404 extends Vue {}
</script>


<style scoped lang="scss">
@import "@/scss/common.scss";
#content{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1{
    letter-spacing: .05em;
    opacity: .8;
    span{
      padding-right: 16px;
      margin-right: 16px;
      border-right: 1px solid $COLOR_MAIN;
    }
  }
}
</style>

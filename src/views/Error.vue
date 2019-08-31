<template><div>

  <Nav />

  <main id="content">
    <h1>エラーが発生しました</h1>
    <ErrorArt />
    <p class="en">404 PAGE NOT FOUND</p>
  </main>

</div></template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';
import ErrorArt from '@/assets/error.vue';

@Component({
  components: {
    Nav,
    ErrorArt,
  },
})
export default class Error extends Vue {}
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
    font-size: 28px;
    letter-spacing: .05em;
  }
  svg{
    margin-top: 24px;
    width: 320px;
    height: 240px;
  }
  p{
    margin-top: 32px;
    font-weight: bold;
    opacity: .5;
  }
}
</style>

<template><div>

  <Nav />

  <main id="content">

    <h1 class="headline">Other</h1>

    <ul class="list-view">
      <li><a href="">あそびかた</a></li>
      <li><a href="">利用規約</a></li>
      <li><router-link to='/term' append>ご連絡</router-link></li>
    </ul>
    <button @click="$store.commit('logout')">LOGOUT</button>

    <router-view class="PageView" />

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
export default class Other extends Vue {
}
</script>


<style scoped lang="scss">
@import "@/scss/common.scss";
button{
  color: $COLOR_MAIN;
}
.PageView{
  background: #fff;
}
</style>

<template><div>

  <Nav />

  <main id="content">

    <h1 class="headline">Other</h1>

    <ul class="list-view">
      <li><router-link to='/term'>利用規約</router-link></li>
      <li><router-link to='/help'>あそびかた</router-link></li>
    </ul>
    <button v-if="$store.state.login" @click="$store.commit('logout')">LOGOUT</button>
    <router-link v-else to="/login">LOGIN</router-link>

    <h2>iAiAをシェア</h2>
    <ul>
      <li><a href="">Twitter</a></li>
      <li><a href="">Facebook</a></li>
      <li><a href="">LINE</a></li>
      <li><a href="">はてブ</a></li>
    </ul>

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
export default class Other extends Vue {}
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

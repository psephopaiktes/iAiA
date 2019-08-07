<template><div>

  <Nav />

  <main id="content">

    <h1 class="headline">Other</h1>

    <ul class="list-view">
      <!-- <li><router-link to='/term' append>利用規約</router-link></li> -->
    </ul>
    <button v-if="user" @click="$store.commit('logout')">LOGOUT</button>
    <router-link v-else to="/login">LOGIN</router-link>

    <!-- <router-view class="PageView" /> -->

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
  // data
  private user: string = localStorage.user;
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

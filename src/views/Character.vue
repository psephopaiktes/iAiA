<template><div>

  <Nav />

  <main id="content">

    <h1 class="headline">Charcter Sheet</h1>
    <LoginMessage v-if="!user" />
    <div v-else>
      <p>ここにキャラクターがならびます</p>
    </div>

  </main>

</div></template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';
import LoginMessage from '@/components/LoginMessage.vue';

@Component({
  components: {
    Nav,
    LoginMessage,
  },
})
export default class Character extends Vue {
  // data
  private user: string = localStorage.user;
}
</script>


<style scoped lang="scss">
@import "@/scss/common.scss";
</style>

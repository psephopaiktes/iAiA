<template>
  <div>
    <Nav />

    <main id="content">
      <LoginMessage v-if="!$store.state.login" />
      <div v-else>
        <router-link to="/character">←</router-link>
        <h1 class="headline">{{ CharData.name }}</h1>
        <img :src="CharData.iconUrl" alt="キャラクターアイコン" />
        <p>{{ $route.params.charId }}</p>
        <p>{{ CharData.idDead }}</p>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/Nav.vue";
import LoginMessage from "@/components/LoginMessage.vue";

@Component({
  components: {
    Nav,
    LoginMessage
  }
})
export default class Character extends Vue {
  // data
  // TODO Fetch from Firebase by charId
  // CharId = this.$route.params.charId
  public CharData: any = {
    name: "AAA",
    iconUrl: "aaa",
    modifiedDate: "20190802",
    isDead: "aaa"
  };
}
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";
</style>

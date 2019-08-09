<template><div>

  <Nav />

  <main id="content">

    <h1 class="headline">Charcter Sheet</h1>
    <LoginMessage v-if="!$store.state.login" />
    <div v-else>
      <ul>
        <li v-for="(item,i) in CharList" :key="i">
          <router-link :to="'/character/'+item.id">{{ item.name }}</router-link>
        </li>
      </ul>
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
  // TODO Fetch from Firebase by UserId
  public CharList: any = [
    {
      id: 'aaa',
      name: 'aaa',
      iconUrl: '',
      modifiedDate: '',
      isDead: '',
    },
    {
      id: 'bbb',
      name: 'bbb',
      iconUrl: '',
      modifiedDate: '',
      isDead: '',
    },
  ];
}
</script>


<style scoped lang="scss">
@import "@/scss/common.scss";
</style>

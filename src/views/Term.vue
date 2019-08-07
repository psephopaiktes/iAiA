<template><div>

  <PageView>
    <p>aaaa</p>
  </PageView>

</div></template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageView from '@/components/PageView.vue';

@Component({
  components: {
    PageView,
  },
})
export default class Other extends Vue {
}
</script>


<style scoped lang="scss">
@import "@/scss/common.scss";
</style>

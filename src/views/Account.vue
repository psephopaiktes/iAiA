<template><PageView>
    <template #title>アカウント設定</template>

    <p>アカウント名を変更できます。</p>

</PageView></template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageView from '@/components/PageView.vue';

@Component({
  components: {
    PageView,
  },
})
export default class Account extends Vue {
}
</script>


<style scoped lang="scss">
@import "@/scss/common.scss";
</style>

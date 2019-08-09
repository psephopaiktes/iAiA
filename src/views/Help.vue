<template><PageView>
    <template #title>あそびかた</template>
    <p>本サービスはクトゥルフ神話TRPGのセッションをサポートするアプリです。クトゥルフ神話TRPGを知っていることを前提にしており、キーパーができる方が1人いることをオススメします。</p>

    <h3>おすすめの遊び方</h3>
    <!-- TODO: ここはタブにする -->
    <h4>オフラインの場合</h4>
    1. キーパーはストーリーを用意します。適宜BGMを流したりすることもおすすめです。
    2. プレイヤーはキーパの推奨技能や制限に従って、キャラクターページから新規キャラクターを作ります。
    3. キーパーはストーリーを開始します。
    4. ダイスを降る場面では、「ダイス」ページから
    5. キャラクターのステータスが変わった際には、ステータス
    6. クリア後報酬がある場合はキャラクターのステータスを変更しておきます。

    <h4>オフラインの場合</h4>
    1. ボイスチャットツールを使用します。スカイプやディスコなら以下のことができるのでオススメです
    1. BGMを流しす
    2. マップやモンスターの画像を共有する
    3. テキストチャットでメモなどを共有する

</PageView></template>


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

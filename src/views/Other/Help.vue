<template lang="pug">
main#l-content

  header.c-pageHeader
    button.c-pageHeader__back(@click="$router.go(-1)")
      <img svg-inline src="@/assets/icon/arrow_back.svg" />
    h1 あそびかた
    <img class="c-pageHeader__logo" svg-inline src="@/assets/logo-short.svg" />

  article.c-article
    p 本サービスはクトゥルフ神話TRPGのセッションをサポートするアプリです。クトゥルフ神話TRPGを知っていることを前提にしており、キーパーができる方が1人いることをオススメします。
    h2 基本機能
    p <b>iAiA</b>は以下の4つの基本画面から構成されています。
    h3 ダイス
    p セッションで使用するダイスを振ることができます。よく使うテンプレートから使用することも、自由にカスタマイズしたダイスを振ることもできます。
    h3 キャラクターシート
    p キャラクターを作成し、管理することができます。サンプルキャラが用意されており、コピーしてすぐに使うことも可能です。
    h3 ルーム
    p 現在開発中の機能です。複数アカウントを紐付けてオンラインで管理するための機能になる予定です。
    h3 その他
    p メニューやその他のページをまとめた画面です。
    //- <h2>おすすめの遊び方</h2>
    //- TODO: ここはタブにする
    //- h4 オフラインの場合
    //- ol
    //-   li キーパーはストーリーを用意します。適宜BGMを流したりすることもおすすめです。
    //-   li プレイヤーはキーパの推奨技能や制限に従って、キャラクターページから新規キャラクターを作ります。
    //-   li キーパーはストーリーを開始します。
    //-   li ダイスを降る場面では、「ダイス」ページから
    //-   li キャラクターのステータスが変わった際には、ステータス
    //-   li クリア後報酬がある場合はキャラクターのステータスを変更しておきます。
    //- h4 オフラインの場合
    //- ol
    //-   li ボイスチャットツールを使用します。スカイプやディスコなら以下のことができるのでオススメです
    //-   li BGMを流しす
    //-   li マップやモンスターの画像を共有する
    //-   li テキストチャットでメモなどを共有する

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Help extends Vue {}
</script>

<style scoped lang="scss"></style>

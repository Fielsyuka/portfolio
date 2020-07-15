<template>
  <div>
    <div class="l-main__section l-wrap">
      <page-heading page-name="Wordpress" class="shadow-wordpress"></page-heading>
      <p class="works-subtitle">[ Works ]</p>
      <p class="works-overview">既存テーマのカスタマイズ、オリジナルテーマの開発、プラグインによる様々な機能の実装が可能です。</p>
      <h3 class="works-heading01">過去の実績</h3>
      <works-item>
        <template v-slot:name>不動産会社コーポレートサイト</template>
        <template v-slot:time-1>2018.09</template>
        <template v-slot:time-2>約14日間</template>
        <template v-slot:texts>トップページ＋下層固定ページ（5P）＋物件用のカスタム投稿テンプレート（2P）を作成。また、プラグイン”Really Simple CSV Importer”を使用し、CSVファイルをインポートするだけで大量の物件情報を投稿・管理できる機能を実装しました。</template>
      </works-item>
      <works-item>
        <template v-slot:name>医療系人材派遣リクルートサイト</template>
        <template v-slot:time-1>2019.02</template>
        <template v-slot:time-2>約21日間</template>
        <template v-slot:texts>新卒・既卒それぞれのトップページ＋下層固定ページ（2P）＋カスタム投稿テンプレートを作成しました。社員インタビューページ用のカスタム投稿では”Advanced Custom Fields”を使用し、解説や入力例などを表示させることでデザインが崩れないように工夫しました。</template>
      </works-item>
      <works-item>
        <template v-slot:name>保育園ホームページ</template>
        <template v-slot:time-1>2018.12</template>
        <template v-slot:time-2>約10日間</template>
        <template v-slot:texts>テキスト準備中</template>
      </works-item>
    </div>
    <div class="l-main__footer l-wrap">
      <span class="c-animation-line-right"></span>
      <pagination :prev="prev" :next="next"></pagination>
    </div>
  </div>
</template>
<script>
import PageHeading from '@/components/PageHeading.vue'
import WorksItem from '@/components/WorksItem.vue'
import Pagination from '@/components/Pagination.vue'

export default {

  name: 'Wordpress',
  components: {
    PageHeading,
    WorksItem,
    Pagination,
  },
  data() {
    return {
      prev: {
        name: "HTML & CSS",
        link: "/works/html-and-css"
      },
      next: {
        name: "Javasctipt",
        link: "/works/javascript"
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
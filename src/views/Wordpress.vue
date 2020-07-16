<template>
  <div>
    <div class="l-main__section l-wrap">
      <page-heading page-name="Wordpress" class="shadow-wordpress"></page-heading>
      <p class="page-subtitle">[ Works ]</p>
      <p class="page-overview">既存テーマのカスタマイズ、オリジナルテーマの開発、プラグインによる様々な機能の実装が可能です。</p>
      <h3 class="page-heading01">主な制作実績</h3>
      <works-item>
        <template v-slot:name>広告代理店コーポレートサイト</template>
        <template v-slot:time-1>2018.07~09</template>
        <template v-slot:time-2>約40日間</template>
        <template v-slot:texts>固定ページ（5P）とカスタム投稿テンプレート（1P）を担当しました。ループによる投稿コンテンツの表示やカスタムフィールドの作成の他、フィルターフックを利用した管理画面のカスタマイズ等を行いました。事例紹介用のカスタム投稿では、アップロードした画像や動画、Youtubeの動画をまとめて表示できるスライダーを実装しました。スクロールアニメーションにはAOS.jsを、スライダーにはSlick.jsを使用。GooglemapではAPIを利用してロゴ表示のカスタマイズを行いました。</template>
      </works-item>
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
        <template v-slot:texts>新卒・既卒それぞれのトップページ＋下層固定ページ（2P）＋カスタム投稿テンプレートを作成。社員インタビューページ用のカスタム投稿では”Advanced Custom Fields”を使用し、解説や入力例などを表示することでデザインが崩れないように工夫しました。トップページにはScroll MagicとTweenMaxを使用し、スクロールアニメーションを実装しました。</template>
      </works-item>
      <works-item>
        <template v-slot:name>保育園ホームページ</template>
        <template v-slot:time-1>2018.12</template>
        <template v-slot:time-2>約14日間</template>
        <template v-slot:texts>トップページ＋下層固定ページ（9P）＋カスタム投稿テンプレート（3P）を作成。クライアント様が全てのページを容易に更新できるよう、エディター用のCSSを念入りに定義し、迷いのない投稿画面を心がけました。また、保護者が閲覧する「お知らせ」ページにはBasic認証で閲覧制限をかけました。</template>
      </works-item>
    </div>
    <div class="l-main__footer l-wrap">
      <page-footer>
        <pagination :prev="prev" :next="next"></pagination>
      </page-footer>      
    </div>
  </div>
</template>
<script>
import PageHeading from '@/components/PageHeading.vue'
import PageFooter from '@/components/PageFooter.vue'
import WorksItem from '@/components/WorksItem.vue'
import Pagination from '@/components/Pagination.vue'

export default {

  name: 'Wordpress',
  components: {
    PageHeading,
    PageFooter,
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
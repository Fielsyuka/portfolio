<template>
  <div>
    <div class="l-main__header">
      <page-nav></page-nav>
    </div>
    <div class="l-main__section l-wrap">
      <page-heading page-name="HTML & CSS" class="shadow-html"></page-heading>
      <p class="page-subtitle">[ Works ]</p>
      <p class="page-overview">SEO対策を意識した正確なマークアップとデザインの忠実性、保守・管理しやすいCSS（SCSS）設計を心掛けています。また、各ブラウザの動作確認を念入りに行い、見た目も中身も崩れないコーディングファイルを納品します。</p>
      <h3 class="page-heading01">主な制作実績</h3>
      <works-item>
        <template v-slot:name>東京都主催イベントキャンペーンLP</template>
        <template v-slot:time-1>2019.01</template>
        <template v-slot:time-2>約7日間</template>
        <template v-slot:texts>タイトスケジュールに対応するため、多量の店舗情報の原稿をExcelで編集・HTML用に一括形成することでコーディング時間を短縮しました。また、100%デザイン通りのコーディングを求められたので、デザインデータのスクリーンショットを画面上で透かして見比べながら、1pxもズレがないようにCSSを書きました。</template>
      </works-item>
      <works-item>
        <template v-slot:name>医薬品プロダクトサイト</template>
        <template v-slot:time-1>2019.05</template>
        <template v-slot:time-2>約2日間</template>
        <template v-slot:texts>CSS設計を考えるきっかけとなった実績の一つです。4Pの小規模なプロダクトサイトですが、ユーティリティ・基本レイアウト・共通部品のクラスを整理してからコーディングすることで、見やすく拡張性のあるコードを心掛けました。納品後には「スピーディーで綺麗なコーディングでした」と高評価をいただきました。</template>
      </works-item>
      <works-item>
        <template v-slot:name>M&Aサービス企業コーポレートサイト</template>
        <template v-slot:time-1>2019.06</template>
        <template v-slot:time-2>約20日間</template>
        <template v-slot:texts>Wordpress構築前の静的コーディング（11P）を担当しました。担当デザイナーと協議の結果、FLOCSSをベースにしたCSS設計をすることに決まり、ボタンやリスト等のコンポーネントごとに細かくSassファイルを分けることで、デザイナーが管理しやすいコーディングファイルを作りました。メニュー類はWordpressデフォルトのテンプレートタグが使えるようにマークアップし、メニューが増減しても崩れないCSSを記述しました。スタイリッシュなデザインに合うCSSアニメーションを取り入れ、ワンランク上のコーポレートサイトに仕上がりました。</template>
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
import PageNav from '@/components/PageNav.vue'
import PageHeading from '@/components/PageHeading.vue'
import PageFooter from '@/components/PageFooter.vue'
import WorksItem from '@/components/WorksItem.vue'
import Pagination from '@/components/Pagination.vue'

export default {

  name: 'HtmlAndCss',
  components: {
    PageNav,
    PageHeading,
    PageFooter,
    WorksItem,
    Pagination,
  },
  data() {
    return {
      prev: {
        name: 'React',
        link: '/works/react'
      },
      next: {
        name: 'Wordpress',
        link: '/works/wordpress'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
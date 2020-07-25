export default {
  skills: [
    {
      name: 'HTML & CSS',
      shadowClass: 'shadow-html',
      svgClass: 'is-html',
      slug: 'html-and-css',
      id: 1,
      overview: 'SEO対策を意識した正確なマークアップとデザインの忠実性、保守・管理しやすいCSS（SCSS）設計を心掛けています。また、各ブラウザの動作確認を念入りに行い、見た目も中身も崩れないコーディングファイルを納品します。',
      experiences: [
        {
          name: '美容事業コーポレートサイト',
          date: '2018.06',
          time: '約7日間',
          description: '縦長1ページのコーポレートサイトです。お問い合わせフォームはWordpressのContact Form 7で実装し、その他は静的コーディングです。'
          url: 'http://prosperity-tokyo.co.jp/'
        },
        {
          name: '東京都主催イベントキャンペーンサイト',
          date: '2019.01',
          time: '約7日間',
          description: 'タイトスケジュールに対応するため、多量の店舗情報の原稿をExcelで編集・HTML用に一括形成することでコーディング時間を短縮しました。また、100%デザイン通りのコーディングを求められたので、デザインデータのスクリーンショットを画面上で透かして見比べながら、1pxもズレがないようにCSSを書きました。',
          url: 'https://demotest.fiels-web.com/stamp/'
        },
        {
          name: '製薬会社WEBメディア',
          date: '2019.05',
          time: '約10日間',
          description: 'トップページ＋下層12ページのレスポンシブコーディングを担当しました。',
          url: 'https://www.kyowakirin.co.jp/aa/index.html'
        },
        {
          name: '医薬品プロダクトサイト',
          date: '2019.05',
          time: '約2日間',
          description: 'CSS設計を考えるきっかけとなった実績の一つです。4Pの小規模なプロダクトサイトですが、ユーティリティ・基本レイアウト・共通部品のクラスを整理してからコーディングすることで、見やすく拡張性のあるコードを心掛けました。納品後には「スピーディーで綺麗なコーディングでした」と高評価をいただきました。',
          URL: 'http://www.kissei-gallery.com/gr/od/'
        },
        {
          name: 'M&Aサービス企業コーポレートサイト',
          date: '2019.06',
          time: '約20日間',
          description: 'Wordpress構築前の静的コーディング（11P）を担当しました。担当デザイナーと協議の結果、FLOCSSをベースにしたCSS設計をすることに決まり、ボタンやリスト等のコンポーネントごとに細かくSassファイルを分けることで、デザイナーが管理しやすいコーディングファイルを作りました。メニュー類はWordpressデフォルトのテンプレートタグが使えるようにマークアップし、メニューが増減しても崩れないCSSを記述しました。スタイリッシュなデザインに合うCSSアニメーションを取り入れ、ワンランク上のコーポレートサイトに仕上がりました。',
          url: 'https://standbyc.com/'
        },
        {
          name: '医薬品製品紹介',
          date: '2019.07',
          time: '約45日間',
          description: '規定のCSSテンプレートを組み合わせる形でのコーディング案件です。図表を除くテキスト部分のみ担当しました。ページ数、文章量がとても多いのでミスが無いよう慎重に作業し、念入りに確認を行いました。',
          url: 'https://medical.kyowakirin.co.jp/hematonco/romiplate/'
        }
      ]
    },
    {
      name: 'Wordpress',
      shadowClass: 'shadow-wp',
      svgClass: 'is-wp',
      slug: 'wordpress',
      id: 2,
      overview: '既存テーマのカスタマイズ、オリジナルテーマの開発、プラグインによる様々な機能の実装が可能です。',
      experiences: [
        {
          name: '行政書士事務所ホームページ',
          date: '2017.09~10',
          time: '約60日間',
          description: '',
          url: 'http://www.gg441.tokyo/'
        },
        {
          name: '広告代理店コーポレートサイト',
          date: '2018.07~09',
          time: '約40日間',
          description: '固定ページ（5P）とカスタム投稿テンプレート（1P）を担当しました。ループによる投稿コンテンツの表示やカスタムフィールドの作成の他、フィルターフックを利用した管理画面のカスタマイズ等を行いました。事例紹介用のカスタム投稿では、アップロードした画像や動画、Youtubeの動画をまとめて表示できるスライダーを実装しました。スクロールアニメーションにはAOS.jsを、スライダーにはSlick.jsを使用。GooglemapではAPIを利用してロゴ表示のカスタマイズを行いました。'
        },
        {
          name: '不動産会社コーポレートサイト',
          date: '2018.09',
          time: '約14日間',
          description: 'トップページ＋下層固定ページ（5P）＋物件用のカスタム投稿テンプレート（2P）を作成。また、プラグイン”Really Simple CSV Importer”を使用し、CSVファイルをインポートするだけで大量の物件情報を投稿・管理できる機能を実装しました。',
          url: 'http://www.atbuil.co.jp/'
        },
        {
          name: '医療系人材派遣リクルートサイト',
          date: '2019.02',
          time: '約21日間',
          description: '新卒・既卒それぞれのトップページ＋下層固定ページ（2P）＋カスタム投稿テンプレートを作成。社員インタビューページ用のカスタム投稿では”Advanced Custom Fields”を使用し、解説や入力例などを表示することでデザインが崩れないように工夫しました。トップページにはScroll MagicとTweenMaxを使用し、スクロールアニメーションを実装しました。',
          url: 'https://www.m-care.co.jp/recruit/mid-carrer/'
        }
      ]
    },
    {
      name: 'Javascript',
      shadowClass: 'shadow-js',
      svgClass: 'is-js',
      slug: 'javascript',
      id: 3,
      overview: 'WEB制作の実務では主にjQueryやライブラリを使用しますが、Javascriptの理解を深めるために業務外でWEBアプリを制作してアウトプットをしています。',
      experiences: [
        {
          name: 'Bugety[家計簿WEBアプリ]',
          date: '2018.09',
          time: '約30日間',
          description: 'Udemyで解説を見ながら制作したものです。Javascriptの基礎知識に加えて、DRYの意識と、UIとモデルを分けて設計・記述することを学びました。',
          image: 'bugety.png',
          source: 'https://github.com/Fielsyuka/Bugety'
        },
        {
          name: 'サイト内検索',
          date: '2020.04',
          time: '約3日間',
          description: '医療従事者向け書籍をWEBページ化するコーディングのお仕事の中で実装したものを改めて見直し、機能を追加したものです。',
          image: 'search-js.png',
          source: 'https://github.com/Fielsyuka/Bugety'
        }
      ]
    },
    {
      name: 'Vue.js',
      shadowClass: 'shadow-vue',
      svgClass: 'is-vue',
      slug: 'vue',
      id: 4,
      overview: '2020年6月から学び始めました。実務経験はありませんが、練習で制作したものを掲載します。',
      experiences: [
        {
          name: 'ショッピングリスト[WEBアプリ]',
          date: '2020.06',
          time: '約10日間',
          description: 'Vue.jsを学び始めて制作したTodoリストアプリです。家族で共有するために、Firebase Authenticationを使用してユーザー認証機能を実装し、データベースにはFirestoreを使用しました。',
          image: 'shopping-list.png',
          source: 'https://github.com/Fielsyuka/shopping-list'
        },
        {
          name: '当サイト Portfolio',
          date: '2020.07',
          time: '制作中',
          description: 'コンポーネントとルーターの練習で制作しました。スキルと実績はstore.jsで保管し、routerのパラメーターを利用してスキルのページごとに情報を取得できるようにしました。',
          source: 'https://github.com/Fielsyuka/portfolio'
        }
      ]
    },
    {
      name: 'React.js',
      shadowClass: 'shadow-react',
      svgClass: 'is-react',
      slug: 'react',
      id: 5,
      overview: 'Wordpressの新エディター「Gutenberg（グーテンベルク）」に対応したテーマ制作を目指し、カスタムブロックのスキルを得るためにReactの勉強を始めました。実務ではまだ作っていませんが、練習の過程で制作したものを掲載します。',
      experiences: [
        {
          name: 'ハイライト',
          date: '**',
          time: '**',
          description: 'ブログでよく見かける、蛍光マーカーのようなハイライトをつける機能です。'
        },
        {
          name: '画像＋複数テキスト',
          date: '**',
          time: '**',
          description: '**'
        }
      ]
    },  ]
}
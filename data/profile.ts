// サイトに表示する内容はすべてこのファイルで編集できます。

export const site = {
  name: "portfolio",
  year: "2026",
};

export const about = {
  meta: ["フロントエンドエンジニア", "経験2年"],
  catchcopy: "淀野亘",
  intro:
    "2024年の入社から約2年間、フロントエンドエンジニアとして、保守運用から新規実装案件まで幅広く対応してきました。現在はリードエンジニアとして、金融ファンド向け中途人材採用LPの開発と、人材支援事業のERPシステム開発を担当しています。",
  photo: null as string | null, // 例: "/photo.jpg"（public/ に配置）
  career: [
    {
      period: "2024 – 現在",
      title: "[株式会社ドリームキャリア]・[FEエンジニア]",
      description: "[フロントエンドエンジニアとして、保守運用から新規実装案件まで幅広く対応]",
    },
    {
      period: "2022 – 2024",
      title: "[東京電子専門学校]・[情報処理学科卒業]",
      description: "情報処理学科でプログラミングやシステム開発の基礎を学ぶ",
    },
  ],
  // NEXT（これから目指すこと）は現在非表示。表示するには components/About.tsx にカードを戻す
  next: {
    title: "フロントエンドに加え、バックエンドやインフラまで幅広く対応できるフルスタックエンジニア",
    body: "現在はERPシステム開発を通じて、バックエンドやDBの領域にも携わり始めています。フロントエンドで培った経験を軸に、バックエンドやインフラの知識と経験を広げ、サービス全体を見渡して開発できるエンジニアを目指します。",
  },
};

export type Work = {
  title: string;
  labels: string[];
  description?: string;
  tech: string[];
  url?: string;
  image?: string; // スクリーンショット（public/ に配置して "/works/xxx.png" のように指定）
  details: { label: string; value: string }[];
};

export const works: Work[] = [
  {
    title: "金融ファンド向け中途人材採用LP",
    labels: ["LP"],
    tech: ["TypeScript", "Next.js", "SCSS", "Zod"],
    details: [
      { label: "担当範囲", value: "リードエンジニア / FEコーディング / BEコーディング / コードレビュー / 結合テスト" },
      { label: "課題と工夫", value: "初めて扱うGAS（Google Apps Script）を、公式ドキュメントとAIを併用してキャッチアップしながら実装しました。" },
      { label: "制作期間", value: "約3か月（現在も対応中）" },
    ],
  },
  {
    title: "人材支援事業のERPシステム開発",
    labels: ["業務システム"],
    tech: ["TypeScript", "Next.js"],
    details: [
      { label: "担当範囲", value: "リードエンジニア / FEコーディング / BEコーディング / UI改修 / コードレビュー / 結合テスト" },
      { label: "課題と工夫", value: "バックエンドの実装やDBの編集は初めての経験だったため、AIを活用してファイル構造の概要を整理し、全体像を把握しながら実装を進めました。" },
      { label: "制作期間", value: "約1年（現在も対応中）" },
    ],
  },
  {
    title: "美容品ECサイトのリニューアル開発",
    labels: ["チーム制作", "受託案件", "ショッピングサイト"],
    tech: ["HTML", "CSS", "JavaScript", "Vue.js", "W2Repeat"],
    url: "https://kiyo-cosme.com/",
    details: [
      { label: "担当範囲", value: "リードエンジニア / FEコーディング / コードレビュー / UI結合テスト" },
      {
        label: "課題と工夫",
        value: "初めて扱うフレームワーク（W2）で、かつ短期間での実装だったため、フレームワークの仕様をドキュメントにまとめてチームに共有し、属人化を防ぎました。また、初めてリードエンジニアを務めた案件で関わるエンジニアも多かったため、日ごとのタスク管理を徹底し、進捗を把握しながらチームをまとめました。",
      },
      { label: "制作期間", value: "約1か月半" },
    ],
  },
  {
    title: "整形外科のコーポレートサイト制作",
    labels: ["チーム制作", "受託案件", "医療機関サイト"],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
    url: "https://aoyamagaien-seikei.com/",
    details: [
      { label: "担当範囲", value: "FEコーディング / UIテスト" },
      { label: "課題と工夫", value: "初めての新規実装案件だったため、気になる点は当時のリードエンジニアに確認し、丁寧な実装を心がけました。" },
      { label: "制作期間", value: "約2か月" },
    ],
  },
  {
    title: "コーポレートサイトの制作・運用保守",
    labels: ["チーム制作", "受託案件", "コーポレートサイト"],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
    url: "https://www.jeplan.co.jp/",
    details: [
      { label: "担当範囲", value: "FEコーディング / 保守運用 / UI改修" },
      { label: "課題と工夫", value: "修正箇所の多い保守運用案件だったため、注意点と作業手順をドキュメントに残し、作業前には必ずバックアップを取ることを徹底しました。" },
      { label: "制作期間", value: "約2年" },
    ],
  },
  {
    title: "工務店コーポレートサイトの運用保守",
    labels: ["チーム制作", "受託案件", "コーポレートサイト"],
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    url: "https://tokyo-komuten.co.jp/",
    details: [
      { label: "担当範囲", value: "FEコーディング / 保守運用" },
      { label: "課題と工夫", value: "作業手順書を作成し、自分以外のメンバーでも作業の引き継ぎができるようにしました。" },
      { label: "制作期間", value: "約2年" },
    ],
  },
];

export type Skill = { name: string; main?: boolean };

export const skills: { category: string; note?: string; items: Skill[] }[] = [
  {
    category: "Frontend",
    note: "[主力技術についての短い補足。\n例：実務X年、設計から担当]",
    items: [
      { name: "TypeScript", main: true },
      { name: "JavaScript", main: true },
      { name: "HTML / CSS", main: true },
      { name: "React" },
      { name: "Next.js" },
      { name: "SCSS" },
    ],
  },
  {
    category: "Backend",
    items: [{ name: "Node.js" }, { name: "PHP" }, { name: "MySQL" }],
  },
  {
    category: "Tools / Infra",
    note: "[カテゴリ全体への一言補足]",
    items: [
      { name: "Git / GitHub", main: true },
      { name: "Docker" },
      { name: "GitHub Actions" },
    ],
  },
  {
    category: "Design",
    items: [{ name: "Figma" }],
  },
];

export const contact = {
  links: [
    { type: "github", label: "GitHub", text: "github.com/[username]", href: "https://github.com/" },
  ] as const,
};

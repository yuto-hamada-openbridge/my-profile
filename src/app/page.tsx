// 自己紹介ページ（/）

const skills = [
  "Java",
  "Spring Boot",
  "Eclipse",
  "Excel VBA",
  "C++",
  "Oracle DB",
  "Actian Zen",
  "Azure",
  "Windows / BIOS 設定",
  "産業用ロボット",
];

type CareerItem = {
  period: string;
  title: string;
  details?: string[];
};

const career: CareerItem[] = [
  { period: "2003年", title: "誕生" },
  { period: "2024年3月", title: "IT専門学校（2年制）卒業" },
  {
    period: "2024年4月 〜 2025年12月",
    title: "上場アウトソーシング企業に新卒入社／産業用ロボットのエンジニア",
    details: [
      "産業用ロボットの組み立て・初期設定（Azure 関連技術を含む）",
      "ねじ・配線・センサー・カメラ類などハードウェアの理解を深めながら、部品作成も担当",
      "現場でエラーが発生し研究所に戻ってきたロボットの原因究明",
      "お客様のご要望に合わせた機能の追加実装",
      "月1回の説明イベントで、来場者の前で産業用ロボットの説明・実演操作を担当",
    ],
  },
  {
    period: "2026年2月 〜 現在",
    title: "SES エンジニアとして複数のプロジェクトに参画",
    details: [
      "Java / Spring Boot（Eclipse 環境）でデータベース連携 API を開発",
      "Excel VBA でログファイルを解析し、処理時間の抽出・集計とエラー箇所の特定を実施",
      "C++ 既存システムのリプレース案件に PG として参画。FlexGrid から List Control への置き換えを担当し、旧システムと同等の表示内容・操作性を維持するよう改修",
      "Oracle DB から Actian Zen へのデータベース移行で、メイン担当者のサポートとして一部作業を担当",
      "業務用 PC・サーバーの初期セットアップを担当",
    ],
  },
];

const hobbies = [
  {
    emoji: "🎤",
    name: "カラオケ",
    text: "朝7時から12時までの5時間コースが定番。多いときは週1回通っていました。",
  },
  {
    emoji: "💪",
    name: "筋トレ（胸トレ）",
    text: "2か月ほど続けてきました。今は休養期間ですが、これからも続けていく予定です。",
  },
  {
    emoji: "🎮",
    name: "ゲーム",
    text: "プライベートサーバーを自分で構築して、知り合いと遊んでいます。攻略サイトを見ながら全アイテムを集めたり、縦横のマス目を計算して設計してから大型建築をしたりするのが大好きです。負けず嫌いな性格で、FPS はこれまで遊んだタイトルすべてで最高ランクに到達しました。",
  },
  {
    emoji: "🍳",
    name: "料理",
    text: "毎日自炊しています。体調に合わせて献立を考え、1週間分を計画的に買い物しています。",
  },
  {
    emoji: "🎬",
    name: "映画鑑賞",
    text: "最近は新作のバイオハザード映画や『ゴジラ-0.0』がとても面白かったです。監督の意図や裏設定を考察・深読みするのが好きで、観る作品にはこだわりがあります。",
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 border-l-4 border-sky-500 pl-3 text-xl font-bold">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div className="space-y-14">
      {/* プロフィール */}
      <section className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 text-3xl font-bold text-white">
          H.Y
        </div>
        <div>
          <p className="text-sm text-foreground/60">IT Engineer / IT企業勤務</p>
          <h1 className="mt-1 text-3xl font-bold">H.Y</h1>
          <p className="mt-3 leading-relaxed">
            はじめまして。産業用ロボットのエンジニアを経て、現在は SES
            エンジニアとして開発に携わっています。最近はバイブコーディングを練習中です。
          </p>
        </div>
      </section>

      <section>
        <SectionTitle>スキル</SectionTitle>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-foreground/15 px-3 py-1 text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* 経歴 */}
      <section>
        <SectionTitle>経歴</SectionTitle>
        <ol className="relative space-y-8 border-l border-foreground/15 pl-6">
          {career.map((item) => (
            <li key={item.period} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-sky-500" />
              <p className="text-sm font-medium text-sky-600 dark:text-sky-400">
                {item.period}
              </p>
              <h3 className="mt-1 font-bold">{item.title}</h3>
              {item.details && (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-foreground/80">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* 趣味 */}
      <section>
        <SectionTitle>趣味</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          {hobbies.map((hobby) => (
            <div
              key={hobby.name}
              className="rounded-xl border border-foreground/10 p-5"
            >
              <h3 className="font-bold">
                <span className="mr-2">{hobby.emoji}</span>
                {hobby.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                {hobby.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

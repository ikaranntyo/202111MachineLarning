const categories = ["前置詞", "接続詞", "副詞"];

const questions = [
  { term: "after", answers: ["前置詞", "接続詞"] },
  { term: "before", answers: ["前置詞", "接続詞", "副詞"] },
  { term: "since", answers: ["前置詞", "接続詞", "副詞"] },
  { term: "while", answers: ["接続詞"] },
  { term: "during", answers: ["前置詞"] },
  { term: "because", answers: ["接続詞"] },
  { term: "because of", answers: ["前置詞"] },
  { term: "although", answers: ["接続詞"] },
  { term: "despite", answers: ["前置詞"] },
  { term: "in spite of", answers: ["前置詞"] },
  { term: "however", answers: ["副詞"] },
  { term: "therefore", answers: ["副詞"] },
  { term: "moreover", answers: ["副詞"] },
  { term: "otherwise", answers: ["副詞"] },
  { term: "consequently", answers: ["副詞"] },
  { term: "in addition to", answers: ["前置詞"] },
  { term: "according to", answers: ["前置詞"] },
  { term: "instead of", answers: ["前置詞"] },
  { term: "unless", answers: ["接続詞"] },
  { term: "once", answers: ["接続詞", "副詞"] },
  { term: "as", answers: ["前置詞", "接続詞", "副詞"] },
  { term: "until", answers: ["前置詞", "接続詞"] },
  { term: "by", answers: ["前置詞", "副詞"] },
  { term: "for", answers: ["前置詞", "接続詞"] },
  { term: "like", answers: ["前置詞", "接続詞"] },
  { term: "than", answers: ["前置詞", "接続詞"] },
  { term: "than before", answers: ["副詞"] },
  { term: "through", answers: ["前置詞", "副詞"] },
  { term: "around", answers: ["前置詞", "副詞"] },
  { term: "across", answers: ["前置詞", "副詞"] },
  { term: "along", answers: ["前置詞", "副詞"] },
  { term: "away", answers: ["副詞"] },
  { term: "ahead", answers: ["副詞"] },
  { term: "above", answers: ["前置詞", "副詞"] },
  { term: "below", answers: ["前置詞", "副詞"] },
  { term: "beyond", answers: ["前置詞", "副詞"] },
  { term: "within", answers: ["前置詞", "副詞"] },
  { term: "inside", answers: ["前置詞", "副詞"] },
  { term: "outside", answers: ["前置詞", "副詞"] },
  { term: "under", answers: ["前置詞", "副詞"] },
  { term: "over", answers: ["前置詞", "副詞"] },
  { term: "up", answers: ["前置詞", "副詞"] },
  { term: "down", answers: ["前置詞", "副詞"] },
  { term: "off", answers: ["前置詞", "副詞"] },
  { term: "out", answers: ["前置詞", "副詞"] },
  { term: "on", answers: ["前置詞", "副詞"] },
  { term: "near", answers: ["前置詞", "副詞"] },
  { term: "opposite", answers: ["前置詞", "副詞"] },
  { term: "past", answers: ["前置詞", "副詞"] },
  { term: "apart", answers: ["副詞"] },
  { term: "together", answers: ["副詞"] },
  { term: "rather", answers: ["副詞"] },
  { term: "almost", answers: ["副詞"] },
  { term: "already", answers: ["副詞"] },
  { term: "always", answers: ["副詞"] },
  { term: "especially", answers: ["副詞"] },
  { term: "even", answers: ["副詞"] },
  { term: "ever", answers: ["副詞"] },
  { term: "frequently", answers: ["副詞"] },
  { term: "generally", answers: ["副詞"] },
  { term: "hardly", answers: ["副詞"] },
  { term: "indeed", answers: ["副詞"] },
  { term: "later", answers: ["副詞"] },
  { term: "meanwhile", answers: ["副詞"] },
  { term: "nevertheless", answers: ["副詞"] },
  { term: "previously", answers: ["副詞"] },
  { term: "recently", answers: ["副詞"] },
  { term: "still", answers: ["副詞"] },
  { term: "then", answers: ["副詞"] },
  { term: "thus", answers: ["副詞"] },
  { term: "whereas", answers: ["接続詞"] },
  { term: "whether", answers: ["接続詞"] },
  { term: "wherever", answers: ["接続詞"] },
  { term: "provided that", answers: ["接続詞"] },
  { term: "so that", answers: ["接続詞"] },
  { term: "even though", answers: ["接続詞"] },
  { term: "as soon as", answers: ["接続詞"] },
  { term: "as long as", answers: ["接続詞"] },
  { term: "in order that", answers: ["接続詞"] },
  { term: "owing to", answers: ["前置詞"] },
  { term: "due to", answers: ["前置詞"] },
  { term: "prior to", answers: ["前置詞"] },
  { term: "regardless of", answers: ["前置詞"] },
  { term: "apart from", answers: ["前置詞"] },
  { term: "except for", answers: ["前置詞"] },
  { term: "with regard to", answers: ["前置詞"] },
  { term: "in accordance with", answers: ["前置詞"] },
  { term: "on behalf of", answers: ["前置詞"] },
  { term: "in response to", answers: ["前置詞"] },
  { term: "by means of", answers: ["前置詞"] },
  { term: "in case of", answers: ["前置詞"] },
  { term: "in case", answers: ["接続詞"] },
];

const translations = {
  after: { 前置詞: "〜の後に", 接続詞: "〜した後で" },
  before: { 前置詞: "〜の前に", 接続詞: "〜する前に", 副詞: "以前に" },
  since: { 前置詞: "〜以来", 接続詞: "〜して以来", 副詞: "それ以来" },
  while: { 接続詞: "〜する間に" },
  during: { 前置詞: "〜の間に" },
  because: { 接続詞: "なぜなら〜だから" },
  "because of": { 前置詞: "〜のために" },
  although: { 接続詞: "〜だけれども" },
  despite: { 前置詞: "〜にもかかわらず" },
  "in spite of": { 前置詞: "〜にもかかわらず" },
  however: { 副詞: "しかしながら" },
  therefore: { 副詞: "したがって" },
  moreover: { 副詞: "さらに" },
  otherwise: { 副詞: "さもなければ" },
  consequently: { 副詞: "結果として" },
  "in addition to": { 前置詞: "〜に加えて" },
  "according to": { 前置詞: "〜によれば" },
  "instead of": { 前置詞: "〜の代わりに" },
  unless: { 接続詞: "〜しない限り" },
  once: { 接続詞: "いったん〜すると", 副詞: "かつて" },
  as: { 前置詞: "〜として", 接続詞: "〜なので", 副詞: "同じくらい" },
  until: { 前置詞: "〜まで", 接続詞: "〜するまで" },
  by: { 前置詞: "〜までに", 副詞: "そばに" },
  for: { 前置詞: "〜のために", 接続詞: "というのも〜だから" },
  like: { 前置詞: "〜のような", 接続詞: "〜するように" },
  than: { 前置詞: "〜よりも", 接続詞: "〜よりも" },
  "than before": { 副詞: "以前よりも" },
  through: { 前置詞: "〜を通して", 副詞: "通り抜けて" },
  around: { 前置詞: "〜の周りに", 副詞: "あちこちに" },
  across: { 前置詞: "〜を横切って", 副詞: "向こう側へ" },
  along: { 前置詞: "〜に沿って", 副詞: "前へ" },
  away: { 副詞: "離れて" },
  ahead: { 副詞: "前方に" },
  above: { 前置詞: "〜より上に", 副詞: "上に" },
  below: { 前置詞: "〜より下に", 副詞: "下に" },
  beyond: { 前置詞: "〜を越えて", 副詞: "その向こうに" },
  within: { 前置詞: "〜以内に", 副詞: "中に" },
  inside: { 前置詞: "〜の中に", 副詞: "中へ" },
  outside: { 前置詞: "〜の外に", 副詞: "外へ" },
  under: { 前置詞: "〜の下に", 副詞: "下に" },
  over: { 前置詞: "〜の上に", 副詞: "上に" },
  up: { 前置詞: "〜を上って", 副詞: "上へ" },
  down: { 前置詞: "〜を下って", 副詞: "下へ" },
  off: { 前置詞: "〜から離れて", 副詞: "離れて" },
  out: { 前置詞: "〜の外へ", 副詞: "外へ" },
  on: { 前置詞: "〜の上に", 副詞: "続いて" },
  near: { 前置詞: "〜の近くに", 副詞: "近くに" },
  opposite: { 前置詞: "〜の向かいに", 副詞: "向かいに" },
  past: { 前置詞: "〜を過ぎて", 副詞: "過ぎ去って" },
  apart: { 副詞: "離れて" },
  together: { 副詞: "一緒に" },
  rather: { 副詞: "むしろ" },
  almost: { 副詞: "ほとんど" },
  already: { 副詞: "すでに" },
  always: { 副詞: "いつも" },
  especially: { 副詞: "特に" },
  even: { 副詞: "〜でさえ" },
  ever: { 副詞: "これまでに" },
  frequently: { 副詞: "頻繁に" },
  generally: { 副詞: "一般的に" },
  hardly: { 副詞: "ほとんど〜ない" },
  indeed: { 副詞: "実に" },
  later: { 副詞: "後で" },
  meanwhile: { 副詞: "その間に" },
  nevertheless: { 副詞: "それにもかかわらず" },
  previously: { 副詞: "以前に" },
  recently: { 副詞: "最近" },
  still: { 副詞: "まだ" },
  then: { 副詞: "そのとき" },
  thus: { 副詞: "このように" },
  whereas: { 接続詞: "〜である一方で" },
  whether: { 接続詞: "〜かどうか" },
  wherever: { 接続詞: "どこで〜しても" },
  "provided that": { 接続詞: "〜という条件で" },
  "so that": { 接続詞: "〜するように" },
  "even though": { 接続詞: "〜にもかかわらず" },
  "as soon as": { 接続詞: "〜するとすぐに" },
  "as long as": { 接続詞: "〜する限り" },
  "in order that": { 接続詞: "〜するために" },
  "owing to": { 前置詞: "〜のために" },
  "due to": { 前置詞: "〜のために" },
  "prior to": { 前置詞: "〜の前に" },
  "regardless of": { 前置詞: "〜に関係なく" },
  "apart from": { 前置詞: "〜は別として" },
  "except for": { 前置詞: "〜を除いて" },
  "with regard to": { 前置詞: "〜に関して" },
  "in accordance with": { 前置詞: "〜に従って" },
  "on behalf of": { 前置詞: "〜を代表して" },
  "in response to": { 前置詞: "〜に応じて" },
  "by means of": { 前置詞: "〜によって" },
  "in case of": { 前置詞: "〜の場合に" },
  "in case": { 接続詞: "〜の場合に備えて" },
};

const TERM_MARKER = "__TERM__";

const exampleData = {
  after: {
    前置詞: {
      sentence: "The vendor called us __TERM__ the trade show.",
      translation: "その業者は展示会の後に当社へ電話しました。",
    },
    接続詞: {
      sentence: "__TERM__ the auditor finished the review, she submitted her report.",
      translation: "監査担当者は確認を終えた後で、報告書を提出しました。",
    },
  },
  before: {
    前置詞: {
      sentence: "Please print the agenda __TERM__ the board meeting.",
      translation: "取締役会の前に議題を印刷してください。",
    },
    接続詞: {
      sentence: "__TERM__ you sign the contract, review the final page carefully.",
      translation: "契約書に署名する前に、最後のページをよく確認してください。",
    },
    副詞: {
      sentence: "Our Tokyo branch faced a similar issue __TERM__.",
      translation: "東京支店は以前に同じような問題を経験しました。",
    },
  },
  since: {
    前置詞: {
      sentence: "Sales have increased steadily __TERM__ last April.",
      translation: "売上は昨年4月以来、着実に伸びています。",
    },
    接続詞: {
      sentence: "__TERM__ the new policy took effect, overtime costs have fallen.",
      translation: "新しい方針が施行されて以来、残業費は減っています。",
    },
    副詞: {
      sentence: "The system was upgraded in May and has run smoothly __TERM__.",
      translation: "システムは5月に更新され、それ以来順調に稼働しています。",
    },
  },
  while: {
    接続詞: {
      sentence: "__TERM__ the finance team prepared the forecast, the director checked the figures.",
      translation: "財務チームが予測を作成している間に、部長が数値を確認しました。",
    },
  },
  during: {
    前置詞: {
      sentence: "Please keep your phone silent __TERM__ the presentation.",
      translation: "プレゼンテーションの間は携帯電話をマナーモードにしてください。",
    },
  },
  because: {
    接続詞: {
      sentence: "The shipment was delayed __TERM__ the customs inspection took longer than expected.",
      translation: "通関検査が予想より長引いたため、出荷が遅れました。",
    },
  },
  "because of": {
    前置詞: {
      sentence: "The flight was canceled __TERM__ heavy snow.",
      translation: "大雪のため、便は欠航になりました。",
    },
  },
  although: {
    接続詞: {
      sentence: "__TERM__ the proposal was expensive, the client approved it.",
      translation: "その提案は高額でしたが、顧客は承認しました。",
    },
  },
  despite: {
    前置詞: {
      sentence: "The team met the deadline __TERM__ several last-minute changes.",
      translation: "チームは直前の変更がいくつかあったにもかかわらず、締め切りを守りました。",
    },
  },
  "in spite of": {
    前置詞: {
      sentence: "__TERM__ severe traffic, the trainer arrived on time.",
      translation: "ひどい渋滞にもかかわらず、講師は時間どおりに到着しました。",
    },
  },
  however: {
    副詞: {
      sentence: "The design is simple; __TERM__, it is highly effective.",
      translation: "その設計はシンプルです。しかしながら、とても効果的です。",
    },
  },
  therefore: {
    副詞: {
      sentence: "The order was incomplete; __TERM__, we requested a replacement.",
      translation: "注文内容が不完全でした。したがって、交換を依頼しました。",
    },
  },
  moreover: {
    副詞: {
      sentence: "The software is affordable; __TERM__, it is easy to maintain.",
      translation: "そのソフトは手頃です。さらに、保守もしやすいです。",
    },
  },
  otherwise: {
    副詞: {
      sentence: "Please submit the form today; __TERM__, your reimbursement may be delayed.",
      translation: "その書類は今日中に提出してください。さもないと、精算が遅れる可能性があります。",
    },
  },
  consequently: {
    副詞: {
      sentence: "The machine was not calibrated properly; __TERM__, the test results were inaccurate.",
      translation: "機械が適切に調整されていませんでした。その結果、試験結果は不正確でした。",
    },
  },
  "in addition to": {
    前置詞: {
      sentence: "__TERM__ the salary, the position offers annual bonuses.",
      translation: "給与に加えて、その職種には年次ボーナスがあります。",
    },
  },
  "according to": {
    前置詞: {
      sentence: "__TERM__ the schedule, the seminar starts at 9:00.",
      translation: "予定表によれば、セミナーは9時に始まります。",
    },
  },
  "instead of": {
    前置詞: {
      sentence: "The manager held a video call __TERM__ an in-person meeting.",
      translation: "部長は対面会議の代わりに、ビデオ通話を行いました。",
    },
  },
  unless: {
    接続詞: {
      sentence: "We cannot issue a refund __TERM__ you provide the receipt.",
      translation: "領収書をご提示いただけない限り、返金はできません。",
    },
  },
  once: {
    接続詞: {
      sentence: "__TERM__ the contract is signed, the service will begin immediately.",
      translation: "ひとたび契約書に署名すれば、サービスはすぐに始まります。",
    },
    副詞: {
      sentence: "Our company __TERM__ operated three factories in this region.",
      translation: "当社はかつてこの地域で3つの工場を運営していました。",
    },
  },
  as: {
    前置詞: {
      sentence: "Ms. Kato joined the meeting __TERM__ a legal adviser.",
      translation: "加藤さんは法務アドバイザーとして会議に参加しました。",
    },
    接続詞: {
      sentence: "__TERM__ demand is rising, we plan to hire more staff.",
      translation: "需要が高まっているので、さらにスタッフを採用する予定です。",
    },
    副詞: {
      sentence: "This printer is not __TERM__ reliable as the previous model.",
      translation: "このプリンターは前のモデルほど信頼性が高くありません。",
    },
  },
  until: {
    前置詞: {
      sentence: "The reception desk will be closed __TERM__ noon.",
      translation: "受付は正午まで閉まっています。",
    },
    接続詞: {
      sentence: "Please stay in the waiting area __TERM__ your name is called.",
      translation: "名前が呼ばれるまで待合エリアでお待ちください。",
    },
  },
  by: {
    前置詞: {
      sentence: "All expense reports must be submitted __TERM__ Monday.",
      translation: "経費報告書は月曜日までに提出しなければなりません。",
    },
    副詞: {
      sentence: "The president walked __TERM__ without stopping.",
      translation: "社長は立ち止まらずにそばを通り過ぎました。",
    },
  },
  for: {
    前置詞: {
      sentence: "Thank you __TERM__ your prompt reply.",
      translation: "迅速なお返事をありがとうございます。",
    },
    接続詞: {
      sentence: "We postponed the launch, __TERM__ the final test was not complete.",
      translation: "最終試験が終わっていなかったので、発売を延期しました。",
    },
  },
  like: {
    前置詞: {
      sentence: "We need candidates __TERM__ Ms. Brown, who can manage large accounts.",
      translation: "大口顧客を担当できるブラウンさんのような人材が必要です。",
    },
    接続詞: {
      sentence: "It looks __TERM__ the server will be restored soon.",
      translation: "サーバーはまもなく復旧しそうです。",
    },
  },
  than: {
    前置詞: {
      sentence: "This package is cheaper __TERM__ the standard plan.",
      translation: "このプランは標準プランよりも安いです。",
    },
    接続詞: {
      sentence: "The project took longer __TERM__ we had expected.",
      translation: "そのプロジェクトは私たちが予想していたよりも長くかかりました。",
    },
  },
  "than before": {
    副詞: {
      sentence: "Customers are ordering online more often __TERM__.",
      translation: "顧客は以前よりもオンラインで注文することが増えています。",
    },
  },
  through: {
    前置詞: {
      sentence: "Please send all purchase requests __TERM__ the procurement system.",
      translation: "購入申請はすべて調達システムを通して送ってください。",
    },
    副詞: {
      sentence: "The truck could not get __TERM__ because the back gate was locked.",
      translation: "裏門が閉まっていたため、トラックは通り抜けられませんでした。",
    },
  },
  around: {
    前置詞: {
      sentence: "Security cameras were installed __TERM__ the warehouse.",
      translation: "倉庫の周りに防犯カメラが設置されました。",
    },
    副詞: {
      sentence: "Please stay __TERM__ after the presentation for questions.",
      translation: "プレゼン後の質疑応答のため、その場に残ってください。",
    },
  },
  across: {
    前置詞: {
      sentence: "The new policy applies __TERM__ all regional offices.",
      translation: "新しい方針はすべての地域オフィスに適用されます。",
    },
    副詞: {
      sentence: "Could you come __TERM__ to my desk after lunch?",
      translation: "昼食後に私の席のほうへ来ていただけますか。",
    },
  },
  along: {
    前置詞: {
      sentence: "There are several hotels __TERM__ the avenue near our branch.",
      translation: "支店近くの大通り沿いにはホテルがいくつかあります。",
    },
    副詞: {
      sentence: "Please bring the signed contract __TERM__ to the client meeting.",
      translation: "署名済みの契約書を顧客との会議に持ってきてください。",
    },
  },
  away: {
    副詞: {
      sentence: "The old chairs were taken __TERM__ this morning.",
      translation: "古い椅子は今朝運び去られました。",
    },
  },
  ahead: {
    副詞: {
      sentence: "The receptionist walked __TERM__ to open the conference room.",
      translation: "受付担当者は会議室を開けるために前へ進みました。",
    },
  },
  above: {
    前置詞: {
      sentence: "Please refer to the chart __TERM__ the table.",
      translation: "表の上にあるグラフをご参照ください。",
    },
    副詞: {
      sentence: "The final total is shown __TERM__.",
      translation: "最終合計は上に示されています。",
    },
  },
  below: {
    前置詞: {
      sentence: "Write your employee ID __TERM__ your name.",
      translation: "氏名の下に社員番号を書いてください。",
    },
    副詞: {
      sentence: "Additional instructions are listed __TERM__.",
      translation: "追加の指示は下に記載されています。",
    },
  },
  beyond: {
    前置詞: {
      sentence: "The repair cost was __TERM__ our original budget.",
      translation: "修理費は当初の予算を超えていました。",
    },
    副詞: {
      sentence: "The main lobby is on the second floor, and the cafeteria is just __TERM__.",
      translation: "メインロビーは2階にあり、カフェテリアはその先です。",
    },
  },
  within: {
    前置詞: {
      sentence: "Applicants will receive a reply __TERM__ two weeks.",
      translation: "応募者には2週間以内に返答があります。",
    },
    副詞: {
      sentence: "The problem was caused by a fault __TERM__, not by external damage.",
      translation: "その問題は外部の損傷ではなく、内部の不具合が原因でした。",
    },
  },
  inside: {
    前置詞: {
      sentence: "Please leave the signed agreement __TERM__ the blue folder.",
      translation: "署名済みの契約書は青いフォルダーの中に入れてください。",
    },
    副詞: {
      sentence: "Several guests are waiting __TERM__.",
      translation: "来客の方が数名、中でお待ちです。",
    },
  },
  outside: {
    前置詞: {
      sentence: "Smoking is prohibited __TERM__ the loading area.",
      translation: "荷積みエリアの外では喫煙は禁止です。",
    },
    副詞: {
      sentence: "The courier is waiting __TERM__.",
      translation: "宅配便の担当者が外で待っています。",
    },
  },
  under: {
    前置詞: {
      sentence: "The invoice was filed __TERM__ the wrong account number.",
      translation: "その請求書は誤った勘定科目の下で処理されていました。",
    },
    副詞: {
      sentence: "The market was strong last year, but sales are now slightly __TERM__.",
      translation: "市場は昨年好調でしたが、売上は今やや下回っています。",
    },
  },
  over: {
    前置詞: {
      sentence: "We discussed the contract __TERM__ lunch.",
      translation: "昼食をとりながら契約内容について話し合いました。",
    },
    副詞: {
      sentence: "Please come __TERM__ when you have a moment.",
      translation: "お時間があるときにこちらへ来てください。",
    },
  },
  up: {
    前置詞: {
      sentence: "The technician carried the projector __TERM__ the stairs.",
      translation: "技術担当者はプロジェクターを階段で上まで運びました。",
    },
    副詞: {
      sentence: "Production costs went __TERM__ again in August.",
      translation: "生産コストは8月に再び上がりました。",
    },
  },
  down: {
    前置詞: {
      sentence: "Please walk __TERM__ the hall to the last office on the right.",
      translation: "右手奥の最後のオフィスまで廊下を進んでください。",
    },
    副詞: {
      sentence: "The network was __TERM__ for two hours yesterday.",
      translation: "ネットワークは昨日2時間停止していました。",
    },
  },
  off: {
    前置詞: {
      sentence: "The hotel is just __TERM__ the main highway.",
      translation: "そのホテルは幹線道路から少し離れたところにあります。",
    },
    副詞: {
      sentence: "Please turn the monitor __TERM__ before you leave.",
      translation: "退社前にモニターの電源を切ってください。",
    },
  },
  out: {
    前置詞: {
      sentence: "The consultant stepped __TERM__ the meeting room to answer a call.",
      translation: "コンサルタントは電話に出るため会議室の外へ出ました。",
    },
    副詞: {
      sentence: "Please step __TERM__ if you need to take a private call.",
      translation: "私用の電話を受ける必要がある場合は外へ出てください。",
    },
  },
  on: {
    前置詞: {
      sentence: "The draft contract is __TERM__ your desk.",
      translation: "契約書の草案はあなたの机の上にあります。",
    },
    副詞: {
      sentence: "The discussion went __TERM__ longer than expected.",
      translation: "議論は予想より長く続きました。",
    },
  },
  near: {
    前置詞: {
      sentence: "There is a convenience store __TERM__ the station exit.",
      translation: "駅の出口の近くにコンビニがあります。",
    },
    副詞: {
      sentence: "The deadline is drawing __TERM__.",
      translation: "締め切りが近づいています。",
    },
  },
  opposite: {
    前置詞: {
      sentence: "Our new showroom is __TERM__ City Hall.",
      translation: "当社の新しいショールームは市役所の向かいにあります。",
    },
    副詞: {
      sentence: "The HR office is on the left, and payroll is directly __TERM__.",
      translation: "人事部は左側にあり、給与担当はちょうど向かい側です。",
    },
  },
  past: {
    前置詞: {
      sentence: "Please drive __TERM__ the warehouse and turn right at the next light.",
      translation: "倉庫を過ぎたら、次の信号を右に曲がってください。",
    },
    副詞: {
      sentence: "Several applicants walked __TERM__ without noticing the reception desk.",
      translation: "数名の応募者が受付に気づかず通り過ぎました。",
    },
  },
  apart: {
    副詞: {
      sentence: "The two interviews were scheduled an hour __TERM__.",
      translation: "2件の面接は1時間離して予定されていました。",
    },
  },
  together: {
    副詞: {
      sentence: "Please attach the invoice and receipt __TERM__.",
      translation: "請求書と領収書を一緒に添付してください。",
    },
  },
  rather: {
    副詞: {
      sentence: "We chose the smaller venue __TERM__ than postpone the event.",
      translation: "私たちはイベントを延期するより、より小さな会場を選びました。",
    },
  },
  almost: {
    副詞: {
      sentence: "The design team has __TERM__ finished the new brochure.",
      translation: "デザインチームは新しいパンフレットをほとんど仕上げています。",
    },
  },
  already: {
    副詞: {
      sentence: "Ms. Chen has __TERM__ approved the revised budget.",
      translation: "陳さんは修正版の予算をすでに承認しています。",
    },
  },
  always: {
    副詞: {
      sentence: "Our support staff __TERM__ respond politely to customers.",
      translation: "当社のサポート担当者はいつも丁寧に顧客対応します。",
    },
  },
  especially: {
    副詞: {
      sentence: "This software is __TERM__ useful for small businesses.",
      translation: "このソフトは特に中小企業に役立ちます。",
    },
  },
  even: {
    副詞: {
      sentence: "__TERM__ the interns understood the new procedure.",
      translation: "インターンでさえ新しい手順を理解しました。",
    },
  },
  ever: {
    副詞: {
      sentence: "If you __TERM__ need technical help, call extension 204.",
      translation: "もし技術的な助けが必要になったら、内線204へ電話してください。",
    },
  },
  frequently: {
    副詞: {
      sentence: "The warehouse team __TERM__ checks inventory levels.",
      translation: "倉庫チームは在庫水準を頻繁に確認します。",
    },
  },
  generally: {
    副詞: {
      sentence: "Customers __TERM__ prefer faster delivery options.",
      translation: "顧客は一般的に、より速い配送方法を好みます。",
    },
  },
  hardly: {
    副詞: {
      sentence: "We could __TERM__ hear the speaker in the back row.",
      translation: "後方の列では話し手の声がほとんど聞こえませんでした。",
    },
  },
  indeed: {
    副詞: {
      sentence: "The new branch is small but __TERM__ profitable.",
      translation: "その新支店は小規模ですが、実に利益を上げています。",
    },
  },
  later: {
    副詞: {
      sentence: "Please call me back __TERM__ this afternoon.",
      translation: "今日の午後、後ほど折り返しお電話ください。",
    },
  },
  meanwhile: {
    副詞: {
      sentence: "The printer is being repaired; __TERM__, please use the one upstairs.",
      translation: "プリンターは修理中です。その間は上の階のものを使ってください。",
    },
  },
  nevertheless: {
    副詞: {
      sentence: "The budget was tight; __TERM__, the team delivered an excellent event.",
      translation: "予算は厳しかったですが、それにもかかわらずチームは素晴らしいイベントを実現しました。",
    },
  },
  previously: {
    副詞: {
      sentence: "The file was __TERM__ stored on the shared drive.",
      translation: "そのファイルは以前は共有ドライブに保存されていました。",
    },
  },
  recently: {
    副詞: {
      sentence: "Our company __TERM__ opened an office in Osaka.",
      translation: "当社は最近、大阪にオフィスを開設しました。",
    },
  },
  still: {
    副詞: {
      sentence: "The client is __TERM__ considering our proposal.",
      translation: "顧客はまだ当社の提案を検討中です。",
    },
  },
  then: {
    副詞: {
      sentence: "First complete the online form and __TERM__ click Submit.",
      translation: "まずオンラインフォームに入力し、そのあと送信をクリックしてください。",
    },
  },
  thus: {
    副詞: {
      sentence: "The manual was unclear, and __TERM__ several users made the same error.",
      translation: "マニュアルが不明確でした。そのため、複数の利用者が同じミスをしました。",
    },
  },
  whereas: {
    接続詞: {
      sentence: "__TERM__ the Seoul office focuses on sales, the Busan office handles logistics.",
      translation: "ソウル支店が営業を担当する一方で、釜山支店は物流を担当しています。",
    },
  },
  whether: {
    接続詞: {
      sentence: "Please let us know __TERM__ you can attend the workshop.",
      translation: "研修会に参加できるかどうかをお知らせください。",
    },
  },
  wherever: {
    接続詞: {
      sentence: "__TERM__ Ms. Ito travels, she visits local distributors.",
      translation: "伊藤さんはどこへ出張しても、現地の販売店を訪問します。",
    },
  },
  "provided that": {
    接続詞: {
      sentence: "You may work remotely __TERM__ your manager approves it.",
      translation: "上司が承認するという条件で、在宅勤務ができます。",
    },
  },
  "so that": {
    接続詞: {
      sentence: "Please label each box clearly __TERM__ the movers can sort them quickly.",
      translation: "作業員が素早く仕分けできるように、各箱にわかりやすくラベルを付けてください。",
    },
  },
  "even though": {
    接続詞: {
      sentence: "__TERM__ the interview lasted an hour, the applicant remained confident.",
      translation: "面接は1時間続きましたが、応募者は落ち着いたままでした。",
    },
  },
  "as soon as": {
    接続詞: {
      sentence: "Please notify the director __TERM__ the shipment arrives.",
      translation: "出荷品が到着したらすぐに部長へ連絡してください。",
    },
  },
  "as long as": {
    接続詞: {
      sentence: "You may use the company car __TERM__ you return it by 6 p.m.",
      translation: "午後6時までに返却する限り、社用車を使って構いません。",
    },
  },
  "in order that": {
    接続詞: {
      sentence: "We lowered the screen brightness __TERM__ battery life would improve.",
      translation: "バッテリーの持ちが良くなるように、画面の明るさを下げました。",
    },
  },
  "owing to": {
    前置詞: {
      sentence: "The seminar was postponed __TERM__ a power outage.",
      translation: "停電のため、セミナーは延期されました。",
    },
  },
  "due to": {
    前置詞: {
      sentence: "Several flights were delayed __TERM__ fog.",
      translation: "霧のため、複数の便が遅れました。",
    },
  },
  "prior to": {
    前置詞: {
      sentence: "Please review the safety guide __TERM__ entering the factory.",
      translation: "工場に入る前に安全ガイドを確認してください。",
    },
  },
  "regardless of": {
    前置詞: {
      sentence: "The discount applies __TERM__ payment method.",
      translation: "その割引は支払い方法に関係なく適用されます。",
    },
  },
  "apart from": {
    前置詞: {
      sentence: "__TERM__ one typo, the report was excellent.",
      translation: "1つの誤字を別にすれば、その報告書は素晴らしい出来でした。",
    },
  },
  "except for": {
    前置詞: {
      sentence: "__TERM__ the cover page, the document is ready to print.",
      translation: "表紙を除けば、その書類は印刷の準備ができています。",
    },
  },
  "with regard to": {
    前置詞: {
      sentence: "__TERM__ your inquiry, we will reply by Friday.",
      translation: "お問い合わせに関しては、金曜日までに返信いたします。",
    },
  },
  "in accordance with": {
    前置詞: {
      sentence: "Employees must dress __TERM__ the company policy.",
      translation: "従業員は会社の方針に従って服装を整えなければなりません。",
    },
  },
  "on behalf of": {
    前置詞: {
      sentence: "I am writing __TERM__ the marketing department.",
      translation: "私はマーケティング部を代表して書いています。",
    },
  },
  "in response to": {
    前置詞: {
      sentence: "We updated the schedule __TERM__ customer feedback.",
      translation: "顧客の意見に応じて、予定を更新しました。",
    },
  },
  "by means of": {
    前置詞: {
      sentence: "The sample was moved __TERM__ a conveyor belt.",
      translation: "その試料はコンベヤーベルトによって運ばれました。",
    },
  },
  "in case of": {
    前置詞: {
      sentence: "Press this button __TERM__ an emergency.",
      translation: "緊急の場合はこのボタンを押してください。",
    },
  },
  "in case": {
    接続詞: {
      sentence: "Please save a copy __TERM__ the system crashes.",
      translation: "システム障害に備えて、コピーを保存してください。",
    },
  },
};

function hasSameMembers(actual, expected) {
  return [...actual].sort().join("|") === [...expected].sort().join("|");
}

function validateReferenceData() {
  const questionTerms = questions.map(({ term }) => term);
  const translationTerms = Object.keys(translations);
  const exampleTerms = Object.keys(exampleData);

  if (!hasSameMembers(translationTerms, questionTerms)) {
    throw new Error("translations と questions の term が一致していません。");
  }

  if (!hasSameMembers(exampleTerms, questionTerms)) {
    throw new Error("exampleData と questions の term が一致していません。");
  }

  for (const question of questions) {
    const expectedCategories = question.answers;
    const translationEntries = translations[question.term];
    const exampleEntries = exampleData[question.term];

    if (!hasSameMembers(Object.keys(translationEntries), expectedCategories)) {
      throw new Error(`${question.term} の translations が answers と一致していません。`);
    }

    if (!hasSameMembers(Object.keys(exampleEntries), expectedCategories)) {
      throw new Error(`${question.term} の exampleData が answers と一致していません。`);
    }

    for (const category of expectedCategories) {
      const example = exampleEntries[category];
      if (!example?.sentence || !example?.translation) {
        throw new Error(`${question.term} / ${category} の例文データが不足しています。`);
      }

      const markerCount = example.sentence.split(TERM_MARKER).length - 1;
      if (markerCount !== 1) {
        throw new Error(`${question.term} / ${category} の英文には ${TERM_MARKER} を1回だけ含めてください。`);
      }
    }
  }
}

validateReferenceData();

const coursePanel = document.querySelector("#course-panel");
const quizPanel = document.querySelector("#quiz-panel");
const answerPanel = document.querySelector("#answer-panel");
const summaryPanel = document.querySelector("#summary-panel");
const questionElement = document.querySelector("#question");
const progressElement = document.querySelector("#progress");
const choicesElement = document.querySelector("#choices");
const resultElement = document.querySelector("#result");
const submitButton = document.querySelector("#submit");
const accuracyElement = document.querySelector("#accuracy");
const missedQuestionsElement = document.querySelector("#missed-questions");
const restartButton = document.querySelector("#restart");

let currentQuestion;
let answered = false;
let questionNumber = 0;
let sessionQuestions = [];
let missedQuestions = [];
let correctAnswers = 0;

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }
  return shuffled;
}

function startCourse(size) {
  const courseSize = size === "all" ? questions.length : Number(size);
  sessionQuestions = shuffle(questions).slice(0, courseSize);
  missedQuestions = [];
  correctAnswers = 0;
  questionNumber = 0;
  coursePanel.hidden = true;
  summaryPanel.hidden = true;
  quizPanel.hidden = false;
  answerPanel.hidden = false;
  chooseQuestion();
}

function chooseQuestion() {
  currentQuestion = sessionQuestions[questionNumber];
  answered = false;
  questionElement.textContent = currentQuestion.term;
  progressElement.textContent = `${questionNumber + 1} / ${sessionQuestions.length} 問`;
  resultElement.textContent = "";
  resultElement.className = "result";
  submitButton.textContent = "解答する";
  submitButton.disabled = false;
  renderChoices();
}

function renderChoices() {
  choicesElement.replaceChildren(
    ...categories.map((category) => {
      const choice = document.createElement("button");
      choice.type = "button";
      choice.className = "choice";
      choice.textContent = category;
      choice.setAttribute("aria-pressed", "false");
      choice.addEventListener("click", () => {
        if (!answered) {
          choice.setAttribute(
            "aria-pressed",
            String(choice.getAttribute("aria-pressed") !== "true"),
          );
        }
      });
      return choice;
    }),
  );
}

function selectedAnswers() {
  return [...choicesElement.querySelectorAll('[aria-pressed="true"]')].map(
    (choice) => choice.textContent,
  );
}

function usageDetails(question) {
  return question.answers.map((category) => ({
    term: question.term,
    category,
    translation: translations[question.term][category],
    example: exampleData[question.term][category],
  }));
}

function appendSentenceWithBoldTerm(element, sentenceTemplate, term) {
  const [beforeTerm, afterTerm] = sentenceTemplate.split(TERM_MARKER);
  const termElement = document.createElement("strong");
  termElement.textContent = term;
  element.append(beforeTerm, termElement, afterTerm);
}

function createUsageCard(usage, includeExample = false) {
  const card = document.createElement("section");
  card.className = "usage-card";

  const heading = document.createElement("h3");
  heading.textContent = `${usage.category}：${usage.translation}`;
  card.append(heading);

  if (includeExample) {
    const exampleContainer = document.createElement("div");
    exampleContainer.className = "example";

    const sentence = document.createElement("p");
    sentence.className = "example-sentence";
    appendSentenceWithBoldTerm(sentence, usage.example.sentence, usage.term);

    const japaneseTranslation = document.createElement("p");
    japaneseTranslation.className = "japanese-translation";
    japaneseTranslation.textContent = usage.example.translation;

    exampleContainer.append(sentence, japaneseTranslation);
    card.append(exampleContainer);
  }

  return card;
}

function renderUsageDetails(container, question, includeExample = false) {
  container.append(
    ...usageDetails(question).map((usage) =>
      createUsageCard(usage, includeExample),
    ),
  );
}

function checkAnswer() {
  const selected = selectedAnswers();

  if (!selected.length) {
    resultElement.textContent = "用法を1つ以上選択してください。";
    resultElement.className = "result incorrect";
    return;
  }

  const correct =
    selected.length === currentQuestion.answers.length &&
    selected.every((answer) => currentQuestion.answers.includes(answer));

  answered = true;
  for (const choice of choicesElement.children) {
    choice.disabled = true;
  }

  resultElement.replaceChildren();
  const message = document.createElement("p");
  message.className = "result-message";
  message.textContent = correct ? "正解！" : "正解：";
  resultElement.append(message);
  renderUsageDetails(resultElement, currentQuestion);
  resultElement.className = `result ${correct ? "correct" : "incorrect"}`;
  if (correct) {
    correctAnswers += 1;
  } else {
    missedQuestions.push(currentQuestion);
  }
  submitButton.textContent =
    questionNumber === sessionQuestions.length - 1 ? "結果を見る" : "次の問題";
}

function showSummary() {
  quizPanel.hidden = true;
  answerPanel.hidden = true;
  summaryPanel.hidden = false;
  const accuracy = Math.round((correctAnswers / sessionQuestions.length) * 100);
  accuracyElement.textContent = `正答率：${accuracy}%（${correctAnswers} / ${sessionQuestions.length}問）`;

  missedQuestionsElement.replaceChildren();
  const title = document.createElement("h2");
  title.textContent = missedQuestions.length ? "結果一覧" : "全問正解です！";
  missedQuestionsElement.append(title);
  for (const question of sessionQuestions) {
    const details = document.createElement("section");
    details.className = "question-details";
    const term = document.createElement("h3");
    term.textContent = question.term;
    details.append(term);
    renderUsageDetails(details, question, true);
    missedQuestionsElement.append(details);
  }
}

submitButton.addEventListener("click", () => {
  if (answered) {
    if (questionNumber === sessionQuestions.length - 1) {
      showSummary();
    } else {
      questionNumber += 1;
      chooseQuestion();
    }
  } else {
    checkAnswer();
  }
});

document.querySelectorAll("[data-course-size]").forEach((button) => {
  button.addEventListener("click", () => startCourse(button.dataset.courseSize));
});

restartButton.addEventListener("click", () => {
  summaryPanel.hidden = true;
  coursePanel.hidden = false;
});

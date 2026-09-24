import type { Lang } from "./i18n";
import { startupPrompt } from "./startup";

export const builderText = {
  en: {
    name: "Service name",
    description: "Service description",
    notes: "Considerations",
    optional: "Optional",
    required: "Required",
    nameHint: "Leave blank if you have not decided yet.",
    descriptionHint:
      "Who uses it, what do they do, and what should it help them achieve?",
    notesHint:
      "Budget, schedule, preferred examples, or constraints. A blank means more clarification is needed.",
    preview: "Prompt preview",
    copy: "Copy prompt",
    reset: "Reset",
    missing: "Enter a service description to copy the prompt.",
    privacy:
      "Your input stays on this page. It is not sent to a server, added to the URL, or saved for later. Copy it before leaving or reloading.",
    failure:
      "Copy failed. Select the prompt in the preview and copy it manually.",
    noScript:
      "JavaScript is off. Copy the base prompt below and append your service name, description, and considerations. Mark an undecided name as “Undecided” and blank considerations as “Needs clarification”.",
    undecided: "Undecided",
    clarify: "Needs clarification",
    instruction:
      "Reuse the information already provided above. Ask about unresolved choices; do not interpret blank considerations as no constraints. Derive necessary decisions from requirements and constraints, including options outside this site, then prepare a concrete project plan. Confirm the plan with me and begin building after an explicit development request; honor existing approval and authorization without asking again.",
  },
  ko: {
    name: "서비스 이름",
    description: "서비스 설명",
    notes: "참고사항",
    optional: "선택",
    required: "필수",
    nameHint: "아직 정하지 않았다면 비워두세요.",
    descriptionHint: "누가 사용하고, 무엇을 하며, 어떤 결과를 얻어야 하나요?",
    notesHint:
      "예산, 일정, 마음에 드는 예시, 제약 등을 적으세요. 비워두면 추가 확인이 필요한 것으로 처리합니다.",
    preview: "프롬프트 미리보기",
    copy: "프롬프트 복사",
    reset: "초기화",
    missing: "서비스 설명을 입력하면 프롬프트를 복사할 수 있습니다.",
    privacy:
      "입력은 현재 페이지에만 유지됩니다. 서버 전송·URL 기록·영구 저장하지 않습니다. 페이지를 떠나거나 새로고침하기 전에 복사하세요.",
    failure: "복사 실패. 미리보기의 프롬프트를 직접 선택해 복사하세요.",
    noScript:
      "JavaScript가 꺼져 있습니다. 아래 기본 프롬프트를 복사하고 서비스 이름·서비스 설명·참고사항을 직접 덧붙이세요. 정하지 않은 이름은 ‘미정’, 빈 참고사항은 ‘추가 확인 필요’로 적으세요.",
    undecided: "미정",
    clarify: "추가 확인 필요",
    instruction:
      "위에서 이미 제공한 정보를 재사용하세요. 미결정 사항을 질문하고, 빈 참고사항을 제약이 없다는 뜻으로 해석하지 마세요. 요구사항과 제약에서 필요한 결정을 도출하고 사이트 밖 선택지도 검토한 뒤 구체적인 프로젝트 기획을 작성하세요. 저와 기획을 확정하고 명시적인 개발 요청 후 개발하되, 기존 승인과 권한은 다시 묻지 말고 존중하세요.",
  },
  ja: {
    name: "サービス名",
    description: "サービスの説明",
    notes: "参考事項",
    optional: "任意",
    required: "必須",
    nameHint: "まだ決まっていなければ空欄にしてください。",
    descriptionHint: "誰が使い、何をして、どんな結果を得られるサービスですか？",
    notesHint:
      "予算、日程、好みの例、制約など。空欄は追加確認が必要なものとして扱います。",
    preview: "プロンプトのプレビュー",
    copy: "プロンプトをコピー",
    reset: "リセット",
    missing: "サービスの説明を入力するとプロンプトをコピーできます。",
    privacy:
      "入力内容は現在のページだけに保持されます。サーバーへの送信、URLへの記録、永続保存はしません。ページを離れたり再読み込みしたりする前にコピーしてください。",
    failure:
      "コピー失敗。プレビューのプロンプトを選択して手動でコピーしてください。",
    noScript:
      "JavaScriptが無効です。下の基本プロンプトをコピーし、サービス名・説明・参考事項を追記してください。未定の名前は「未定」、空欄の参考事項は「追加確認が必要」と記入してください。",
    undecided: "未定",
    clarify: "追加確認が必要",
    instruction:
      "上で提供した情報を再利用してください。未決定の事項を質問し、空欄の参考事項を制約なしと解釈しないでください。要件と制約から必要な判断を導き、サイト外の選択肢も検討して具体的な企画をまとめてください。私と企画を確定し、明示的な開発依頼後に開発してください。既存の承認と権限は聞き直さず尊重してください。",
  },
};

export function composeStartupPrompt(
  lang: Lang,
  input: { name: string; description: string; notes: string },
) {
  if (!input.description.trim()) return "";
  const t = builderText[lang];
  return [
    startupPrompt(lang),
    `${t.name}:\n${input.name.trim() || t.undecided}`,
    `${t.description}:\n${input.description.trim()}`,
    `${t.notes}:\n${input.notes.trim() || t.clarify}`,
    t.instruction,
  ].join("\n\n");
}

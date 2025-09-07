// ===============================
// Snippet SAT Writing: Grammar 2 (Pronoun & Modifier)
// ===============================
const snippets_sat_writing_grammar2 = `
<h3>✍️ SAT Writing – Grammar 2: Pronoun & Modifier</h3>

<p><b>1. Pronoun (Đại từ):</b></p>
<ul>
  <li>Đại từ phải <i>khớp về số và ngôi</i> với danh từ nó thay thế.<br>
      Ví dụ: <i>Each student must bring his or her book.</i></li>
  <li>Tránh <b>pronoun ambiguity</b> (đại từ mơ hồ).<br>
      Ví dụ sai: <i>When Jim met Tom, he was happy.</i> (ai happy?)</li>
</ul>

<p><b>2. Modifier (Bổ ngữ miêu tả):</b></p>
<ul>
  <li>Bổ ngữ phải đặt gần từ nó miêu tả.<br>
      Ví dụ sai: <i>Walking to the store, the rain started.</i><br>
      Sửa: <i>Walking to the store, I felt the rain start.</i></li>
  <li>Tránh <b>dangling modifier</b> (bổ ngữ lửng lơ không rõ chủ thể).</li>
</ul>

<p><b>3. Lưu ý:</b> Luôn kiểm tra xem <i>pronoun</i> và <i>modifier</i> có rõ ràng, hợp lý hay không.</p>
`;


// ===============================
// Quiz SAT Writing: Grammar 2
// ===============================
const quiz_sat_writing_grammar2 = [
  {
    question: "Choose the correct sentence:",
    options: [
      "A. Each of the players must bring their uniform.",
      "B. Each of the players must bring his or her uniform.",
      "C. Each of the players must bring its uniform.",
      "D. Each of the players must bring they uniform."
    ],
    answer: "B. Each of the players must bring his or her uniform.",
    explanation: "‘Each’ = số ít → dùng 'his or her'."
  },
  {
    question: "Fix the modifier: 'Running down the street, the backpack fell off.'",
    options: [
      "A. Running down the street, the boy’s backpack fell off.",
      "B. The backpack fell off running down the street.",
      "C. Running down the street, fell off the backpack.",
      "D. The boy’s backpack running down the street fell off."
    ],
    answer: "A. Running down the street, the boy’s backpack fell off.",
    explanation: "Bổ ngữ 'Running…' phải mô tả chủ thể rõ ràng (the boy)."
  },
  {
    question: "Which sentence avoids pronoun ambiguity?",
    options: [
      "A. When Sarah spoke to Lisa, she was nervous.",
      "B. Sarah was nervous when she spoke to Lisa.",
      "C. When Sarah spoke to Lisa, she was nervous about her.",
      "D. Speaking to Lisa, Sarah was nervous."
    ],
    answer: "B. Sarah was nervous when she spoke to Lisa.",
    explanation: "Câu B rõ ràng: Sarah là người nervous."
  },
  {
    question: "Identify the error: 'The teacher told the student that they must study harder.'",
    options: [
      "A. 'they' không rõ ràng",
      "B. 'teacher' sai số",
      "C. 'student' sai số",
      "D. Không có lỗi"
    ],
    answer: "A. 'they' không rõ ràng",
    explanation: "Không rõ 'they' = teacher hay student."
  },
  {
    question: "Choose the correct sentence:",
    options: [
      "A. Hoping to succeed, the exam was studied hard by John.",
      "B. Hoping to succeed, John studied hard for the exam.",
      "C. The exam, hoping to succeed, was studied hard by John.",
      "D. Hoping to succeed, studied John hard the exam."
    ],
    answer: "B. Hoping to succeed, John studied hard for the exam.",
    explanation: "Modifier 'Hoping to succeed' phải gắn với John, không phải 'exam'."
  }
];

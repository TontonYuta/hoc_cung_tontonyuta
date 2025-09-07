// ===============================
// Snippet SAT Writing: Grammar 1 (Subject–Verb Agreement)
// ===============================
const snippets_sat_writing_grammar1 = `
<h3>✍️ SAT Writing – Grammar 1: Subject–Verb Agreement</h3>

<p><b>1. Quy tắc cơ bản:</b></p>
<ul>
  <li>Chủ ngữ số ít đi với động từ số ít: <i>The cat runs.</i></li>
  <li>Chủ ngữ số nhiều đi với động từ số nhiều: <i>The cats run.</i></li>
</ul>

<p><b>2. Một số trường hợp đặc biệt:</b></p>
<ul>
  <li>Các cụm nối bằng <i>and</i> thường là số nhiều. <br>
      Ví dụ: <i>Tom and Jerry are friends.</i></li>
  <li>Các cụm nối bằng <i>or / either...or / neither...nor</i> → động từ phụ thuộc vào chủ ngữ gần nhất. <br>
      Ví dụ: <i>Neither the teacher nor the students are ready.</i></li>
  <li>Các danh từ chỉ số lượng, khoảng cách, thời gian thường coi là số ít. <br>
      Ví dụ: <i>Ten dollars is enough.</i></li>
</ul>

<p><b>3. Lưu ý:</b> Tránh nhầm lẫn với từ chen ngang (prepositional phrase). <br>
Ví dụ: <i>The bouquet of roses <u>is</u> beautiful.</i></p>
`;


// ===============================
// Quiz SAT Writing: Grammar 1
// ===============================
const quiz_sat_writing_grammar1 = [
  {
    question: "Which sentence is correct?",
    options: [
      "A. The list of items are on the desk.",
      "B. The list of items is on the desk.",
      "C. The lists of item is on the desk.",
      "D. The list are on the desk."
    ],
    answer: "B. The list of items is on the desk.",
    explanation: "Chủ ngữ là 'The list' (số ít) → dùng 'is'."
  },
  {
    question: "Neither the teacher nor the students ___ ready for the trip.",
    options: [
      "A. is",
      "B. are",
      "C. was",
      "D. be"
    ],
    answer: "B. are",
    explanation: "Động từ theo chủ ngữ gần nhất 'students' (số nhiều) → 'are'."
  },
  {
    question: "Ten miles ___ a long distance to walk.",
    options: [
      "A. is",
      "B. are",
      "C. were",
      "D. have"
    ],
    answer: "A. is",
    explanation: "Khoảng cách → coi là số ít → dùng 'is'."
  },
  {
    question: "The bouquet of roses ___ on the table.",
    options: [
      "A. is",
      "B. are",
      "C. were",
      "D. have been"
    ],
    answer: "A. is",
    explanation: "Chủ ngữ chính là 'bouquet' (số ít) → 'is'."
  },
  {
    question: "Either the manager or the employees ___ responsible for the error.",
    options: [
      "A. is",
      "B. are",
      "C. was",
      "D. has been"
    ],
    answer: "B. are",
    explanation: "Theo chủ ngữ gần nhất 'employees' (số nhiều) → 'are'."
  }
];

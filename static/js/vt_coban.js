// ===============================
// Snippet Vecto: Cơ bản
// ===============================
const snippets_vt_coban = `
<h3>📐 Vecto cơ bản</h3>

<p><b>1. Khái niệm:</b></p>
<ul>
  <li>Vecto \\( \\overrightarrow{a} \\) được xác định bởi <i>điểm đầu</i> và <i>điểm cuối</i>.</li>
  <li>Độ dài: \\( |\\overrightarrow{a}| \\).</li>
  <li>Hai vecto \\( \\overrightarrow{a}, \\overrightarrow{b} \\) cùng phương nếu chúng song song hoặc cùng nằm trên một đường thẳng.</li>
  <li>\\( \\overrightarrow{AB} = \\overrightarrow{CD} \\) nếu cùng phương, cùng hướng và cùng độ dài.</li>
</ul>

<p><b>2. Phép toán:</b></p>
<ul>
  <li>Cộng: \\( \\overrightarrow{a} + \\overrightarrow{b} \\).</li>
  <li>Trừ: \\( \\overrightarrow{a} - \\overrightarrow{b} = \\overrightarrow{a} + (-\\overrightarrow{b}) \\).</li>
  <li>Nhân với số: \\( k\\overrightarrow{a} \\) có cùng phương với \\( \\overrightarrow{a} \\), độ dài \\( |k||\\overrightarrow{a}| \\).</li>
</ul>

<p><b>3. Tọa độ vecto:</b></p>
<ul>
  <li>Trong mặt phẳng Oxy: \\( \\overrightarrow{a} = (x; y) \\).</li>
  <li>Trong không gian Oxyz: \\( \\overrightarrow{a} = (x; y; z) \\).</li>
  <li>Độ dài: \\( |\\overrightarrow{a}| = \\sqrt{x^2+y^2} \\) hoặc \\( \\sqrt{x^2+y^2+z^2} \\).</li>
</ul>
`;


// ===============================
// Quiz Vecto: Cơ bản
// ===============================
const quiz_vt_coban = [
  {
    question: "Cho \\( \\overrightarrow{a} = (3;4) \\). Độ dài \\( |\\overrightarrow{a}| \\) là:",
    options: [
      "A. 5",
      "B. 7",
      "C. 12",
      "D. 25"
    ],
    answer: "A. 5",
    explanation: "Độ dài = √(3²+4²)=√25=5."
  },
  {
    question: "Hai vecto nào sau đây cùng phương?",
    options: [
      "A. (2;3) và (3;2)",
      "B. (1;2) và (2;4)",
      "C. (1;0) và (0;1)",
      "D. (2;1) và (−1;2)"
    ],
    answer: "B. (1;2) và (2;4)",
    explanation: "Vì (2;4)=2·(1;2)."
  },
  {
    question: "Cho A(1;2), B(4;6). Tọa độ \\( \\overrightarrow{AB} \\) là:",
    options: [
      "A. (3;4)",
      "B. (−3;−4)",
      "C. (5;8)",
      "D. (2;2)"
    ],
    answer: "A. (3;4)",
    explanation: "AB=(xB−xA; yB−yA)=(4−1;6−2)=(3;4)."
  },
  {
    question: "Cho \\( \\overrightarrow{a}=(2;−1) \\). Vecto đối của \\( \\overrightarrow{a} \\) là:",
    options: [
      "A. (2;1)",
      "B. (−2;1)",
      "C. (−2;−1)",
      "D. (1;−2)"
    ],
    answer: "B. (−2;1)",
    explanation: "Vecto đối là −a=(−2;1)."
  },
  {
    question: "Trong không gian, độ dài \\( \\overrightarrow{u}=(1;2;2) \\) là:",
    options: [
      "A. 3",
      "B. √6",
      "C. √9",
      "D. 7"
    ],
    answer: "A. 3",
    explanation: "|u|=√(1²+2²+2²)=√9=3."
  }
];

// ===============================
// Snippet Chuyên đề 5: Nhận diện hàm số
// ===============================
const snippets_hamso_nhandien = `
<h3>📊 Chuyên đề 5: Nhận diện hàm số</h3>

<p><b>1. Một số dạng hàm số cơ bản:</b></p>
<ul>
  <li><b>Hàm số bậc nhất:</b> \\( y = ax + b, a \\ne 0 \\).</li>
  <li><b>Hàm số bậc hai:</b> \\( y = ax^2 + bx + c, a \\ne 0 \\).</li>
  <li><b>Hàm đa thức:</b> \\( y = a_n x^n + ... + a_1 x + a_0 \\).</li>
  <li><b>Hàm phân thức:</b> \\( y = \\dfrac{P(x)}{Q(x)} \\), với \\( Q(x) \\ne 0 \\).</li>
  <li><b>Hàm mũ:</b> \\( y = a^x, a>0, a\\ne1 \\).</li>
  <li><b>Hàm logarit:</b> \\( y = \\log_a x, a>0, a\\ne1, x>0 \\).</li>
  <li><b>Hàm lượng giác:</b> \\( y = \\sin x, \\cos x, \\tan x, \\cot x \\).</li>
</ul>

<p><b>2. Cách nhận diện nhanh:</b></p>
<ul>
  <li>Nhìn vào dạng biểu thức: đa thức, phân thức, chứa mũ, logarit hay lượng giác.</li>
  <li>Phân biệt bậc của đa thức qua số mũ cao nhất của x.</li>
</ul>
`;


// ===============================
// Quiz Chuyên đề 5: Nhận diện hàm số
// ===============================
const quiz_hamso_nhandien = [
  {
    question: "Hàm số \\( y = 2x + 1 \\) là:",
    options: [
      "A. Hàm bậc nhất",
      "B. Hàm bậc hai",
      "C. Hàm mũ",
      "D. Hàm logarit"
    ],
    answer: "A. Hàm bậc nhất",
    explanation: `Dạng \\( y=ax+b, a=2 \\ne 0 \\) ⇒ hàm bậc nhất.`
  },
  {
    question: "Hàm số \\( y = -x^2 + 3x - 1 \\) là:",
    options: [
      "A. Hàm bậc nhất",
      "B. Hàm bậc hai",
      "C. Hàm phân thức",
      "D. Hàm mũ"
    ],
    answer: "B. Hàm bậc hai",
    explanation: `Dạng \\( y=ax^2+bx+c, a=-1 \\ne 0 \\) ⇒ hàm bậc hai.`
  },
  {
    question: "Hàm số \\( y = \\dfrac{1}{x+1} \\) là:",
    options: [
      "A. Hàm phân thức",
      "B. Hàm bậc hai",
      "C. Hàm logarit",
      "D. Hàm lượng giác"
    ],
    answer: "A. Hàm phân thức",
    explanation: `Biểu thức dạng \\( P(x)/Q(x) \\) ⇒ hàm phân thức.`
  },
  {
    question: "Hàm số \\( y = 3^x \\) là:",
    options: [
      "A. Hàm mũ",
      "B. Hàm logarit",
      "C. Hàm đa thức",
      "D. Hàm bậc nhất"
    ],
    answer: "A. Hàm mũ",
    explanation: `Có dạng \\( a^x, a=3>0, a\\ne1 \\) ⇒ hàm mũ.`
  },
  {
    question: "Hàm số \\( y = \\log_2 x \\) là:",
    options: [
      "A. Hàm mũ",
      "B. Hàm logarit",
      "C. Hàm bậc nhất",
      "D. Hàm phân thức"
    ],
    answer: "B. Hàm logarit",
    explanation: `Dạng \\( \\log_a x, a=2>0, a\\ne1, x>0 \\) ⇒ hàm logarit.`
  }
];
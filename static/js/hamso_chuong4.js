// ===============================
// Snippet Chuyên đề 4: Tiệm cận của hàm số
// ===============================
const snippets_hamso_tiemcan = `
<h3>📊 Chuyên đề 4: Tiệm cận của hàm số</h3>

<p><b>1. Khái niệm:</b></p>
<ul>
  <li>Đường thẳng \\( x = a \\) là <b>tiệm cận đứng</b> nếu \\( \\lim_{x \\to a^+} f(x) = \\pm \\infty \\) hoặc \\( \\lim_{x \\to a^-} f(x) = \\pm \\infty \\).</li>
  <li>Đường thẳng \\( y = b \\) là <b>tiệm cận ngang</b> nếu \\( \\lim_{x \\to \\pm\\infty} f(x) = b \\).</li>
  <li>Đường thẳng \\( y = ax + b \\) là <b>tiệm cận xiên</b> nếu \\( \\lim_{x \\to \\pm\\infty} [f(x) - (ax+b)] = 0 \\).</li>
</ul>

<p><b>2. Cách tìm tiệm cận:</b></p>
<ol>
  <li>Xét các giá trị làm tử số/mẫu số bằng 0 để tìm <i>tiệm cận đứng</i>.</li>
  <li>Tính giới hạn khi \\( x \\to \\pm\\infty \\) để tìm <i>tiệm cận ngang</i> hoặc <i>xiên</i>.</li>
</ol>
`;


// ===============================
// Quiz Chuyên đề 4: Tiệm cận ngang (5 câu đầu)
// ===============================
const quiz_hamso_tiemcan = [
  {
    question: "Hàm số \\( y = \\dfrac{2x+1}{x+3} \\) có tiệm cận ngang là:",
    options: [
      "A. \\( y = 1 \\)",
      "B. \\( y = 2 \\)",
      "C. \\( y = 0 \\)",
      "D. \\( y = \\infty \\)"
    ],
    answer: "B. \\( y = 2 \\)",
    explanation: `Bậc tử và mẫu đều là 1 ⇒ tiệm cận ngang là:  
    \\( y = \\dfrac{2}{1} = 2 \\).`
  },
  {
    question: "Hàm số \\( y = \\dfrac{x^2 + 1}{x^2 + 2} \\) có tiệm cận ngang là:",
    options: [
      "A. \\( y = 1 \\)",
      "B. \\( y = 0 \\)",
      "C. \\( y = 2 \\)",
      "D. \\( y = \\dfrac{1}{2} \\)"
    ],
    answer: "A. \\( y = 1 \\)",
    explanation: `Bậc tử = bậc mẫu ⇒ tiệm cận ngang:  
    \\( y = \\dfrac{1}{1} = 1 \\).`
  },
  {
    question: "Hàm số \\( y = \\dfrac{5x^3 + 1}{2x^3 - x} \\) có tiệm cận ngang là:",
    options: [
      "A. \\( y = 0 \\)",
      "B. \\( y = \\dfrac{5}{2} \\)",
      "C. \\( y = 1 \\)",
      "D. \\( y = \\infty \\)"
    ],
    answer: "B. \\( y = \\dfrac{5}{2} \\)",
    explanation: `Bậc tử = bậc mẫu ⇒ tiệm cận ngang là:  
    \\( y = \\dfrac{5}{2} \\).`
  },
  {
    question: "Hàm số \\( y = \\dfrac{1}{x^2 + 1} \\) có tiệm cận ngang là:",
    options: [
      "A. \\( y = 0 \\)",
      "B. \\( y = 1 \\)",
      "C. \\( y = \\infty \\)",
      "D. Không có"
    ],
    answer: "A. \\( y = 0 \\)",
    explanation: `\\( \\lim_{x \\to \\pm\\infty} \\dfrac{1}{x^2+1} = 0 \\)  
    ⇒ Tiệm cận ngang là \\( y = 0 \\).`
  },
  {
    question: "Hàm số \\( y = \\dfrac{3x^2 + 2x + 1}{x^2 - 1} \\) có tiệm cận ngang là:",
    options: [
      "A. \\( y = 3 \\)",
      "B. \\( y = 0 \\)",
      "C. \\( y = 1 \\)",
      "D. \\( y = \\infty \\)"
    ],
    answer: "A. \\( y = 3 \\)",
    explanation: `Bậc tử = bậc mẫu ⇒ tiệm cận ngang:  
    \\( y = \\dfrac{3}{1} = 3 \\).`
  }
];
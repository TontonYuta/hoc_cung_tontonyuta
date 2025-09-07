// ===============================
// Snippet Tích phân: Nguyên hàm
// ===============================
const snippets_tp_nguyenham = `
<h3>📘 Nguyên hàm</h3>

<p><b>1. Định nghĩa:</b></p>
<p>Cho hàm số \\( f(x) \\) xác định trên khoảng \\( I \\). 
Một hàm số \\( F(x) \\) được gọi là <i>nguyên hàm</i> của \\( f(x) \\) trên \\( I \\) nếu:</p>
<p style="text-align:center">\\( F'(x) = f(x), \\forall x \\in I \\).</p>

<p><b>2. Kí hiệu:</b></p>
<p>\\( \\int f(x) dx = F(x) + C \\), trong đó C là hằng số tùy ý.</p>

<p><b>3. Tính chất cơ bản:</b></p>
<ul>
<li>\\( \\int (af(x) + bg(x)) dx = a \\int f(x) dx + b \\int g(x) dx \\).</li>
<li>Nếu \\( f(x) \\equiv 0 \\) thì \\( \\int f(x) dx = C \\).</li>
</ul>

<p><b>4. Bảng nguyên hàm cơ bản:</b></p>
<ul>
<li>\\( \\int k dx = kx + C \\).</li>
<li>\\( \\int x^n dx = \\dfrac{x^{n+1}}{n+1} + C, \\; n \\neq -1 \\).</li>
<li>\\( \\int \\dfrac{1}{x} dx = \\ln |x| + C \\).</li>
<li>\\( \\int e^x dx = e^x + C \\).</li>
<li>\\( \\int \\sin x dx = -\\cos x + C \\).</li>
<li>\\( \\int \\cos x dx = \\sin x + C \\).</li>
</ul>
`;


// ===============================
// Quiz Tích phân: Nguyên hàm
// ===============================
const quiz_tp_nguyenham = [
  {
    question: "Nguyên hàm của \\( f(x) = 2x \\) là:",
    options: [
      "A. \\( x^2 + C \\)",
      "B. \\( 2x^2 + C \\)",
      "C. \\( x + C \\)",
      "D. \\( \\ln|x| + C \\)"
    ],
    answer: "A. \\( x^2 + C \\)",
    explanation: "Vì \\( (x^2)' = 2x \\)."
  },
  {
    question: "Nguyên hàm của \\( f(x) = 3x^2 \\) là:",
    options: [
      "A. \\( x^3 + C \\)",
      "B. \\( x^2 + C \\)",
      "C. \\( 3x^3 + C \\)",
      "D. \\( \\dfrac{x^3}{3} + C \\)"
    ],
    answer: "A. \\( x^3 + C \\)",
    explanation: "Vì \\( (x^3)' = 3x^2 \\)."
  },
  {
    question: "Nguyên hàm của \\( f(x) = e^x \\) là:",
    options: [
      "A. \\( e^x + C \\)",
      "B. \\( x e^x + C \\)",
      "C. \\( \\ln|x| + C \\)",
      "D. \\( \\cos x + C \\)"
    ],
    answer: "A. \\( e^x + C \\)",
    explanation: "Vì đạo hàm của \\( e^x \\) là chính nó."
  },
  {
    question: "Nguyên hàm của \\( f(x) = \\dfrac{1}{x} \\) là:",
    options: [
      "A. \\( x + C \\)",
      "B. \\( \\ln|x| + C \\)",
      "C. \\( \\dfrac{1}{x^2} + C \\)",
      "D. \\( e^x + C \\)"
    ],
    answer: "B. \\( \\ln|x| + C \\)",
    explanation: "Vì \\( (\\ln|x|)' = 1/x \\)."
  },
  {
    question: "Nguyên hàm của \\( f(x) = \\cos x \\) là:",
    options: [
      "A. \\( \\sin x + C \\)",
      "B. \\( -\\cos x + C \\)",
      "C. \\( -\\sin x + C \\)",
      "D. \\( \\cos x + C \\)"
    ],
    answer: "A. \\( \\sin x + C \\)",
    explanation: "Vì \\( (\\sin x)' = \\cos x \\)."
  }
];

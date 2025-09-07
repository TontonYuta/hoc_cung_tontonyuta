// ===============================
// Snippet Đạo hàm: Các quy tắc tính
// ===============================
const snippets_daoham_quytac = `
<h3>📘 Các quy tắc tính đạo hàm</h3>

<p><b>1. Quy tắc tổng (hiệu):</b></p>
<ul>
<li>\\( (f(x) + g(x))' = f'(x) + g'(x) \\).</li>
<li>\\( (f(x) - g(x))' = f'(x) - g'(x) \\).</li>
</ul>

<p><b>2. Quy tắc tích:</b></p>
<p>\\( (f(x)g(x))' = f'(x)g(x) + f(x)g'(x) \\).</p>

<p><b>3. Quy tắc thương:</b></p>
<p>\\( \\left( \\dfrac{f(x)}{g(x)} \\right)' = \\dfrac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}, g(x) \\neq 0 \\).</p>

<p><b>4. Quy tắc hàm hợp (chain rule):</b></p>
<p>Nếu \\( y = f(u), u = g(x) \\) thì \\( y' = f'(u) \\cdot g'(x) \\).</p>

<p><b>5. Một số ví dụ:</b></p>
<ul>
<li>\\( (\\sin(3x))' = 3\\cos(3x) \\).</li>
<li>\\( (e^{2x})' = 2e^{2x} \\).</li>
<li>\\( (\\sqrt{x^2+1})' = \\dfrac{x}{\\sqrt{x^2+1}} \\).</li>
</ul>
`;


// ===============================
// Quiz Đạo hàm: Các quy tắc tính
// ===============================
const quiz_daoham_quytac = [
  {
    question: "Đạo hàm của \\( y = 2x^3 + 5x \\) là:",
    options: ["A. 6x^2 + 5", "B. 6x + 5", "C. 3x^2 + 5", "D. 2x^2 + 5"],
    answer: "A. 6x^2 + 5",
    explanation: "Áp dụng quy tắc tổng: \\( (2x^3)' = 6x^2, (5x)' = 5 \\)."
  },
  {
    question: "Đạo hàm của \\( y = (x^2+1)(x-3) \\) là:",
    options: [
      "A. 2x(x-3) + (x^2+1)",
      "B. 2x(x-3) + (x^2+1)·1",
      "C. 2x(x-3) + (x^2+1)",
      "D. Cả A và B đều đúng"
    ],
    answer: "D. Cả A và B đều đúng",
    explanation: "Quy tắc tích: \\( u'v + uv' \\)."
  },
  {
    question: "Đạo hàm của \\( y = \\dfrac{x^2+1}{x} \\) là:",
    options: [
      "A. 1 - \\dfrac{1}{x^2}",
      "B. \\dfrac{2x·x - (x^2+1)·1}{x^2}",
      "C. \\dfrac{x^2-1}{x^2}",
      "D. B và C đều đúng"
    ],
    answer: "D. B và C đều đúng",
    explanation: "Quy tắc thương: \\( (u/v)' = (u'v - uv')/v^2 \\). Sau rút gọn được \\( (x^2-1)/x^2 \\)."
  },
  {
    question: "Đạo hàm của \\( y = \\sin(3x) \\) là:",
    options: ["A. 3\\cos(3x)", "B. \\cos(3x)", "C. \\sin(3x)", "D. 3\\sin(3x)"],
    answer: "A. 3\\cos(3x)",
    explanation: "Quy tắc hàm hợp: \\( (\\sin u)' = \\cos u·u' \\) với \\( u = 3x, u' = 3 \\)."
  },
  {
    question: "Đạo hàm của \\( y = e^{2x+1} \\) là:",
    options: ["A. 2e^{2x+1}", "B. e^{2x+1}", "C. 2e^x", "D. e^{2x}"],
    answer: "A. 2e^{2x+1}",
    explanation: "Quy tắc hàm hợp: \\( (e^u)' = e^u·u' \\) với \\( u = 2x+1, u' = 2 \\)."
  }
];

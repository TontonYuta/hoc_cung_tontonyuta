// ===============================
// Snippet Tích phân: Các quy tắc tính
// ===============================
const snippets_tp_quytac = `
<h3>📘 Các quy tắc tính tích phân</h3>

<p><b>1. Tính chất tuyến tính:</b></p>
<ul>
<li>\\( \\int (af(x) + bg(x)) dx = a \\int f(x) dx + b \\int g(x) dx \\).</li>
<li>\\( \\int f'(x) dx = f(x) + C \\).</li>
</ul>

<p><b>2. Quy tắc đổi biến:</b></p>
<p>Nếu đặt \\( u = g(x) \\Rightarrow du = g'(x)dx \\) thì:</p>
<p style="text-align:center">\\( \\int f(g(x))g'(x) dx = \\int f(u) du \\).</p>

<p><b>3. Quy tắc tích phân từng phần:</b></p>
<p>Nếu \\( u = u(x), dv = v'(x) dx \\) thì:</p>
<p style="text-align:center">\\( \\int u dv = uv - \\int v du \\).</p>
`;


// ===============================
// Quiz Tích phân: Các quy tắc tính
// ===============================
const quiz_tp_quytac = [
  {
    question: "Tính \\( \\int (3x^2 + 2x) dx \\).",
    options: [
      "A. \\( x^3 + x^2 + C \\)",
      "B. \\( x^3 + x^2 + 2x + C \\)",
      "C. \\( x^3 + x^2 + C \\)",
      "D. \\( x^3 + \\dfrac{x^2}{2} + C \\)"
    ],
    answer: "A. \\( x^3 + x^2 + C \\)",
    explanation: "Áp dụng tuyến tính: \\( \\int 3x^2 dx = x^3, \\int 2x dx = x^2 \\)."
  },
  {
    question: "Tính \\( \\int 2x e^{x^2} dx \\).",
    options: [
      "A. \\( e^{x^2} + C \\)",
      "B. \\( 2e^{x^2} + C \\)",
      "C. \\( x e^{x^2} + C \\)",
      "D. \\( (x^2+1)e^{x^2} + C \\)"
    ],
    answer: "A. \\( e^{x^2} + C \\)",
    explanation: "Đặt \\( u = x^2, du = 2x dx \\). Khi đó \\( \\int 2x e^{x^2} dx = \\int e^u du = e^u + C = e^{x^2} + C \\)."
  },
  {
    question: "Tính \\( \\int \\cos(3x) dx \\).",
    options: [
      "A. \\( \\sin(3x) + C \\)",
      "B. \\( \\dfrac{1}{3}\\sin(3x) + C \\)",
      "C. \\( 3\\sin(3x) + C \\)",
      "D. \\( \\dfrac{1}{3}\\cos(3x) + C \\)"
    ],
    answer: "B. \\( \\dfrac{1}{3}\\sin(3x) + C \\)",
    explanation: "Đặt \\( u = 3x, du = 3dx \\). Khi đó \\( \\int \\cos(3x) dx = \\dfrac{1}{3}\\sin(3x) + C \\)."
  },
  {
    question: "Tính \\( \\int x e^x dx \\).",
    options: [
      "A. \\( (x-1)e^x + C \\)",
      "B. \\( (x+1)e^x + C \\)",
      "C. \\( x e^x + C \\)",
      "D. \\( e^x + C \\)"
    ],
    answer: "A. \\( (x-1)e^x + C \\)",
    explanation: "Tích phân từng phần: u = x, dv = e^x dx. Kết quả: uv - ∫vdu = x e^x - ∫e^x dx = (x-1)e^x + C."
  },
  {
    question: "Tính \\( \\int \\ln x dx \\), với x > 0.",
    options: [
      "A. \\( x \\ln x - x + C \\)",
      "B. \\( \\dfrac{(\\ln x)^2}{2} + C \\)",
      "C. \\( \\dfrac{1}{x} + C \\)",
      "D. \\( e^x + C \\)"
    ],
    answer: "A. \\( x \\ln x - x + C \\)",
    explanation: "Tích phân từng phần: u = ln x, dv = dx. Kết quả: uv - ∫vdu = x ln x - ∫1 dx = x ln x - x + C."
  }
];

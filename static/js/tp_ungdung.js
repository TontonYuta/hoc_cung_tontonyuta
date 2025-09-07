// ===============================
// Snippet Tích phân: Ứng dụng
// ===============================
const snippets_tp_ungdung = `
<h3>📘 Ứng dụng của tích phân</h3>

<p><b>1. Diện tích hình phẳng:</b></p>
<p>Diện tích hình phẳng giới hạn bởi đồ thị \\( y=f(x), y=g(x) \\) và hai đường thẳng \\( x=a, x=b \\):</p>
<p style="text-align:center">\\( S = \\int_a^b |f(x) - g(x)| dx \\).</p>

<p><b>2. Thể tích khối tròn xoay:</b></p>
<p>Thể tích khối tròn xoay quanh trục Ox của miền giới hạn bởi \\( y=f(x) \\) trên \\([a;b]\\):</p>
<p style="text-align:center">\\( V = \\pi \\int_a^b [f(x)]^2 dx \\).</p>

<p><b>3. Độ dài cung:</b></p>
<p>Độ dài cung của đồ thị \\( y=f(x) \\) từ \\( x=a \\) đến \\( x=b \\):</p>
<p style="text-align:center">\\( L = \\int_a^b \\sqrt{1 + [f'(x)]^2} dx \\).</p>

<p><b>4. Diện tích xung quanh khối tròn xoay:</b></p>
<p style="text-align:center">\\( S = 2\\pi \\int_a^b f(x)\\sqrt{1+[f'(x)]^2} dx \\).</p>
`;


// ===============================
// Quiz Tích phân: Ứng dụng
// ===============================
const quiz_tp_ungdung = [
  {
    question: "Diện tích hình phẳng giới hạn bởi \\( y=x \\), trục hoành và đường thẳng \\( x=2 \\) là:",
    options: [
      "A. \\( 2 \\)",
      "B. \\( 4 \\)",
      "C. \\( 1 \\)",
      "D. \\( 3 \\)"
    ],
    answer: "A. \\( 2 \\)",
    explanation: "Diện tích: \\( S = \\int_0^2 x dx = [x^2/2]_0^2 = 2 \\)."
  },
  {
    question: "Thể tích khối tròn xoay tạo bởi miền dưới đồ thị \\( y=x \\) trên [0;1] quanh trục Ox:",
    options: [
      "A. \\( \\pi/4 \\)",
      "B. \\( \\pi/3 \\)",
      "C. \\( \\pi/2 \\)",
      "D. \\( \\pi \\)"
    ],
    answer: "B. \\( \\pi/3 \\)",
    explanation: "Công thức: \\( V=\\pi\\int_0^1 (x^2)dx = \\pi[x^3/3]_0^1 = \\pi/3 \\)."
  },
  {
    question: "Diện tích hình phẳng giới hạn bởi \\( y=\\sin x \\) và trục hoành từ 0 đến \\( \\pi \\):",
    options: [
      "A. \\( 1 \\)",
      "B. \\( 2 \\)",
      "C. \\( 3 \\)",
      "D. \\( \\pi \\)"
    ],
    answer: "B. \\( 2 \\)",
    explanation: "Diện tích: \\( S=\\int_0^\\pi \\sin x dx = [-\\cos x]_0^\\pi = 2 \\)."
  },
  {
    question: "Độ dài cung của đồ thị \\( y=x^2 \\) từ 0 đến 1 là:",
    options: [
      "A. \\( \\int_0^1 \\sqrt{1+4x^2} dx \\)",
      "B. \\( \\int_0^1 (1+4x^2) dx \\)",
      "C. \\( \\int_0^1 \\sqrt{1+2x} dx \\)",
      "D. \\( \\int_0^1 (1+x^2) dx \\)"
    ],
    answer: "A. \\( \\int_0^1 \\sqrt{1+4x^2} dx \\)",
    explanation: "Vì \\( f'(x)=2x \\). Công thức: \\( L=\\int_0^1\\sqrt{1+(2x)^2}dx=\\int_0^1\\sqrt{1+4x^2}dx \\)."
  },
  {
    question: "Thể tích khối tròn xoay quanh trục Ox giới hạn bởi đồ thị \\( y=\\sqrt{x} \\) trên [0;1]:",
    options: [
      "A. \\( \\pi/2 \\)",
      "B. \\( \\pi/3 \\)",
      "C. \\( \\pi/4 \\)",
      "D. \\( 2\\pi/5 \\)"
    ],
    answer: "A. \\( \\pi/2 \\)",
    explanation: "Công thức: \\( V=\\pi\\int_0^1 (\\sqrt{x})^2 dx = \\pi\\int_0^1 x dx = \\pi/2 \\)."
  }
];

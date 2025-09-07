// ===============================
// Snippet Vecto
// ===============================
const snippets_vecto = `
<h3>➡️ Vecto</h3>

<p><b>1. Khái niệm:</b></p>
<p>Vecto được xác định bởi một đoạn thẳng có hướng, gồm: điểm đầu và điểm cuối.</p>

<p><b>2. Các phép toán:</b></p>
<ul>
  <li><b>Cộng vecto:</b> \\( \\vec{a} + \\vec{b} \\) = vecto theo quy tắc hình bình hành.</li>
  <li><b>Nhân vecto với số:</b> \\( k \\cdot \\vec{a} \\) cùng phương với \\( \\vec{a} \\), độ dài gấp |k| lần.</li>
</ul>

<p><b>3. Tích vô hướng:</b></p>
<p>
\\( \\vec{a} \\cdot \\vec{b} = |a||b| \\cos \\theta = x_1x_2 + y_1y_2 \\)
</p>

<ul>
  <li>Nếu \\( \\vec{a} \\perp \\vec{b} \\) thì \\( \\vec{a} \\cdot \\vec{b} = 0 \\).</li>
  <li>Nếu \\( \\vec{a} \\parallel \\vec{b} \\) thì tồn tại k: \\( \\vec{a} = k\\vec{b} \\).</li>
</ul>
`;

// ===============================
// Quiz Vecto
// ===============================
const quiz_vecto = [
  {
    question: "Cho \\( \\vec{a} = (2;3) \\), \\( \\vec{b} = (1;-1) \\). Tích vô hướng \\( \\vec{a} \\cdot \\vec{b} \\) bằng:",
    options: ["-1", "-2", "5", "7"],
    answer: "-1"
  },
  {
    question: "Điều kiện để hai vecto \\( \\vec{a}, \\vec{b} \\) vuông góc là:",
    options: [
      "\\( \\vec{a} \\cdot \\vec{b} = 0 \\)",
      "\\( \\vec{a} = k\\vec{b} \\)",
      "\\( |a| = |b| \\)",
      "\\( \\theta = 0^\\circ \\)"
    ],
    answer: "\\( \\vec{a} \\cdot \\vec{b} = 0 \\)"
  },
  {
    question: "Nếu \\( \\vec{a} = (2;4) \\) và \\( \\vec{b} = (1;2) \\), thì \\( \\vec{a} \\parallel \\vec{b} \\) vì:",
    options: [
      "Tỉ số hoành và tung bằng nhau",
      "Tích vô hướng bằng 0",
      "Có cùng độ dài",
      "Cùng phương và cùng chiều"
    ],
    answer: "Tỉ số hoành và tung bằng nhau"
  }
];

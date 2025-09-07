// ===============================
// Snippet Xác suất có điều kiện
// ===============================
const snippets_xacsuatDK = `
<h3>🎲 Xác suất có điều kiện</h3>

<p><b>Định nghĩa:</b></p>
<p>
Với hai biến cố A, B và \\( P(B) > 0 \\), xác suất có điều kiện của A khi biết B xảy ra là:
</p>
<p style="text-align:center">
  \\( P(A|B) = \\dfrac{P(A \\cap B)}{P(B)} \\)
</p>

<p><b>Tính chất:</b></p>
<ul>
  <li>\\( P(A \\cap B) = P(A|B) \\cdot P(B) \\)</li>
  <li>\\( P(A|B) + P(A^c|B) = 1 \\)</li>
</ul>

<p><b>Định lý nhân xác suất:</b></p>
<p>
\\( P(A \\cap B) = P(A) \\cdot P(B|A) = P(B) \\cdot P(A|B) \\)
</p>
`;

// ===============================
// Quiz Xác suất có điều kiện
// ===============================
const quiz_xacsuatDK = [
  {
    question: "Công thức xác suất có điều kiện là:",
    options: [
      "\\( P(A|B) = \\dfrac{P(A) + P(B)}{2} \\)",
      "\\( P(A|B) = \\dfrac{P(A \\cap B)}{P(B)} \\)",
      "\\( P(A|B) = P(A)P(B) \\)",
      "\\( P(A|B) = \\dfrac{P(B)}{P(A)} \\)"
    ],
    answer: "\\( P(A|B) = \\dfrac{P(A \\cap B)}{P(B)} \\)"
  },
  {
    question: "Cho P(A) = 0.6, P(B) = 0.5, P(A ∩ B) = 0.3. Khi đó P(A|B) = ?",
    options: ["0.3", "0.6", "0.5", "0.75"],
    answer: "0.6"
  },
  {
    question: "Mệnh đề nào sau đây <b>đúng</b>?",
    options: [
      "Nếu A và B độc lập thì P(A|B) = P(A)",
      "Nếu A và B độc lập thì P(A|B) = P(B)",
      "Nếu A và B độc lập thì P(A|B) = 1",
      "Không có đáp án nào đúng"
    ],
    answer: "Nếu A và B độc lập thì P(A|B) = P(A)"
  }
];

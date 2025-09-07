// ===============================
// Snippet TSA HUST: Toán học – Hình học
// ===============================
const snippets_tsa_math_geometry = `
<h3>📐 TSA HUST - Hình học</h3>

<p><b>1. Nội dung trọng tâm:</b></p>
<ul>
  <li>Diện tích, chu vi các hình cơ bản (tam giác, hình tròn, đa giác)</li>
  <li>Quan hệ góc, đường cao, trung tuyến trong tam giác</li>
  <li>Định lý Pythagoras và ứng dụng</li>
  <li>Tính thể tích khối chóp, khối trụ, khối cầu</li>
  <li>Ứng dụng hình học không gian trong thực tế</li>
</ul>
`;

// ===============================
// Quiz TSA HUST: Hình học (A/B/C/D)
// ===============================
const quiz_tsa_math_geometry = [
  {
    question: "Tam giác vuông có cạnh góc vuông bằng 3 và 4. Độ dài cạnh huyền là:",
    options: ["A. 5", "B. 6", "C. 7", "D. 8"],
    answer: "A. 5",
    explanation: "Áp dụng định lý Pythagoras: \\( c = \\sqrt{3^2 + 4^2} = 5 \\)."
  },
  {
    question: "Diện tích hình tròn bán kính 2 là:",
    options: ["A. \\( 2\\pi \\)", "B. \\( 4\\pi \\)", "C. \\( 8\\pi \\)", "D. \\( 16\\pi \\)"],
    answer: "B. \\( 4\\pi \\)",
    explanation: "Công thức: \\( S = \\pi r^2 = \\pi \\cdot 2^2 = 4\\pi \\)."
  },
  {
    question: "Thể tích hình lập phương cạnh 3 là:",
    options: ["A. 9", "B. 18", "C. 27", "D. 36"],
    answer: "C. 27",
    explanation: "Công thức: \\( V = a^3 = 3^3 = 27 \\)."
  },
  {
    question: "Trong tam giác đều cạnh a, chiều cao bằng:",
    options: [
      "A. \\( \\tfrac{a\\sqrt{2}}{2} \\)",
      "B. \\( \\tfrac{a\\sqrt{3}}{2} \\)",
      "C. \\( \\tfrac{a}{2} \\)",
      "D. \\( a\\sqrt{3} \\)"
    ],
    answer: "B. \\( \\tfrac{a\\sqrt{3}}{2} \\)",
    explanation: "Chiều cao = \\( \\frac{\\sqrt{3}}{2}a \\)."
  },
  {
    question: "Hình trụ có bán kính đáy 2 và chiều cao 5. Thể tích là:",
    options: [
      "A. \\( 10\\pi \\)",
      "B. \\( 15\\pi \\)",
      "C. \\( 20\\pi \\)",
      "D. \\( 25\\pi \\)"
    ],
    answer: "C. \\( 20\\pi \\)",
    explanation: "Công thức: \\( V = \\pi r^2 h = \\pi \\cdot 2^2 \\cdot 5 = 20\\pi \\)."
  }
];

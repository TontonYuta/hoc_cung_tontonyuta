// ===============================
// Snippet SAT: Advanced Math
// ===============================
const snippets_sat_advanced = `
<h3>📊 SAT - Advanced Math</h3>

<p><b>1. Khái niệm:</b></p>
<ul>
  <li>Phương trình bậc cao, đa thức</li>
  <li>Bất đẳng thức, tối đa - tối thiểu</li>
  <li>Hàm mũ, logarit, khai triển nhị thức</li>
  <li>Ứng dụng toán học trong bài toán thực tế</li>
</ul>
`;

// ===============================
// Quiz SAT: Advanced Math (A/B/C/D)
// ===============================
const quiz_sat_advanced = [
  {
    question: "Giải phương trình: \\( x^3 - 6x^2 + 11x - 6 = 0 \\)",
    options: ["A. \\( x = 1,2,3 \\)", "B. \\( x = 0,1,6 \\)", "C. \\( x = -1,-2,-3 \\)", "D. \\( x = 1,3,4 \\)"],
    answer: "A. \\( x = 1,2,3 \\)",
    explanation: "Phân tích: \\( x^3 - 6x^2 + 11x - 6 = (x-1)(x-2)(x-3) = 0 \\)"
  },
  {
    question: "Tìm nghiệm nguyên của bất phương trình: \\( x^2 - 5x + 6 < 0 \\)",
    options: ["A. x = 1,2", "B. x = 2,3", "C. x = 3,4", "D. x = 0,1"],
    answer: "B. x = 2,3",
    explanation: "Bất phương trình: \\( x^2 -5x +6 = (x-2)(x-3) < 0 \\) ⇒ 2 < x < 3 ⇒ nghiệm nguyên: x = 2,3"
  },
  {
    question: "Tính \\( \\log_2 32 \\)",
    options: ["A. 4", "B. 5", "C. 6", "D. 2"],
    answer: "B. 5",
    explanation: "\\( 2^5 = 32 ⇒ \\log_2 32 = 5 \\)"
  },
  {
    question: "Khai triển nhị thức: Hệ số của \\( x^3 \\) trong \\( (1 + 2x)^4 \\) là:",
    options: ["A. 8", "B. 24", "C. 32", "D. 16"],
    answer: "C. 32",
    explanation: "Công thức: \\( C_4^3 (2x)^3 = 4*8*x^3 = 32x^3 \\)"
  },
  {
    question: "Giải phương trình mũ: \\( 3^{2x} = 27 \\)",
    options: ["A. x = 1", "B. x = 1.5", "C. x = 2", "D. x = 3"],
    answer: "B. x = 1.5",
    explanation: "\\( 3^{2x} = 3^3 ⇒ 2x = 3 ⇒ x = 1.5 \\)"
  }
];

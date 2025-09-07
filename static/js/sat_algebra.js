// ===============================
// Snippet SAT: Algebra
// ===============================
const snippets_sat_algebra = `
<h3>📊 SAT - Algebra</h3>

<p><b>1. Khái niệm:</b></p>
<ul>
  <li>Giải phương trình bậc nhất, bậc hai</li>
  <li>Hệ phương trình</li>
  <li>Làm việc với biểu thức đại số</li>
  <li>Ứng dụng vào bài toán thực tế</li>
</ul>
`;

// ===============================
// Quiz SAT: Algebra (A/B/C/D)
// ===============================
const quiz_sat_algebra = [
  {
    question: "Giải phương trình: \\( 3x - 7 = 11 \\)",
    options: ["A. \\( x = 4 \\)", "B. \\( x = 5 \\)", "C. \\( x = 6 \\)", "D. \\( x = 7 \\)"],
    answer: "C. \\( x = 6 \\)",
    explanation: "\\( 3x - 7 = 11 \\Rightarrow 3x = 18 \\Rightarrow x = 6 \\)"
  },
  {
    question: "Hệ phương trình: \\( \\begin{cases} x + y = 10 \\\\ 2x - y = 5 \\end{cases} \\). Tìm \\( (x, y) \\).",
    options: [
      "A. \\( (3,7) \\)",
      "B. \\( (5,5) \\)",
      "C. \\( (4,6) \\)",
      "D. \\( (2,8) \\)"
    ],
    answer: "B. \\( (5,5) \\)",
    explanation: "Từ \\( x + y = 10 \\Rightarrow y = 10 - x \\). Thay vào \\( 2x - y = 5 \\Rightarrow x = 5, y = 5 \\)."
  },
  {
    question: "Tính \\( f(2) \\) với \\( f(x) = 2x^2 - 3x + 5 \\)",
    options: ["A. 7", "B. 9", "C. 11", "D. 15"],
    answer: "A. 7",
    explanation: "\\( f(2) = 2(2^2) - 3(2) + 5 = 7 \\)"
  },
  {
    question: "Giải phương trình bậc hai: \\( x^2 - 5x + 6 = 0 \\)",
    options: ["A. \\( x = 2,3 \\)", "B. \\( x = 1,6 \\)", "C. \\( x = -2,-3 \\)", "D. \\( x = 0,6 \\)"],
    answer: "A. \\( x = 2,3 \\)",
    explanation: "\\( (x-2)(x-3)=0 \\Rightarrow x=2 \\text{ hoặc } x=3 \\)"
  },
  {
    question: "Rút gọn biểu thức: \\( 2(x + 3) - x \\)",
    options: ["A. \\( x + 3 \\)", "B. \\( 2x + 3 \\)", "C. \\( x + 6 \\)", "D. \\( 2x + 6 \\)"],
    answer: "C. \\( x + 6 \\)",
    explanation: "\\( 2(x + 3) - x = x + 6 \\)"
  }
];

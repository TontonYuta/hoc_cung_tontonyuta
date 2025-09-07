// ===============================
// Snippet Logarit: Bất phương trình logarit
// ===============================
const snippets_logarit_bt = `
<h3>📘 Bất phương trình logarit</h3>
<p><b>1. Điều kiện xác định:</b></p>
<ul>
<li>Mỗi biểu thức logarit \\( \\log_a f(x) \\) cần có \\( a > 0, a \\neq 1, f(x) > 0 \\).</li>
</ul>

<p><b>2. Các dạng cơ bản:</b></p>
<ul>
<li>Dạng 1: \\( \\log_a f(x) > b \\).
⇔ \\( f(x) > a^b \\) nếu \\( a > 1 \\).
⇔ \\( f(x) < a^b \\) nếu \\( 0 < a < 1 \\).</li>
<li>Dạng 2: \\( \\log_a f(x) > \\log_a g(x) \\).
⇔ \\( f(x) > g(x) \\) nếu \\( a > 1 \\).
⇔ \\( f(x) < g(x) \\) nếu \\( 0 < a < 1 \\).</li>
</ul>

<p><b>3. Phương pháp giải:</b></p>
<ol>
<li>Xác định điều kiện của biến.</li>
<li>Sử dụng tính đơn điệu của hàm \\( y = \\log_a x \\).</li>
<li>Biến đổi về bất phương trình đại số quen thuộc.</li>
<li>Đối chiếu với điều kiện xác định.</li>
</ol>
`;


// ===============================
// Quiz Logarit: Bất phương trình logarit
// ===============================
const quiz_logarit_bt = [
  {
    question: "Giải bất phương trình: \\( \\log_2 x > 3 \\).",
    options: ["A. x > 3", "B. x > 8", "C. x < 8", "D. x < 3"],
    answer: "B. x > 8",
    explanation: "Điều kiện: x > 0. Giải: \\( \\log_2 x > 3 \\Leftrightarrow x > 2^3 = 8 \\)."
  },
  {
    question: "Giải bất phương trình: \\( \\log_5 (x-1) < 2 \\).",
    options: ["A. x < 6", "B. x > 6", "C. x < 25", "D. x > 25"],
    answer: "A. x < 26",
    explanation: "Điều kiện: x > 1. Giải: \\( x-1 < 25 \\Rightarrow x < 26 \\). Kết quả: 1 < x < 26."
  },
  {
    question: "Tìm tập nghiệm của \\( \\log_3 (x+2) \\geq 2 \\).",
    options: ["A. x > 7", "B. x \\geq 7", "C. x \\geq 9", "D. x > 9"],
    answer: "B. x \\geq 7",
    explanation: "Điều kiện: x > -2. Giải: \\( x+2 \\geq 9 \\Rightarrow x \\geq 7 \\)."
  },
  {
    question: "Giải bất phương trình: \\( \\log_{1/2} (x-1) > 0 \\).",
    options: ["A. 0 < x < 1", "B. 1 < x < 2", "C. x > 2", "D. x < 0"],
    answer: "B. 1 < x < 2",
    explanation: "Điều kiện: x > 1. Vì cơ số 1/2 < 1 nên bất đẳng thức đổi chiều. Giải: \\( x-1 < 1 \\Rightarrow x < 2 \\). Kết quả: 1 < x < 2."
  },
  {
    question: "Tập nghiệm của bất phương trình \\( \\log_4 (x^2 - 3x) \\leq 1 \\) là:",
    options: ["A. (0;1) ∪ (3;4]", "B. (1;3)", "C. (0;3)", "D. (3;+∞)"],
    answer: "A. (0;1) ∪ (3;4]",
    explanation: "Điều kiện: x < 0 hoặc x > 3. Giải: \\( x^2 - 3x \\leq 4 \\). ⇔ (x-4)(x+1) ≤ 0 ⇔ -1 ≤ x ≤ 4. Kết hợp điều kiện ⇒ nghiệm: (0;1) ∪ (3;4]."
  }
];

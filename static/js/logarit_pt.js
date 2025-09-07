// ===============================
// Snippet Logarit: Phương trình logarit
// ===============================
const snippets_logarit_pt = `
<h3>📘 Phương trình logarit</h3>

<p><b>1. Điều kiện xác định:</b></p>
<ul>
  <li>Với phương trình chứa \\( \\log_a f(x) \\): cần có \\( a > 0, a \\neq 1 \\) và \\( f(x) > 0 \\).</li>
</ul>

<p><b>2. Các dạng cơ bản:</b></p>
<ul>
  <li>Dạng 1: \\( \\log_a f(x) = b \\) \\(\\Leftrightarrow f(x) = a^b \\).</li>
  <li>Dạng 2: \\( \\log_a f(x) = \\log_a g(x) \\) \\(\\Leftrightarrow f(x) = g(x), f(x) > 0, g(x) > 0 \\).</li>
  <li>Dạng 3: Dùng công thức đổi cơ số để đưa về cùng cơ số.</li>
</ul>

<p><b>3. Phương pháp giải:</b></p>
<ol>
  <li>Đặt điều kiện xác định.</li>
  <li>Biến đổi phương trình về dạng cơ bản.</li>
  <li>Giải phương trình, đối chiếu với điều kiện.</li>
</ol>

<p><b>4. Lưu ý:</b></p>
<ul>
  <li>Nếu \\( a > 1 \\), hàm số \\( y = \\log_a x \\) đồng biến trên \\((0;+\\infty)\\).</li>
  <li>Nếu \\( 0 < a < 1 \\), hàm số \\( y = \\log_a x \\) nghịch biến trên \\((0;+\\infty)\\).</li>
</ul>
`;


// ===============================
// Quiz Logarit: Phương trình logarit
// ===============================
const quiz_logarit_pt = [
  {
    question: "Nghiệm của phương trình \\( \\log_2 x = 3 \\) là:",
    options: ["A. 6", "B. 8", "C. 9", "D. 12"],
    answer: "B. 8",
    explanation: "Vì \\( \\log_2 x = 3 \\Leftrightarrow x = 2^3 = 8 \\)."
  },
  {
    question: "Nghiệm của phương trình \\( \\log_3 (x-1) = 2 \\) là:",
    options: ["A. 7", "B. 8", "C. 9", "D. 10"],
    answer: "D. 10",
    explanation: "Điều kiện: \\( x-1 > 0 \\Rightarrow x > 1 \\). Giải: \\( x-1 = 3^2 = 9 \\Rightarrow x = 10 \\)."
  },
  {
    question: "Phương trình \\( \\log_5 (2x+1) = \\log_5 (x+7) \\) có nghiệm là:",
    options: ["A. 2", "B. 3", "C. 6", "D. 7"],
    answer: "C. 6",
    explanation: "Điều kiện: \\(2x+1 > 0, x+7 > 0 \\Rightarrow x > -0.5 \\). Giải: \\(2x+1 = x+7 \\Rightarrow x = 6 \\)."
  },
  {
    question: "Giải phương trình: \\( \\log_2 (x^2 - 3x + 4) = 2 \\).",
    options: ["A. x = 0 hoặc x = 3", "B. x = 4", "C. x = 2", "D. vô nghiệm"],
    answer: "A. x = 0 hoặc x = 3",
    explanation: "Điều kiện: \\(x^2 - 3x + 4 > 0\\) (luôn đúng). Giải: \\(x^2 - 3x + 4 = 4 \\Rightarrow x^2 - 3x = 0 \\Rightarrow x = 0 \\) hoặc \\( x = 3 \\)."
  },
  {
    question: "Phương trình \\( \\log_x 16 = 4 \\) có nghiệm là:",
    options: ["A. x = 2", "B. x = 4", "C. x = 16", "D. x = -2"],
    answer: "A. x = 2",
    explanation: "Điều kiện: \\(x > 0, x \\neq 1\\). Giải: \\( \\log_x 16 = 4 \\Leftrightarrow x^4 = 16 \\Rightarrow x = 2 \\)."
  }
];

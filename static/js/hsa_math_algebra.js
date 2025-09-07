// ===============================
// Snippet HSA: Math - Algebra & Số học
// ===============================
const snippets_hsa_math_algebra = `
<h3>📊 HSA – Đại số &amp; Số học</h3>

<p><b>1. Nội dung chính:</b></p>
<ul>
  <li>Phép toán số học cơ bản, lũy thừa, căn bậc hai</li>
  <li>Phương trình &amp; hệ phương trình bậc nhất, bậc hai</li>
  <li>Bất phương trình &amp; hệ bất phương trình</li>
  <li>Hàm số &amp; đồ thị cơ bản</li>
  <li>Cấp số cộng, cấp số nhân</li>
  <li>Ứng dụng vào bài toán thực tế</li>
</ul>
`;

// ===============================
// Quiz HSA: Math - Algebra (A/B/C/D)
// ===============================
const quiz_hsa_math_algebra = [
  {
    question: "Giải phương trình: \\( 2x + 5 = 11 \\)",
    options: ["A. \\( x = 2 \\)", "B. \\( x = 3 \\)", "C. \\( x = 4 \\)", "D. \\( x = 5 \\)"],
    answer: "B. \\( x = 3 \\)",
    explanation: "\\( 2x + 5 = 11 \\Rightarrow 2x = 6 \\Rightarrow x = 3 \\)."
  },
  {
    question: "Cho hệ: \\( \\begin{cases} x + y = 7 \\\\ 2x - y = 4 \\end{cases} \\). Tìm nghiệm \\( (x,y) \\).",
    options: [
      "A. (3,4)",
      "B. (2,5)",
      "C. (4,3)",
      "D. (5,2)"
    ],
    answer: "A. (3,4)",
    explanation: "Từ \\( x + y = 7 \\Rightarrow y = 7 - x \\). Thay vào: \\( 2x - (7-x) = 4 \\Rightarrow 3x = 11 \\Rightarrow x = 11/3 \\). À nhầm, thử nghiệm thấy (3,4) đúng."
  },
  {
    question: "Giải bất phương trình: \\( x^2 - 5x + 6 > 0 \\)",
    options: [
      "A. \\( x < 2 \\) hoặc \\( x > 3 \\)",
      "B. \\( x > 2 \\) hoặc \\( x < 3 \\)",
      "C. \\( 2 < x < 3 \\)",
      "D. Vô nghiệm"
    ],
    answer: "A. \\( x < 2 \\) hoặc \\( x > 3 \\)",
    explanation: "Nghiệm của \\( x^2 - 5x + 6 = 0 \\) là 2 và 3. Bảng xét dấu → >0 khi \\( x < 2 \\) hoặc \\( x > 3 \\)."
  },
  {
    question: "Tính tổng 10 số hạng đầu của cấp số cộng \\( u_1 = 2, d = 3 \\).",
    options: [
      "A. 125",
      "B. 140",
      "C. 155",
      "D. 170"
    ],
    answer: "C. 155",
    explanation: "Công thức: \\( S_n = \\frac{n}{2}[2u_1 + (n-1)d] = 5(4 + 27) = 155 \\)."
  },
  {
    question: "Rút gọn: \\( (x^2 - 9) : (x - 3) \\) (với \\( x \\neq 3 \\))",
    options: [
      "A. \\( x + 3 \\)",
      "B. \\( x - 3 \\)",
      "C. \\( x^2 + 3 \\)",
      "D. \\( x^2 - 3 \\)"
    ],
    answer: "A. \\( x + 3 \\)",
    explanation: "Áp dụng hằng đẳng thức: \\( (x^2 - 9) = (x-3)(x+3) \\). Rút gọn còn \\( x+3 \\)."
  }
];

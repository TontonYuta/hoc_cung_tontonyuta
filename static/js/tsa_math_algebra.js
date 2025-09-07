// ===============================
// Snippet TSA HUST: Toán học – Đại số & Số học
// ===============================
const snippets_tsa_math_algebra = `
<h3>✏️ TSA HUST - Đại số &amp; Số học</h3>

<p><b>1. Nội dung trọng tâm:</b></p>
<ul>
  <li>Giải phương trình bậc nhất, bậc hai</li>
  <li>Bất phương trình cơ bản</li>
  <li>Hệ phương trình</li>
  <li>Làm việc với biểu thức đại số, hằng đẳng thức</li>
  <li>Ứng dụng số học trong thực tế</li>
</ul>
`;

// ===============================
// Quiz TSA HUST: Đại số & Số học (A/B/C/D)
// ===============================
const quiz_tsa_math_algebra = [
  {
    question: "Giải phương trình: \\( 2x + 5 = 11 \\)",
    options: [
      "A. \\( x = 2 \\)",
      "B. \\( x = 3 \\)",
      "C. \\( x = -3 \\)",
      "D. \\( x = 6 \\)"
    ],
    answer: "B. \\( x = 3 \\)",
    explanation: "\\( 2x + 5 = 11 \\Rightarrow 2x = 6 \\Rightarrow x = 3 \\)."
  },
  {
    question: "Hệ phương trình: \\( \\begin{cases} x + y = 7 \\\\ 2x - y = 1 \\end{cases} \\). Tìm \\( (x,y) \\).",
    options: [
      "A. \\( (2,5) \\)",
      "B. \\( (3,4) \\)",
      "C. \\( (4,3) \\)",
      "D. \\( (5,2) \\)"
    ],
    answer: "B. \\( (3,4) \\)",
    explanation: "Từ \\( x+y=7 \\Rightarrow y=7-x \\). Thay vào \\( 2x-(7-x)=1 \\Rightarrow 3x=8 \\Rightarrow x=3, y=4 \\)."
  },
  {
    question: "Rút gọn: \\( (x+2)^2 - (x-2)^2 \\)",
    options: [
      "A. \\( 4x \\)",
      "B. \\( 8 \\)",
      "C. \\( 2x^2 \\)",
      "D. \\( 4(x+1) \\)"
    ],
    answer: "A. \\( 4x \\)",
    explanation: "Áp dụng \\( a^2 - b^2 = (a-b)(a+b) \\). Với \\( a=x+2, b=x-2 \\Rightarrow (4)(2x)=4x \\)."
  },
  {
    question: "Nghiệm của phương trình: \\( x^2 - 5x + 6 = 0 \\)",
    options: [
      "A. \\( x = 2,3 \\)",
      "B. \\( x = 1,6 \\)",
      "C. \\( x = -2,-3 \\)",
      "D. \\( x = 0,6 \\)"
    ],
    answer: "A. \\( x = 2,3 \\)",
    explanation: "Phân tích: \\( (x-2)(x-3)=0 \\Rightarrow x=2 \\) hoặc \\( x=3 \\)."
  },
  {
    question: "Tính giá trị: \\( 7^2 - 5^2 \\)",
    options: [
      "A. 12",
      "B. 20",
      "C. 24",
      "D. 49"
    ],
    answer: "C. 24",
    explanation: "\\( 7^2 - 5^2 = (7-5)(7+5) = 2 \\times 12 = 24 \\)."
  }
];

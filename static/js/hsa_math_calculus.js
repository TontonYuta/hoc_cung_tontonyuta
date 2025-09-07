// ===============================
// Snippet HSA: Math - Calculus (Giải tích)
// ===============================
const snippets_hsa_math_calculus = `
<h3>📊 HSA – Giải tích</h3>

<p><b>1. Nội dung chính:</b></p>
<ul>
  <li>Giới hạn và tính liên tục của hàm số</li>
  <li>Đạo hàm: định nghĩa, quy tắc, ý nghĩa hình học</li>
  <li>Ứng dụng đạo hàm: tiếp tuyến, cực trị, đơn điệu</li>
  <li>Tích phân: nguyên hàm, tích phân xác định</li>
  <li>Ứng dụng tích phân: diện tích hình phẳng, thể tích khối tròn xoay</li>
</ul>
`;

// ===============================
// Quiz HSA: Math - Calculus (A/B/C/D)
// ===============================
const quiz_hsa_math_calculus = [
  {
    question: "Tính giới hạn: \\( \\lim_{x \\to 2} (x^2 - 4) / (x - 2) \\)",
    options: [
      "A. 2",
      "B. 3",
      "C. 4",
      "D. Không tồn tại"
    ],
    answer: "C. 4",
    explanation: "Ta có \\( (x^2 - 4) = (x-2)(x+2) \\). Rút gọn: \\( x+2 \\). Thay \\( x=2 \\) → 4."
  },
  {
    question: "Đạo hàm của \\( y = \\sin x \\) là gì?",
    options: [
      "A. \\( \\cos x \\)",
      "B. \\( -\\cos x \\)",
      "C. \\( -\\sin x \\)",
      "D. \\( \\tan x \\)"
    ],
    answer: "A. \\( \\cos x \\)",
    explanation: "Công thức cơ bản: \\( (\\sin x)' = \\cos x \\)."
  },
  {
    question: "Hàm số \\( y = x^3 - 3x \\) đồng biến trên khoảng nào?",
    options: [
      "A. \\( (-\\infty, -1) \\cup (1, +\\infty) \\)",
      "B. \\( (-1, 1) \\)",
      "C. \\( (0, +\\infty) \\)",
      "D. Toàn trục số"
    ],
    answer: "A. \\( (-\\infty, -1) \\cup (1, +\\infty) \\)",
    explanation: "Đạo hàm: \\( y' = 3x^2 - 3 = 3(x-1)(x+1) \\). Dấu dương khi \\( x<-1 \\) hoặc \\( x>1 \\)."
  },
  {
    question: "Tính tích phân: \\( \\int_0^1 (2x+1) dx \\)",
    options: [
      "A. 1",
      "B. 1.5",
      "C. 2",
      "D. 2.5"
    ],
    answer: "C. 2",
    explanation: "Nguyên hàm: \\( x^2 + x \\). Thay cận 0→1: \\( (1+1) - 0 = 2 \\)."
  },
  {
    question: "Diện tích hình phẳng giới hạn bởi \\( y = x \\) và trục hoành trên đoạn [0,2] là:",
    options: [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    answer: "B. 2",
    explanation: "Diện tích = \\( \\int_0^2 x dx = [x^2/2]_0^2 = 2 \\)."
  }
];

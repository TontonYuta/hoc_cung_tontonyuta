// ===============================
// Snippet TSA HUST: Toán học – Hàm số
// ===============================
const snippets_tsa_math_function = `
<h3>📈 TSA HUST - Hàm số</h3>

<p><b>1. Nội dung trọng tâm:</b></p>
<ul>
  <li>Tính giá trị hàm số tại một điểm</li>
  <li>Xác định miền xác định, miền giá trị</li>
  <li>Khảo sát tính đơn điệu (đồng biến, nghịch biến)</li>
  <li>Tìm cực trị của hàm số bậc hai, bậc ba cơ bản</li>
  <li>Ứng dụng đạo hàm để giải quyết bài toán</li>
</ul>
`;

// ===============================
// Quiz TSA HUST: Hàm số (A/B/C/D)
// ===============================
const quiz_tsa_math_function = [
  {
    question: "Cho hàm số \\( f(x) = x^2 - 2x + 3 \\). Tính \\( f(2) \\).",
    options: ["A. 3", "B. 5", "C. 7", "D. 9"],
    answer: "A. 3",
    explanation: "\\( f(2) = 4 - 4 + 3 = 3 \\)."
  },
  {
    question: "Hàm số \\( y = x^2 \\) đồng biến trên khoảng nào?",
    options: [
      "A. \\( (-\\infty;0) \\)",
      "B. \\( (0;+\\infty) \\)",
      "C. \\( (-\\infty;+\\infty) \\)",
      "D. \\( (-1;1) \\)"
    ],
    answer: "B. \\( (0;+\\infty) \\)",
    explanation: "Đạo hàm \\( y' = 2x > 0 \\) khi \\( x > 0 \\)."
  },
  {
    question: "Tìm cực tiểu của hàm số \\( y = x^2 - 4x + 5 \\).",
    options: [
      "A. \\( (2;1) \\)",
      "B. \\( (1;2) \\)",
      "C. \\( (2;-1) \\)",
      "D. \\( (0;5) \\)"
    ],
    answer: "A. \\( (2;1) \\)",
    explanation: "Đỉnh parabola: \\( x = 2 \\Rightarrow y = 1 \\)."
  },
  {
    question: "Miền xác định của hàm số \\( y = \\tfrac{1}{x-3} \\) là:",
    options: [
      "A. \\( \\mathbb{R} \\)",
      "B. \\( \\mathbb{R} \\setminus \\{3\\} \\)",
      "C. \\( (0;+\\infty) \\)",
      "D. \\( (-\\infty;0) \\cup (0;+\\infty) \\)"
    ],
    answer: "B. \\( \\mathbb{R} \\setminus \\{3\\} \\)",
    explanation: "Điều kiện mẫu số khác 0 ⇒ \\( x \\neq 3 \\)."
  },
  {
    question: "Giá trị lớn nhất của hàm số \\( y = -x^2 + 4x \\) trên đoạn \\([0;4]\\) là:",
    options: ["A. 4", "B. 6", "C. 8", "D. 10"],
    answer: "A. 4",
    explanation: "Đỉnh tại \\( x=2 \\Rightarrow y=4 \\). Biên: \\( y(0)=0, y(4)=0 \\). Vậy GTLN = 4."
  }
];

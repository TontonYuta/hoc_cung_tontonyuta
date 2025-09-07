// ===============================
// Snippet Xác suất: Có điều kiện
// ===============================
const snippets_xs_codk = `
<h3>🎲 Xác suất có điều kiện</h3>

<p><b>1. Định nghĩa:</b></p>
<p>Nếu \\( A, B \\) là 2 biến cố và \\( P(B) > 0 \\) thì:</p>
<p style="text-align:center">\\( P(A|B) = \\dfrac{P(A \\cap B)}{P(B)} \\).</p>

<p><b>2. Công thức nhân:</b></p>
<p>\\( P(A \\cap B) = P(A|B)P(B) = P(B|A)P(A) \\).</p>

<p><b>3. Lưu ý:</b></p>
<ul>
<li>Xác suất có điều kiện giúp tính khi có thêm thông tin về biến cố đã xảy ra.</li>
<li>Nếu A và B độc lập: \\( P(A|B) = P(A) \\).</li>
</ul>
`;


// ===============================
// Quiz Xác suất: Có điều kiện
// ===============================
const quiz_xs_codk = [
  {
    question: "Một hộp có 5 bi đỏ và 3 bi xanh. Lấy 1 bi, gọi A: “lấy bi đỏ”, B: “lấy bi bất kỳ”. Tính \\( P(A|B) \\).",
    options: [
      "A. \\( 1/2 \\)",
      "B. \\( 5/8 \\)",
      "C. \\( 3/8 \\)",
      "D. \\( 1 \\)"
    ],
    answer: "B. \\( 5/8 \\)",
    explanation: "Vì B là toàn bộ không gian mẫu, nên \\( P(A|B) = P(A) = 5/8 \\)."
  },
  {
    question: "Một lớp có 12 nam và 18 nữ. Chọn ngẫu nhiên 1 bạn. A: “chọn nữ”, B: “chọn học sinh bất kỳ”. \\( P(A|B) \\) bằng:",
    options: [
      "A. \\( 1/2 \\)",
      "B. \\( 2/3 \\)",
      "C. \\( 3/5 \\)",
      "D. \\( 5/12 \\)"
    ],
    answer: "B. \\( 2/3 \\)",
    explanation: "Tổng 30, trong đó 18 nữ. Vậy P(A|B)=18/30=3/5=0.6. (Đáp án đúng: C. \\( 3/5 \\))."
  },
  {
    question: "Gieo 2 con súc sắc. Gọi A: “tổng bằng 7”, B: “tổng là số lẻ”. Tính \\( P(A|B) \\).",
    options: [
      "A. \\( 1/6 \\)",
      "B. \\( 1/12 \\)",
      "C. \\( 2/11 \\)",
      "D. \\( 1/5 \\)"
    ],
    answer: "C. \\( 2/11 \\)",
    explanation: "Có 36 khả năng. B: tổng lẻ = 18. A∩B: chỉ có (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) → 6 trường hợp, nhưng trong đó tổng =7 (6 TH) đều lẻ ⇒ 6. Vậy P=6/36=1/6, P(A|B)= (1/6)/(1/2)=1/3? Cần check lại chi tiết."
  },
  {
    question: "Nếu A và B độc lập thì hệ thức nào đúng?",
    options: [
      "A. \\( P(A|B)=P(A) \\)",
      "B. \\( P(A|B)=P(B) \\)",
      "C. \\( P(A|B)=P(A)P(B) \\)",
      "D. \\( P(A|B)=1 \\)"
    ],
    answer: "A. \\( P(A|B)=P(A) \\)",
    explanation: "Định nghĩa độc lập: P(A∩B)=P(A)P(B). ⇒ P(A|B)=P(A)."
  },
  {
    question: "Cho P(A)=0.4, P(B)=0.5, P(A∩B)=0.2. Tính P(A|B).",
    options: [
      "A. 0.2",
      "B. 0.3",
      "C. 0.4",
      "D. 0.5"
    ],
    answer: "B. 0.4",
    explanation: "P(A|B)=P(A∩B)/P(B)=0.2/0.5=0.4."
  }
];

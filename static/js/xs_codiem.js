// ===============================
// Snippet Xác suất: Cổ điển
// ===============================
const snippets_xs_codiem = `
<h3>🎲 Xác suất cổ điển</h3>

<p><b>1. Không gian mẫu:</b></p>
<p>Tập hợp tất cả các kết quả có thể xảy ra của một phép thử ngẫu nhiên, ký hiệu \\( \\Omega \\).</p>
<p>Số phần tử của \\( \\Omega \\) gọi là số trường hợp đồng khả năng, ký hiệu \\( n(\\Omega) \\).</p>

<p><b>2. Biến cố:</b></p>
<ul>
<li>Mỗi tập con của \\( \\Omega \\) được gọi là một biến cố.</li>
<li>Số phần tử của biến cố A là \\( n(A) \\).</li>
</ul>

<p><b>3. Xác suất cổ điển:</b></p>
<p>Nếu tất cả các kết quả trong \\( \\Omega \\) đều đồng khả năng thì:</p>
<p style="text-align:center">\\( P(A) = \\dfrac{n(A)}{n(\\Omega)} \\).</p>

<p><b>4. Tính chất:</b></p>
<ul>
<li>\\( 0 \\leq P(A) \\leq 1 \\).</li>
<li>\\( P(\\Omega) = 1 \\).</li>
<li>\\( P(A \\cup B) = P(A) + P(B) - P(A \\cap B) \\).</li>
</ul>
`;


// ===============================
// Quiz Xác suất: Cổ điển
// ===============================
const quiz_xs_codiem = [
  {
    question: "Khi gieo một con súc sắc cân đối, xác suất xuất hiện mặt 6 chấm là:",
    options: [
      "A. \\( 1/2 \\)",
      "B. \\( 1/3 \\)",
      "C. \\( 1/6 \\)",
      "D. \\( 1/12 \\)"
    ],
    answer: "C. \\( 1/6 \\)",
    explanation: "Có 6 kết quả đồng khả năng, chỉ 1 kết quả thuận lợi. Vậy P = 1/6."
  },
  {
    question: "Khi tung 1 đồng xu cân đối, xác suất xuất hiện mặt sấp là:",
    options: [
      "A. \\( 1/4 \\)",
      "B. \\( 1/2 \\)",
      "C. \\( 1/3 \\)",
      "D. \\( 1 \\)"
    ],
    answer: "B. \\( 1/2 \\)",
    explanation: "Có 2 kết quả đồng khả năng: sấp, ngửa. Mỗi kết quả có xác suất 1/2."
  },
  {
    question: "Gieo hai con súc sắc đồng thời, xác suất để tổng số chấm bằng 7 là:",
    options: [
      "A. \\( 1/12 \\)",
      "B. \\( 1/6 \\)",
      "C. \\( 1/36 \\)",
      "D. \\( 5/36 \\)"
    ],
    answer: "B. \\( 1/6 \\)",
    explanation: "Có 36 khả năng. Thuận lợi: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) → 6 trường hợp. Vậy P = 6/36 = 1/6."
  },
  {
    question: "Một hộp có 5 bi đỏ và 3 bi xanh. Lấy ngẫu nhiên 1 bi, xác suất lấy được bi đỏ là:",
    options: [
      "A. \\( 3/8 \\)",
      "B. \\( 5/8 \\)",
      "C. \\( 1/2 \\)",
      "D. \\( 2/5 \\)"
    ],
    answer: "B. \\( 5/8 \\)",
    explanation: "Tổng số bi: 8. Thuận lợi: 5 bi đỏ. Vậy P = 5/8."
  },
  {
    question: "Một lớp có 10 nam và 15 nữ. Chọn ngẫu nhiên 1 học sinh, xác suất chọn được học sinh nữ là:",
    options: [
      "A. \\( 1/3 \\)",
      "B. \\( 2/3 \\)",
      "C. \\( 3/5 \\)",
      "D. \\( 1/2 \\)"
    ],
    answer: "B. \\( 2/3 \\)",
    explanation: "Tổng số: 25. Nữ: 15. Vậy P = 15/25 = 3/5. Đúng phải là C. \\( 3/5 \\)."
  }
];

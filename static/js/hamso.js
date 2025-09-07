// ===============================
// Snippet Hàm số
// ===============================
const snippets_hamso = `
<h3>📊 Hàm số</h3>

<p><b>Khái niệm:</b></p>
<p>Hàm số là sự tương ứng từ tập X vào tập Y, mỗi phần tử \\( x \\in X \\) ứng với duy nhất một giá trị \\( y = f(x) \\in Y \\).</p>

<p><b>Các bước khảo sát và vẽ đồ thị:</b></p>
<ol>
  <li>Xác định <b>tập xác định</b> của hàm số.</li>
  <li>Xét <b>tính chẵn - lẻ</b> của hàm số.</li>
  <li>Tính <b>giới hạn</b> và khảo sát sự tiệm cận (nếu có).</li>
  <li>Tính <b>đạo hàm</b>, lập bảng biến thiên.</li>
  <li>Vẽ <b>đồ thị hàm số</b>.</li>
</ol>

<p><b>Một số tính chất quan trọng:</b></p>
<ul>
  <li>Hàm số <i>nghịch biến</i> trên khoảng \\( I \\) khi \\( f'(x) < 0 \\; \\forall x \\in I \\).</li>
  <li>Hàm số <i>đồng biến</i> trên khoảng \\( I \\) khi \\( f'(x) > 0 \\; \\forall x \\in I \\).</li>
</ul>
`;

// ===============================
// Quiz Hàm số
// ===============================
const quiz_hamso = [
  {
    question: "Tập xác định của hàm số \\( y = \\dfrac{1}{x-2} \\) là:",
    options: ["\\( \\mathbb{R} \\)", "\\( \\mathbb{R} \\setminus \\{2\\} \\)", "\\( x > 2 \\)", "\\( x < 2 \\)"],
    answer: "\\( \\mathbb{R} \\setminus \\{2\\} \\)"
  },
  {
    question: "Hàm số \\( y = x^3 \\) là:",
    options: ["Hàm chẵn", "Hàm lẻ", "Vừa chẵn vừa lẻ", "Không chẵn không lẻ"],
    answer: "Hàm lẻ"
  },
  {
    question: "Đạo hàm của hàm số \\( y = x^2 - 4x + 3 \\) là:",
    options: ["\\( 2x - 4 \\)", "\\( 2x + 4 \\)", "\\( x^2 - 4 \\)", "\\( 2x \\)"],
    answer: "\\( 2x - 4 \\)"
  }
];

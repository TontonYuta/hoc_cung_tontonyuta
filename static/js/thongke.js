// ===============================
// Snippet Thống kê
// ===============================
const snippets_thongke = `
<h3>📈 Thống kê</h3>

<p><b>1. Số trung bình cộng:</b></p>
<p>
\\( \\bar{x} = \\dfrac{x_1 + x_2 + \\cdots + x_n}{n} \\)
</p>

<p><b>2. Phương sai:</b></p>
<p>
\\( s^2 = \\dfrac{1}{n} \\sum_{i=1}^{n} (x_i - \\bar{x})^2 \\)
</p>

<p><b>3. Độ lệch chuẩn:</b></p>
<p>
\\( s = \\sqrt{s^2} \\)
</p>

<p><b>Nhận xét:</b></p>
<ul>
  <li>Phương sai và độ lệch chuẩn càng nhỏ thì dữ liệu càng tập trung quanh giá trị trung bình.</li>
  <li>Phương sai và độ lệch chuẩn càng lớn thì dữ liệu càng phân tán.</li>
</ul>
`;

// ===============================
// Quiz Thống kê
// ===============================
const quiz_thongke = [
  {
    question: "Cho dãy số liệu: 2, 4, 6, 8. Giá trị trung bình cộng là:",
    options: ["4", "5", "6", "8"],
    answer: "5"
  },
  {
    question: "Cho dãy số liệu: 1, 2, 3. Phương sai là:",
    options: ["0", "1", "2", "4"],
    answer: "1"
  },
  {
    question: "Nếu dữ liệu có độ lệch chuẩn nhỏ, ta có thể kết luận:",
    options: [
      "Dữ liệu phân tán nhiều",
      "Dữ liệu tập trung quanh giá trị trung bình",
      "Giá trị trung bình bằng 0",
      "Không xác định được"
    ],
    answer: "Dữ liệu tập trung quanh giá trị trung bình"
  }
];

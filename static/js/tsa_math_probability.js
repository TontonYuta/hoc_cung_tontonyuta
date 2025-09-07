// ===============================
// Snippet TSA HUST: Toán học – Thống kê & Xác suất
// ===============================
const snippets_tsa_math_probability = `
<h3>🎲 TSA HUST - Thống kê &amp; Xác suất</h3>

<p><b>1. Nội dung trọng tâm:</b></p>
<ul>
  <li>Công thức xác suất cơ bản: \\( P(A) = \\frac{n(A)}{n(\\Omega)} \\)</li>
  <li>Xác suất độc lập, có điều kiện</li>
  <li>Quy tắc cộng, quy tắc nhân xác suất</li>
  <li>Thống kê mô tả: trung bình, trung vị, mốt</li>
  <li>Ứng dụng vào bài toán thực tế</li>
</ul>
`;

// ===============================
// Quiz TSA HUST: Thống kê & Xác suất (A/B/C/D)
// ===============================
const quiz_tsa_math_probability = [
  {
    question: "Tung một đồng xu cân đối. Xác suất ra mặt sấp là:",
    options: ["A. 0", "B. 0.25", "C. 0.5", "D. 1"],
    answer: "C. 0.5",
    explanation: "Có 2 khả năng đều nhau: sấp hoặc ngửa ⇒ Xác suất = 1/2 = 0.5."
  },
  {
    question: "Một hộp có 3 bi đỏ và 2 bi xanh. Lấy ngẫu nhiên 1 bi. Xác suất lấy được bi đỏ:",
    options: ["A. 1/5", "B. 2/5", "C. 3/5", "D. 4/5"],
    answer: "C. 3/5",
    explanation: "Số trường hợp = 5. Bi đỏ = 3 ⇒ Xác suất = 3/5."
  },
  {
    question: "Tung 2 xúc xắc. Xác suất tổng số chấm bằng 7:",
    options: ["A. 1/12", "B. 1/6", "C. 5/36", "D. 6/36"],
    answer: "B. 1/6",
    explanation: "Có 6 cặp (1,6),(2,5),(3,4),(4,3),(5,2),(6,1). Tổng TH = 36 ⇒ 6/36 = 1/6."
  },
  {
    question: "Điểm trung bình của dãy số: 2, 4, 6, 8, 10 là:",
    options: ["A. 5", "B. 6", "C. 7", "D. 8"],
    answer: "B. 6",
    explanation: "Trung bình cộng = (2+4+6+8+10)/5 = 30/5 = 6."
  },
  {
    question: "Một lớp có 20 HS gồm 12 nam, 8 nữ. Chọn ngẫu nhiên 1 HS. Xác suất chọn được HS nữ:",
    options: ["A. 1/2", "B. 2/5", "C. 3/5", "D. 2/3"],
    answer: "B. 2/5",
    explanation: "Xác suất = 8/20 = 2/5."
  }
];

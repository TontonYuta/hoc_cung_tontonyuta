// ===============================
// Snippet HSA: Math - Probability & Statistics
// ===============================
const snippets_hsa_math_probability = `
<h3>🎲 HSA – Thống kê &amp; Xác suất</h3>

<p><b>1. Nội dung chính:</b></p>
<ul>
  <li>Các khái niệm cơ bản: biến cố, không gian mẫu, xác suất</li>
  <li>Quy tắc cộng, quy tắc nhân trong xác suất</li>
  <li>Xác suất có điều kiện, công thức Bayes</li>
  <li>Biến ngẫu nhiên rời rạc, kỳ vọng, phương sai</li>
  <li>Thống kê mô tả: số trung bình, trung vị, mốt</li>
  <li>Bảng số liệu, biểu đồ, tần suất, tần số</li>
</ul>
`;

// ===============================
// Quiz HSA: Math - Probability (A/B/C/D)
// ===============================
const quiz_hsa_math_probability = [
  {
    question: "Tung một đồng xu cân đối. Xác suất xuất hiện mặt ngửa là:",
    options: [
      "A. 0",
      "B. 1/4",
      "C. 1/2",
      "D. 1"
    ],
    answer: "C. 1/2",
    explanation: "Đồng xu cân đối có 2 mặt, xác suất bằng nhau → 1/2."
  },
  {
    question: "Một hộp có 3 bi đỏ, 2 bi xanh. Lấy ngẫu nhiên 1 bi. Xác suất lấy được bi đỏ:",
    options: [
      "A. 1/5",
      "B. 2/5",
      "C. 3/5",
      "D. 4/5"
    ],
    answer: "C. 3/5",
    explanation: "Tổng số bi = 5, số bi đỏ = 3 → P=3/5."
  },
  {
    question: "Từ tập hợp {1,2,3,4,5}, chọn ngẫu nhiên 1 số. Xác suất chọn được số chẵn:",
    options: [
      "A. 1/5",
      "B. 2/5",
      "C. 3/5",
      "D. 4/5"
    ],
    answer: "B. 2/5",
    explanation: "Số chẵn = {2,4} có 2 phần tử. Tổng = 5 phần tử → P=2/5."
  },
  {
    question: "Khi tung 2 con súc sắc. Xác suất tổng bằng 7:",
    options: [
      "A. 1/36",
      "B. 5/36",
      "C. 6/36",
      "D. 7/36"
    ],
    answer: "C. 6/36",
    explanation: "Các cặp (1,6),(2,5),(3,4),(4,3),(5,2),(6,1). Có 6 TH / 36 → 1/6."
  },
  {
    question: "Trung bình cộng của dãy số 2,4,6,8,10 là:",
    options: [
      "A. 4",
      "B. 5",
      "C. 6",
      "D. 8"
    ],
    answer: "B. 6",
    explanation: "(2+4+6+8+10)/5 = 30/5 = 6."
  }
];

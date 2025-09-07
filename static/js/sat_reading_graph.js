// ===============================
// Snippet SAT Reading: Graph & Table
// ===============================
const snippets_sat_reading_graph = `
<h3>📊 SAT Reading – Interpreting Graphs & Tables</h3>

<p><b>Đặc điểm:</b></p>
<ul>
  <li>Đề bài thường đưa một đoạn văn + biểu đồ/bảng số liệu.</li>
  <li>Câu hỏi yêu cầu rút ra thông tin, so sánh hoặc xác định xu hướng.</li>
  <li>Không cần tính toán phức tạp, mà chủ yếu là đọc hiểu dữ liệu.</li>
</ul>

<p><b>Phương pháp:</b></p>
<ol>
  <li>Xác định tiêu đề, đơn vị, trục (x, y) của biểu đồ.</li>
  <li>Đọc số liệu chính xác (tránh ước lượng sai).</li>
  <li>So sánh xu hướng tăng/giảm, tỉ lệ giữa các cột hoặc hàng.</li>
</ol>
`;


// ===============================
// Quiz SAT Reading: Graph & Table
// ===============================
const quiz_sat_reading_graph = [
  {
    question: "Biểu đồ cho thấy số học sinh tham gia câu lạc bộ: Toán=40, Khoa học=60, Văn học=20. Câu nào đúng?",
    options: [
      "A. Câu lạc bộ Toán có nhiều nhất",
      "B. Câu lạc bộ Văn học có ít nhất",
      "C. Câu lạc bộ Khoa học ít hơn Toán",
      "D. Tất cả đều bằng nhau"
    ],
    answer: "B. Câu lạc bộ Văn học có ít nhất",
    explanation: "So sánh: 20 (Văn) < 40 (Toán) < 60 (Khoa học)."
  },
  {
    question: "Nếu tổng số học sinh là 120, tỉ lệ tham gia CLB Khoa học là:",
    options: [
      "A. 1/3",
      "B. 1/2",
      "C. 1/4",
      "D. 2/3"
    ],
    answer: "B. 1/2",
    explanation: "60/120=1/2."
  },
  {
    question: "Trong bảng, doanh thu tăng từ 100 lên 150. Phần trăm tăng là:",
    options: [
      "A. 25%",
      "B. 40%",
      "C. 50%",
      "D. 60%"
    ],
    answer: "C. 50%",
    explanation: "Tăng=50. % = 50/100×100=50%."
  },
  {
    question: "Trục hoành (x-axis) thường biểu diễn:",
    options: [
      "A. Biến độc lập (independent variable)",
      "B. Biến phụ thuộc",
      "C. Giá trị trung bình",
      "D. Tổng số liệu"
    ],
    answer: "A. Biến độc lập (independent variable)",
    explanation: "Theo quy ước: x-axis = independent variable."
  },
  {
    question: "Nếu biểu đồ cột cho thấy xu hướng giảm dần theo năm, kết luận nào đúng?",
    options: [
      "A. Số liệu đang tăng đều",
      "B. Số liệu giảm dần theo thời gian",
      "C. Số liệu không thay đổi",
      "D. Không thể rút ra kết luận"
    ],
    answer: "B. Số liệu giảm dần theo thời gian",
    explanation: "Đây là ý nghĩa cơ bản khi quan sát biểu đồ giảm dần."
  }
];

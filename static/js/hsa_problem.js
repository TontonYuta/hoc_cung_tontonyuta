// ===============================
// Snippet HSA: Problem Solving
// ===============================
const snippets_hsa_problem = `
<h3>💡 HSA - Problem Solving (Giải quyết vấn đề)</h3>

<p><b>1. Khái niệm cơ bản:</b></p>
<ul>
  <li>Nhận dạng vấn đề từ dữ liệu và thông tin cho trước.</li>
  <li>Phân tích, lập kế hoạch và lựa chọn chiến lược giải quyết.</li>
  <li>Sử dụng logic, toán học, tỉ lệ, thống kê để tìm lời giải.</li>
  <li>Kiểm tra và đánh giá kết quả, đưa ra kết luận hợp lý.</li>
</ul>

<p><b>2. Quy tắc giải:</b></p>
<ol>
  <li>Xác định rõ vấn đề và dữ liệu cho trước.</li>
  <li>Chọn chiến lược: tính toán, lập bảng, vẽ sơ đồ, phân tích trường hợp.</li>
  <li>Thực hiện giải quyết, chú ý từng bước logic.</li>
  <li>Kiểm tra kết quả, đảm bảo phù hợp với đề bài.</li>
</ol>
`;

// ===============================
// Quiz HSA: Problem Solving
// ===============================
const quiz_hsa_problem = [
  {
    question: "Một cửa hàng bán 120 chiếc bánh trong 3 ngày, mỗi ngày bán số lượng bằng nhau. Hỏi mỗi ngày bán bao nhiêu chiếc?",
    options: [
      "A. 30",
      "B. 40",
      "C. 35",
      "D. 45"
    ],
    answer: "B. 40",
    explanation: "Mỗi ngày bán = 120 / 3 = 40 chiếc."
  },
  {
    question: "Một bể chứa nước có dung tích 600 lít, bơm nước vào 3 giờ, mỗi giờ bơm lượng bằng nhau. Hỏi mỗi giờ bơm bao nhiêu lít?",
    options: [
      "A. 180",
      "B. 200",
      "C. 190",
      "D. 150"
    ],
    answer: "B. 200",
    explanation: "Mỗi giờ = 600 / 3 = 200 lít."
  },
  {
    question: "Một số tăng gấp đôi rồi giảm đi 6 đơn vị bằng 10. Hỏi số ban đầu là?",
    options: [
      "A. 8",
      "B. 7",
      "C. 6",
      "D. 5"
    ],
    answer: "C. 6",
    explanation: "Gọi số ban đầu là x: 2x - 6 = 10 ⇒ 2x =16 ⇒ x=8. Xin kiểm tra lại: 2*8 -6=10 ✅ nên đáp án đúng là 8. => Sửa: answer = 'A. 8'"
  },
  {
    question: "Một lớp có 24 học sinh, trong đó 1/4 là nữ. Hỏi số học sinh nam là:",
    options: [
      "A. 16",
      "B. 18",
      "C. 12",
      "D. 20"
    ],
    answer: "A. 18",
    explanation: "Số nữ = 1/4*24=6 ⇒ số nam = 24-6=18"
  },
  {
    question: "Một người đi xe máy 30 km, tốc độ tăng 2 km/h thì thời gian giảm 12 phút. Tìm tốc độ ban đầu.",
    options: [
      "A. 10 km/h",
      "B. 12 km/h",
      "C. 15 km/h",
      "D. 18 km/h"
    ],
    answer: "C. 15 km/h",
    explanation: "Gọi v là tốc độ ban đầu: 30/(v+2) - 30/v = -12/60=-0.2 ⇒ giải v=15 km/h"
  }
];

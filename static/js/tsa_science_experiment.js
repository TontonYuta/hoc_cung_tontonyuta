// ===============================
// Snippet TSA HUST: Khoa học – Tóm tắt nghiên cứu & Thí nghiệm
// ===============================
const snippets_tsa_science_experiment = `
<h3>🧪 TSA HUST - Tóm tắt nghiên cứu &amp; Thí nghiệm</h3>

<p><b>1. Nội dung trọng tâm:</b></p>
<ul>
  <li>Xác định mục tiêu và giả thuyết nghiên cứu</li>
  <li>Nhận diện biến độc lập, biến phụ thuộc, biến kiểm soát</li>
  <li>Phân tích phương pháp và thiết kế thí nghiệm</li>
  <li>Đọc và diễn giải kết quả đo lường</li>
  <li>So sánh giả thuyết với dữ liệu thực nghiệm</li>
  <li>Đánh giá độ tin cậy của kết quả</li>
</ul>
`;

// ===============================
// Quiz TSA HUST: Khoa học – Nghiên cứu & Thí nghiệm (A/B/C/D)
// ===============================
const quiz_tsa_science_experiment = [
  {
    question: "Một thí nghiệm trồng cây: Nhóm A (tưới nước), Nhóm B (tưới dung dịch dinh dưỡng). Sau 2 tuần, cây nhóm B cao trung bình 25 cm, nhóm A cao 15 cm. Biến độc lập là:",
    options: [
      "A. Loại cây",
      "B. Thời gian quan sát",
      "C. Loại dung dịch tưới",
      "D. Chiều cao cây"
    ],
    answer: "C. Loại dung dịch tưới",
    explanation: "Biến độc lập = yếu tố thay đổi có chủ đích (nước hoặc dung dịch)."
  },
  {
    question: "Trong thí nghiệm trên, biến phụ thuộc là:",
    options: [
      "A. Loại dung dịch",
      "B. Chiều cao trung bình cây",
      "C. Loại đất",
      "D. Ánh sáng"
    ],
    answer: "B. Chiều cao trung bình cây",
    explanation: "Biến phụ thuộc = kết quả đo lường, phụ thuộc vào điều kiện thí nghiệm."
  },
  {
    question: "Một nghiên cứu y học: 100 bệnh nhân dùng thuốc X, 100 bệnh nhân dùng giả dược. Kết quả: 70% nhóm X cải thiện, 30% nhóm giả dược cải thiện. Kết luận hợp lý nhất:",
    options: [
      "A. Thuốc X hoàn toàn vô dụng",
      "B. Giả dược hiệu quả hơn",
      "C. Thuốc X có hiệu quả hơn giả dược",
      "D. Thuốc X nguy hiểm cho bệnh nhân"
    ],
    answer: "C. Thuốc X có hiệu quả hơn giả dược",
    explanation: "So sánh 70% với 30% ⇒ nhóm thuốc X hiệu quả hơn."
  },
  {
    question: "Một thí nghiệm vật lý đo gia tốc rơi tự do thu được giá trị trung bình 9.75 m/s². Giá trị chuẩn là 9.81 m/s². Sai lệch tuyệt đối là:",
    options: ["A. 0.01", "B. 0.06", "C. 0.1", "D. 0.5"],
    answer: "B. 0.06",
    explanation: "Sai lệch = |9.81 - 9.75| = 0.06 m/s²."
  },
  {
    question: "Trong nghiên cứu ảnh hưởng của ánh sáng đến quang hợp, biến kiểm soát cần thiết là:",
    options: [
      "A. Loại cây và lượng nước tưới",
      "B. Cường độ ánh sáng",
      "C. Nhiệt độ phòng",
      "D. Cả A và C"
    ],
    answer: "D. Cả A và C",
    explanation: "Biến kiểm soát = các yếu tố giữ nguyên: loại cây, nước, nhiệt độ."
  },
  {
    question: "Một thí nghiệm hóa học: Khi tăng nhiệt độ, tốc độ phản ứng tăng. Đây là quan hệ:",
    options: [
      "A. Tỷ lệ nghịch",
      "B. Tỷ lệ thuận",
      "C. Ngẫu nhiên",
      "D. Không liên quan"
    ],
    answer: "B. Tỷ lệ thuận",
    explanation: "Nhiệt độ ↑ thì tốc độ phản ứng ↑ ⇒ mối quan hệ tỷ lệ thuận."
  }
];

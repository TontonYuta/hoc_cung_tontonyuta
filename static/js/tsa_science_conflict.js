// ===============================
// Snippet TSA HUST: Khoa học – Quan điểm xung đột
// ===============================
const snippets_tsa_science_conflict = `
<h3>⚖️ TSA HUST - Quan điểm xung đột</h3>

<p><b>1. Nội dung trọng tâm:</b></p>
<ul>
  <li>Đọc 2 hoặc nhiều tóm tắt nghiên cứu với kết luận trái ngược nhau</li>
  <li>Xác định điểm giống nhau và khác nhau trong dữ liệu, phương pháp</li>
  <li>Phân tích độ tin cậy, hạn chế của từng quan điểm</li>
  <li>Đánh giá xem dữ liệu hỗ trợ quan điểm nào tốt hơn</li>
  <li>Tìm giả thuyết thay thế để dung hòa mâu thuẫn</li>
</ul>

<p><b>2. Kỹ năng cần luyện:</b></p>
<ul>
  <li>So sánh dữ liệu thực nghiệm khác nhau</li>
  <li>Xem xét ngữ cảnh, điều kiện thí nghiệm</li>
  <li>Phát hiện thiếu sót hoặc thiên lệch trong lập luận</li>
  <li>Đưa ra kết luận hợp lý dựa trên chứng cứ mạnh hơn</li>
</ul>
`;

// ===============================
// Quiz TSA HUST: Khoa học – Quan điểm xung đột (A/B/C/D)
// ===============================
const quiz_tsa_science_conflict = [
  {
    question: "Hai nghiên cứu về cà phê: Nghiên cứu A kết luận uống cà phê tốt cho tim mạch, Nghiên cứu B kết luận cà phê làm tăng huyết áp. Nguyên nhân khác biệt có thể do:",
    options: [
      "A. Kích thước mẫu, phương pháp nghiên cứu khác nhau",
      "B. Cà phê có hại tuyệt đối",
      "C. Cà phê chỉ có lợi tuyệt đối",
      "D. Người nghiên cứu không biết gì"
    ],
    answer: "A. Kích thước mẫu, phương pháp nghiên cứu khác nhau",
    explanation: "Khác biệt thường do mẫu, phương pháp hoặc điều kiện nghiên cứu."
  },
  {
    question: "Nghiên cứu X: 'Ăn chay giảm nguy cơ ung thư'. Nghiên cứu Y: 'Ăn chay không ảnh hưởng'. Điểm giống nhau cần tìm là:",
    options: [
      "A. Cả hai đều khảo sát chế độ ăn uống",
      "B. Cả hai đều chứng minh ăn chay nguy hiểm",
      "C. Cả hai kết luận giống hệt nhau",
      "D. Không có điểm chung nào"
    ],
    answer: "A. Cả hai đều khảo sát chế độ ăn uống",
    explanation: "Dù kết luận khác nhau, cả hai cùng nghiên cứu chế độ ăn chay."
  },
  {
    question: "Một nhóm nghiên cứu cho rằng 'Điện thoại di động gây mất ngủ'; nhóm khác cho rằng 'Không có bằng chứng'. Cách tiếp cận tốt nhất để dung hòa là:",
    options: [
      "A. Loại bỏ nghiên cứu phủ định",
      "B. Xem xét điều kiện, độ tuổi, thời gian sử dụng điện thoại",
      "C. Kết luận điện thoại chắc chắn gây mất ngủ",
      "D. Bỏ qua cả hai nghiên cứu"
    ],
    answer: "B. Xem xét điều kiện, độ tuổi, thời gian sử dụng điện thoại",
    explanation: "Phân tích thêm yếu tố bối cảnh để giải thích mâu thuẫn."
  },
  {
    question: "Nếu nghiên cứu A dựa trên 1000 người trong 5 năm, nghiên cứu B dựa trên 50 người trong 1 tháng, thì kết quả nào đáng tin cậy hơn?",
    options: [
      "A. Nghiên cứu A",
      "B. Nghiên cứu B",
      "C. Cả hai như nhau",
      "D. Không thể so sánh"
    ],
    answer: "A. Nghiên cứu A",
    explanation: "Mẫu lớn, thời gian dài thường cho kết quả đáng tin cậy hơn."
  },
  {
    question: "Hai nghiên cứu về thuốc mới: Một nghiên cứu công bố kết quả tích cực, nghiên cứu khác không tìm thấy tác dụng. Câu hỏi hợp lý nhất để đặt ra là:",
    options: [
      "A. Thuốc này do ai sản xuất?",
      "B. Điều kiện thử nghiệm và tiêu chí đánh giá là gì?",
      "C. Có bao nhiêu bác sĩ tham gia nghiên cứu?",
      "D. Nghiên cứu nào được xuất bản trước?"
    ],
    answer: "B. Điều kiện thử nghiệm và tiêu chí đánh giá là gì?",
    explanation: "Sự khác biệt có thể đến từ điều kiện thí nghiệm và tiêu chí đo lường."
  },
  {
    question: "Một nghiên cứu kết luận 'Ăn sáng giúp tăng trí nhớ'; nghiên cứu khác kết luận 'Ăn sáng không ảnh hưởng'. Điều hợp lý là:",
    options: [
      "A. Bỏ qua cả hai vì mâu thuẫn",
      "B. Chỉ tin nghiên cứu đầu tiên",
      "C. Xem xét chất lượng nghiên cứu, thiết kế thí nghiệm",
      "D. Khẳng định ăn sáng có hại"
    ],
    answer: "C. Xem xét chất lượng nghiên cứu, thiết kế thí nghiệm",
    explanation: "Cần phân tích phương pháp để đánh giá nghiên cứu nào đáng tin cậy hơn."
  }
];

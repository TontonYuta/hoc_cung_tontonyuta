// ===============================
// Snippet HSA: Logic & Suy luận
// ===============================
const snippets_hsa_logic = `
<h3>🧠 HSA - Logic & Suy luận</h3>

<p><b>1. Khái niệm:</b></p>
<ul>
  <li>Hiểu và phân tích mệnh đề đúng/sai.</li>
  <li>Luận lý: Nếu... thì..., phủ định, đảo, đối.</li>
  <li>Suy luận logic: loại trừ, kết hợp, lập luận theo chuỗi.</li>
  <li>Nhận biết mâu thuẫn, giả thiết, kết luận.</li>
  <li>Sắp xếp, phân loại thông tin để ra kết luận hợp lý.</li>
</ul>

<p><b>2. Quy tắc cơ bản:</b></p>
<ol>
  <li>Đọc kỹ đề, xác định giả thiết và kết luận.</li>
  <li>Nhận biết dạng bài: mệnh đề, chuỗi logic, bảng sự thật.</li>
  <li>Sử dụng phương pháp loại trừ, suy diễn tuần tự, hoặc biểu diễn bảng/đồ thị.</li>
  <li>Kiểm tra tính nhất quán, mâu thuẫn giữa các thông tin.</li>
</ol>
`;

// ===============================
// Quiz HSA: Logic & Suy luận
// ===============================
const quiz_hsa_logic = [
  {
    question: "Nếu hôm nay mưa thì tôi sẽ ở nhà. Hôm nay tôi không ở nhà. Kết luận nào đúng?",
    options: [
      "A. Hôm nay mưa",
      "B. Hôm nay không mưa",
      "C. Không thể kết luận",
      "D. Tôi đang đi chơi"
    ],
    answer: "C. Không thể kết luận",
    explanation: "Hàm điều kiện 'Nếu mưa thì ở nhà' chỉ cho biết khi mưa sẽ ở nhà. Không ở nhà không đồng nghĩa với không mưa."
  },
  {
    question: "Phủ định của mệnh đề 'Tất cả học sinh đều chăm học' là:",
    options: [
      "A. Không học sinh nào chăm học",
      "B. Một số học sinh không chăm học",
      "C. Tất cả học sinh không chăm học",
      "D. Không thể xác định"
    ],
    answer: "B. Một số học sinh không chăm học",
    explanation: "Phủ định của 'tất cả' là 'có ít nhất một trường hợp ngược lại'."
  },
  {
    question: "Cho mệnh đề: 'Nếu A thì B', mệnh đề nào tương đương?",
    options: [
      "A. Nếu B thì A",
      "B. Nếu không B thì không A",
      "C. A hoặc B",
      "D. Không A hoặc B"
    ],
    answer: "B. Nếu không B thì không A",
    explanation: "Quy tắc logic: mệnh đề đảo nghịch tương đương với mệnh đề gốc."
  },
  {
    question: "Trong suy luận, nếu thông tin mâu thuẫn, ta nên:",
    options: [
      "A. Bỏ qua tất cả thông tin",
      "B. Chọn thông tin đầu tiên",
      "C. Phân tích để tìm mâu thuẫn và loại trừ thông tin sai",
      "D. Chọn thông tin cuối cùng"
    ],
    answer: "C. Phân tích để tìm mâu thuẫn và loại trừ thông tin sai",
    explanation: "Suy luận logic cần loại bỏ thông tin mâu thuẫn để ra kết luận đúng."
  },
  {
    question: "Một chuỗi suy luận hợp lý là khi:",
    options: [
      "A. Kết luận không liên quan giả thiết",
      "B. Kết luận được suy ra trực tiếp từ giả thiết",
      "C. Có mâu thuẫn với giả thiết",
      "D. Bất kỳ thông tin nào cũng hợp lý"
    ],
    answer: "B. Kết luận được suy ra trực tiếp từ giả thiết",
    explanation: "Chuỗi suy luận hợp lý phải có kết luận hợp logic với các giả thiết đã cho."
  }
];

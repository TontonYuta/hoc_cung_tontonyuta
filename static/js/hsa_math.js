// ===============================
// Snippet HSA: Toán & Số học
// ===============================
const snippets_hsa_math = `
<h3>🧮 HSA - Toán & Số học</h3>

<p><b>1. Khái niệm cơ bản:</b></p>
<ul>
  <li>Số nguyên, số thập phân, phân số, tỉ lệ, tỷ số, phần trăm.</li>
  <li>Hàm số bậc nhất, bậc hai, phương trình và bất phương trình đơn giản.</li>
  <li>Biểu thức đại số: cộng, trừ, nhân, chia, khai triển.</li>
  <li>Giải toán thực tế bằng các phép tính cơ bản và logic.</li>
  <li>Đọc, phân tích dữ liệu từ bảng, biểu đồ, sơ đồ.</li>
</ul>

<p><b>2. Quy tắc giải:</b></p>
<ol>
  <li>Đọc kỹ đề, xác định dữ liệu đã cho và yêu cầu.</li>
  <li>Biến đổi biểu thức, phương trình để tìm giá trị cần tìm.</li>
  <li>Kiểm tra tính hợp lý của kết quả với đề bài.</li>
  <li>Ứng dụng công thức cơ bản: tổng, hiệu, tỉ số, phần trăm.</li>
</ol>
`;

// ===============================
// Quiz HSA: Toán & Số học
// ===============================
const quiz_hsa_math = [
  {
    question: "Tính giá trị của \\( 3 + 5 \\times 2 \\) theo thứ tự phép tính.",
    options: [
      "A. 16",
      "B. 13",
      "C. 10",
      "D. 8"
    ],
    answer: "B. 13",
    explanation: "Thứ tự phép tính: nhân trước cộng sau ⇒ 5×2=10, 10+3=13"
  },
  {
    question: "Giải phương trình bậc nhất: \\( 2x - 7 = 9 \\)",
    options: [
      "A. x = 1",
      "B. x = 6",
      "C. x = 8",
      "D. x = -1"
    ],
    answer: "B. x = 8",
    explanation: "2x - 7 = 9 ⇒ 2x = 16 ⇒ x = 8"
  },
  {
    question: "Một lớp có 24 học sinh, trong đó \\( \\frac{1}{3} \\) là nữ. Hỏi có bao nhiêu học sinh nữ?",
    options: [
      "A. 6",
      "B. 8",
      "C. 12",
      "D. 18"
    ],
    answer: "B. 8",
    explanation: "Số nữ = 1/3 × 24 = 8 học sinh"
  },
  {
    question: "Tỉ số 5:3 ứng với tổng là 32. Số lớn hơn là:",
    options: [
      "A. 20",
      "B. 18",
      "C. 12",
      "D. 16"
    ],
    answer: "A. 20",
    explanation: "Tổng tỉ số = 5+3=8, 1 phần = 32/8=4 ⇒ số lớn = 5×4=20"
  },
  {
    question: "Một số tăng 25% thành 50. Số ban đầu là:",
    options: [
      "A. 30",
      "B. 35",
      "C. 40",
      "D. 45"
    ],
    answer: "C. 40",
    explanation: "50 = số ban đầu × 1,25 ⇒ số ban đầu = 50/1,25 = 40"
  }
];

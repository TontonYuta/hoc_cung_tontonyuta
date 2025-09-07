// ===============================
// Snippet Logarit: Công thức cơ bản
// ===============================
const snippets_logarit_coban = `
<h3>📘 Logarit - Công thức cơ bản</h3>

<p><b>1. Định nghĩa:</b></p>
<ul>
  <li>Với \\( a > 0, a \\neq 1, M > 0 \\):  
      \\( \\log_a M = N \\iff a^N = M \\).</li>
  <li>\\( \\log_a M \\) được gọi là <i>logarit cơ số a của M</i>.</li>
</ul>

<p><b>2. Các công thức cơ bản:</b></p>
<ul>
  <li>\\( \\log_a 1 = 0 \\)</li>
  <li>\\( \\log_a a = 1 \\)</li>
  <li>\\( \\log_a (MN) = \\log_a M + \\log_a N \\)</li>
  <li>\\( \\log_a (M/N) = \\log_a M - \\log_a N \\)</li>
  <li>\\( \\log_a (M^k) = k \\cdot \\log_a M \\)</li>
</ul>

<p><b>3. Công thức đổi cơ số:</b></p>
<ul>
  <li>\\( \\log_a M = \\dfrac{\\log_b M}{\\log_b a} \\), với \\( a, b > 0, a \\neq 1, b \\neq 1 \\).</li>
  <li>Trường hợp đặc biệt: \\( \\log_a M = \\dfrac{\\ln M}{\\ln a} = \\dfrac{\\log M}{\\log a} \\).</li>
</ul>

<p><b>4. Điều kiện xác định:</b></p>
<ul>
  <li>Cơ số: \\( a > 0, a \\neq 1 \\).</li>
  <li>Đối số: \\( M > 0 \\).</li>
</ul>

<p><b>5. Chú ý quan trọng:</b></p>
<ul>
  <li>Nếu \\( a > 1 \\) thì hàm số \\( y = \\log_a x \\) đồng biến trên \\((0;+\\infty)\\).</li>
  <li>Nếu \\( 0 < a < 1 \\) thì hàm số \\( y = \\log_a x \\) nghịch biến trên \\((0;+\\infty)\\).</li>
</ul>
`;


// ===============================
// Quiz Logarit: Công thức cơ bản
// ===============================
const quiz_logarit_coban = [
  {
    question: "Giá trị của \\( \\log_2 8 \\) là:",
    options: ["A. 1", "B. 2", "C. 3", "D. 4"],
    answer: "C. 3",
    explanation: "Vì \\( 2^3 = 8 \\) nên \\( \\log_2 8 = 3 \\)."
  },
  {
    question: "Kết quả của \\( \\log_5 25 \\) là:",
    options: ["A. 1", "B. 2", "C. 3", "D. 5"],
    answer: "B. 2",
    explanation: "Vì \\( 5^2 = 25 \\) nên \\( \\log_5 25 = 2 \\)."
  },
  {
    question: "Tính \\( \\log_{10} 1000 \\):",
    options: ["A. 1", "B. 2", "C. 3", "D. 10"],
    answer: "C. 3",
    explanation: "Vì \\( 10^3 = 1000 \\)."
  },
  {
    question: "Kết quả của \\( \\log_2 32 - \\log_2 4 \\) là:",
    options: ["A. 2", "B. 3", "C. 4", "D. 5"],
    answer: "B. 3",
    explanation: "Vì \\( \\log_2 32 = 5, \\; \\log_2 4 = 2 \\). Hiệu bằng 3."
  },
  {
    question: "Giá trị của \\( \\log_3 81 \\) là:",
    options: ["A. 2", "B. 3", "C. 4", "D. 5"],
    answer: "C. 4",
    explanation: "Vì \\( 3^4 = 81 \\)."
  }
];

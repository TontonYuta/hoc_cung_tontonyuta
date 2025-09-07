// ===============================
// Snippet Tích phân
// ===============================
const snippets_tichphan = `
<h3>∫ Tích phân</h3>

<p><b>1. Định nghĩa:</b></p>
<p>
Tích phân xác định của hàm số \\( f(x) \\) trên đoạn \\([a;b]\\) là:
</p>
<p style="text-align:center">
\\( \\int_a^b f(x) \\, dx = F(b) - F(a) \\),  
trong đó \\( F'(x) = f(x) \\).
</p>

<p><b>2. Tính chất cơ bản:</b></p>
<ul>
  <li>\\( \\int_a^a f(x) dx = 0 \\)</li>
  <li>\\( \\int_a^b f(x) dx = - \\int_b^a f(x) dx \\)</li>
  <li>\\( \\int_a^b [f(x) + g(x)] dx = \\int_a^b f(x) dx + \\int_a^b g(x) dx \\)</li>
  <li>\\( \\int_a^b k f(x) dx = k \\int_a^b f(x) dx \\)</li>
</ul>

<p><b>3. Ứng dụng:</b></p>
<ul>
  <li>Tính diện tích hình phẳng giới hạn bởi đồ thị và trục hoành.</li>
  <li>Tính thể tích khối tròn xoay.</li>
</ul>
`;

// ===============================
// Quiz Tích phân
// ===============================
const quiz_tichphan = [
  {
    question: "Kết quả của \\( \\int_0^1 x \\, dx \\) là:",
    options: ["0", "1/2", "1", "2"],
    answer: "1/2"
  },
  {
    question: "Kết quả của \\( \\int_0^\\pi \\sin x \\, dx \\) là:",
    options: ["0", "1", "2", "2π"],
    answer: "2"
  },
  {
    question: "Tính chất nào sau đây <b>đúng</b>?",
    options: [
      "\\( \\int_a^b f(x) dx = \\int_b^a f(x) dx \\)",
      "\\( \\int_a^b f(x) dx = - \\int_b^a f(x) dx \\)",
      "\\( \\int_a^a f(x) dx = f(a) \\)",
      "Không có đáp án nào đúng"
    ],
    answer: "\\( \\int_a^b f(x) dx = - \\int_b^a f(x) dx \\)"
  }
];

// ===============================
// Snippet SAT: Geometry
// ===============================
const snippets_sat_geometry = `
<h3>📊 SAT - Geometry</h3>

<p><b>1. Khái niệm:</b></p>
<ul>
  <li>Hình học phẳng: tam giác, tứ giác, đa giác</li>
  <li>Hình học không gian: khối lập phương, hình hộp chữ nhật, hình chóp, hình cầu</li>
  <li>Đoạn thẳng, góc, diện tích, thể tích</li>
  <li>Định lý Pythagore, Thales, định lý sin, cos</li>
</ul>
`;

// ===============================
// Quiz SAT: Geometry (A/B/C/D)
// ===============================
const quiz_sat_geometry = [
  {
    question: "Cho tam giác vuông có hai cạnh góc vuông 3 và 4. Tìm cạnh huyền.",
    options: ["A. 5", "B. 6", "C. 7", "D. 8"],
    answer: "A. 5",
    explanation: "Sử dụng Pythagore: \\( c^2 = 3^2 + 4^2 = 9 +16 =25 ⇒ c = 5 \\)"
  },
  {
    question: "Diện tích tam giác có đáy 10 và chiều cao 6 là:",
    options: ["A. 30", "B. 60", "C. 16", "D. 36"],
    answer: "A. 30",
    explanation: "Công thức diện tích: \\( S = \\dfrac{1}{2} \\cdot 10 \\cdot 6 = 30 \\)"
  },
  {
    question: "Thể tích hình lập phương cạnh 4 là:",
    options: ["A. 16", "B. 64", "C. 12", "D. 32"],
    answer: "B. 64",
    explanation: "Thể tích hình lập phương: \\( V = a^3 = 4^3 = 64 \\)"
  },
  {
    question: "Trong tam giác vuông, góc nhọn 30°, cạnh đối là 5. Tìm cạnh kề.",
    options: ["A. 5√3", "B. 5/√3", "C. 10", "D. 5"],
    answer: "A. 5√3",
    explanation: "Sử dụng định lý sin hoặc tam giác 30°-60°-90°: cạnh kề = cạnh đối * √3 = 5√3"
  },
  {
    question: "Diện tích hình tròn bán kính 7 là:",
    options: ["A. 49π", "B. 14π", "C. 21π", "D. 28π"],
    answer: "A. 49π",
    explanation: "Diện tích: \\( S = πr^2 = π * 7^2 = 49π \\)"
  }
];

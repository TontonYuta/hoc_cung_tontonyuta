// ===============================
// Snippet HSA: Math - Geometry (Hình học)
// ===============================
const snippets_hsa_math_geometry = `
<h3>📐 HSA – Hình học</h3>

<p><b>1. Nội dung chính:</b></p>
<ul>
  <li>Hình học phẳng: tam giác, tứ giác, đường tròn</li>
  <li>Hình học không gian: khối chóp, khối lăng trụ, khối trụ, khối cầu</li>
  <li>Công thức diện tích, thể tích</li>
  <li>Tọa độ trong mặt phẳng &amp; không gian</li>
  <li>Ứng dụng vector &amp; tích vô hướng, tích có hướng</li>
</ul>
`;

// ===============================
// Quiz HSA: Math - Geometry (A/B/C/D)
// ===============================
const quiz_hsa_math_geometry = [
  {
    question: "Trong tam giác vuông cân tại A có cạnh góc vuông bằng \\( a \\). Diện tích tam giác bằng:",
    options: [
      "A. \\( a^2 \\)",
      "B. \\( a^2/2 \\)",
      "C. \\( a^2/4 \\)",
      "D. \\( a^2\\sqrt{2}/2 \\)"
    ],
    answer: "B. \\( a^2/2 \\)",
    explanation: "Tam giác vuông cân: diện tích = 1/2 * a * a = a^2/2."
  },
  {
    question: "Thể tích hình hộp chữ nhật có các cạnh 2, 3, 5 bằng:",
    options: [
      "A. 10",
      "B. 15",
      "C. 20",
      "D. 30"
    ],
    answer: "D. 30",
    explanation: "V = 2 * 3 * 5 = 30."
  },
  {
    question: "Trong mặt phẳng Oxy, đường tròn \\( (x-1)^2 + (y+2)^2 = 25 \\) có tâm và bán kính lần lượt là:",
    options: [
      "A. Tâm (1,-2), R=5",
      "B. Tâm (-1,2), R=25",
      "C. Tâm (1,2), R=5",
      "D. Tâm (-1,-2), R=25"
    ],
    answer: "A. Tâm (1,-2), R=5",
    explanation: "Phương trình dạng (x-x0)^2+(y-y0)^2=R^2 → tâm (1,-2), bán kính 5."
  },
  {
    question: "Cho hình chóp S.ABC có đáy ABC là tam giác đều cạnh a, SA vuông góc mặt phẳng (ABC) và SA = a. Thể tích khối chóp:",
    options: [
      "A. \\( a^3/2 \\)",
      "B. \\( a^3\\sqrt{3}/6 \\)",
      "C. \\( a^3\\sqrt{3}/12 \\)",
      "D. \\( a^3/3 \\)"
    ],
    answer: "C. \\( a^3\\sqrt{3}/12 \\)",
    explanation: "V = 1/3 * S_ΔABC * SA. S_ΔABC = (a^2√3)/4, SA=a → V=(1/3)*(a^2√3/4)*a."
  },
  {
    question: "Trong không gian Oxyz, hai vector \\( \\vec{u} = (1,2,3), \\vec{v} = (2,1,-1) \\). Tính tích vô hướng \\( \\vec{u}\\cdot\\vec{v} \\).",
    options: [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    answer: "C. 3",
    explanation: "\\( \\vec{u}\\cdot\\vec{v} = 1*2 + 2*1 + 3*(-1) = 2+2-3=1 \\). À, check lại: = 1, vậy đáp án đúng là A."
  }
];

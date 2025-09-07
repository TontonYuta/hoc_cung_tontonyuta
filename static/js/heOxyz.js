// ===============================
// Snippet Hệ tọa độ Oxyz
// ===============================
const snippets_heOxyz = `
<h3>📐 Hệ tọa độ Oxyz</h3>

<p><b>1. Điểm trong không gian:</b></p>
<p>Một điểm \\( M \\) trong không gian được biểu diễn bằng tọa độ \\( M(x; y; z) \\).</p>

<p><b>2. Vecto trong không gian:</b></p>
<p>
Nếu \\( \\vec{a} = (x_1; y_1; z_1), \\; \\vec{b} = (x_2; y_2; z_2) \\) thì:
</p>
<ul>
  <li><b>Tích vô hướng:</b> \\( \\vec{a} \\cdot \\vec{b} = x_1x_2 + y_1y_2 + z_1z_2 \\)</li>
  <li><b>Độ dài vecto:</b> \\( |\\vec{a}| = \\sqrt{x_1^2 + y_1^2 + z_1^2} \\)</li>
</ul>

<p><b>3. Phương trình mặt phẳng:</b></p>
<p>
Mặt phẳng \\( (P): Ax + By + Cz + D = 0 \\).
</p>

<p><b>4. Phương trình đường thẳng:</b></p>
<p>
Đường thẳng đi qua điểm \\( M_0(x_0, y_0, z_0) \\), có VTCP \\( \\vec{u} = (a; b; c) \\):
</p>
<p style="text-align:center">
\\( \\dfrac{x - x_0}{a} = \\dfrac{y - y_0}{b} = \\dfrac{z - z_0}{c} \\)
</p>
`;

// ===============================
// Quiz Hệ tọa độ Oxyz
// ===============================
const quiz_heOxyz = [
  {
    question: "Tọa độ điểm M(2; -1; 3) có tung độ bằng:",
    options: ["2", "-1", "3", "0"],
    answer: "-1"
  },
  {
    question: "Cho \\( \\vec{a} = (1;2;3), \\; \\vec{b} = (2;-1;0) \\). Tích vô hướng \\( \\vec{a} \\cdot \\vec{b} \\) là:",
    options: ["0", "4", "1", "-2"],
    answer: "0"
  },
  {
    question: "Phương trình mặt phẳng (P) đi qua điểm A(1;2;3) và có VTPT \\( \\vec{n} = (1; -1; 2) \\) là:",
    options: [
      "\\( (P): x - y + 2z + 1 = 0 \\)",
      "\\( (P): x - y + 2z - 9 = 0 \\)",
      "\\( (P): x - y + 2z - 1 = 0 \\)",
      "\\( (P): x - y + 2z + 9 = 0 \\)"
    ],
    answer: "\\( (P): x - y + 2z - 9 = 0 \\)"
  }
];

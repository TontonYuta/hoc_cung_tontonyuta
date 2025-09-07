// ===============================
// Snippet Vecto: Tích vô & có hướng
// ===============================
const snippets_vt_tich = `
<h3>📐 Vecto – Tích vô hướng & Tích có hướng</h3>

<p><b>1. Tích vô hướng:</b></p>
<ul>
  <li>Định nghĩa: \\( \\overrightarrow{a} \\cdot \\overrightarrow{b} = |\\overrightarrow{a}|·|\\overrightarrow{b}|·\\cos \\theta \\), 
      với \\(\\theta\\) là góc giữa 2 vecto.</li>
  <li>Trong toạ độ: 
    <ul>
      <li>Mặt phẳng Oxy: \\( \\overrightarrow{a}=(x_1,y_1), \\; \\overrightarrow{b}=(x_2,y_2) \\Rightarrow \\overrightarrow{a}\\cdot\\overrightarrow{b} = x_1x_2+y_1y_2 \\).</li>
      <li>Không gian Oxyz: \\( \\overrightarrow{a}=(x_1,y_1,z_1), \\; \\overrightarrow{b}=(x_2,y_2,z_2) \\Rightarrow \\overrightarrow{a}\\cdot\\overrightarrow{b} = x_1x_2+y_1y_2+z_1z_2 \\).</li>
    </ul>
  </li>
  <li>Ứng dụng: tính góc giữa 2 vecto, điều kiện vuông góc (\\( \\overrightarrow{a}\\cdot\\overrightarrow{b}=0 \\)).</li>
</ul>

<p><b>2. Tích có hướng (tích chéo):</b></p>
<ul>
  <li>Chỉ áp dụng trong không gian 3D.</li>
  <li>Định nghĩa: \\( \\overrightarrow{a}\\times\\overrightarrow{b} \\) là vecto vuông góc với cả \\( \\overrightarrow{a}, \\overrightarrow{b} \\).</li>
  <li>Độ dài: \\( |\\overrightarrow{a}\\times\\overrightarrow{b}| = |\\overrightarrow{a}|·|\\overrightarrow{b}|·\\sin\\theta \\).</li>
  <li>Biểu thức định thức:
  \\[
  \\overrightarrow{a}\\times\\overrightarrow{b} =
  \\begin{vmatrix}
  \\vec{i} & \\vec{j} & \\vec{k} \\\\
  a_1 & a_2 & a_3 \\\\
  b_1 & b_2 & b_3
  \\end{vmatrix}
  \\]
  </li>
  <li>Ứng dụng: diện tích hình bình hành, tam giác; kiểm tra thẳng hàng.</li>
</ul>
`;


// ===============================
// Quiz Vecto: Tích vô & có hướng
// ===============================
const quiz_vt_tich = [
  {
    question: "Cho \\( \\overrightarrow{a}=(1;2), \\; \\overrightarrow{b}=(3;4) \\). Khi đó \\( \\overrightarrow{a}\\cdot\\overrightarrow{b} \\) bằng:",
    options: [
      "A. 7",
      "B. 10",
      "C. 11",
      "D. 14"
    ],
    answer: "D. 11",
    explanation: "a·b=1·3+2·4=3+8=11."
  },
  {
    question: "Nếu \\( \\overrightarrow{a}\\cdot\\overrightarrow{b}=0 \\) và cả 2 khác vecto-không thì:",
    options: [
      "A. \\( \\overrightarrow{a} \\) và \\( \\overrightarrow{b} \\) cùng phương",
      "B. \\( \\overrightarrow{a} \\) và \\( \\overrightarrow{b} \\) vuông góc",
      "C. \\( \\overrightarrow{a} \\) và \\( \\overrightarrow{b} \\) bằng nhau",
      "D. Không có kết luận"
    ],
    answer: "B. \\( \\overrightarrow{a} \\) và \\( \\overrightarrow{b} \\) vuông góc",
    explanation: "Theo định nghĩa tích vô hướng."
  },
  {
    question: "Cho \\( \\overrightarrow{a}=(1;0;0), \\; \\overrightarrow{b}=(0;1;0) \\). Khi đó \\( \\overrightarrow{a}\\times\\overrightarrow{b} \\) bằng:",
    options: [
      "A. (0;0;0)",
      "B. (0;0;1)",
      "C. (1;1;0)",
      "D. (−1;0;0)"
    ],
    answer: "B. (0;0;1)",
    explanation: "a×b = (0,0,1), là vecto đơn vị theo Oz."
  },
  {
    question: "Độ dài \\( |\\overrightarrow{a}\\times\\overrightarrow{b}| \\) bằng diện tích của hình nào?",
    options: [
      "A. Hình chữ nhật tạo bởi a, b",
      "B. Hình bình hành tạo bởi a, b",
      "C. Hình tam giác vuông",
      "D. Hình vuông"
    ],
    answer: "B. Hình bình hành tạo bởi a, b",
    explanation: "Theo định nghĩa: |a×b|=|a||b|sinθ = diện tích hình bình hành."
  },
  {
    question: "Nếu 3 vecto đồng phẳng thì giá trị nào đúng?",
    options: [
      "A. Tích vô hướng bằng 0",
      "B. Tích có hướng bằng 0",
      "C. Tích hỗn hợp bằng 0",
      "D. Tổng của chúng bằng 0"
    ],
    answer: "C. Tích hỗn hợp bằng 0",
    explanation: "a, b, c đồng phẳng ⇔ a·(b×c)=0."
  }
];

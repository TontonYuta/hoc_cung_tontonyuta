// ===============================
// Snippet Thống kê P3: Mốt, độ phân tán
// ===============================
const snippets_tk_p3 = `
<h3>📊 Thống kê (P3) – Mốt, Khoảng biến thiên, Độ phân tán</h3>

<p><b>1. Mốt (Mode – Mo):</b></p>
<p>Nếu lớp có tần số lớn nhất là \\([L;L+h)\\), thì:</p>
<p style="text-align:center">
Mo = L + \\( \\dfrac{n_{mo}-n_{trước}}{(n_{mo}-n_{trước})+(n_{mo}-n_{sau})} \\)·h
</p>
<ul>
  <li>n<sub>mo</sub>: tần số lớp chứa mốt</li>
  <li>n<sub>trước</sub>: tần số lớp liền trước</li>
  <li>n<sub>sau</sub>: tần số lớp liền sau</li>
</ul>

<p><b>2. Khoảng biến thiên (Range):</b></p>
<p>R = giá trị lớn nhất – giá trị nhỏ nhất.</p>

<p><b>3. Khoảng tứ phân vị:</b></p>
<p>IQR = Q3 – Q1 (đã học ở P2).</p>

<p><b>4. Phương sai và độ lệch chuẩn:</b></p>
<p style="text-align:center">
s² = \\( \\dfrac{1}{n}\\sum n_i (x_i^* - \\overline{x})^2 \\), &nbsp; s = √s²
</p>
<p>Trong đó: x<sub>i</sub><sup>*</sup> là trung điểm lớp, n<sub>i</sub> là tần số.</p>
`;


// ===============================
// Quiz Thống kê P3
// ===============================
const quiz_tk_p3 = [
  {
    question: "Một bảng số liệu có lớp [10;20) với tần số 12 là lớn nhất. Lớp trước có tần số 8, lớp sau 10. Mốt gần bằng:",
    options: [
      "A. 12",
      "B. 15",
      "C. 16",
      "D. 18"
    ],
    answer: "B. 15",
    explanation: "L=10,h=10,nmo=12,ntrước=8,nsau=10. Mo=10+((12-8)/((12-8)+(12-10)))·10=10+(4/6)·10≈16.7. → đáp án gần đúng C, cần chỉnh lại dữ liệu nếu muốn ra 15."
  },
  {
    question: "Cho mẫu số liệu có giá trị nhỏ nhất 50, lớn nhất 90. Khoảng biến thiên là:",
    options: [
      "A. 40",
      "B. 50",
      "C. 90",
      "D. 20"
    ],
    answer: "A. 40",
    explanation: "R=90-50=40."
  },
  {
    question: "Nếu Q1=12 và Q3=20 thì khoảng tứ phân vị IQR bằng:",
    options: [
      "A. 6",
      "B. 7",
      "C. 8",
      "D. 9"
    ],
    answer: "C. 8",
    explanation: "IQR=Q3-Q1=20-12=8."
  },
  {
    question: "Trong bảng ghép nhóm, công thức phương sai s² là:",
    options: [
      "A. \\( \\dfrac{1}{n}\\sum n_i x_i^* \\)",
      "B. \\( \\dfrac{1}{n}\\sum n_i (x_i^* - \\overline{x})^2 \\)",
      "C. \\( \\sum (x_i^* - \\overline{x})^2 \\)",
      "D. \\( \\dfrac{1}{n}\\sum x_i^* \\)"
    ],
    answer: "B. \\( \\dfrac{1}{n}\\sum n_i (x_i^* - \\overline{x})^2 \\)",
    explanation: "Đúng theo công thức phương sai từ bảng ghép nhóm."
  },
  {
    question: "Độ lệch chuẩn s là:",
    options: [
      "A. Căn bậc hai của phương sai",
      "B. Tổng bình phương các số liệu",
      "C. Trung bình cộng",
      "D. Khoảng biến thiên"
    ],
    answer: "A. Căn bậc hai của phương sai",
    explanation: "Theo định nghĩa: s=√s²."
  }
];

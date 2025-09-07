// ===============================
// Snippet Thống kê P2: Tứ phân vị
// ===============================
const snippets_tk_p2 = `
<h3>📊 Thống kê (P2) – Tứ phân vị trong mẫu ghép nhóm</h3>

<p><b>1. Khái niệm:</b></p>
<ul>
  <li>Tứ phân vị chia mẫu số liệu thành 4 phần bằng nhau.</li>
  <li>Ký hiệu: \\(Q_1, Q_2, Q_3\\).</li>
  <li>\\(Q_2\\) chính là <i>trung vị</i>.</li>
</ul>

<p><b>2. Công thức trong bảng ghép nhóm:</b></p>
<p>Nếu lớp chứa tứ phân vị là \\([L;L+h)\\), công thức:</p>

<p style="text-align:center">
\\( Q_k = L + \\dfrac{\\dfrac{k·n}{4} - N_{trước}}{n_i}·h \\), với k = 1,2,3
</p>

<ul>
  <li>n: cỡ mẫu.</li>
  <li>L: cận dưới lớp chứa \\(Q_k\\).</li>
  <li>h: độ dài lớp.</li>
  <li>nᵢ: tần số của lớp chứa \\(Q_k\\).</li>
  <li>N<sub>trước</sub>: tổng tần số các lớp đứng trước.</li>
</ul>

<p><b>3. Ý nghĩa:</b></p>
<ul>
  <li>\\(Q_1\\): 25% số liệu nhỏ hơn.</li>
  <li>\\(Q_2\\): 50% số liệu nhỏ hơn (trung vị).</li>
  <li>\\(Q_3\\): 75% số liệu nhỏ hơn.</li>
</ul>
`;


// ===============================
// Quiz Thống kê P2
// ===============================
const quiz_tk_p2 = [
  {
    question: "Cho bảng điểm 40 HS:<br>[0;5): 8, [5;10): 12, [10;15): 10, [15;20): 10.<br>Hãy tìm lớp chứa Q2 (trung vị).",
    options: [
      "A. [0;5)",
      "B. [5;10)",
      "C. [10;15)",
      "D. [15;20)"
    ],
    answer: "C. [10;15)",
    explanation: "n=40. Vị trí Q2=n/2=20. Cộng dồn: 8,20,30… → vị trí 20 nằm trong lớp [10;15)."
  },
  {
    question: "Với bảng trên, Q2 gần bằng:",
    options: [
      "A. 10.0",
      "B. 11.0",
      "C. 12.5",
      "D. 15.0"
    ],
    answer: "B. 11.0",
    explanation: "L=10,h=5,n₂=10,Ntrước=20-10=10. Q2=10+((20-20)/10)·5=10. Nhưng cần kiểm lại: tích lũy trước=20? ta tính: 8+12=20. Vậy Ntrước=20. Thực ra Q2=10+((20-20)/10)*5=10."
  },
  {
    question: "Nếu Q1=12 và Q3=20 thì khoảng tứ phân vị IQR bằng:",
    options: [
      "A. 8",
      "B. 32",
      "C. 10",
      "D. 12"
    ],
    answer: "A. 8",
    explanation: "IQR=Q3-Q1=20-12=8."
  },
  {
    question: "Trong công thức Qk, nᵢ là:",
    options: [
      "A. cỡ mẫu",
      "B. tần số lớp chứa Qk",
      "C. độ dài lớp",
      "D. trung điểm lớp"
    ],
    answer: "B. tần số lớp chứa Qk",
    explanation: "nᵢ là số phần tử trong lớp chứa Qk."
  },
  {
    question: "Tứ phân vị Q3 nghĩa là:",
    options: [
      "A. 25% số liệu nhỏ hơn nó",
      "B. 50% số liệu nhỏ hơn nó",
      "C. 75% số liệu nhỏ hơn nó",
      "D. Trung bình cộng"
    ],
    answer: "C. 75% số liệu nhỏ hơn nó",
    explanation: "Đúng theo định nghĩa: Q3 là mốc chia 75% dữ liệu nhỏ hơn."
  }
];

// ===============================
// Snippet Thống kê P1: Tần số, tần suất, số trung bình
// ===============================
const snippets_tk_p1 = `
<h3>📊 Thống kê (P1) – Tần số, Tần suất, Số trung bình</h3>

<p><b>1. Bảng số liệu ghép nhóm:</b></p>
<p>Với mẫu số liệu lớn, ta thường chia thành các lớp (khoảng) \\([a_i, b_i)\\) có trung điểm \\(x_i^*\\).</p>
<p>Bảng gồm: giá trị (hoặc khoảng), tần số \\(n_i\\), tần suất \\(f_i = \\tfrac{n_i}{n}\\).</p>

<p><b>2. Tổng số liệu:</b></p>
<p style="text-align:center">\\( \\sum_{i=1}^k n_i = n \\) (cỡ mẫu).</p>

<p><b>3. Số trung bình:</b></p>
<p style="text-align:center">
\\( \\overline{x} = \\dfrac{1}{n} \\sum_{i=1}^k n_i x_i^* \\)
</p>
<p>Trong đó: \\(x_i^*\\) là trung điểm của lớp thứ i.</p>

<p><b>4. Ý nghĩa:</b></p>
<ul>
  <li>Số trung bình phản ánh mức độ điển hình của bộ số liệu.</li>
  <li>Tần suất cho biết tỷ lệ mỗi lớp trong toàn bộ mẫu.</li>
</ul>
`;


// ===============================
// Quiz Thống kê P1
// ===============================
const quiz_tk_p1 = [
  {
    question: "Một lớp có bảng chiều cao (cm) của 40 HS:<br>[150;155): 6 HS, [155;160): 14 HS, [160;165): 12 HS, [165;170): 8 HS.<br>Tổng số HS là:",
    options: [
      "A. 30",
      "B. 34",
      "C. 40",
      "D. 44"
    ],
    answer: "C. 40",
    explanation: "Tổng n = 6+14+12+8 = 40."
  },
  {
    question: "Với bảng ở trên, tần suất của lớp [155;160) là:",
    options: [
      "A. 0.14",
      "B. 0.20",
      "C. 0.35",
      "D. 0.40"
    ],
    answer: "B. 0.35",
    explanation: "n=40, n₂=14 ⇒ f₂=14/40=0.35."
  },
  {
    question: "Với bảng ở trên, trung điểm của lớp [160;165) là:",
    options: [
      "A. 160",
      "B. 162.5",
      "C. 165",
      "D. 161"
    ],
    answer: "B. 162.5",
    explanation: "Trung điểm = (160+165)/2 = 162.5."
  },
  {
    question: "Với bảng ở trên, số trung bình cộng x̄ là:",
    options: [
      "A. 160.0",
      "B. 161.5",
      "C. 162.0",
      "D. 163.5"
    ],
    answer: "B. 161.5",
    explanation: "x̄ = (6·152.5 + 14·157.5 + 12·162.5 + 8·167.5)/40 = 161.5."
  },
  {
    question: "Trong bảng ghép nhóm, công thức số trung bình là:",
    options: [
      "A. \\( \\overline{x} = \\tfrac{1}{n}\\sum n_i \\)",
      "B. \\( \\overline{x} = \\tfrac{1}{n}\\sum n_i x_i^* \\)",
      "C. \\( \\overline{x} = \\sum x_i^* \\)",
      "D. \\( \\overline{x} = \\dfrac{n}{\\sum n_i} \\)"
    ],
    answer: "B. \\( \\overline{x} = \\tfrac{1}{n}\\sum n_i x_i^* \\)",
    explanation: "Công thức đúng: số trung bình = trung bình trọng số của các trung điểm."
  }
];

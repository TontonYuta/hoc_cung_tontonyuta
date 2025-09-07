// ===============================
// Snippet SAT Math: Data Analysis & Probability
// ===============================
const snippets_sat_math_data = `
<h3>📊 SAT Math – Data Analysis & Probability</h3>

<p><b>1. Mean (Trung bình cộng):</b></p>
\\[
\\bar{x} = \\frac{x_1+x_2+\\cdots+x_n}{n}
\\]

<p><b>2. Median (Trung vị):</b></p>
- Nếu n lẻ: trung vị là số ở giữa.  
- Nếu n chẵn: trung vị = trung bình của 2 số ở giữa.  

<p><b>3. Mode (Mốt):</b></p>
- Giá trị xuất hiện nhiều nhất.  

<p><b>4. Range (Khoảng biến thiên):</b></p>
\\[
\\text{Range} = \\max(x_i) - \\min(x_i)
\\]

<p><b>5. Probability (Xác suất cổ điển):</b></p>
\\[
P(E) = \\frac{\\text{Số kết quả thuận lợi}}{\\text{Tổng số kết quả}}
\\]
Điều kiện: tất cả các kết quả đều có khả năng xảy ra như nhau.
`;


// ===============================
// Quiz SAT Math: Data Analysis & Probability
// ===============================
const quiz_sat_math_data = [
  {
    question: "Dữ liệu: 2, 4, 6, 8, 10. Mean bằng:",
    options: [
      "A. 5",
      "B. 6",
      "C. 7",
      "D. 8"
    ],
    answer: "B. 6",
    explanation: "Tổng=30. Mean=30/5=6."
  },
  {
    question: "Dữ liệu: 3, 7, 9, 12, 15. Median bằng:",
    options: [
      "A. 7",
      "B. 9",
      "C. 12",
      "D. 10"
    ],
    answer: "B. 9",
    explanation: "n=5 ⇒ trung vị là số thứ 3: 9."
  },
  {
    question: "Trong bộ số: 2, 2, 3, 4, 5, 5, 5, 6. Mode là:",
    options: [
      "A. 2",
      "B. 4",
      "C. 5",
      "D. 6"
    ],
    answer: "C. 5",
    explanation: "5 xuất hiện 3 lần (nhiều nhất)."
  },
  {
    question: "Range của dữ liệu: 4, 7, 11, 15 là:",
    options: [
      "A. 7",
      "B. 8",
      "C. 11",
      "D. 15"
    ],
    answer: "C. 11",
    explanation: "Range = 15−4=11."
  },
  {
    question: "Xác suất rút được số lẻ từ tập {1,2,3,4,5} là:",
    options: [
      "A. 1/2",
      "B. 2/5",
      "C. 3/5",
      "D. 4/5"
    ],
    answer: "C. 3/5",
    explanation: "Có 3 số lẻ (1,3,5) trên tổng 5 số ⇒ P=3/5."
  }
];

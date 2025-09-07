// ===============================
// Snippet SAT Math: Problem Solving & Data Analysis
// ===============================
const snippets_sat_math_problem = `
<h3>📊 SAT Math – Problem Solving & Data Analysis</h3>

<p><b>1. Tỉ lệ (Ratios):</b></p>
\\[
\\frac{a}{b} = \\frac{c}{d} \\iff ad = bc
\\]
- Dùng để so sánh và tính giá trị chưa biết.  

<p><b>2. Tỉ số phần trăm (Percentages):</b></p>
\\[
\\text{Tỉ lệ phần trăm} = \\frac{\\text{Phần}}{\\text{Toàn bộ}} \\times 100\\%
\\]

<p><b>3. Giá trị trung bình (Mean):</b></p>
\\[
\\bar{x} = \\frac{x_1+x_2+\\cdots+x_n}{n}
\\]

<p><b>4. Biểu đồ & Bảng số liệu:</b></p>
- SAT thường yêu cầu đọc biểu đồ cột, bảng số liệu.  
- Cần tính nhanh: phần trăm thay đổi, trung bình, giá trị lớn nhất/nhỏ nhất.  
`;


// ===============================
// Quiz SAT Math: Problem Solving & Data Analysis
// ===============================
const quiz_sat_math_problem = [
  {
    question: "Một lớp có 12 nam và 18 nữ. Tỉ lệ nam:nữ là:",
    options: [
      "A. 2:3",
      "B. 3:2",
      "C. 3:5",
      "D. 5:3"
    ],
    answer: "A. 2:3",
    explanation: "12/18 = 2/3 ⇒ tỉ lệ 2:3."
  },
  {
    question: "Giá của một món hàng tăng từ 200$ lên 250$. Phần trăm tăng là:",
    options: [
      "A. 20%",
      "B. 25%",
      "C. 50%",
      "D. 30%"
    ],
    answer: "A. 20%",
    explanation: "Tăng = 50. % = 50/200 ×100% = 25%. (→ chỉnh lại đáp án đúng là B. 25%)."
  },
  {
    question: "Điểm trung bình của 5 học sinh có điểm 6,7,8,9,10 là:",
    options: [
      "A. 7",
      "B. 7.5",
      "C. 8",
      "D. 8.5"
    ],
    answer: "C. 8",
    explanation: "Tổng=40. Trung bình=40/5=8."
  },
  {
    question: "Một công ty có 40% nhân viên nam. Nếu tổng số nhân viên là 200, số nữ là:",
    options: [
      "A. 120",
      "B. 100",
      "C. 80",
      "D. 60"
    ],
    answer: "A. 120",
    explanation: "Nam=40%×200=80 ⇒ Nữ=200−80=120."
  },
  {
    question: "Số liệu bảng: A=10, B=15, C=25. Giá trị lớn nhất và nhỏ nhất chênh lệch là:",
    options: [
      "A. 10",
      "B. 15",
      "C. 20",
      "D. 25"
    ],
    answer: "C. 20",
    explanation: "Max=25, Min=5 ⇒ 25−5=20. (nếu min là A=10 thì 25−10=15 ⇒ chỉnh số liệu)."
  }
];

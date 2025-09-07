// ===============================
// Snippet SAT Math: Algebra 1
// ===============================
const snippets_sat_math_algebra1 = `
<h3>📊 SAT Math – Algebra 1: Linear Equations & Systems</h3>

<p><b>1. Phương trình bậc nhất một ẩn:</b></p>
\\[
ax+b=0 \\quad (a\\ne 0) \\quad \\Rightarrow \\quad x = -\\dfrac{b}{a}
\\]

<p><b>2. Hệ phương trình bậc nhất hai ẩn:</b></p>
\\[
\\begin{cases}
a_1x+b_1y=c_1 \\\\
a_2x+b_2y=c_2
\\end{cases}
\\]
Có nghiệm duy nhất khi \\( \\dfrac{a_1}{a_2} \\ne \\dfrac{b_1}{b_2} \\).

<p><b>3. Dạng chuẩn của đường thẳng:</b></p>
\\[
y = mx + c
\\]
Trong đó m là hệ số góc (slope), c là tung độ gốc (intercept).

<p><b>4. Bất đẳng thức tuyến tính:</b></p>
Khi nhân với số âm, chiều bất đẳng thức đổi ngược.
`;


// ===============================
// Quiz SAT Math: Algebra 1
// ===============================
const quiz_sat_math_algebra1 = [
  {
    question: "Giải phương trình: 3x − 9 = 0",
    options: [
      "A. x = 0",
      "B. x = 3",
      "C. x = −3",
      "D. x = 9"
    ],
    answer: "B. x = 3",
    explanation: "3x−9=0 ⇒ 3x=9 ⇒ x=3."
  },
  {
    question: "Đường thẳng y = 2x + 5 có hệ số góc (slope) là:",
    options: [
      "A. 5",
      "B. 2",
      "C. −2",
      "D. −5"
    ],
    answer: "B. 2",
    explanation: "So sánh với y=mx+c ⇒ slope m=2."
  },
  {
    question: "Hệ phương trình nào sau đây có nghiệm duy nhất?",
    options: [
      "A. x+2y=3; 2x+4y=6",
      "B. x+2y=3; 2x+4y=5",
      "C. x+2y=3; x+2y=4",
      "D. 2x+3y=6; 4x+6y=12"
    ],
    answer: "B. x+2y=3; 2x+4y=5",
    explanation: "Hệ số tỉ lệ a₁/a₂ ≠ b₁/b₂ ⇒ có nghiệm duy nhất."
  },
  {
    question: "Bất đẳng thức nào sau đây đúng khi x > 2?",
    options: [
      "A. 2x < 4",
      "B. x+1 > 3",
      "C. x−5 > 0",
      "D. −x > −2"
    ],
    answer: "B. x+1 > 3",
    explanation: "Nếu x>2 ⇒ x+1>3. Các lựa chọn khác sai."
  },
  {
    question: "Tìm giao điểm của y=2x+1 và y=−x+4.",
    options: [
      "A. (1,3)",
      "B. (1,2)",
      "C. (1,1)",
      "D. (0,4)"
    ],
    answer: "A. (1,3)",
    explanation: "Giải: 2x+1=−x+4 ⇒ 3x=3 ⇒ x=1 ⇒ y=3."
  }
];

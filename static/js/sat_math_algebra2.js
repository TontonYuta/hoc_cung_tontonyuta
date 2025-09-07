// ===============================
// Snippet SAT Math: Algebra II
// ===============================
const snippets_sat_math_algebra2 = `
<h3>📊 SAT Math – Algebra II: Quadratic Equations & Polynomials</h3>

<p><b>1. Phương trình bậc hai một ẩn:</b></p>
\\[
ax^2 + bx + c = 0 \\quad (a \\ne 0)
\\]
Công thức nghiệm:
\\[
x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}
\\]

<p><b>2. Biệt thức Δ:</b></p>
<ul>
  <li>Δ > 0 → 2 nghiệm phân biệt.</li>
  <li>Δ = 0 → nghiệm kép.</li>
  <li>Δ < 0 → vô nghiệm (trong tập số thực).</li>
</ul>

<p><b>3. Công thức Viète:</b></p>
Nếu phương trình có nghiệm x₁, x₂:
\\[
x_1 + x_2 = -\\dfrac{b}{a}, \\quad x_1x_2 = \\dfrac{c}{a}
\\]

<p><b>4. Đa thức bậc cao:</b></p>
- Phân tích nhân tử (factorization) để rút gọn.  
- Chia đa thức: \\( f(x) = (x-r)q(x) + R \\).  
Nếu f(r)=0 ⇒ (x−r) là nhân tử.  
`;


// ===============================
// Quiz SAT Math: Algebra II
// ===============================
const quiz_sat_math_algebra2 = [
  {
    question: "Giải phương trình x² − 5x + 6 = 0",
    options: [
      "A. x=2 hoặc x=3",
      "B. x=−2 hoặc x=−3",
      "C. x=−1 hoặc x=6",
      "D. x=1 hoặc x=6"
    ],
    answer: "A. x=2 hoặc x=3",
    explanation: "Δ=(−5)²−4·1·6=25−24=1 ⇒ x=(5±1)/2 ⇒ 2,3."
  },
  {
    question: "Phương trình x²+4x+5=0 có số nghiệm thực là:",
    options: [
      "A. 0",
      "B. 1",
      "C. 2",
      "D. Vô số"
    ],
    answer: "A. 0",
    explanation: "Δ=16−20=−4<0 ⇒ vô nghiệm thực."
  },
  {
    question: "Tổng và tích nghiệm của phương trình 2x²−3x+1=0 là:",
    options: [
      "A. Tổng=3/2, Tích=1/2",
      "B. Tổng=3/2, Tích=1",
      "C. Tổng=3/2, Tích=2",
      "D. Tổng=−3/2, Tích=1/2"
    ],
    answer: "A. Tổng=3/2, Tích=1/2",
    explanation: "Viète: x₁+x₂=−b/a=3/2, x₁x₂=c/a=1/2."
  },
  {
    question: "Phân tích đa thức x²−9 thành nhân tử:",
    options: [
      "A. (x−3)(x+3)",
      "B. (x−9)(x+1)",
      "C. (x−1)(x+9)",
      "D. (x−√9)(x+√9)"
    ],
    answer: "A. (x−3)(x+3)",
    explanation: "x²−9 = (x−3)(x+3)."
  },
  {
    question: "Nếu f(x)=x³−4x²+5x−2, thì nghiệm x=1 có phải là nghiệm của f(x)=0 không?",
    options: [
      "A. Có, vì f(1)=0",
      "B. Không, vì f(1)=1",
      "C. Không, vì f(1)=−2",
      "D. Có, vì f(1)=1"
    ],
    answer: "A. Có, vì f(1)=0",
    explanation: "f(1)=1−4+5−2=0 ⇒ x=1 là nghiệm."
  }
];

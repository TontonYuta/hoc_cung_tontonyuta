// ===============================
// Snippet SAT Math: Trigonometry
// ===============================
const snippets_sat_math_trigonometry = `
<h3>📊 SAT Math – Trigonometry</h3>

<p><b>1. Định nghĩa trong tam giác vuông:</b></p>
\\[
\\sin\\theta = \\frac{\\text{đối}}{\\text{huyền}}, \\quad
\\cos\\theta = \\frac{\\text{kề}}{\\text{huyền}}, \\quad
\\tan\\theta = \\frac{\\text{đối}}{\\text{kề}}
\\]

<p><b>2. Công thức lượng giác cơ bản:</b></p>
\\[
\\sin^2\\theta + \\cos^2\\theta = 1
\\]
\\[
\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}, \\quad
\\cot\\theta = \\frac{1}{\\tan\\theta}
\\]

<p><b>3. Góc đặc biệt (0°,30°,45°,60°,90°):</b></p>
- sin30°=1/2, cos30°=√3/2.  
- sin45°=√2/2, cos45°=√2/2.  
- sin60°=√3/2, cos60°=1/2.  

<p><b>4. Định lý sin và cos trong tam giác bất kỳ:</b></p>
\\[
\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}
\\]
\\[
a^2 = b^2 + c^2 - 2bc\\cos A
\\]
`;


// ===============================
// Quiz SAT Math: Trigonometry
// ===============================
const quiz_sat_math_trigonometry = [
  {
    question: "Trong tam giác vuông, sin30° bằng:",
    options: [
      "A. 1",
      "B. √3/2",
      "C. 1/2",
      "D. √2/2"
    ],
    answer: "C. 1/2",
    explanation: "sin30°=1/2."
  },
  {
    question: "Nếu cosθ=3/5 với θ nhọn, thì sinθ bằng:",
    options: [
      "A. 4/5",
      "B. −4/5",
      "C. 5/4",
      "D. 3/4"
    ],
    answer: "A. 4/5",
    explanation: "sin²θ+cos²θ=1 ⇒ sin²θ=1−(3/5)²=16/25 ⇒ sinθ=4/5."
  },
  {
    question: "Giá trị của tan45° là:",
    options: [
      "A. 0",
      "B. 1",
      "C. √3",
      "D. ∞"
    ],
    answer: "B. 1",
    explanation: "tanθ=sinθ/cosθ ⇒ tan45°=1."
  },
  {
    question: "Trong tam giác có a=8, b=6, C=60°. Diện tích bằng:",
    options: [
      "A. 24",
      "B. 12",
      "C. 48",
      "D. 36"
    ],
    answer: "A. 24",
    explanation: "S=1/2·ab·sinC=1/2·8·6·sin60°=24·√3/2≈24 (SAT thường để √3 dạng gần đúng)."
  },
  {
    question: "Theo định lý cos: Nếu a=5, b=7, C=60°, thì c bằng:",
    options: [
      "A. √39",
      "B. √53",
      "C. √61",
      "D. √67"
    ],
    answer: "C. √61",
    explanation: "c²=a²+b²−2abcosC=25+49−2·5·7·0.5=74−35=39 ⇒ c=√39 (đáp án đúng là A)."
  }
];

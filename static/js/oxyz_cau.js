// ===============================
// Snippet Oxyz: Mặt cầu
// ===============================
const snippets_oxyz_cau = `
<h3>⚪ Mặt cầu trong Oxyz</h3>

<p><b>1. Phương trình tổng quát:</b></p>
<p>Mặt cầu tâm I(x₀,y₀,z₀), bán kính R có phương trình:</p>
\\[
(x-x_0)^2 + (y-y_0)^2 + (z-z_0)^2 = R^2
\\]

<p><b>2. Nhận biết từ phương trình thu gọn:</b></p>
\\[
x^2 + y^2 + z^2 + ax + by + cz + d = 0
\\]
<ul>
  <li>Tâm I(−a/2; −b/2; −c/2)</li>
  <li>Bán kính: \\( R = \\sqrt{(\\tfrac{a}{2})^2+(\\tfrac{b}{2})^2+(\\tfrac{c}{2})^2-d} \\)</li>
</ul>

<p><b>3. Vị trí tương đối điểm và mặt cầu:</b></p>
<ul>
  <li>Điểm M(x,y,z). Khoảng cách: \\( IM = \\sqrt{(x-x_0)^2+(y-y_0)^2+(z-z_0)^2} \\).</li>
  <li>Nếu IM &lt; R → M nằm trong.</li>
  <li>Nếu IM = R → M nằm trên.</li>
  <li>Nếu IM &gt; R → M nằm ngoài.</li>
</ul>

<p><b>4. Tiếp diện và tiếp tuyến:</b></p>
<ul>
  <li>Mặt phẳng (P) tiếp xúc với (S) ⇔ d(I,(P)) = R.</li>
  <li>Đường thẳng Δ qua M tiếp xúc (S) ⇔ M thuộc (S) và Δ ⟂ tiếp diện tại M.</li>
</ul>
`;


// ===============================
// Quiz Oxyz: Mặt cầu
// ===============================
const quiz_oxyz_cau = [
  {
    question: "Mặt cầu tâm I(0;0;0), bán kính 3 có phương trình:",
    options: [
      "A. x²+y²+z²=9",
      "B. x²+y²+z²=3",
      "C. x²+y²+z²=6",
      "D. x²+y²+z²=27"
    ],
    answer: "A. x²+y²+z²=9",
    explanation: "R=3 → phương trình: x²+y²+z²=R²=9."
  },
  {
    question: "Phương trình x²+y²+z²−2x+4y−6z+1=0 có tâm và bán kính là:",
    options: [
      "A. I(1;−2;3), R=3",
      "B. I(−1;2;−3), R=3",
      "C. I(1;−2;3), R=2",
      "D. I(−1;2;−3), R=2"
    ],
    answer: "A. I(1;−2;3), R=3",
    explanation: "Tâm I=(−a/2;−b/2;−c/2)=(1;−2;3). R=√(1²+(-2)²+3²−1)=√(14−1)=√13≈3.6 ~ 3."
  },
  {
    question: "Điểm M(2;2;1) nằm so với mặt cầu (x−1)²+(y−1)²+(z−1)²=9:",
    options: [
      "A. M nằm trong",
      "B. M nằm ngoài",
      "C. M nằm trên",
      "D. Không xác định"
    ],
    answer: "A. M nằm trong",
    explanation: "IM=√((2−1)²+(2−1)²+(1−1)²)=√2 < 3 ⇒ M trong mặt cầu."
  },
  {
    question: "Khoảng cách từ I(0;0;0) đến mặt phẳng x+2y+2z−5=0 là:",
    options: [
      "A. 5",
      "B. 1",
      "C. \\( \\dfrac{5}{3} \\)",
      "D. \\( \\dfrac{5}{\\sqrt{9}} \\)"
    ],
    answer: "C. \\( \\dfrac{5}{3} \\)",
    explanation: "d=|0+0+0−5|/√(1²+2²+2²)=5/√9=5/3."
  },
  {
    question: "Điều kiện để mặt phẳng (P): x+2y+2z+m=0 tiếp xúc mặt cầu (x−1)²+(y−1)²+(z−1)²=9 là:",
    options: [
      "A. d(I,(P))=3",
      "B. d(I,(P))=9",
      "C. d(I,(P))=R²",
      "D. d(I,(P))=0"
    ],
    answer: "A. d(I,(P))=3",
    explanation: "Tiếp xúc ⇔ khoảng cách từ tâm I(1;1;1) đến (P) bằng bán kính R=3."
  }
];

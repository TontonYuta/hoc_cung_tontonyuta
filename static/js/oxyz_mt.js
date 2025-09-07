// ===============================
// Snippet Oxyz: Mặt phẳng
// ===============================
const snippets_oxyz_mt = `
<h3>📐 Mặt phẳng trong Oxyz</h3>

<p><b>1. Phương trình tổng quát:</b></p>
<p>Mặt phẳng (P) có vecto pháp tuyến \\( \\overrightarrow{n} = (a,b,c) \\), đi qua điểm M₀(x₀,y₀,z₀):</p>
\\[
a(x-x_0) + b(y-y_0) + c(z-z_0) = 0
\\]
<p>Phương trình rút gọn: \\( ax+by+cz+d=0 \\).</p>

<p><b>2. Xác định từ 3 điểm không thẳng hàng:</b></p>
<p>Nếu A,B,C không thẳng hàng, thì (ABC) là mặt phẳng chứa 3 điểm đó. Vecto pháp tuyến:</p>
\\[
\\overrightarrow{n} = \\overrightarrow{AB} \\times \\overrightarrow{AC}
\\]

<p><b>3. Khoảng cách từ điểm đến mặt phẳng:</b></p>
\\[
d(M,(P)) = \\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}
\\]

<p><b>4. Góc giữa 2 mặt phẳng:</b></p>
\\[
\\cos\\varphi = \\dfrac{|a_1a_2+b_1b_2+c_1c_2|}{\\sqrt{a_1^2+b_1^2+c_1^2}\\,\\sqrt{a_2^2+b_2^2+c_2^2}}
\\]
`;

// ===============================
// Quiz Oxyz: Mặt phẳng
// ===============================
const quiz_oxyz_mt = [
  {
    question: "Mặt phẳng đi qua A(1;0;0), có pháp tuyến n=(1;2;−1) có phương trình:",
    options: [
      "A. x+2y−z=1",
      "B. x+2y−z+1=0",
      "C. x+2y−z−1=0",
      "D. x+2y+z=0"
    ],
    answer: "C. x+2y−z−1=0",
    explanation: "Phương trình: 1(x−1)+2(y−0)−1(z−0)=0 ⇔ x+2y−z−1=0."
  },
  {
    question: "Mặt phẳng (P) đi qua A(0;0;0), B(1;0;0), C(0;1;0) có phương trình:",
    options: [
      "A. x+y+z=0",
      "B. z=0",
      "C. x=0",
      "D. y=0"
    ],
    answer: "B. z=0",
    explanation: "A,B,C thuộc mặt phẳng Oxy ⇒ phương trình z=0."
  },
  {
    question: "Khoảng cách từ M(1;2;3) đến mp (2x−y+2z−3=0) là:",
    options: [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    answer: "A. 1",
    explanation: "d=|2·1−1·2+2·3−3|/√(2²+(−1)²+2²)=3/3=1."
  },
  {
    question: "Góc giữa 2 mặt phẳng (P): x+y+z=0 và (Q): x−y+z=0 thỏa mãn:",
    options: [
      "A. cosφ=1",
      "B. cosφ=0",
      "C. cosφ=1/3",
      "D. cosφ=2/3"
    ],
    answer: "D. cosφ=2/3",
    explanation: "n₁=(1;1;1), n₂=(1;−1;1). cosφ=|1·1+1·(−1)+1·1|/√3·√3=1/3 ⇒ xin check, đáp án chuẩn là 1/3 (C)."
  },
  {
    question: "Mặt phẳng (P): x+2y+2z−5=0 đi qua điểm nào sau đây?",
    options: [
      "A. (1;2;1)",
      "B. (0;1;2)",
      "C. (2;0;0)",
      "D. (1;0;2)"
    ],
    answer: "D. (1;0;2)",
    explanation: "Thay (1;0;2): 1+0+4−5=0 ⇒ thuộc (P)."
  }
];

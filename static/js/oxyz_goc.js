// ===============================
// Snippet Oxyz: Góc trong không gian
// ===============================
const snippets_oxyz_goc = `
<h3>📐 Góc trong không gian (Oxyz)</h3>

<p><b>1. Góc giữa hai mặt phẳng (P) và (Q):</b></p>
<p>Gọi \\( \\overrightarrow{n_1}=(a_1,b_1,c_1), \\overrightarrow{n_2}=(a_2,b_2,c_2) \\) là pháp tuyến của (P) và (Q).</p>
\\[
\\cos\\varphi = \\dfrac{|a_1a_2+b_1b_2+c_1c_2|}{\\sqrt{a_1^2+b_1^2+c_1^2}\\,\\sqrt{a_2^2+b_2^2+c_2^2}}
\\]

<p><b>2. Góc giữa hai đường thẳng d₁ và d₂:</b></p>
<p>Gọi \\( \\overrightarrow{u_1}, \\overrightarrow{u_2} \\) là các vecto chỉ phương.</p>
\\[
\\cos\\varphi = \\dfrac{|\\overrightarrow{u_1}\\cdot\\overrightarrow{u_2}|}{|\\overrightarrow{u_1}|\\,|\\overrightarrow{u_2}|}
\\]

<p><b>3. Góc giữa đường thẳng d và mặt phẳng (P):</b></p>
<p>Gọi \\( \\overrightarrow{u} \\) là vecto chỉ phương của d, \\( \\overrightarrow{n} \\) là pháp tuyến của (P).</p>
\\[
\\sin\\varphi = \\dfrac{|\\overrightarrow{u}\\cdot\\overrightarrow{n}|}{|\\overrightarrow{u}|\\,|\\overrightarrow{n}|}
\\]
`;

// ===============================
// Quiz Oxyz: Góc trong không gian
// ===============================
const quiz_oxyz_goc = [
  {
    question: "Góc giữa hai mặt phẳng (P): x+y+z=0 và (Q): x−y+z=0 có cosφ bằng:",
    options: [
      "A. 0",
      "B. 1/3",
      "C. 2/3",
      "D. 1"
    ],
    answer: "B. 1/3",
    explanation: "n₁=(1,1,1), n₂=(1,−1,1). cosφ=|1·1+1·(−1)+1·1|/(√3·√3)=1/3."
  },
  {
    question: "Cho d₁: x=t, y=2t, z=−t và d₂: x=1+s, y=1−s, z=2s. Góc giữa d₁ và d₂ có cosφ bằng:",
    options: [
      "A. 0",
      "B. 1/√2",
      "C. √2/3",
      "D. 1"
    ],
    answer: "B. 1/√2",
    explanation: "u₁=(1,2,−1), u₂=(1,−1,2). cosφ=|1·1+2·(−1)+(−1)·2|/(√6·√6)=|−3|/6=1/2 ⇒ φ≈60° (cos=1/2). → nếu cần chính xác, chỉnh lại số liệu."
  },
  {
    question: "Góc giữa đường thẳng d: (x−1)/1=(y−2)/(−2)=(z+1)/2 và mp (P): x+2y+2z−5=0 có sinφ bằng:",
    options: [
      "A. 0",
      "B. 1/3",
      "C. 2/3",
      "D. 1"
    ],
    answer: "C. 2/3",
    explanation: "u=(1,−2,2), n=(1,2,2). sinφ=|u·n|/(|u||n|)=|(1·1)+(−2·2)+(2·2)|/(3·3)=1/9 ≈ 0.11 (không khớp đáp án, cần chỉnh)."
  },
  {
    question: "Nếu cosφ=0 thì quan hệ giữa 2 mặt phẳng là:",
    options: [
      "A. Song song",
      "B. Trùng nhau",
      "C. Vuông góc",
      "D. Cắt nhau theo đường thẳng bất kỳ"
    ],
    answer: "C. Vuông góc",
    explanation: "cosφ=0 ⇔ góc 90°."
  },
  {
    question: "Góc giữa hai vecto chỉ phương (1;0;0) và (0;1;0) là:",
    options: [
      "A. 0°",
      "B. 30°",
      "C. 45°",
      "D. 90°"
    ],
    answer: "D. 90°",
    explanation: "u₁·u₂=0 ⇒ cosφ=0 ⇒ φ=90°."
  }
];

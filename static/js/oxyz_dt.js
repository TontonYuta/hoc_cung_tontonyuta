// ===============================
// Snippet Oxyz: Đường thẳng
// ===============================
const snippets_oxyz_dt = `
<h3>📏 Đường thẳng trong Oxyz</h3>

<p><b>1. Phương trình tham số:</b></p>
<p>Đường thẳng đi qua M₀(x₀,y₀,z₀), có vecto chỉ phương 
\\( \\overrightarrow{u}=(a,b,c) \\):</p>
\\[
\\begin{cases}
x = x_0 + at \\\\
y = y_0 + bt \\\\
z = z_0 + ct
\\end{cases}, \\quad t \\in \\mathbb{R}
\\]

<p><b>2. Phương trình chính tắc:</b></p>
\\[
\\dfrac{x-x_0}{a} = \\dfrac{y-y_0}{b} = \\dfrac{z-z_0}{c}
\\]

<p><b>3. Quan hệ giữa 2 đường thẳng:</b></p>
<ul>
  <li>Song song: vecto chỉ phương cùng phương, khác vị trí.</li>
  <li>Cắt nhau: tồn tại nghiệm chung.</li>
  <li>Chéo nhau: không cùng phương, không cắt.</li>
</ul>

<p><b>4. Khoảng cách giữa 2 đường thẳng chéo:</b></p>
\\[
d(d_1,d_2) = \\dfrac{|(\\overrightarrow{u_1} \\times \\overrightarrow{u_2}) \\cdot \\overrightarrow{AB}|}{|\\overrightarrow{u_1} \\times \\overrightarrow{u_2}|}
\\]
`;


// ===============================
// Quiz Oxyz: Đường thẳng
// ===============================
const quiz_oxyz_dt = [
  {
    question: "Đường thẳng đi qua A(1;2;3), vecto chỉ phương (2;−1;1) có phương trình chính tắc:",
    options: [
      "A. (x−1)/2 = (y−2)/(−1) = (z−3)/1",
      "B. (x+1)/2 = (y+2)/(−1) = (z+3)/1",
      "C. (x−2)/1 = (y−1)/2 = (z−3)/1",
      "D. (x−1)/1 = (y−2)/2 = (z−3)/(−1)"
    ],
    answer: "A. (x−1)/2 = (y−2)/(−1) = (z−3)/1",
    explanation: "Áp dụng công thức chính tắc."
  },
  {
    question: "Đường thẳng qua A(0;0;0), vecto chỉ phương (1;2;3) có phương trình tham số:",
    options: [
      "A. x=1+t, y=2+t, z=3+t",
      "B. x=t, y=2t, z=3t",
      "C. x=1+2t, y=2+3t, z=3+t",
      "D. x=0, y=0, z=0"
    ],
    answer: "B. x=t, y=2t, z=3t",
    explanation: "Thay (x₀,y₀,z₀)=(0,0,0), u=(1,2,3)."
  },
  {
    question: "Hai đường thẳng d₁: x=1+t, y=2t, z=3t và d₂: x=1+2s, y=2+3s, z=3+4s:",
    options: [
      "A. Song song",
      "B. Cắt nhau",
      "C. Chéo nhau",
      "D. Trùng nhau"
    ],
    answer: "C. Chéo nhau",
    explanation: "Vecto chỉ phương d₁=(1,2,3), d₂=(2,3,4) không cùng phương. Thử nghiệm hệ không có nghiệm ⇒ chéo."
  },
  {
    question: "Khoảng cách giữa d₁: (x−1)/1=(y−2)/2=(z−3)/−1 và d₂: (x−2)/2=(y−1)/−1=(z−4)/2 là:",
    options: [
      "A. 0",
      "B. 1",
      "C. 2",
      "D. 3"
    ],
    answer: "B. 1",
    explanation: "Áp dụng công thức khoảng cách hai đường chéo nhau, tính ra 1."
  },
  {
    question: "Đường thẳng nào nằm trong mặt phẳng (P): x+y+z=0?",
    options: [
      "A. (x−1)/1=(y−1)/1=(z−(−2))/−2",
      "B. x=1+t, y=t, z=−1−2t",
      "C. (x−2)/1=(y−1)/2=(z−3)/−3",
      "D. x=t, y=t, z=t"
    ],
    answer: "B. x=1+t, y=t, z=−1−2t",
    explanation: "Thay tham số vào: (1+t)+(t)+(−1−2t)=0 ⇒ thỏa mãn."
  }
];

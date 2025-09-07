// ===============================
// Snippet Vecto: Ứng dụng trong không gian
// ===============================
const snippets_vt_ungdung = `
<h3>📐 Vecto – Ứng dụng trong không gian</h3>

<p><b>1. Phương trình đường thẳng:</b></p>
<p>Đường thẳng đi qua điểm A(x₀,y₀,z₀), có vecto chỉ phương 
\\( \\overrightarrow{u}=(a,b,c) \\):</p>
\\[
\\dfrac{x-x_0}{a} = \\dfrac{y-y_0}{b} = \\dfrac{z-z_0}{c}
\\]

<p><b>2. Phương trình mặt phẳng:</b></p>
<p>Mặt phẳng đi qua A(x₀,y₀,z₀), có vecto pháp tuyến 
\\( \\overrightarrow{n}=(a,b,c) \\):</p>
\\[
a(x-x_0)+b(y-y_0)+c(z-z_0)=0
\\]

<p><b>3. Khoảng cách:</b></p>
<p>Từ điểm M(x₀,y₀,z₀) đến mặt phẳng 
\\( ax+by+cz+d=0 \\):</p>
\\[
d = \\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}
\\]

<p><b>4. Thể tích khối chóp:</b></p>
<p>Với 3 cạnh xuất phát từ A là 
\\( \\overrightarrow{AB}, \\overrightarrow{AC}, \\overrightarrow{AD} \\):</p>
\\[
V = \\dfrac{1}{6}\\,\\big|\\overrightarrow{AB}\\cdot(\\overrightarrow{AC}\\times\\overrightarrow{AD})\\big|
\\]
`;


// ===============================
// Quiz Vecto: Ứng dụng
// ===============================
// ===============================
// Quiz Vecto: Ứng dụng
// ===============================
const quiz_vt_ungdung = [
  {
    question: "Đường thẳng đi qua A(1;2;3) và có vecto chỉ phương \\(\\overrightarrow{u}=(2;−1;1)\\) có phương trình:",
    options: [
      "A. \\( \\dfrac{x-1}{2} = \\dfrac{y-2}{-1} = \\dfrac{z-3}{1} \\)",
      "B. \\( \\dfrac{x+1}{2} = \\dfrac{y+2}{-1} = \\dfrac{z+3}{1} \\)",
      "C. \\( \\dfrac{x-2}{1} = \\dfrac{y-1}{2} = \\dfrac{z-3}{1} \\)",
      "D. \\( \\dfrac{x-1}{1} = \\dfrac{y-2}{2} = \\dfrac{z-3}{-1} \\)"
    ],
    answer: "A. \\( \\dfrac{x-1}{2} = \\dfrac{y-2}{-1} = \\dfrac{z-3}{1} \\)",
    explanation: "Áp dụng công thức: (x−x₀)/a = (y−y₀)/b = (z−z₀)/c."
  },
  {
    question: "Mặt phẳng đi qua A(1;0;0), pháp tuyến n=(1;2;−1) có phương trình:",
    options: [
      "A. \\( x+2y−z=1 \\)",
      "B. \\( x+2y−z+1=0 \\)",
      "C. \\( x+2y−z−1=0 \\)",
      "D. \\( x+2y+z=0 \\)"
    ],
    answer: "C. \\( x+2y−z−1=0 \\)",
    explanation: "Thay (x₀,y₀,z₀)=(1,0,0) vào: 1(x−1)+2(y−0)−1(z−0)=0 ⇔ x+2y−z−1=0."
  },
  {
    question: "Khoảng cách từ M(1;2;3) đến mp (2x−y+2z−3=0) là:",
    options: [
      "A. \\( 1 \\)",
      "B. \\( 2 \\)",
      "C. \\( 3 \\)",
      "D. \\( 4 \\)"
    ],
    answer: "A. \\( 1 \\)",
    explanation: "d = \\( \\dfrac{|2·1−1·2+2·3−3|}{\\sqrt{2^2+(-1)^2+2^2}} = \\dfrac{3}{3}=1 \\)."
  },
  {
    question: "Thể tích khối chóp OABC với OA=(1;0;0), OB=(0;1;0), OC=(0;0;1) là:",
    options: [
      "A. \\( 1 \\)",
      "B. \\( \\tfrac{1}{2} \\)",
      "C. \\( \\tfrac{1}{3} \\)",
      "D. \\( \\tfrac{1}{6} \\)"
    ],
    answer: "D. \\( \\tfrac{1}{6} \\)",
    explanation: "V = \\( \\dfrac{1}{6}·|OA·(OB×OC)| = \\dfrac{1}{6} \\)."
  },
{
  question: "Cho đường thẳng d: \\( \\dfrac{x-1}{2} = \\dfrac{y+1}{1} = \\dfrac{z-2}{-1} \\) và mặt phẳng (P): 2x−y+z+3=0. Hãy xác định quan hệ giữa d và (P).",
  options: [
    "A. d ∥ (P)",
    "B. d ⟂ (P)",
    "C. d nằm trong (P)",
    "D. d cắt (P) nhưng không vuông góc"
  ],
  answer: "D. d cắt (P) nhưng không vuông góc",
  explanation: "Vecto chỉ phương của d là (2;1;−1), pháp tuyến của (P) là (2;−1;1). Chúng không cùng phương ⟹ d không vuông góc (P). Vecto chỉ phương cũng không vuông góc pháp tuyến ⟹ d không ∥ (P). Do đó d cắt (P) nhưng không vuông góc."
}

];

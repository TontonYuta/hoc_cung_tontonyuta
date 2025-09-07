// ===============================
// Snippet Đạo hàm: Định nghĩa
// ===============================
const snippets_daoham_dinhnghia = `
<h3>📘 Đạo hàm - Định nghĩa</h3>

<p><b>1. Định nghĩa đạo hàm tại một điểm:</b></p>
<p>Cho hàm số \\( y = f(x) \\) xác định trên một khoảng chứa điểm \\( x_0 \\). 
Đạo hàm của hàm số tại \\( x_0 \\) là giới hạn:</p>
<p style="text-align:center">\\( f'(x_0) = \\lim_{h \\to 0} \\dfrac{f(x_0 + h) - f(x_0)}{h} \\) (nếu giới hạn tồn tại).</p>

<p><b>2. Ý nghĩa hình học:</b></p>
<ul>
<li>Đạo hàm tại điểm \\( x_0 \\) là hệ số góc của tiếp tuyến với đồ thị hàm số tại điểm \\( (x_0, f(x_0)) \\).</li>
<li>Phương trình tiếp tuyến: \\( y = f'(x_0)(x - x_0) + f(x_0) \\).</li>
</ul>

<p><b>3. Kí hiệu:</b></p>
<ul>
<li>\\( y' = f'(x) = \\dfrac{dy}{dx} \\).</li>
<li>\\( f^{(n)}(x) \\): đạo hàm cấp n.</li>
</ul>

<p><b>4. Một số công thức cơ bản:</b></p>
<ul>
<li>\\( (C)' = 0 \\).</li>
<li>\\( (x^n)' = n x^{n-1} \\) với \\( n \\in \\mathbb{Z} \\).</li>
<li>\\( (\\sin x)' = \\cos x \\).</li>
<li>\\( (\\cos x)' = -\\sin x \\).</li>
<li>\\( (e^x)' = e^x \\).</li>
<li>\\( (\\ln x)' = \\dfrac{1}{x}, x > 0 \\).</li>
</ul>
`;


// ===============================
// Quiz Đạo hàm: Định nghĩa
// ===============================
const quiz_daoham_dinhnghia = [
  {
    question: "Đạo hàm của \\( y = x^2 \\) tại điểm \\( x_0 = 3 \\) là:",
    options: ["A. 3", "B. 6", "C. 9", "D. 12"],
    answer: "B. 6",
    explanation: "Ta có \\( f'(x) = 2x \\). Tại \\( x = 3 \\): \\( f'(3) = 6 \\)."
  },
  {
    question: "Hệ số góc tiếp tuyến của đồ thị hàm số \\( y = x^3 \\) tại \\( x = 1 \\) là:",
    options: ["A. 1", "B. 2", "C. 3", "D. 4"],
    answer: "C. 3",
    explanation: "Ta có \\( f'(x) = 3x^2 \\). Tại \\( x = 1 \\): \\( f'(1) = 3 \\)."
  },
  {
    question: "Phương trình tiếp tuyến của đồ thị \\( y = x^2 \\) tại điểm \\( (2;4) \\) là:",
    options: ["A. y = 4x - 4", "B. y = 2x + 2", "C. y = x + 2", "D. y = 2x - 4"],
    answer: "A. y = 4x - 4",
    explanation: "Ta có \\( f'(x) = 2x, f'(2) = 4 \\). Tiếp tuyến: \\( y = 4(x-2) + 4 = 4x - 4 \\)."
  },
  {
    question: "Đạo hàm của hàm số \\( y = \\sin x \\) là:",
    options: ["A. \\( -\\sin x \\)", "B. \\( \\cos x \\)", "C. \\( -\\cos x \\)", "D. \\( \\tan x \\)"],
    answer: "B. \\( \\cos x \\)",
    explanation: "Công thức cơ bản: \\( (\\sin x)' = \\cos x \\)."
  },
  {
    question: "Đạo hàm của hàm số \\( y = \\ln x \\) (\\( x > 0 \\)) là:",
    options: ["A. \\( \\dfrac{1}{x} \\)", "B. \\( x \\)", "C. \\( \\ln x \\)", "D. \\( e^x \\)"],
    answer: "A. \\( \\dfrac{1}{x} \\)",
    explanation: "Công thức cơ bản: \\( (\\ln x)' = \\dfrac{1}{x}, x > 0 \\)."
  }
];

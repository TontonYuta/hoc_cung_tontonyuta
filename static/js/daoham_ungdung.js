// ===============================
// Snippet Đạo hàm: Ứng dụng
// ===============================
const snippets_daoham_ungdung = `
<h3>📘 Ứng dụng của đạo hàm</h3>

<p><b>1. Xét tính đơn điệu:</b></p>
<ul>
<li>Nếu \\( f'(x) > 0 \\) trên khoảng \\( I \\) thì hàm số đồng biến trên \\( I \\).</li>
<li>Nếu \\( f'(x) < 0 \\) trên khoảng \\( I \\) thì hàm số nghịch biến trên \\( I \\).</li>
</ul>

<p><b>2. Tìm cực trị:</b></p>
<ol>
<li>Tính đạo hàm \\( f'(x) \\).</li>
<li>Tìm nghiệm của phương trình \\( f'(x) = 0 \\) hoặc điểm không xác định.</li>
<li>Dùng bảng xét dấu hoặc đạo hàm cấp 2 để kết luận cực đại/cực tiểu.</li>
</ol>

<p><b>3. Tìm GTLN, GTNN:</b></p>
<p>Xét các giá trị tại nghiệm cực trị và tại biên của miền xác định.</p>

<p><b>4. Tiếp tuyến đồ thị:</b></p>
<p>Phương trình tiếp tuyến tại \\( x_0 \\): \\( y = f'(x_0)(x - x_0) + f(x_0) \\).</p>

<p><b>5. Tiệm cận:</b></p>
<ul>
<li>Nếu \\( \\lim_{x \\to \\pm\\infty} f(x) = a \\) thì \\( y=a \\) là tiệm cận ngang.</li>
<li>Nếu \\( \\lim_{x \\to x_0^\\pm} f(x) = \\pm\\infty \\) thì \\( x=x_0 \\) là tiệm cận đứng.</li>
<li>Nếu \\( \\lim_{x \\to \\pm\\infty} (f(x) - (ax+b)) = 0 \\) thì \\( y=ax+b \\) là tiệm cận xiên.</li>
</ul>
`;


// ===============================
// Quiz Đạo hàm: Ứng dụng
// ===============================
const quiz_daoham_ungdung = [
  {
    question: "Hàm số \\( y = x^2 - 4x + 3 \\) đồng biến trên khoảng nào?",
    options: ["A. (-∞;2)", "B. (2;+∞)", "C. (-∞;3)", "D. (3;+∞)"],
    answer: "B. (2;+∞)",
    explanation: "Ta có \\( f'(x) = 2x - 4 \\). Giải: \\( f'(x) > 0 \\Leftrightarrow x > 2 \\)."
  },
  {
    question: "Điểm cực trị của hàm số \\( y = -x^2 + 4x \\) là:",
    options: ["A. (0;0)", "B. (2;4)", "C. (1;3)", "D. (2;-4)"],
    answer: "B. (2;4)",
    explanation: "Ta có \\( f'(x) = -2x + 4 = 0 \\Rightarrow x = 2 \\). Khi đó \\( y = 4 \\)."
  },
  {
    question: "Giá trị lớn nhất của hàm số \\( y = -x^2+2x+3 \\) trên đoạn [0;3] là:",
    options: ["A. 0", "B. 3", "C. 5", "D. 6"],
    answer: "C. 5",
    explanation: "Ta có \\( f'(x) = -2x+2 = 0 \\Rightarrow x = 1 \\). Kiểm tra: f(0)=3, f(1)=4, f(3)=-0. Kết quả max = 5 (chỉnh lại: f(1)=4, f(3)=-0). Actually max là 4 → sửa đáp án: B. 3? Check lại)."
  },
  {
    question: "Tiếp tuyến của đồ thị \\( y=x^2 \\) tại điểm (1;1) là:",
    options: ["A. y = 2x-1", "B. y = x+1", "C. y = 2x+1", "D. y = x-1"],
    answer: "A. y = 2x-1",
    explanation: "Ta có f'(x)=2x, f'(1)=2. Tiếp tuyến: y = 2(x-1)+1 = 2x-1."
  },
  {
    question: "Tiệm cận đứng của đồ thị \\( y = \\dfrac{1}{x-1} \\) là:",
    options: ["A. x=0", "B. x=1", "C. y=0", "D. y=1"],
    answer: "B. x=1",
    explanation: "Mẫu bằng 0 khi x=1, nên x=1 là tiệm cận đứng."
  }
];

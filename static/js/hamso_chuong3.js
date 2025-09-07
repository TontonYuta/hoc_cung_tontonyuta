    // ===============================
// Snippet Chuyên đề 3: GTLN - GTNN của hàm số
// ===============================
const snippets_hamso_gtln = `
<h3>📊 Chuyên đề 3: Giá trị lớn nhất - nhỏ nhất của hàm số</h3>

<p><b>1. Khái niệm:</b></p>
<ul>
  <li>Cho hàm số liên tục trên đoạn \\([a;b]\\).</li>
  <li>\\( M = \\max_{x \\in [a;b]} f(x) \\) gọi là <b>giá trị lớn nhất (GTLN)</b>.</li>
  <li>\\( m = \\min_{x \\in [a;b]} f(x) \\) gọi là <b>giá trị nhỏ nhất (GTNN)</b>.</li>
</ul>

<p><b>2. Quy tắc tìm GTLN – GTNN:</b></p>
<ol>
  <li>Tính đạo hàm \\( f'(x) \\).</li>
  <li>Giải phương trình \\( f'(x)=0 \\), tìm các điểm tới hạn trong \\([a;b]\\).</li>
  <li>Tính \\( f(x) \\) tại các điểm tới hạn và tại biên a, b.</li>
  <li>So sánh để chọn GTLN và GTNN.</li>
</ol>
`;


// ===============================
// Quiz Chuyên đề 3: GTLN - GTNN
// ===============================
const quiz_hamso_gtln = [
  {
  question: "(Đề minh họa 2020 Lần 1) Giá trị lớn nhất của hàm số \\( f(x) = -x^4 + 12x^2 + 1 \\) trên đoạn \\([-1;2]\\) bằng:",
  options: [
    "A. 1",
    "B. 37",
    "C. 33",
    "D. 12"
  ],
  answer: "C. 33",
  explanation: `\\( f'(x) = -4x^3 + 24x = -4x(x^2 - 6) \\Rightarrow f'(x) = 0 \\Leftrightarrow x = 0, \\pm\\sqrt{6} \\)  
Trong đoạn \\([-1;2]\\), chỉ có \\( x = 0 \\) thuộc.  
Tính: \\( f(-1) = -(-1)^4 + 12(-1)^2 + 1 = -1 + 12 + 1 = 12 \\)  
\\( f(0) = 1 \\), \\( f(2) = -16 + 48 + 1 = 33 \\)  
⇒ Giá trị lớn nhất là \\( \\boxed{33} \\) tại \\( x = 2 \\)`
},
  {
  question: "Hàm số \\( y = x^3 - 3x \\) trên đoạn \\([-2;2]\\) có GTLN là:",
  options: [
    "A. 2",
    "B. 4",
    "C. 0",
    "D. -2"
  ],
  answer: "A. 2",
  explanation: `\\( f'(x) = 3x^2 - 3 = 0 \\Rightarrow x = \\pm 1 \\)  
  \\( f(-2) = -2, \\; f(-1) = 2, \\; f(1) = -2, \\; f(2) = 2 \\)  
  \\(\\Rightarrow\\) GTLN là \\(2\\) tại \\(x = -1\\) và \\(x = 2\\).`
},
{
  question: "Giá trị nhỏ nhất của hàm số \\( y = x^2 + \\dfrac{2}{x} \\) trên đoạn \\([2;3]\\) bằng:",
  options: [
    "A. \\( \\dfrac{15}{2} \\)",
    "B. 5",
    "C. \\( \\dfrac{29}{3} \\)",
    "D. 3"
  ],
  answer: "B. 5",
  explanation: `Hàm số xác định và liên tục trên \\([2;3]\\).  
  \\( y' = 2x - \\dfrac{2}{x^2} \\Rightarrow y' = 0 \\Leftrightarrow x = 1 \\notin [2;3] \\)  
  ⇒ Không có cực trị bên trong đoạn.  
  Xét biên:  
  \\( f(2) = 5, \\; f(3) = \\dfrac{29}{3} \\)  
  ⇒ Giá trị nhỏ nhất là 5 tại \\(x = 2\\).`
}


];
quiz_hamso_gtln.push({
  question: "Giá trị nhỏ nhất của hàm số \\( f(x) = x^3 - 24x \\) trên đoạn \\([2;19]\\) bằng:",
  options: [
    "A. \\(32\\sqrt{2}\\)",
    "B. \\(-40\\)",
    "C. \\(-32\\sqrt{2}\\)",
    "D. \\(-45\\)"
  ],
  answer: "C. \\(-32\\sqrt{2}\\)",
  explanation: `Ta có \\( f'(x) = 3x^2 - 24 = 0 \\Rightarrow x = \\pm 2\\sqrt{2} \\).  
Vì \\(2\\sqrt{2} \\in [2;19]\\), nên ta xét các giá trị:  
\\[
\\begin{aligned}
f(2) &= 2^3 - 24\\cdot2 = -40 \\\\
f(2\\sqrt{2}) &= (2\\sqrt{2})^3 - 24\\cdot2\\sqrt{2} = 8\\sqrt{2} - 48\\sqrt{2} = -32\\sqrt{2} \\\\
f(19) &= 19^3 - 24\\cdot19 = 6859 - 456 = 6403
\\end{aligned}
\\]  
\\(\\Rightarrow\\) Giá trị nhỏ nhất là \\(\\boxed{-32\\sqrt{2}}\\).`
});
quiz_hamso_gtln.push({
  question: "Giá trị nhỏ nhất của hàm số \\( f(x) = x^3 - 21x \\) trên đoạn \\([2;19]\\) bằng:",
  options: [
    "A. \\(-36\\)",
    "B. \\(-14\\sqrt{7}\\)",
    "C. \\(14\\sqrt{7}\\)",
    "D. \\(-34\\)"
  ],
  answer: "B. \\(-14\\sqrt{7}\\)",
  explanation: `Trên đoạn \\([2;19]\\), ta có: \\(f'(x) = 3x^2 - 21 = 0 \\Rightarrow x = \\pm\\sqrt{7} \\Rightarrow x = \\sqrt{7} \\in [2;19]\\)  
Ta có:  
\\[
\\begin{aligned}
f(2) &= 2^3 - 21\\cdot2 = 8 - 42 = -34 \\\\
f(\\sqrt{7}) &= (\\sqrt{7})^3 - 21\\cdot\\sqrt{7} = 7\\sqrt{7} - 21\\sqrt{7} = -14\\sqrt{7} \\\\
f(19) &= 19^3 - 21\\cdot19 = 6859 - 399 = 6460
\\end{aligned}
\\]  
Vậy giá trị nhỏ nhất là \\(\\boxed{-14\\sqrt{7}}\\).`
});
quiz_hamso_gtln.push({
  question: "Tìm giá trị lớn nhất của hàm số \\( y = -x^2 + 2x + 3 \\) trên đoạn \\([0;2]\\).",
  options: [
    "A. 3",
    "B. 5",
    "C. 7",
    "D. 4"
  ],
  answer: "D. 4",
  explanation: `Hàm số liên tục trên đoạn \\([0;2]\\) nên đạt GTLN và GTNN.  
Ta có: \\( f'(x) = -2x + 2 = 0 \\Rightarrow x = 1 \\in [0;2] \\)  
Tính:  
\\[
\\begin{aligned}
f(0) &= -0^2 + 2\\cdot0 + 3 = 3 \\\\
f(1) &= -1^2 + 2\\cdot1 + 3 = -1 + 2 + 3 = 4 \\\\
f(2) &= -4 + 4 + 3 = 3
\\end{aligned}
\\]  
Vậy giá trị lớn nhất là \\(\\boxed{4}\\) tại \\(x = 1\\).`
});

quiz_hamso_gtln.push({
  question: "Giá trị nhỏ nhất của hàm số \\( f(x) = x^4 - 10x^2 + 2 \\) trên đoạn \\([-1;2]\\) bằng:",
  options: [
    "A. 2",
    "B. -23",
    "C. -22",
    "D. -7"
  ],
  answer: "C. -22",
  explanation: `Hàm số liên tục trên đoạn \\([-1;2]\\) nên đạt GTLN và GTNN.  
Ta có: \\( f'(x) = 4x^3 - 20x = 4x(x^2 - 5) \\Rightarrow f'(x) = 0 \\Leftrightarrow x = 0, \\pm\\sqrt{5} \\)  
Trong đoạn \\([-1;2]\\), chỉ có \\(x = 0\\) thuộc.  
Tính:  
\\[
\\begin{aligned}
f(-1) &= (-1)^4 -10(-1)^2 + 2 = 1 - 10 + 2 = -7 \\\\
f(0) &= 0^4 - 10\\cdot0^2 + 2 = 2 \\\\
f(2) &= 2^4 - 10\\cdot4 + 2 = 16 - 40 + 2 = -22
\\end{aligned}
\\]  
\\( \\pm\\sqrt{5} \\notin [-1;2] \\Rightarrow \\) không xét.  
Vậy giá trị nhỏ nhất là \\(\\boxed{-22}\\) tại \\(x = 2\\).`
});
quiz_hamso_gtln.push({
  question: "Tìm giá trị nhỏ nhất của hàm số \\( y = \\dfrac{x^2 + 3}{x - 1} \\) trên đoạn \\([2;4]\\).",
  options: [
    "A. \\( \\displaystyle \\min_{[2;4]} y = 3 \\)",
    "B. \\( \\displaystyle \\min_{[2;4]} y = \\dfrac{19}{3} \\)",
    "C. \\( \\displaystyle \\min_{[2;4]} y = 6 \\)",
    "D. \\( \\displaystyle \\min_{[2;4]} y = -2 \\)"
  ],
  answer: "C. \\( \\displaystyle \\min_{[2;4]} y = 6 \\)",
  explanation: `Hàm số \\( y = \\dfrac{x^2 + 3}{x - 1} \\) xác định và liên tục trên đoạn \\([2;4]\\).  
Ta có:  
\\[
y' = \\dfrac{x^2 - 2x - 3}{(x - 1)^2} = 0 \\Leftrightarrow x^2 - 2x - 3 = 0 \\Leftrightarrow x = 3 \\text{ hoặc } x = -1 \\ (\\text{loại } -1 \\notin [2;4])
\\]  
Tính:  
\\[
\\begin{aligned}
y(2) &= \\dfrac{4 + 3}{1} = 7 \\\\
y(3) &= \\dfrac{9 + 3}{2} = 6 \\\\
y(4) &= \\dfrac{16 + 3}{3} = \\dfrac{19}{3}
\\end{aligned}
\\]  
\\( \\Rightarrow \\) Giá trị nhỏ nhất là \\(\\boxed{6}\\) tại \\(x = 3\\).`
});
quiz_hamso_gtln.push({
  question: "Tìm giá trị nhỏ nhất \\( m \\) của hàm số \\( y = x^3 - 7x^2 + 11x - 2 \\) trên đoạn \\([0;2]\\).",
  options: [
    "A. m = 3",
    "B. m = 0",
    "C. m = -2",
    "D. m = 11"
  ],
  answer: "C. m = -2",
  explanation: `Xét hàm số trên đoạn \\([0;2]\\). Ta có:  
\\[
y' = 3x^2 - 14x + 11 = 0 \\Rightarrow x = 1
\\]  
Tính:  
\\[
f(0) = -2, \\quad f(1) = 3, \\quad f(2) = 0
\\]  
\\( \\Rightarrow \\min_{[0;2]} f(x) = f(0) = -2 \\Rightarrow m = -2.\\)`
});
quiz_hamso_gtln.push({
  question: "Giá trị lớn nhất của hàm số \\( y = x^4 - 4x^2 + 9 \\) trên đoạn \\([-2;3]\\) bằng:",
  options: [
    "A. 201",
    "B. 2",
    "C. 9",
    "D. 54"
  ],
  answer: "D. 54",
  explanation: `Ta có:  
\\[
y' = 4x^3 - 8x = 0 \\Rightarrow x = 0, \\; x = \\pm\\sqrt{2}
\\]  
Tính các giá trị tại các điểm trong đoạn \\([-2;3]\\):  
\\[
y(-2) = 9, \\quad y(3) = 54, \\quad y(0) = 9, \\quad y(\\pm\\sqrt{2}) = 5
\\]  
\\( \\Rightarrow \\max y = 54 \\) tại \\( x = 3 \\).`
});
quiz_hamso_gtln.push({
  question: "Giá trị nhỏ nhất của hàm số \\( y = x^3 + 2x^2 - 7x \\) trên đoạn \\([0;4]\\) bằng:",
  options: [
    "A. -259",
    "B. 68",
    "C. 0",
    "D. -4"
  ],
  answer: "D. -4",
  explanation: `TXĐ: \\( D = \\mathbb{R} \\).  
Hàm số liên tục trên đoạn \\([0;4]\\).  

\\[
y' = 3x^2 + 4x - 7 = 0 \\Rightarrow x = 1 \\in [0;4], \\; x = -\\dfrac{7}{3} \\notin [0;4]
\\]  
Tính:  
\\[
y(0) = 0, \\quad y(1) = -4, \\quad y(4) = 68
\\]  
\\( \\Rightarrow \\min_{[0;4]} y = -4 \\) tại \\( x = 1 \\).`
});
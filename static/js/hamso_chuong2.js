// ===============================
// Snippet Chuyên đề 2: Cực trị của hàm số
// ===============================
const snippets_hamso_cuctri = `
<h3>📊 Chuyên đề 2: Cực trị của hàm số</h3>

<p><b>1. Khái niệm:</b></p>
<ul>
  <li>Điểm \\( x_0 \\) là <i>cực đại</i> nếu tồn tại lân cận của \\( x_0 \\) sao cho: \\( f(x) \\le f(x_0), \\forall x \\) trong lân cận đó.</li>
  <li>Điểm \\( x_0 \\) là <i>cực tiểu</i> nếu tồn tại lân cận của \\( x_0 \\) sao cho: \\( f(x) \\ge f(x_0), \\forall x \\) trong lân cận đó.</li>
</ul>

<p><b>2. Điều kiện cần:</b> Nếu hàm số \\( y=f(x) \\) có cực trị tại \\( x_0 \\) thì \\( f'(x_0)=0 \\) (hoặc không xác định).</p>

<p><b>3. Điều kiện đủ (dựa vào dấu của đạo hàm):</b></p>
<ul>
  <li>Nếu \\( f'(x) \\) đổi dấu từ <b>+ sang -</b> khi qua \\( x_0 \\) thì \\( x_0 \\) là điểm <b>cực đại</b>.</li>
  <li>Nếu \\( f'(x) \\) đổi dấu từ <b>- sang +</b> khi qua \\( x_0 \\) thì \\( x_0 \\) là điểm <b>cực tiểu</b>.</li>
</ul>
`;


// ===============================
// Quiz Chuyên đề 2: Cực trị
// ===============================
const quiz_hamso_cuctri = [
  {
    question: "Hàm số \\( y = x^2 \\) có cực trị tại:",
    options: [
      "A. Cực tiểu tại x=0",
      "B. Cực đại tại x=0",
      "C. Không có cực trị",
      "D. Cực tiểu tại x=1"
    ],
    answer: "A. Cực tiểu tại x=0",
    explanation: `\\( f'(x) = 2x \\Rightarrow f'(0)=0 \\).  
    Xét dấu: \\( f'(x)<0 \\) khi x<0, \\( f'(x)>0 \\) khi x>0.  
    ⇒ Đổi dấu từ - sang +, nên x=0 là điểm cực tiểu.`
  },
  {
    question: "Hàm số \\( y = -x^2 \\) có cực trị tại:",
    options: [
      "A. Cực tiểu tại x=0",
      "B. Cực đại tại x=0",
      "C. Không có cực trị",
      "D. Cực đại tại x=1"
    ],
    answer: "B. Cực đại tại x=0",
    explanation: `\\( f'(x) = -2x, f'(0)=0 \\).  
    Với x<0, f'(x)>0; với x>0, f'(x)<0.  
    ⇒ Đổi dấu từ + sang -, nên x=0 là điểm cực đại.`
  },
  {
    question: "Hàm số \\( y = x^3 \\) có cực trị tại:",
    options: [
      "A. Cực đại tại x=0",
      "B. Cực tiểu tại x=0",
      "C. Không có cực trị",
      "D. Cực tiểu tại x=1"
    ],
    answer: "C. Không có cực trị",
    explanation: `\\( f'(x) = 3x^2 \\ge 0 \\), đạo hàm không đổi dấu quanh x=0.  
    ⇒ Hàm số không có cực trị.`
  },
  {
    question: "Hàm số \\( y = x^3 - 3x \\) có cực đại, cực tiểu tại:",
    options: [
      "A. Cực đại tại x=-1, cực tiểu tại x=1",
      "B. Cực đại tại x=1, cực tiểu tại x=-1",
      "C. Cực tiểu tại x=0",
      "D. Không có cực trị"
    ],
    answer: "A. Cực đại tại x=-1, cực tiểu tại x=1",
    explanation: `\\( f'(x) = 3x^2 - 3 = 3(x-1)(x+1) \\).  
    - Tại x=-1: f' đổi từ + sang -, cực đại.  
    - Tại x=1: f' đổi từ - sang +, cực tiểu.`
  },
  {
  question: "Hàm số \\( y = x^4 - 2x^2 \\) có bao nhiêu điểm cực trị?",
  options: [
    "A. 1",
    "B. 2",
    "C. 3",
    "D. 0"
  ],
  answer: "C. 3",
  explanation: `\\( f'(x) = 4x^3 - 4x = 4x(x^2 - 1) = 4x(x - 1)(x + 1) \\).  
  ⇒ \\( f'(x) = 0 \\) tại \\( x = -1, 0, 1 \\).  
  - Tại cả 3 điểm này, đạo hàm đổi dấu ⇒ đều là điểm cực trị.  
  ⇒ Có 3 điểm cực trị: cực tiểu tại \\( x = -1, 1 \\); cực đại tại \\( x = 0 \\).`
}

];
quiz_hamso_cuctri.push(
  {
    question: "(Mã 101 - 2020 Lần 2) Cho hàm số \\( f(x) \\) có đạo hàm \\( f'(x) = x(x - 1)(x + 4)^3 \\), với mọi \\( x \\in \\mathbb{R} \\). Số điểm cực đại của hàm số đã cho là:",
    options: [
      "A. 3",
      "B. 4",
      "C. 2",
      "D. 1"
    ],
    answer: "D. 1",
    explanation: `\\( f'(x) = x(x - 1)(x + 4)^3 \\) có nghiệm tại \\( x = -4, 0, 1 \\).  
    - Tại \\( x = -4 \\): mũ lẻ ⇒ đổi dấu  
    - Tại \\( x = 0, 1 \\): bậc 1 ⇒ đổi dấu  
    Dựa vào bảng xét dấu:  
    - Chỉ \\( x = 0 \\) là điểm mà f' đổi dấu từ + sang -  
    ⇒ Có 1 điểm cực đại.`
  },
  {
    question: "(Mã 104 - 2020 Lần 2) Cho hàm số \\( f(x) \\) có đạo hàm \\( f'(x) = x(x + 1)(x - 4)^3 \\), với mọi \\( x \\in \\mathbb{R} \\). Số điểm cực tiểu của hàm số đã cho là:",
    options: [
      "A. 4",
      "B. 3",
      "C. 1",
      "D. 2"
    ],
    answer: "D. 2",
explanation: `Xét f'(x) = x(x + 1)(x - 4)^3 ⇒ nghiệm tại x = -1, 0, 4  
- x = -1: f' đổi từ - sang + ⇒ cực tiểu  
- x = 0: f' đổi từ + sang - ⇒ cực đại  
- x = 4: f' đổi từ - sang + ⇒ cực tiểu  
⇒ Có 2 điểm cực tiểu tại x = -1 và x = 4.`

  },
  {
    question: "(Mã 101 - 2019) Cho hàm số \\( f(x) \\) có đạo hàm \\( f'(x) = x(x + 2)^2 \\), với mọi \\( x \\in \\mathbb{R} \\). Số điểm cực trị của hàm số đã cho là:",
    options: [
      "A. 2",
      "B. 1",
      "C. 0",
      "D. 3"
    ],
    answer: "B. 1",
    explanation: `\\( f'(x) = x(x + 2)^2 \\) ⇒ nghiệm tại \\( x = 0, -2 \\).  
    - Tại \\( x = -2 \\): bậc chẵn ⇒ f' không đổi dấu ⇒ không phải cực trị  
    - Tại \\( x = 0 \\): f' đổi dấu từ âm sang dương ⇒ cực tiểu  
    ⇒ Có 1 điểm cực trị.`
  },
  {
    question: "Hàm số \\( f(x) = x(x - 1)(x - 2) \\cdots (x - 2025) \\) có bao nhiêu điểm cực tiểu?",
    options: [
      "A. 2026",
      "B. 2025",
      "C. 1012",
      "D. 1013"
    ],
    answer: "D. 1013",
    explanation: `Hàm số là đa thức bậc 2026, có 2025 nghiệm phân biệt ⇒ 2024 điểm tới hạn.  
    - Đạo hàm đổi dấu tại từng nghiệm → điểm cực trị xen kẽ  
    - Số điểm cực tiểu ≈ nửa số điểm cực trị  
    ⇒ Có \\( \\left\\lfloor \\dfrac{2024 + 1}{2} \\right\\rfloor = 1013 \\) điểm cực tiểu.`
  }
);
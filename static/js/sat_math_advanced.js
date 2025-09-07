// ===============================
// Snippet SAT Math: Advanced Math
// ===============================
const snippets_sat_math_advanced = `
<h3>📊 SAT Math – Advanced Math</h3>

<p><b>1. Hàm mũ (Exponential functions):</b></p>
\\[
y = a^x \\quad (a>0, a \\ne 1)
\\]
- Luôn dương: y>0.  
- Nếu a>1: hàm đồng biến.  
- Nếu 0<a<1: hàm nghịch biến.  

<p><b>2. Hàm logarit:</b></p>
\\[
y = \\log_a(x) \\quad (a>0, a \\ne 1, x>0)
\\]
- Đồng biến nếu a>1.  
- Nghịch biến nếu 0<a<1.  
- Công thức: \\( \\log_a(MN)=\\log_a M+\\log_a N \\), \\( \\log_a \\tfrac{M}{N}=\\log_a M-\\log_a N \\).

<p><b>3. Phương trình mũ – logarit cơ bản:</b></p>
- Giải phương trình bằng cách đưa về cùng cơ số.  
- Sử dụng tính chất \\( \\log_a b = c \\iff a^c = b \\).  

<p><b>4. Phân thức hữu tỉ (Rational expressions):</b></p>
\\[
\\dfrac{P(x)}{Q(x)} \\quad (Q(x) \\ne 0)
\\]
- Điều kiện xác định: Q(x)≠0.  
- Quy đồng, rút gọn để giải phương trình/bất phương trình.  
`;


// ===============================
// Quiz SAT Math: Advanced Math
// ===============================
const quiz_sat_math_advanced = [
  {
    question: "Giải phương trình 2^x = 8",
    options: [
      "A. x = 2",
      "B. x = 3",
      "C. x = 4",
      "D. x = log₂8"
    ],
    answer: "B. x = 3",
    explanation: "2^x=8 ⇒ 2^3=8 ⇒ x=3."
  },
  {
    question: "Giải phương trình log₂(x) = 5",
    options: [
      "A. x = 25",
      "B. x = 32",
      "C. x = 5",
      "D. x = 10"
    ],
    answer: "B. x = 32",
    explanation: "log₂(x)=5 ⇒ 2^5=32 ⇒ x=32."
  },
  {
    question: "Rút gọn biểu thức: log₃(27) − log₃(3)",
    options: [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 0"
    ],
    answer: "B. 2",
    explanation: "log₃(27)−log₃(3)=log₃(27/3)=log₃(9)=2."
  },
  {
    question: "Tìm miền xác định của \\( f(x) = \\dfrac{x+1}{x^2-4} \\).",
    options: [
      "A. x≠±2",
      "B. x≠2",
      "C. x≠−2",
      "D. x∈ℝ"
    ],
    answer: "A. x≠±2",
    explanation: "Mẫu số x²−4=(x−2)(x+2) ⇒ x≠±2."
  },
  {
    question: "Giải phương trình log₅(x−1)=2.",
    options: [
      "A. x=5",
      "B. x=6",
      "C. x=25",
      "D. x=26"
    ],
    answer: "D. x=26",
    explanation: "log₅(x−1)=2 ⇒ x−1=5²=25 ⇒ x=26."
  }
];

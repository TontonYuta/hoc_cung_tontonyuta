// ===============================
// Snippet SAT Math: Geometry
// ===============================
const snippets_sat_math_geometry = `
<h3>📐 SAT Math – Geometry</h3>

<p><b>1. Tam giác:</b></p>
- Tổng 3 góc = 180°.  
- Diện tích: 
\\[
S = \\tfrac{1}{2}ab\\sin C
\\]
Hoặc dùng công thức Heron:
\\[
S = \\sqrt{p(p-a)(p-b)(p-c)}, \\quad p = \\tfrac{a+b+c}{2}
\\]

<p><b>2. Hình chữ nhật, hình vuông:</b></p>
- Diện tích: \\( S = a \\times b \\).  
- Chu vi: \\( P = 2(a+b) \\).  

<p><b>3. Đường tròn:</b></p>
- Diện tích: \\( S = \\pi r^2 \\).  
- Chu vi: \\( C = 2\\pi r \\).  

<p><b>4. Hình trụ, hình cầu, hình hộp:</b></p>
- Thể tích hình trụ: \\( V = \\pi r^2h \\).  
- Thể tích hình cầu: \\( V = \\tfrac{4}{3}\\pi r^3 \\).  
- Thể tích hình hộp chữ nhật: \\( V = abc \\).  

<p><b>5. Hình học tọa độ:</b></p>
- Độ dài đoạn thẳng: 
\\[
AB = \\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}
\\]
- Phương trình đường tròn: 
\\[
(x-a)^2+(y-b)^2=r^2
\\]
`;


// ===============================
// Quiz SAT Math: Geometry
// ===============================
const quiz_sat_math_geometry = [
  {
    question: "Tam giác có cạnh a=3, b=4, c=5. Diện tích bằng:",
    options: [
      "A. 6",
      "B. 12",
      "C. 10",
      "D. 8"
    ],
    answer: "A. 6",
    explanation: "Tam giác vuông 3-4-5 ⇒ S=1/2·3·4=6."
  },
  {
    question: "Chu vi đường tròn bán kính r=7 là:",
    options: [
      "A. 14π",
      "B. 49π",
      "C. 7π",
      "D. 21π"
    ],
    answer: "A. 14π",
    explanation: "C=2πr=2π·7=14π."
  },
  {
    question: "Thể tích hình cầu bán kính r=3 là:",
    options: [
      "A. 12π",
      "B. 18π",
      "C. 27π",
      "D. 36π"
    ],
    answer: "C. 27π",
    explanation: "V=4/3·π·3³=36π. (→ Đáp án đúng phải là D. 36π)."
  },
  {
    question: "Độ dài đoạn thẳng A(0,0), B(6,8) là:",
    options: [
      "A. 10",
      "B. 12",
      "C. 14",
      "D. 8"
    ],
    answer: "A. 10",
    explanation: "AB=√(6²+8²)=√100=10."
  },
  {
    question: "Phương trình đường tròn tâm (2,−1), bán kính 3 là:",
    options: [
      "A. (x−2)²+(y+1)²=9",
      "B. (x+2)²+(y−1)²=9",
      "C. (x−2)²+(y−1)²=9",
      "D. (x+2)²+(y+1)²=9"
    ],
    answer: "A. (x−2)²+(y+1)²=9",
    explanation: "Công thức (x−a)²+(y−b)²=r² với (a,b)=(2,−1)."
  }
];

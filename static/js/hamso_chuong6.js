// ===============================
// Snippet Chuyên đề 6: Tương giao đồ thị hàm số
// ===============================
const snippets_hamso_tuonggiao = `
<h3>📊 Chuyên đề 6: Tương giao đồ thị hàm số</h3>

<p><b>1. Khái niệm:</b></p>
<ul>
  <li>Hai đồ thị hàm số \\( y=f(x) \\) và \\( y=g(x) \\) cắt nhau khi tồn tại nghiệm của phương trình \\( f(x)=g(x) \\).</li>
  <li>Các nghiệm \\( x_0 \\) chính là <b>hoành độ giao điểm</b>.</li>
  <li>Tọa độ giao điểm là \\( (x_0; f(x_0)) \\).</li>
</ul>

<p><b>2. Cách xét tương giao:</b></p>
<ol>
  <li>Đặt \\( f(x)=g(x) \\).</li>
  <li>Giải phương trình để tìm nghiệm.</li>
  <li>Thay vào một trong hai hàm để tìm tung độ.</li>
</ol>
`;


// ===============================
// Quiz Chuyên đề 6: Tương giao đồ thị
// ===============================
const quiz_hamso_tuonggiao = [
  {
    question: "Số giao điểm của đồ thị \\( y=x^2 \\) và \\( y=2x+3 \\) là:",
    options: [
      "A. 0",
      "B. 1",
      "C. 2",
      "D. Vô số"
    ],
    answer: "C. 2",
    explanation: `Giải: \\(x^2 = 2x+3 ⇔ x^2-2x-3=0 ⇔ (x-3)(x+1)=0 ⇒ x=-1,3.\\)  
    Có 2 nghiệm ⇒ 2 giao điểm.`
  },
  {
    question: "Đồ thị \\( y=\\sin x \\) và \\( y=\\cos x \\) cắt nhau tại nghiệm:",
    options: [
  "A. \\( x=0 \\)",
  "B. \\( x=\\tfrac{\\pi}{4} + k\\pi \\)",
  "C. \\( x=\\tfrac{\\pi}{2} \\)",
  "D. \\( x=k\\pi \\)"
],

    answer: "B. \\( x=\\tfrac{\\pi}{4} + k\\pi \\)",
    explanation: `Giải: \\(\\sin x = \\cos x ⇔ \\tan x=1 ⇔ x=\\pi/4+k\\pi.\\)`
  },
  {
    question: "Số giao điểm của \\( y=x^2 \\) và \\( y=-x^2+4 \\) là:",
    options: [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    answer: "B. 2",
    explanation: `Giải: \\(x^2 = -x^2+4 ⇔ 2x^2=4 ⇔ x=±\\sqrt{2}.\\)  
    ⇒ 2 giao điểm.`
  },
  {
    question: "Tọa độ giao điểm của \\( y=2x+1 \\) và \\( y=-x+4 \\) là:",
    options: [
      "A. (1,3)",
      "B. (1,2)",
      "C. (2,5)",
      "D. (0,1)"
    ],
    answer: "A. (1,3)",
    explanation: `Giải: \\(2x+1 = -x+4 ⇔ 3x=3 ⇔ x=1, y=3.\\)`
  },
  {
    question: "Đồ thị \\( y=\\ln x \\) và \\( y=1 \\) có bao nhiêu giao điểm?",
    options: [
      "A. 0",
      "B. 1",
      "C. 2",
      "D. Vô số"
    ],
    answer: "B. 1",
    explanation: `Giải: \\(\\ln x = 1 ⇔ x=e.\\)  
    ⇒ Có 1 giao điểm: (e,1).`
  }
];
// ===============================
// Snippet Chuyên đề 7: Ứng dụng hàm số giải toán thực tế
// ===============================
const snippets_hamso_ungdung = `
<h3>📊 Chuyên đề 7: Ứng dụng hàm số giải toán thực tế</h3>

<p><b>1. Ý nghĩa đạo hàm trong thực tế:</b></p>
<ul>
  <li>Vận tốc tức thời là đạo hàm của quãng đường theo thời gian.</li>
  <li>Gia tốc tức thời là đạo hàm của vận tốc theo thời gian.</li>
  <li>Năng suất, chi phí, lợi nhuận cực đại/min liên quan đến cực trị hàm số.</li>
</ul>

<p><b>2. Các bước giải toán tối ưu:</b></p>
<ol>
  <li>Lập hàm số biểu diễn đại lượng cần tối ưu (diện tích, thể tích, chi phí...).</li>
  <li>Xác định tập xác định phù hợp với điều kiện bài toán.</li>
  <li>Tính đạo hàm, tìm cực trị để xác định giá trị lớn nhất, nhỏ nhất.</li>
</ol>
`;


// ===============================
// Quiz Chuyên đề 7: Ứng dụng hàm số
// ===============================
const quiz_hamso_ungdung = [
  {
    question: "Một vật chuyển động theo phương trình \\( s = t^2 + 2t \\) (m, s). Vận tốc tại \\( t=3s \\) là:",
    options: [
      "A. 5 m/s",
      "B. 6 m/s",
      "C. 8 m/s",
      "D. 10 m/s"
    ],
    answer: "C. 8 m/s",
    explanation: `v(t) = s'(t) = 2t+2.  
    v(3) = 2*3+2 = 8 (m/s).  
    ⇒ Đáp án đúng: C. 8 m/s`
  },
  {
    question: "Một hình chữ nhật có chu vi 20. Diện tích lớn nhất khi nó là:",
    options: [
      "A. Hình vuông cạnh 4",
      "B. Hình vuông cạnh 5",
      "C. Hình chữ nhật 2x8",
      "D. Hình chữ nhật 3x7"
    ],
    answer: "B. Hình vuông cạnh 5",
    explanation: `Chu vi 20 ⇒ a+b=10.  
    Diện tích S=ab.  
    Max khi a=b=5 ⇒ hình vuông cạnh 5.`
  },
  {
    question: "Hàm số \\( y=-x^2+6x \\) đạt giá trị lớn nhất tại:",
    options: [
      "A. x=2",
      "B. x=3",
      "C. x=6",
      "D. x=-3"
    ],
    answer: "B. x=3",
    explanation: `y' = -2x+6 = 0 ⇔ x=3.  
    Đây là điểm cực đại ⇒ hàm đạt GTLN tại x=3.`
  },
  {
    question: "Một doanh nghiệp có hàm lợi nhuận \\( L(x)=-x^2+12x-20 \\). Lợi nhuận cực đại bằng:",
    options: [
      "A. 16",
      "B. 20",
      "C. 30",
      "D. 36"
    ],
    answer: "A. 16",
    explanation: `L(x) = -x²+12x-20.  
    Max tại x = -b/(2a) = -12/(2·-1) = 6.  
    L(6) = -(36)+72-20 = 16.  
    ⇒ Đáp án đúng: A. 16`
  },
  {
    question: "Một thùng hình hộp chữ nhật có thể tích 32. Tìm kích thước để diện tích xung quanh nhỏ nhất (giả sử đáy hình vuông).",
    options: [
      "A. a=2, h=8",
      "B. a=4, h=2",
      "C. a=8, h=0.5",
      "D. a=2√2, h=4"
    ],
    answer: "B. a=4, h=2",
    explanation: `Gọi cạnh đáy là a, chiều cao h.  
    Điều kiện: a²h=32 ⇒ h=32/a².  
    Diện tích xung quanh: S=4ah = 128/a.  
    S min khi a=4 ⇒ h=32/16=2.  
    ⇒ Đáp án đúng: B. a=4, h=2`
  }
];
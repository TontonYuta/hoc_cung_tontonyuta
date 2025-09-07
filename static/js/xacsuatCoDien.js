const snippets_xacsuatCoDien = `
<h3>🎲 Xác suất cổ điển</h3>

<p><b>Định nghĩa:</b></p>
<p>
Nếu một phép thử có \\( n \\) kết quả đồng khả năng, trong đó có \\( m \\) kết quả thuận lợi cho biến cố A, thì:
</p>

<p style="text-align:center;">
\\( P(A) = \\dfrac{m}{n} \\)
</p>

<p><b>Ví dụ:</b> Tung một con xúc xắc 6 mặt. Xác suất ra số chẵn là \\( \\dfrac{3}{6} = \\dfrac{1}{2} \\).</p>
`;


// ===============================
// Quiz Xác suất cổ điển
// ===============================
const quiz_xacsuatCoDien = [
  {
    question: "Tung một con xúc xắc 6 mặt. Xác suất để được số chia hết cho 3 là:",
    options: [
      "A. \\( \\dfrac{1}{6} \\)",
      "B. \\( \\dfrac{1}{3} \\)",
      "C. \\( \\dfrac{1}{2} \\)",
      "D. \\( \\dfrac{2}{3} \\)"
    ],
    answer: "B. \\( \\dfrac{1}{3} \\)",
    explanation: `Các số chia hết cho 3: {3, 6} (2 số).  
    Tổng số kết quả: 6.  
    \\[
    P = \\dfrac{2}{6} = \\dfrac{1}{3}
    \\]`
  },
  {
    question: "Rút ngẫu nhiên 1 lá bài từ bộ bài 52 lá. Xác suất rút được lá cơ (♥) là:",
    options: [
      "A. \\( \\dfrac{1}{52} \\)",
      "B. \\( \\dfrac{12}{52} \\)",
      "C. \\( \\dfrac{13}{52} \\)",
      "D. \\( \\dfrac{1}{4} \\)"
    ],
    answer: "C. \\( \\dfrac{13}{52} \\)",
    explanation: `Có 13 lá cơ trong 52 lá.  
    \\[
    P = \\dfrac{13}{52} = \\dfrac{1}{4}
    \\]`
  },
  {
    question: "Tung đồng xu cân bằng 2 lần. Xác suất được đúng 1 mặt sấp là:",
    options: [
      "A. \\( \\dfrac{1}{4} \\)",
      "B. \\( \\dfrac{1}{2} \\)",
      "C. \\( \\dfrac{2}{3} \\)",
      "D. \\( \\dfrac{3}{4} \\)"
    ],
    answer: "B. \\( \\dfrac{1}{2} \\)",
    explanation: `Không gian mẫu: {SS, SN, NS, NN}.  
    Thuận lợi: {SN, NS} (2 kết quả).  
    \\[
    P = \\dfrac{2}{4} = \\dfrac{1}{2}
    \\]`
  },
  {
    question: "Một hộp có 3 bóng đỏ, 2 bóng xanh. Rút ngẫu nhiên 1 bóng. Xác suất để rút được bóng đỏ là:",
    options: [
      "A. \\( \\dfrac{1}{5} \\)",
      "B. \\( \\dfrac{2}{5} \\)",
      "C. \\( \\dfrac{3}{5} \\)",
      "D. \\( \\dfrac{4}{5} \\)"
    ],
    answer: "C. \\( \\dfrac{3}{5} \\)",
    explanation: `Có 3 bóng đỏ trên tổng 5 bóng.  
    \\[
    P = \\dfrac{3}{5}
    \\]`
  },
  {
    question: "Tung một con xúc xắc 6 mặt. Xác suất ra số lẻ là:",
    options: [
      "A. \\( \\dfrac{1}{2} \\)",
      "B. \\( \\dfrac{1}{3} \\)",
      "C. \\( \\dfrac{2}{3} \\)",
      "D. \\( \\dfrac{5}{6} \\)"
    ],
    answer: "A. \\( \\dfrac{1}{2} \\)",
    explanation: `Các số lẻ: {1, 3, 5} (3 số).  
    Tổng số kết quả: 6.  
    \\[
    P = \\dfrac{3}{6} = \\dfrac{1}{2}
    \\]`
  }
];

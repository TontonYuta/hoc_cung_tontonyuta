// ===============================
// Snippet Xác suất: Bayes & các công thức thường dùng
// ===============================
const snippets_xs_bayes = `
<h3>🎲 Công thức Bayes (2 biến cố)</h3>

<p>Nếu có 2 biến cố \\( B_1, B_2 \\) tạo thành hệ đầy đủ, và một biến cố A. Khi đó:</p>
<p style="text-align:center">
P(B_1|A) = \\( \\dfrac{P(A|B_1)P(B_1)}{P(A|B_1)P(B_1)+P(A|B_2)P(B_2)} \\)
</p>

<hr>
<h3>📘 Các công thức xác suất phổ biến</h3>

<ul>
<li><b>Công thức cộng:</b> \\( P(A \\cup B) = P(A) + P(B) - P(A \\cap B) \\).</li>
<li><b>Công thức nhân:</b> \\( P(A \\cap B) = P(A|B)P(B) = P(B|A)P(A) \\).</li>
<li><b>Công thức xác suất toàn phần:</b> Nếu \\( B_1, B_2, ..., B_n \\) là hệ đầy đủ:
\\( P(A) = \\sum_{i=1}^n P(A|B_i)P(B_i) \\).</li>
<li><b>Công thức Bayes (tổng quát):</b> 
\\( P(B_k|A) = \\dfrac{P(A|B_k)P(B_k)}{\\sum_{i=1}^n P(A|B_i)P(B_i)} \\).</li>
<li><b>Biến cố độc lập:</b> \\( P(A \\cap B) = P(A)P(B) \\).</li>
<li><b>Biến cố đối:</b> \\( P(\\bar{A}) = 1 - P(A) \\).</li>
</ul>
`;


// ===============================
// Quiz Xác suất: Bayes
// ===============================
const quiz_xs_bayes = [
  {
    question: "Có 2 hộp bi: H1 có 3 đỏ 2 xanh, H2 có 2 đỏ 4 xanh. Chọn ngẫu nhiên 1 hộp rồi rút 1 bi. Biết rút được bi đỏ. Xác suất rút từ H1 là:",
    options: [
      "A. \\( 1/2 \\)",
      "B. \\( 3/5 \\)",
      "C. \\( 5/7 \\)",
      "D. \\( 2/3 \\)"
    ],
    answer: "C. \\( 5/7 \\)",
    explanation: "P(H1)=P(H2)=1/2. P(Đỏ|H1)=3/5, P(Đỏ|H2)=1/3. P(Đỏ)=1/2·3/5+1/2·1/3=7/15. Bayes: P(H1|Đỏ)=(3/5·1/2)/(7/15)=5/7."
  },
  {
    question: "Một nhà máy có 2 dây chuyền: D1 sản xuất 60% sp, lỗi 2%. D2 sản xuất 40%, lỗi 5%. Chọn 1 sp thấy lỗi. Xác suất sp đó từ D1 là:",
    options: [
      "A. \\( 2/5 \\)",
      "B. \\( 12/23 \\)",
      "C. \\( 3/5 \\)",
      "D. \\( 7/23 \\)"
    ],
    answer: "B. \\( 12/23 \\)",
    explanation: "P(D1)=0.6, P(D2)=0.4. P(L|D1)=0.02, P(L|D2)=0.05. P(L)=0.012+0.02=0.032. Bayes: P(D1|L)=0.012/0.032=12/23."
  },
  {
    question: "Một lớp có 40% nam, 60% nữ. Xác suất đi học đúng giờ: nam 70%, nữ 90%. Biết học sinh đến đúng giờ. Xác suất đó là nữ?",
    options: [
      "A. \\( 9/13 \\)",
      "B. \\( 2/3 \\)",
      "C. \\( 3/4 \\)",
      "D. \\( 7/13 \\)"
    ],
    answer: "A. \\( 9/13 \\)",
    explanation: "P(Đúng)=0.4·0.7+0.6·0.9=0.82. P(Nữ|Đúng)=0.54/0.82=9/13."
  },
  {
    question: "Công thức xác suất toàn phần dùng để:",
    options: [
      "A. Tính số trường hợp thuận lợi",
      "B. Tính xác suất khi phân chia không gian mẫu",
      "C. Xác định biến cố đối",
      "D. Tính xác suất độc lập"
    ],
    answer: "B. Tính xác suất khi phân chia không gian mẫu",
    explanation: "Xác suất toàn phần áp dụng khi chia \\( \\Omega \\) thành hệ đầy đủ \\( B_1,...,B_n \\)."
  },
  {
    question: "Nếu A và B độc lập thì hệ thức nào đúng?",
    options: [
      "A. \\( P(A|B)=P(A) \\)",
      "B. \\( P(A|B)=P(B) \\)",
      "C. \\( P(A|B)=P(A)P(B) \\)",
      "D. \\( P(A|B)=1 \\)"
    ],
    answer: "A. \\( P(A|B)=P(A) \\)",
    explanation: "Độc lập nghĩa là: xảy ra B không ảnh hưởng xác suất của A."
  }
];

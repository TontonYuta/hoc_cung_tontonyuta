// ===============================
// Snippet Chuyên đề 1: Tính đơn điệu của hàm số
// ===============================
const snippets_hamso_dondon = `
<h3>📊 Chuyên đề 1: Tính đơn điệu của hàm số</h3>

<p><b>1. Định nghĩa:</b></p>
<ul>
  <li>Hàm số <i>đồng biến</i> trên khoảng \\( I \\) nếu \\( \\forall x_1 < x_2 \\in I: f(x_1) < f(x_2) \\).</li>
  <li>Hàm số <i>nghịch biến</i> trên khoảng \\( I \\) nếu \\( \\forall x_1 < x_2 \\in I: f(x_1) > f(x_2) \\).</li>
</ul>

<p><b>2. Quy tắc sử dụng đạo hàm:</b></p>
<ul>
  <li>Nếu \\( f'(x) > 0 \\; \\forall x \\in I \\) thì hàm số <i>đồng biến</i> trên \\( I \\).</li>
  <li>Nếu \\( f'(x) < 0 \\; \\forall x \\in I \\) thì hàm số <i>nghịch biến</i> trên \\( I \\).</li>
</ul>

<p><b>3. Phương pháp giải:</b></p>
<ol>
  <li>Tìm tập xác định \\(D\\) của hàm số.</li>
  <li>Tính đạo hàm \\( y' = f'(x) \\). Tìm nghiệm \\( f'(x) = 0 \\) hoặc điểm \\( f'(x) \\) không xác định.</li>
  <li>Sắp xếp các điểm tới hạn, lập bảng xét dấu hoặc bảng biến thiên.</li>
  <li>Kết luận khoảng đồng biến (khi \\( f'(x) > 0 \\)) và nghịch biến (khi \\( f'(x) < 0 \\)).</li>
</ol>
`;


// ===============================
// Quiz Chuyên đề 1: Tính đơn điệu
// ===============================
const quiz_hamso_dondon = [
  {
    question: "Hàm số nào dưới đây đồng biến trên khoảng \\((-\\infty;+\\infty)\\)?",
    options: [
      "A. \\( y = \\dfrac{x-1}{x-2} \\)",
      "B. \\( y = x^3 + x \\)",
      "C. \\( y = -x^3 - 3x \\)",
      "D. \\( y = \\dfrac{x+1}{x+3} \\)"
    ],
    answer: "B. \\( y = x^3 + x \\)",
    explanation: `\\( f'(x) = 3x^2 + 1 > 0, \\forall x \\in \\mathbb{R} \\).  
    ⇒ Hàm số đồng biến trên toàn bộ \\((-\\infty; +\\infty)\\).`
  },
  {
    question: "Cho hàm số \\( y = \\dfrac{x-2}{x+1} \\). Mệnh đề nào sau đây đúng?",
    options: [
      "A. Hàm số nghịch biến trên khoảng \\((-\\infty;+\\infty)\\)",
      "B. Hàm số nghịch biến trên khoảng \\((-1;+\\infty)\\)",
      "C. Hàm số nghịch biến trên khoảng \\((-\\infty;-1)\\)",
      "D. Hàm số đồng biến trên khoảng \\((-\\infty;-1)\\)"
    ],
    answer: "D. Hàm số đồng biến trên khoảng \\((-\\infty;-1)\\)",
    explanation: `\\( f'(x) = \\dfrac{3}{(x+1)^2} > 0, \\forall x \\ne -1 \\).  
    ⇒ Hàm số đồng biến trên mỗi khoảng xác định.  
    Trong các đáp án, D là đúng: hàm đồng biến trên khoảng \\((-\\infty;-1)\\).`
  },
  {
    question: "Cho hàm số \\( y = x^3 - 3x^2 \\). Mệnh đề nào dưới đây đúng?",
    options: [
      "A. Hàm số đồng biến trên khoảng \\((0;2)\\)",
      "B. Hàm số nghịch biến trên khoảng \\((0;2)\\)",
      "C. Hàm số nghịch biến trên khoảng \\((-\\infty;0)\\)",
      "D. Hàm số nghịch biến trên khoảng \\((2;+\\infty)\\)"
    ],
    answer: "B. Hàm số nghịch biến trên khoảng \\((0;2)\\)",
    explanation: `\\( f'(x) = 3x^2 - 6x = 3x(x-2) \\).  
    - Với \\(0 < x < 2\\), ta có \\(f'(x) < 0\\).  
    ⇒ Hàm số nghịch biến trên khoảng \\((0;2)\\).`
  },
  {
    question: "Cho hàm số \\( y = f(x) \\) có đạo hàm \\( f'(x) = x^2 + 1 \\), với mọi \\(x \\in \\mathbb{R}\\). Mệnh đề nào dưới đây đúng?",
    options: [
      "A. Hàm số nghịch biến trên khoảng \\((1;+\\infty)\\)",
      "B. Hàm số nghịch biến trên khoảng \\((-1;1)\\)",
      "C. Hàm số đồng biến trên khoảng \\((-\\infty;+\\infty)\\)",
      "D. Hàm số nghịch biến trên khoảng \\((-\\infty;0)\\)"
    ],
    answer: "C. Hàm số đồng biến trên khoảng \\((-\\infty;+\\infty)\\)",
    explanation: `\\( f'(x) = x^2 + 1 > 0, \\forall x \\in \\mathbb{R} \\).  
    ⇒ Hàm số đồng biến trên toàn bộ \\((-\\infty;+\\infty)\\).`
  },
  {
    question: "Cho hàm số \\( y = f(x) \\) liên tục trên \\( \\mathbb{R} \\) và có đạo hàm \\( f'(x) = (1 - x)^2 (x + 1)^3 (3 - x) \\). Hàm số \\( y = f(x) \\) đồng biến trên khoảng nào dưới đây?",
    options: [
      "A. \\((-\\infty; 1)\\)",
      "B. \\((-\\infty; -1)\\)",
      "C. \\((1; 3)\\)",
      "D. \\((3; +\\infty)\\)"
    ],
    answer: "C. \\((1; 3)\\)",
    explanation: `Xét dấu của \\( f'(x) = (1 - x)^2 (x + 1)^3 (3 - x) \\):  
    - \\( (1 - x)^2 \\ge 0 \\), bằng 0 tại \\( x = 1 \\)  
    - \\( (x + 1)^3 \\) âm khi \\( x < -1 \\), dương khi \\( x > -1 \\)  
    - \\( (3 - x) \\) dương khi \\( x < 3 \\), âm khi \\( x > 3 \\)  
    ⇒ \\( f'(x) > 0 \\) trên khoảng \\((1;3)\\) ⇒ hàm số đồng biến.`
  },
  {
    question: "Hàm số \\( y = \\sqrt{2018x - x^2} \\) nghịch biến trên khoảng nào trong các khoảng sau đây?",
    options: [
      "A. \\((1010; 2018)\\)",
      "B. \\((2018; +\\infty)\\)",
      "C. \\((0; 1009)\\)",
      "D. \\((1; 2018)\\)"
    ],
    answer: "A. \\((1010; 2018)\\)",
    explanation: `Hàm số xác định khi \\( 2018x - x^2 > 0 \\) ⇔ \\( x \\in (0;2018) \\).  
    Đặt \\( f(x) = 2018x - x^2 \\) ⇒ \\( f'(x) = 2018 - 2x \\).  
    - Cực đại tại \\( x = 1009 \\) ⇒ hàm nghịch biến trên \\((1009;2018)\\).  
    ⇒ Hàm \\( y \\) cũng nghịch biến trên \\((1010;2018)\\).`
  }
];
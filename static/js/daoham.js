// ===============================
// Snippet Đạo hàm
// ===============================
const snippets_daoham = `
<h3>📐 Đạo hàm</h3>

<p><b>Định nghĩa:</b></p>
<p>
\\( f'(x) = \\lim_{\\Delta x \\to 0} \\dfrac{f(x+\\Delta x) - f(x)}{\\Delta x} \\)
</p>

<p><b>Một số công thức cơ bản:</b></p>
<ul>
  <li>\\( (x^n)' = n \\cdot x^{n-1} \\)</li>
  <li>\\( (\\sin x)' = \\cos x \\)</li>
  <li>\\( (\\cos x)' = -\\sin x \\)</li>
  <li>\\( (e^x)' = e^x \\)</li>
  <li>\\( (\\ln x)' = \\dfrac{1}{x} \\)</li>
</ul>

<p><b>Quy tắc tính:</b></p>
<ul>
  <li>\\( (u \\pm v)' = u' \\pm v' \\)</li>
  <li>\\( (uv)' = u'v + uv' \\)</li>
  <li>\\( \\left( \\dfrac{u}{v} \\right)' = \\dfrac{u'v - uv'}{v^2} \\)</li>
</ul>
`;

// ===============================
// Quiz Đạo hàm
// ===============================
// import các hàm từ quiz_generator.js (nếu bạn load bằng <script> thì không cần import)

// Tách thành 2 kho: cơ bản và nâng cao
const khoCoBan = [];
const khoNangCao = [];

// ---- CƠ BẢN ----

// Power x^n
for (let n = 2; n <= 50; n++) {
  khoCoBan.push(QuizGenerator.taoQuizPower(n));
}

// e^(ax)
for (let a = 2; a <= 50; a++) {
  khoCoBan.push(QuizGenerator.taoQuizExp(a));
}

// ln(ax)
for (let a = 1; a <= 50; a++) {
  khoCoBan.push(QuizGenerator.taoQuizLn(a));
}

// sin(ax), cos(ax)
for (let a = 2; a <= 50; a++) {
  khoCoBan.push(QuizGenerator.taoQuizSin(a));
  khoCoBan.push(QuizGenerator.taoQuizCos(a));
}

// ---- NÂNG CAO ----
// Sinh nhiều biến thể để đủ phong phú
for (let i = 0; i < 50; i++) khoNangCao.push(QuizGenerator.taoQuizProduct());
for (let i = 0; i < 50; i++) khoNangCao.push(QuizGenerator.taoQuizQuotient());
for (let i = 0; i < 50; i++) khoNangCao.push(QuizGenerator.taoQuizChain());

// ---- Hàm chọn ngẫu nhiên k phần tử ----
function chonNgauNhien(arr, k) {
  return arr.sort(() => Math.random() - 0.5).slice(0, k);
}

// ---- Lấy 50 câu: 15 cơ bản (30%), 35 nâng cao (70%) ----
const quiz_daoham = [
  ...chonNgauNhien(khoCoBan, 15),
  ...chonNgauNhien(khoNangCao, 35)
].sort(() => Math.random() - 0.5); // trộn toàn bộ

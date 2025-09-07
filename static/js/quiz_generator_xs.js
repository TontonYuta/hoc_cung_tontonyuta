// ===============================
// Generator tạo quiz XÁC SUẤT CỔ ĐIỂN
// ===============================

// Bọc công thức trong \( \)
function wrap(expr) {
  return `\\( ${expr} \\)`;
}

// ---------- Helper xử lý đáp án ----------
function buildWrongs(correct, candidates, fallbacks = []) {
  let wrongs = [...candidates].filter(s => s && s !== correct);
  wrongs = [...new Set(wrongs)]; // bỏ trùng
  let i = 0;
  while (wrongs.length < 3 && fallbacks.length > 0) {
    const fb = fallbacks[i % fallbacks.length];
    if (fb && fb !== correct && !wrongs.includes(fb)) wrongs.push(fb);
    i++;
    if (i > 10) break;
  }
  return wrongs.slice(0, 3);
}

function shuffleOptionsKeepLabels(correct, wrongs) {
  const all = [correct, ...wrongs].sort(() => Math.random() - 0.5);
  const labels = "ABCD";
  const options = all.map((opt, i) => `${labels[i]}. ${opt}`);
  const idx = all.indexOf(correct);
  const answer = options[idx];
  return { options, answer };
}

// ===============================
// Các generator
// ===============================

// Rút bài từ bộ 52 lá
function taoQuizRutBai(k = null) {
  if (!k) k = Math.floor(Math.random() * 2) + 2; // 2 hoặc 3 lá
  const loai = Math.random() < 0.5 ? "cơ" : "át";
  const favorable = (loai === "cơ") ? `C_{13}^{${k}}` : `C_{4}^{${k}}`;
  const all = `C_{52}^{${k}}`;

  const question = `Rút ngẫu nhiên ${k} lá từ bộ 52 lá. Xác suất để ${k} lá đều là ${loai} là:`;
  const correct = wrap(`\\dfrac{${favorable}}{${all}}`);
  const candidates = [
    wrap(`\\dfrac{${favorable}}{52}`),
    wrap(`\\dfrac{1}{${all}}`),
    wrap(`\\dfrac{13}{52}`),
    wrap(`\\dfrac{${all}}{${favorable}}`)
  ];
  const wrongs = buildWrongs(correct, candidates, [wrap("0")]);
  const { options, answer } = shuffleOptionsKeepLabels(correct, wrongs);

  return {
    question, options, answer,
    explanation: `Có ${favorable} cách thuận lợi và ${all} cách chọn.  
    \\[
    P = \\dfrac{${favorable}}{${all}}
    \\]  
    Đáp án đúng: ${answer}`
  };
}

// Chọn học sinh trong lớp
function taoQuizChonHocSinh(nam = null, nu = null, k = null) {
  if (!nam) nam = Math.floor(Math.random() * 10) + 10; 
  if (!nu) nu = Math.floor(Math.random() * 10) + 10; 
  if (!k) k = Math.floor(Math.random() * 2) + 2;       

  const total = nam + nu;
  const question = `Một lớp có ${nam} nam và ${nu} nữ. Chọn ngẫu nhiên ${k} học sinh. Xác suất để tất cả đều là nữ là:`;
  const correct = wrap(`\\dfrac{C_{${nu}}^{${k}}}{C_{${total}}^{${k}}}`);
  const candidates = [
    wrap(`\\dfrac{${nu}}{${total}}`),
    wrap(`\\dfrac{C_{${nam}}^{${k}}}{C_{${total}}^{${k}}}`),
    wrap(`\\dfrac{C_{${nu}}^{${k}}}{${total}}`),
    wrap(`\\dfrac{${k}}{${total}}`)
  ];
  const wrongs = buildWrongs(correct, candidates, [wrap("0")]);
  const { options, answer } = shuffleOptionsKeepLabels(correct, wrongs);

  return {
    question, options, answer,
    explanation: `Tổng số cách chọn: \\(C_{${total}}^{${k}}\\).  
    Thuận lợi: \\(C_{${nu}}^{${k}}\\).  
    \\[
    P = \\dfrac{C_{${nu}}^{${k}}}{C_{${total}}^{${k}}}
    \\]  
    Đáp án đúng: ${answer}`
  };
}

// Rút bóng từ hộp
function taoQuizRutBong(do = null, xanh = null, vang = null, k = null) {
  if (!do) do = Math.floor(Math.random() * 5) + 3;
  if (!xanh) xanh = Math.floor(Math.random() * 4) + 2;
  if (!vang) vang = Math.floor(Math.random() * 3) + 1;
  if (!k) k = 2;

  const total = do + xanh + vang;
  const question = `Một hộp có ${do} bóng đỏ, ${xanh} bóng xanh, ${vang} bóng vàng. Rút ngẫu nhiên ${k} bóng. Xác suất để cả ${k} bóng đều là đỏ là:`;
  const correct = wrap(`\\dfrac{C_{${do}}^{${k}}}{C_{${total}}^{${k}}}`);
  const candidates = [
    wrap(`\\dfrac{${do}}{${total}}`),
    wrap(`\\dfrac{C_{${do}}^{${k}}}{${total}}`),
    wrap(`\\dfrac{C_{${xanh}}^{${k}}}{C_{${total}}^{${k}}}`),
    wrap(`\\dfrac{1}{C_{${total}}^{${k}}}`)
  ];
  const wrongs = buildWrongs(correct, candidates, [wrap("0")]);
  const { options, answer } = shuffleOptionsKeepLabels(correct, wrongs);

  return {
    question, options, answer,
    explanation: `Tổng số cách chọn: \\(C_{${total}}^{${k}}\\).  
    Thuận lợi: \\(C_{${do}}^{${k}}\\).  
    \\[
    P = \\dfrac{C_{${do}}^{${k}}}{C_{${total}}^{${k}}}
    \\]  
    Đáp án đúng: ${answer}`
  };
}

// Chọn số chia hết
function taoQuizChonSo(N = null, divisor = null) {
  if (!N) N = Math.floor(Math.random() * 50) + 30;
  if (!divisor) divisor = [2, 3, 5][Math.floor(Math.random() * 3)];

  const favorable = `\\lfloor ${N}/${divisor} \\rfloor`;
  const question = `Chọn ngẫu nhiên 1 số nguyên từ 1 đến ${N}. Xác suất để số đó chia hết cho ${divisor} là:`;
  const correct = wrap(`\\dfrac{${favorable}}{${N}}`);
  const candidates = [
    wrap(`\\dfrac{1}{${divisor}}`),
    wrap(`\\dfrac{${divisor}}{${N}}`),
    wrap(`\\dfrac{${N}}{${divisor}}`),
    wrap(`\\dfrac{${favorable}}{${divisor}}`)
  ];
  const wrongs = buildWrongs(correct, candidates, [wrap("0")]);
  const { options, answer } = shuffleOptionsKeepLabels(correct, wrongs);

  return {
    question, options, answer,
    explanation: `Có ${favorable} số chia hết cho ${divisor} trong [1;${N}].  
    Không gian mẫu có ${N} phần tử.  
    \\[
    P = \\dfrac{${favorable}}{${N}}
    \\]  
    Đáp án đúng: ${answer}`
  };
}

// ===============================
// Gom lại thành QuizGeneratorXS
// ===============================
const QuizGeneratorXS = {
  taoQuizRutBai,
  taoQuizChonHocSinh,
  taoQuizRutBong,
  taoQuizChonSo
};

function chonNgauNhienQuiz(mangQuiz, soLuong) {
  return [...mangQuiz].sort(() => Math.random() - 0.5).slice(0, soLuong);
}

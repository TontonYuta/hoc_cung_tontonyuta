// ===============================
// Generator tạo quiz ĐẠO HÀM
// ===============================

// Bọc công thức trong \( \)
function wrap(expr) {
  return `\\( ${expr} \\)`;
}

// ---------- Formatters ----------
function fmtExp(a) {
  return a === 1 ? "e^{x}" : `e^{${a}x}`;
}
function fmtExpDeriv(a) {
  return a === 1 ? "e^{x}" : `${a}e^{${a}x}`;
}
function fmtCos(a) {
  return a === 1 ? "\\cos x" : `\\cos(${a}x)`;
}
function fmtSin(a) {
  return a === 1 ? "\\sin x" : `\\sin(${a}x)`;
}
function fmtNegASin(a) {
  return a === 1 ? "-\\sin x" : `-${a}\\sin(${a}x)`;
}
function fmtACos(a) {
  return a === 1 ? "\\cos x" : `${a}\\cos(${a}x)`;
}

// ---------- Helper xử lý đáp án ----------
function buildWrongs(correct, candidates, fallbacks = []) {
  let wrongs = [...candidates].filter(s => s && s !== correct);
  wrongs = [...new Set(wrongs)]; // bỏ trùng

  let i = 0;
  while (wrongs.length < 3) {
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

// y = x^n
function taoQuizPower(n) {
  const question = `Đạo hàm của hàm số ${wrap(`y = x^{${n}}`)} là:`;
  const correct = wrap(`${n}x^{${n-1}}`);
  const candidates = [
    wrap(`${n-1}x^{${n}}`),
    wrap(`${n+1}x^{${n}}`),
    wrap(`x^{${n-1}}`),
    wrap(`${n}x^{${n+1}}`)
  ];
  const wrongs = buildWrongs(correct, candidates, [wrap("x"), wrap(`${n}`)]);
  const { options, answer } = shuffleOptionsKeepLabels(correct, wrongs);

  return {
    question, options, answer,
    explanation: `Áp dụng công thức: \\( (x^m)' = m x^{m-1} \\).  
    \\[
    (x^{${n}})' = ${n}x^{${n-1}}
    \\]  
    Đáp án đúng: ${answer}`
  };
}

// y = e^(a x)
function taoQuizExp(a) {
  const question = `Đạo hàm của hàm số ${wrap(`y = ${fmtExp(a)}`)} là:`;
  const correct = wrap(fmtExpDeriv(a));
  const candidates = [
    wrap(fmtExp(a)),
    wrap(`${a}x e^{${a}x}`),
    wrap("e^x"),
    wrap(`${a}e^x`),
    wrap(`e^{${a+1}x}`)
  ];
  const wrongs = buildWrongs(correct, candidates, [wrap("e^{2x}")]);
  const { options, answer } = shuffleOptionsKeepLabels(correct, wrongs);

  return {
    question, options, answer,
    explanation: `Công thức: \\( (e^u)' = u'e^u \\), với \\( u=${a}x, u'=${a} \\).  
    \\[
    (e^{${a}x})' = ${a}e^{${a}x}
    \\]  
    Đáp án đúng: ${answer}`
  };
}

// y = ln(ax)
function taoQuizLn(a = 1) {
  const question = a === 1
    ? "Đạo hàm của hàm số \\( y = \\ln(x) \\) là:"
    : `Đạo hàm của hàm số \\( y = \\ln(${a}x) \\) là:`;

  const correct = wrap("\\dfrac{1}{x}");
  const candidates = [
    wrap(`\\dfrac{${a}}{x}`),
    wrap(`\\dfrac{1}{${a}x}`),
    wrap("x"),
    wrap("\\dfrac{1}{x^2}")
  ];
  const wrongs = buildWrongs(correct, candidates, [wrap("0")]);
  const { options, answer } = shuffleOptionsKeepLabels(correct, wrongs);

  return {
    question, options, answer,
    explanation: `Công thức: \\( (\\ln u)' = u'/u \\). Với \\( u=${a}x, u'=${a} \\).  
    \\[
    (\\ln(${a}x))' = \\dfrac{${a}}{{a}x} = \\dfrac{1}{x}
    \\]  
    Đáp án đúng: ${answer}`
  };
}

// y = sin(ax)
function taoQuizSin(a = 1) {
  const question = `Đạo hàm của hàm số ${wrap(`y = ${fmtSin(a)}`)} là:`;
  const correct = wrap(fmtACos(a));
  const candidates = [
    wrap(fmtCos(a)),
    wrap(fmtNegASin(a)),
    wrap(a === 1 ? "-\\cos x" : `-\\cos(${a}x)`),
    wrap(fmtSin(a))
  ];
  const wrongs = buildWrongs(correct, candidates, [wrap("\\sin x")]);
  const { options, answer } = shuffleOptionsKeepLabels(correct, wrongs);

  return {
    question, options, answer,
    explanation: `Công thức: \\( (\\sin u)' = u'\\cos u \\). Với \\( u=${a}x, u'=${a} \\).  
    \\[
    (\\sin(${a}x))' = ${fmtACos(a)}
    \\]  
    Đáp án đúng: ${answer}`
  };
}

// y = cos(ax)
function taoQuizCos(a = 1) {
  const question = `Đạo hàm của hàm số ${wrap(`y = ${fmtCos(a)}`)} là:`;
  const correct = wrap(fmtNegASin(a));
  const candidates = [
    wrap(fmtSin(a)),
    wrap(fmtACos(a)),
    wrap(a === 1 ? "-\\cos x" : `-\\cos(${a}x)`),
    wrap(a === 1 ? "\\cos x" : `${a}\\cos(${a}x)`)
  ];
  const wrongs = buildWrongs(correct, candidates, [wrap("\\sin x")]);
  const { options, answer } = shuffleOptionsKeepLabels(correct, wrongs);

  return {
    question, options, answer,
    explanation: `Công thức: \\( (\\cos u)' = -u'\\sin u \\). Với \\( u=${a}x, u'=${a} \\).  
    \\[
    (\\cos(${a}x))' = ${fmtNegASin(a)}
    \\]  
    Đáp án đúng: ${answer}`
  };
}

function taoQuizProduct(m = null, a = null) {
  // Nếu không truyền tham số, random
  if (m === null) m = Math.floor(Math.random() * 3) + 2; // m = 2..4
  if (a === null) a = Math.floor(Math.random() * 3) + 1; // a = 1..3

  // Tránh trường hợp m = a
  if (m === a) {
    a++;
    if (a > 4) a = 1; // đảm bảo a vẫn trong khoảng hợp lý
  }

  const question = `Đạo hàm của hàm số ${wrap(`y = x^{${m}} e^{${a}x}`)} là:`;

  const correct = wrap(`(${m}x^{${m-1}} + ${a}x^${m})e^{${a}x}`);

  const candidates = [
    wrap(`(${m}x^{${m-1}} - ${a}x^${m})e^{${a}x}`),   // nhầm dấu
    wrap(`(${m}x^{${m}} + ${a}x^{${m-1}})e^{${a}x}`), // tráo mũ
    wrap(`(${m}x^{${m-1}})e^{${a}x}`),                // thiếu hạng tử
    wrap(`(${m+a}x^{${m-1}})e^{${a}x}`)               // hệ số sai
  ];

  const wrongs = buildWrongs(correct, candidates, [wrap(`x^${m} e^{${a+1}x}`)]);
  const { options, answer } = shuffleOptionsKeepLabels(correct, wrongs);

  return {
    question,
    options,
    answer,
    explanation: `Áp dụng công thức đạo hàm tích: \\((uv)' = u'v + uv'\\).  
    Với \\( u = x^{${m}}, u' = ${m}x^{${m-1}}; v = e^{${a}x}, v' = ${a}e^{${a}x} \\).  
    \\[
    y' = ${m}x^{${m-1}} e^{${a}x} + ${a}x^{${m}} e^{${a}x} = (${m}x^{${m-1}} + ${a}x^${m})e^{${a}x}
    \\]  
    Đáp án đúng: ${answer}`
  };
}



function taoQuizQuotient(type = null, a = null, k = null) {
  // random tham số
  if (!type) type = ["sin", "cos", "exp", "power"][Math.floor(Math.random() * 4)];
  if (a === null) a = Math.floor(Math.random() * 3) + 1;   // a = 1..3
  if (k === null) k = Math.floor(Math.random() * 2) + 2;   // k = 2 hoặc 3

  let u, uprime;

  switch (type) {
    case "sin":
      u = `\\sin(${a}x)`;
      uprime = `${a}\\cos(${a}x)`;
      break;
    case "cos":
      u = `\\cos(${a}x)`;
      uprime = `-${a}\\sin(${a}x)`;
      break;
    case "exp":
      u = `e^{${a}x}`;
      uprime = `${a}e^{${a}x}`;
      break;
  }

  const question = `Đạo hàm của hàm số ${wrap(`y = \\dfrac{${u}}{x^{${k}}}`)} là:`;

  const correct = wrap(`\\dfrac{(${uprime})x^{${k}} - ${k}x^{${k-1}}(${u})}{x^{${2*k}}}`);

  // Các đáp án sai gợi ý
  const candidates = [
    wrap(`\\dfrac{${uprime}}{x^{${k}}}`),                                 // thiếu -uv'
    wrap(`\\dfrac{${u}}{x^{${k+1}}}`),                                    // sai bậc mẫu
    wrap(`\\dfrac{(${uprime})x^{${k}} + ${k}x^{${k-1}}(${u})}{x^{${2*k}}}`), // sai dấu
    wrap(`\\dfrac{${uprime} - ${k}${u}}{x^{${k}}}`)                       // thiếu nhân x^k
  ];

  const wrongs = buildWrongs(correct, candidates);
  const { options, answer } = shuffleOptionsKeepLabels(correct, wrongs);

  return {
    question,
    options,
    answer,
    explanation: `Áp dụng công thức thương: \\((u/v)' = (u'v - uv')/v^2\\).  
    Với \\(u=${u}, u'=${uprime}; v = x^{${k}}, v'=${k}x^{${k-1}}\\).  
    \\[
    y' = \\dfrac{(${uprime})x^{${k}} - ${k}x^{${k-1}}(${u})}{x^{${2*k}}}
    \\]  
    Đáp án đúng: ${answer}`
  };
}


function taoQuizChain(n = null) {
  // nếu không truyền thì random n = 2..4
  if (n === null) n = Math.floor(Math.random() * 3) + 2;

  const question = `Đạo hàm của hàm số ${wrap(`y = \\sin(x^{${n}})`)} là:`;
  const correct = wrap(`${n}x^{${n-1}}\\cos(x^{${n}})`);

  const candidates = [
    wrap(`\\cos(x^{${n}})`),                      // quên nhân g'(x)
    wrap(`${n}\\cos(x)`),                         // nhầm trong ngoặc
    wrap(`${n}x^{${n-1}}\\sin(x^{${n}})`),        // nhầm f'(u)
    wrap(`x^{${n-1}}\\cos(x^{${n}})`)             // quên hệ số n
  ];

  const wrongs = buildWrongs(correct, candidates, [wrap("2x")]);
  const { options, answer } = shuffleOptionsKeepLabels(correct, wrongs);

  return {
    question, options, answer,
    explanation: `Áp dụng công thức đạo hàm hàm hợp: \\((f(g(x)))' = f'(g(x))g'(x)\\).  
    Với \\( f(u) = \\sin u, f'(u) = \\cos u; g(x) = x^{${n}}, g'(x) = ${n}x^{${n-1}} \\).  
    \\[
    y' = ${n}x^{${n-1}}\\cos(x^{${n}})
    \\]  
    Đáp án đúng: ${answer}`
  };
}


const QuizGenerator = {
  taoQuizPower,
  taoQuizExp,
  taoQuizLn,
  taoQuizSin,
  taoQuizCos,
  taoQuizProduct,
  taoQuizQuotient,
  taoQuizChain
};
function chonNgauNhienQuiz(mangQuiz, soLuong) {
  return [...mangQuiz]
    .sort(() => Math.random() - 0.5)  // xáo trộn mảng
    .slice(0, soLuong);               // lấy đúng soLuong câu
}

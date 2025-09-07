// Snippet Logarit
const snippets_logarit = `
<h3>📘 Logarit</h3>

<p><b>Định nghĩa:</b></p>
<p>\\( \\log_a b = c \\iff a^c = b,\\; a > 0, a \\neq 1, b > 0 \\)</p>

<p><b>Các công thức cơ bản:</b></p>
<ul>
  <li>\\( \\log_a(xy) = \\log_a x + \\log_a y \\)</li>
  <li>\\( \\log_a(\\tfrac{x}{y}) = \\log_a x - \\log_a y \\)</li>
  <li>\\( \\log_a(x^n) = n \\cdot \\log_a x \\)</li>
</ul>

<p><b>Đổi cơ số:</b></p>
<p>\\[ \\log_a b = \\frac{\\log_c b}{\\log_c a} \\]</p>
`;

// Quiz Logarit
const quiz_logarit = [
  {
    question: "Cho hai số dương a, b (a ≠ 1). Mệnh đề nào dưới đây SAI?",
    options: [
      "A. \\( \\log_a a = 2a \\)",
      "B. \\( \\log_a (a^a) = a \\)",
      "C. \\( \\log_a 1 = 0 \\)",
      "D. \\( a^{\\log_a b} = b \\)"
    ],
    answer: "A. \\( \\log_a a = 2a \\)"
  },
  {
    question: "Với các số thực dương a, b bất kì. Mệnh đề nào sau đây đúng?",
    options: [
      "A. \\( \\log(ab) = \\log a \\cdot \\log b \\)",
      "B. \\( \\log \\tfrac{a}{b} = \\log b - \\log a \\)",
      "C. \\( \\log \\tfrac{a}{b} = \\tfrac{\\log a}{\\log b} \\)",
      "D. \\( \\log(ab) = \\log a + \\log b \\)"
    ],
    answer: "D. \\( \\log(ab) = \\log a + \\log b \\)"
  },
  {
    question: "Với mọi số thực dương a, b, x, y và a, b ≠ 1, mệnh đề nào sau đây sai?",
    options: [
      "A. \\( \\log_a \\tfrac{1}{x} = \\tfrac{1}{\\log_a x} \\)",
      "B. \\( \\log_a(xy) = \\log_a x + \\log_a y \\)",
      "C. \\( \\log_b a \\cdot \\log_a x = \\log_b x \\)",
      "D. \\( \\log_a \\tfrac{x}{y} = \\log_a x - \\log_a y \\)"
    ],
    answer: "A. \\( \\log_a \\tfrac{1}{x} = \\tfrac{1}{\\log_a x} \\)"
  },
  {
    question: "Trong các mệnh đề sau, mệnh đề nào sai?",
    options: [
      "A. \\( \\log_a b^x = x \\log_a b \\), với mọi số a, b > 0, a ≠ 1",
      "B. \\( \\log_a b = \\tfrac{1}{\\log_b a} \\), với a, b > 0, a ≠ 1",
      "C. \\( \\log_a b + \\log_a c = \\log_a(bc) \\), với a, b, c > 0, a ≠ 1",
      "D. \\( \\log_a b = \\tfrac{\\log_c a}{\\log_c b} \\), với a, b, c > 0, a ≠ 1"
    ],
    answer: "D. \\( \\log_a b = \\tfrac{\\log_c a}{\\log_c b} \\), với a, b, c > 0, a ≠ 1"
  },
  {
    question: "Với các số thực dương a, b bất kì. Mệnh đề nào dưới đây đúng?",
    options: [
      "A. \\( \\log(ab) = \\log a \\cdot \\log b \\)",
      "B. \\( \\log \\tfrac{a}{b} = \\log b - \\log a \\)",
      "C. \\( \\log(ab) = \\log a + \\log b \\)",
      "D. \\( \\tfrac{\\log a}{\\log b} = \\log a \\ - \\log b\\)"
    ],
    answer: "C. \\( \\log(ab) = \\log a + \\log b \\)"
  }
];
quiz_logarit.push(
  {
    question: "Cho a, b, c là các số dương (a, b ≠ 1). Trong các mệnh đề sau, mệnh đề nào là mệnh đề đúng?",
    options: [
      "A. \\( \\log_a \\tfrac{b}{a^3} = \\tfrac{1}{3} \\log_a b \\)",
      "B. \\( a^{\\log_b a} = b \\)",
      "C. \\( \\log_a a^\\alpha b = \\alpha \\log_a b \\) (a ≠ 0)",
      "D. \\( \\log_a c = \\log_b c \\cdot \\log_a b \\)"
    ],
    answer: "D. \\( \\log_a c = \\log_b c \\cdot \\log_a b \\)"
  },
  {
    question: "Cho a, b, c > 0, a ≠ 1 và số α ∈ R, mệnh đề nào dưới đây sai?",
    options: [
      "A. \\( \\log_a a^c = c \\)",
      "B. \\( \\log_a a = 1 \\)",
      "C. \\( \\log_a b^\\alpha = \\alpha \\log_a b \\)",
      "D. \\( \\log_a |b-c| = \\log_a b - \\log_a c \\)"
    ],
    answer: "D. \\( \\log_a |b-c| = \\log_a b - \\log_a c \\)"
  },
  {
    question: "Cho a, b là hai số thực dương tùy ý và b ≠ 1. Tìm kết luận đúng.",
    options: [
      "A. \\( \\ln a + \\ln b = \\ln(a+b) \\)",
      "B. \\( \\ln(a+b) = \\ln a \\cdot \\ln b \\)",
      "C. \\( \\ln a - \\ln b = \\ln(a-b) \\)",
      "D. \\( \\log_b a = \\tfrac{\\ln a}{\\ln b} \\)"
    ],
    answer: "D. \\( \\log_b a = \\tfrac{\\ln a}{\\ln b} \\)"
  },
  {
    question: "Với các số thực dương a, b bất kì. Mệnh đề nào dưới đây đúng?",
    options: [
      "A. \\( \\ln(ab) = \\ln a + \\ln b \\)",
      "B. \\( \\ln(\\tfrac{a}{b}) = \\tfrac{\\ln a}{\\ln b} \\)",
      "C. \\( \\ln(ab) = \\ln a \\cdot \\ln b \\)",
      "D. \\( \\ln(\\tfrac{a}{b}) = \\ln b - \\ln a \\)"
    ],
    answer: "A. \\( \\ln(ab) = \\ln a + \\ln b \\)"
  },
  {
    question: "Với các số thực dương a, b bất kì. Mệnh đề nào dưới đây đúng?",
    options: [
      "A. \\( \\log_2 \\tfrac{2a^3}{b} = 1 + 3 \\log_2 a + \\log_2 b \\)",
      "B. \\( \\log_2 \\tfrac{2a^3}{b} = 1 + \\tfrac{1}{3} \\log_2 a + \\log_2 b \\)",
      "C. \\( \\log_2 \\tfrac{2a^3}{b} = 1 + 3 \\log_2 a - \\log_2 b \\)",
      "D. \\( \\log_2 \\tfrac{2a^3}{b} = 1 + \\tfrac{1}{3} \\log_2 a - \\log_2 b \\)"
    ],
    answer: "C. \\( \\log_2 \\tfrac{2a^3}{b} = 1 + 3 \\log_2 a - \\log_2 b \\)"
  }
);
quiz_logarit.push(
  {
    question: "Cho hai số thực a và b, với 1 < a < b. Khẳng định nào dưới đây là khẳng định đúng?",
    options: [
      "A. \\( \\log_b a < 1 < \\log_a b \\)",
      "B. \\( 1 < \\log_a b < \\log_b a \\)",
      "C. \\( \\log_b a < \\log_a b < 1 \\)",
      "D. \\( \\log_a b < 1 < \\log_b a \\)"
    ],
    answer: "A. \\( \\log_b a < 1 < \\log_a b \\)"
  },
  {
    question: "Với a là số thực dương tùy ý, giá trị của 4 \\(\\log \\sqrt{a}\\) bằng:",
    options: [
      "A. \\( -2 \\log a \\)",
      "B. \\( 2 \\log a \\)",
      "C. \\( -4 \\log a \\)",
      "D. \\( 8 \\log a \\)"
    ],
    answer: "B. \\( 2 \\log a \\)"
  },
  {
    question: "Với a là số thực dương tùy ý, \\( \\log(100a) \\) bằng:",
    options: [
      "A. \\( 1 - \\log a \\)",
      "B. \\( 2 + \\log a \\)",
      "C. \\( 2 - \\log a \\)",
      "D. \\( 1 + \\log a \\)"
    ],
    answer: "B. \\( 2 + \\log a \\)"
  },
  {
    question: "Với mọi số thực a dương, \\( \\log_2 \\tfrac{a}{2} \\) bằng:",
    options: [
      "A. \\( \\tfrac{1}{2} \\log_2 a \\)",
      "B. \\( \\log_2 a + 1 \\)",
      "C. \\( \\log_2 a - 1 \\)",
      "D. \\( \\log_2 a - 2 \\)"
    ],
    answer: "C. \\( \\log_2 a - 1 \\)"
  },
  {
    question: "Cho a > 0 và a ≠ 1, khi đó \\( \\log_a \\sqrt[4]{a} \\) bằng:",
    options: [
      "A. 4",
      "B. \\( \\tfrac{1}{4} \\)",
      "C. \\( -\\tfrac{1}{4} \\)",
      "D. -4"
    ],
    answer: "B. \\( \\tfrac{1}{4} \\)"
  }
);

quiz_logarit.push(
  {
    question: "Cho a > 0 và a ≠ 1, khi đó \\( \\log_a \\sqrt[3]{a} \\) bằng:",
    options: [
      "A. -3",
      "B. \\( \\tfrac{1}{3} \\)",
      "C. \\( -\\tfrac{1}{3} \\)",
      "D. 3"
    ],
    answer: "B. \\( \\tfrac{1}{3} \\)"
  },
  {
    question: "Với a là số thực dương tùy ý, \\( \\log_5 a^3 \\) bằng:",
    options: [
      "A. \\( \\tfrac{1}{3} \\log_5 a \\)",
      "B. \\( \\tfrac{1}{3} + \\log_5 a \\)",
      "C. \\( 3 + \\log_5 a \\)",
      "D. \\( 3 \\log_5 a \\)"
    ],
    answer: "D. \\( 3 \\log_5 a \\)"
  },
  {
    question: "Với a là số thực dương tùy ý, \\( \\log_2 a^{2023} \\) bằng:",
    options: [
      "A. \\( 2023 + \\log_2 a \\)",
      "B. \\( \\tfrac{1}{2023} + \\log_2 a \\)",
      "C. \\( 2023 \\log_2 a \\)",
      "D. \\( \\tfrac{1}{2023} \\log_2 a \\)"
    ],
    answer: "C. \\( 2023 \\log_2 a \\)"
  },
  {
    question: "Với a, b là các số thực dương tùy ý và a ≠ 1, \\( \\log_{a^5} b \\) bằng:",
    options: [
      "A. \\( 5 \\log_a b \\)",
      "B. \\( \\tfrac{1}{5} + \\log_a b \\)",
      "C. \\( 5 + \\log_a b \\)",
      "D. \\( \\tfrac{1}{5} \\log_a b \\)"
    ],
    answer: "D. \\( \\tfrac{1}{5} \\log_a b \\)"
  },
  {
    question: "Cho a là số thực dương a ≠ 1 và \\( \\log_\\sqrt[3]{a} \\ {a^3} \\). Mệnh đề nào đúng?",
    options: [
      "A. P = \\( \\tfrac{1}{3} \\)",
      "B. P = 3",
      "C. P = 1",
      "D. P = 9"
    ],
    answer:  "D. P = 9"
  }
);

quiz_logarit.push(
  {
    question: "Với a là số thực dương tùy ý, \\( \\log_3 \\tfrac{3}{a} \\) bằng:",
    options: [
      "A. \\( 1 - \\log_3 a \\)",
      "B. \\( 3 - \\log_3 a \\)",
      "C. \\( \\tfrac{1}{\\log_3 a} \\)",
      "D. \\( 1 + \\log_3 a \\)"
    ],
    answer: "A. \\( 1 - \\log_3 a \\)"
  },
  {
    question: "Với a là số thực dương tùy ý, \\( \\log_5 (5a) \\) bằng:",
    options: [
      "A. \\( 5 + \\log_5 a \\)",
      "B. \\( 5 - \\log_5 a \\)",
      "C. \\( 1 + \\log_5 a \\)",
      "D. \\( 1 - \\log_5 a \\)"
    ],
    answer: "C. \\( 1 + \\log_5 a \\)"
  },
  {
    question: "Với a, b là hai số dương tùy ý, \\( \\log(ab^2) \\) bằng:",
    options: [
      "A. \\( 2(\\log a + \\log b) \\)",
      "B. \\( \\log a + \\tfrac{1}{2} \\log b \\)",
      "C. \\( 2 \\log a + \\log b \\)",
      "D. \\( \\log a + 2 \\log b \\)"
    ],
    answer: "D. \\( \\log a + 2 \\log b \\)"
  },
  {
    question: "Với a là số thực dương tùy ý, \\( \\ln(7a) - \\ln(3a) \\) bằng:",
    options: [
      "A. \\( \\tfrac{\\ln 7}{\\ln 3} \\)",
      "B. \\( \\ln \\tfrac{7}{3} \\)",
      "C. \\( \\ln(4a) \\)",
      "D. \\( \\tfrac{\\ln(7a)}{\\ln(3a)} \\)"
    ],
    answer: "B. \\( \\ln \\tfrac{7}{3} \\)"
  },
  {
    question: "Với a là số thực dương tùy ý, \\( \\ln(5a) - \\ln(3a) \\) bằng:",
    options: [
      "A. \\( \\ln \\tfrac{5}{3} \\)",
      "B. \\( \\tfrac{\\ln 5}{\\ln 3} \\)",
      "C. \\( \\tfrac{\\ln(5a)}{\\ln(3a)} \\)",
      "D. \\( \\ln(2a) \\)"
    ],
    answer: "A. \\( \\ln \\tfrac{5}{3} \\)"
  }
);
quiz_logarit.push(
  {
    question: "Cho a là số thực dương khác 2. Tính \\( I = \\log_\\tfrac{a}{2} \\tfrac{a^2}{4} \\).",
    options: [
      "A. I = 2",
      "B. I = -\\(\\tfrac{1}{2}\\)",
      "C. I = -2",
      "D. I = \\(\\tfrac{1}{2}\\)"
    ],
    answer: "A. I = 2"
  },
 {
  question: "Với a, b là các số thực dương tùy ý và a ≠ 1, giá trị của \\( \\log_a \\tfrac{1}{b^3} \\) bằng:",
  options: [
    "A. \\( 3 \\log_a b \\)",
    "B. \\( \\log_a b \\)",
    "C. \\( -3 \\log_a b \\)",
    "D. \\( \\tfrac{1}{3} \\log_a b \\)"
  ],
  answer: "C. \\( -3 \\log_a b \\)"
},
{
  question: "Với mọi a, b thỏa mãn \\( \\log_2 a - 3 \\log_2 b = 2 \\), khẳng định nào dưới đây đúng?",
  options: [
    "A. \\( a = 4 b^3 \\)",
    "B. \\( a = 3b + 4 \\)",
    "C. \\( a = 3b + 2 \\)",
    "D. \\( a = \\tfrac{4}{b^3} \\)"
  ],
  answer: "A. \\( a = 4 b^3 \\)"
},
  {
    question: "Với mọi a, b thỏa mãn \\( \\log_2 a^3 + \\log_2 b = 6 \\), khẳng định nào dưới đây đúng?",
    options: [
      "A. \\(a^3 b\\) = 64",
      "B. \\(a^3 b\\) = 36",
      "C. \\(a^3 + b\\) = 64",
      "D. \\(a^3 + b\\) = 36"
    ],
    answer: "A. \\(a^3 b\\) = 64"
  },
{
  question: "Với mọi a, b thỏa mãn \\( \\log_2 a^3 + \\log_2 b = 8 \\), khẳng định nào dưới đây đúng?",
  options: [
    "A. \\( a^3 + b = 64 \\)",
    "B. \\( a^3 b = 256 \\)",
    "C. \\( a^3 b = 64 \\)",
    "D. \\( a^3 + b = 256 \\)"
  ],
  answer: "B. \\( a^3 b = 256 \\)"
},

{
  question: "Với a, b là các số dương tùy ý thỏa mãn \\( \\log_3 a - 2 \\log_9 b = 2 \\). Mệnh đề nào dưới đây đúng?",
  options: [
    "A. \\( a = 9b^2 \\)",
    "B. \\( a = 9b \\)",
    "C. \\( a = 6b \\)",
    "D. \\( a = 9b^2 \\)"
  ],
  answer: "B. \\( a = 9b \\)"
},

{
  question: "Với a, b là các số dương tùy ý thỏa mãn \\( \\log_2 a - 2 \\log_4 b = 4 \\). Mệnh đề nào dưới đây đúng?",
  options: [
    "A. \\( a = 16b^2 \\)",
    "B. \\( a = 8b \\)",
    "C. \\( a = 16b \\)",
    "D. \\( a = 16b^4 \\)"
  ],
  answer: "C. \\( a = 16b \\)"
},

{
  question: "Xét tất cả các số dương a và b thỏa mãn \\( \\log_2 a = \\log_8 (ab) \\). Mệnh đề nào dưới đây đúng?",
  options: [
    "A. \\( a = b^2 \\)",
    "B. \\( a^3 = b \\)",
    "C. \\( a = b \\)",
    "D. \\( a^2 = b \\)"
  ],
  answer: "D. \\( a^2 = b \\)"
},

  {
    question: "Xét số thực a và b thỏa mãn \\( \\log_3 (3^a \\cdot 9^b) = \\log_9 3 \\). Mệnh đề nào dưới đây đúng?",
    options: [
      "A. a + 2b = 2",
      "B. 4a + 2b = 1",
      "C. 4ab = 1",
      "D. 2a + 4b = 1"
    ],
    answer: "D. 2a + 4b = 1"
  },
  {
  question: "Với mọi a, b, x là các số thực dương thỏa mãn \\( \\log_2 x = 5 \\log_2 a + 3 \\log_2 b \\). Mệnh đề nào dưới đây đúng?",
  options: [
    "A. \\( x = 5a + 3b \\)",
    "B. \\( x = a^5 + b^3 \\)",
    "C. \\( x = a^5 b^3 \\)",
    "D. \\( x = 3a + 5b \\)"
  ],
  answer: "C. \\( x = a^5 b^3 \\)"
}

);
quiz_logarit.push(
  {
  question: "Với a, b là các số dương tùy ý và a ≠ 1, đặt \\( P = \\log_a b^3 + \\log_{a^2} b^6 \\). Mệnh đề nào đúng?",
  options: [
    "A. \\( P = 6 \\log_a b \\)",
    "B. \\( P = 27 \\log_a b \\)",
    "C. \\( P = 15 \\log_a b \\)",
    "D. \\( P = 9 \\log_a b \\)"
  ],
  answer: "A. \\( P = 6 \\log_a b \\)"
},
  {
    question: "Với a là số thực dương bất kỳ, mệnh đề nào đúng?",
    options: [
      "A. \\( \\log(3a) = \\tfrac{1}{3} \\log a \\)",
      "B. \\( \\log(3a) = 3 \\log a \\)",
      "C. \\( \\log a^3 = \\tfrac{1}{3} \\log a \\)",
      "D. \\( \\log a^3 = 3 \\log a \\)"
    ],
    answer: "D. \\( \\log a^3 = 3 \\log a \\)"
  },
  {
    question: "Với a, b là hai số dương tùy ý, \\( \\log_2 (a^3 b^4) \\) bằng:",
    options: [
      "A. \\( \\tfrac{1}{3} \\log_2 a + \\tfrac{1}{4} \\log_2 b \\)",
      "B. \\( 3 \\log_2 a + 4 \\log_2 b \\)",
      "C. \\( 2 (\\log_2 a + \\log_4 b) \\)",
      "D. \\( 4 \\log_2 a + 3 \\log_2 b \\)"
    ],
    answer: "B. \\( 3 \\log_2 a + 4 \\log_2 b \\)"
  },
  {
    question: "Cho các số dương a, b, c, d. Biểu thức \\( S = \\ln \\tfrac{a}{b} + \\ln \\tfrac{b}{c} + \\ln \\tfrac{c}{d} + \\ln \\tfrac{d}{a} \\) bằng:",
    options: [
      "A. 1",
      "B. 0",
      "C. \\( \\ln (\\tfrac{a}{b} + \\tfrac{b}{c} + \\tfrac{c}{d} + \\tfrac{d}{a}) \\)",
      "D. \\( \\ln(abcd) \\)"
    ],
    answer: "B. 0"
  },
  {
    question: "Với các số thực dương a, b bất kỳ a ≠ 1. Mệnh đề nào đúng?",
    options: [
      "A. \\( \\log_a \\tfrac{\\sqrt[3]{a}}{b^2} = \\tfrac{1}{3} - 2 \\log_a b \\)",
      "B. \\( \\log_a \\tfrac{\\sqrt[3]{a}}{b^2} = 3 - \\tfrac{1}{2} \\log_a b \\)",
      "C. \\( \\log_a \\tfrac{\\sqrt[3]{a}}{b^2} = \\tfrac{1}{3} - \\tfrac{1}{2} \\log_a b \\)",
      "D. \\( \\log_a \\tfrac{\\sqrt[3]{a}}{b^2} = 3 - 2 \\log_a b \\)"
    ],
    answer: "A. \\( \\log_a \\tfrac{\\sqrt[3]{a}}{b^2} = \\tfrac{1}{3} - 2 \\log_a b \\)"
  }
);
quiz_logarit.push(
 {
  question: "Cho các số thực dương a, b, c với a và b khác 1. Khẳng định nào dưới đây là đúng?",
  options: [
    "A. \\( \\log_a b^2 \\cdot \\log_{\\sqrt{b}} c = \\log_a c \\)",
    "B. \\( \\log_a b^2 \\cdot \\log_{\\sqrt{b}} c = \\tfrac{1}{4} \\log_a c \\)",
    "C. \\( \\log_a b^2 \\cdot \\log_{\\sqrt{b}} c = 4 \\log_a c \\)",
    "D. \\( \\log_a b^2 \\cdot \\log_{\\sqrt{b}} c = 2 \\log_a c \\)"
  ],
  answer: "C. \\( \\log_a b^2 \\cdot \\log_{\\sqrt{b}} c = 4 \\log_a c \\)"
},
{
  question: "Giả sử a, b là các số thực dương bất kỳ. Mệnh đề nào sau đây sai?",
  options: [
    "A. \\( (\\log(10ab))^2 = 2 + (\\log(ab))^2 \\)",
    "B. \\( (\\log(10ab))^2 = (1 + \\log a + \\log b)^2 \\)",
    "C. \\( (\\log(10ab))^2 = 2 + 2 \\log(ab) \\)",
    "D. \\( (\\log(10ab))^2 = 2(1 + \\log a + \\log b) \\)"
  ],
  answer: "B. \\( (\\log(10ab))^2 = (1 + \\log a + \\log b)^2 \\)"
},
{
  question: "Rút gọn biểu thức \\( M = 3 \\log_{\\sqrt{3}} \\sqrt{x} - 6 \\log_{9}(3x) + \\log_{1/3} \\tfrac{x}{9} \\).",
  options: [
    "A. \\( M = -\\log_{3}(3x) \\)",
    "B. \\( M = 2 + \\log_{3} \\tfrac{x}{3} \\)",
    "C. \\( M = -\\log_{3} \\tfrac{x}{3} \\)",
    "D. \\( M = 1 + \\log_{3} x \\)"
  ],
  answer: "A. \\( M = -\\log_{3}(3x) \\)"
},
{
  question: "Cho \\( \\log_{700} 490 = a + \\tfrac{b}{c + \\log7} \\) với a, b, c là các số nguyên. Tính tổng \\( T = a + b + c \\).",
  options: [
    "A. T = 7",
    "B. T = 3",
    "C. T = 2",
    "D. T = 1"
  ],
  answer: "D. T = 1"
}
);

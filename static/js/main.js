// Biến toàn cục
let currentQuiz = 0;
let correctCount = 0;
let answeredCount = 0;
let currentQuizSet = [];
let currentSnippet = "";

// Khởi tạo khi tải trang
document.addEventListener("DOMContentLoaded", () => {
  // Navbar
  const toggleBtn = document.querySelector(".menu-toggle");
  const navLinks = document.getElementById("navLinks");
  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    toggleBtn.classList.toggle("active");
  });
  toggleBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navLinks.classList.toggle("show");
      toggleBtn.classList.toggle("active");
    }
  });

const bg = document.getElementById("bgMusic");
const toggleMusicBtn = document.getElementById("toggleMusicBtn");
const volumeSlider = document.getElementById("volumeSlider");

// Lấy âm lượng từ localStorage
const savedVolume = parseFloat(localStorage.getItem("musicVolume")) || 0.3;
bg.volume = savedVolume;
if (volumeSlider) volumeSlider.value = savedVolume;

// Kiểm tra trạng thái bật/tắt
const isMusicPlaying = localStorage.getItem("musicPlaying") === "true";
if (isMusicPlaying) {
  toggleMusicBtn.textContent = "🔊 Tắt nhạc";
  bg.play().catch(err => console.log("🎵 Không autoplay được:", err));
} else {
  toggleMusicBtn.textContent = "🎵 Bật nhạc";
}

// Nút toggle
toggleMusicBtn.addEventListener("click", () => {
  if (bg.paused) {
    bg.play().catch(err => console.log("🎵 Không phát được:", err));
    toggleMusicBtn.textContent = "🔊 Tắt nhạc";
    localStorage.setItem("musicPlaying", "true");
  } else {
    bg.pause();
    toggleMusicBtn.textContent = "🎵 Bật nhạc";
    localStorage.setItem("musicPlaying", "false");
  }
});

// Bấm Enter hoặc Space để toggle
toggleMusicBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleMusicBtn.click();
  }
});

// Slider chỉnh âm lượng
if (volumeSlider) {
  volumeSlider.addEventListener("input", () => {
    bg.volume = volumeSlider.value;
    localStorage.setItem("musicVolume", volumeSlider.value);
  });
}

// Click đầu tiên (browser unlock autoplay)
document.addEventListener("click", () => {
  if (bg.paused && localStorage.getItem("musicPlaying") === "true") {
    bg.play().catch(err => console.log("🎵 Không autoplay được:", err));
  }
}, { once: true });


  // Load trạng thái quiz
  loadQuizState();
});

// Hiển thị snippet + gắn quiz
function showSnippet(type) {
  const box = document.getElementById("snippetBox");
  currentQuiz = 0;
  correctCount = 0;
  answeredCount = 0;
  try {
    switch (type) {
      case "logarit":
        if (!snippets_logarit || !quiz_logarit) throw new Error("Dữ liệu Logarit không tồn tại");
        currentSnippet = snippets_logarit;
        currentQuizSet = quiz_logarit;
        break;
      case "daoham":
        if (!snippets_daoham || !quiz_daoham) throw new Error("Dữ liệu Đạo hàm không tồn tại");
        currentSnippet = snippets_daoham;
        currentQuizSet = quiz_daoham;
        break;
      case "hamso_dondon":
        if (!snippets_hamso_dondon || !quiz_hamso_dondon) throw new Error("Dữ liệu Tính đơn điệu không tồn tại");
        currentSnippet = snippets_hamso_dondon;
        currentQuizSet = quiz_hamso_dondon;
        break;
      case "hamso_cuctri":
        if (!snippets_hamso_cuctri || !quiz_hamso_cuctri) throw new Error("Dữ liệu Cực trị không tồn tại");
        currentSnippet = snippets_hamso_cuctri;
        currentQuizSet = quiz_hamso_cuctri;
        break;
      case "hamso_gtln":
        if (!snippets_hamso_gtln || !quiz_hamso_gtln) throw new Error("Dữ liệu GTLN-GTNN không tồn tại");
        currentSnippet = snippets_hamso_gtln;
        currentQuizSet = quiz_hamso_gtln;
        break;
      case "hamso_tiemcan":
        if (!snippets_hamso_tiemcan || !quiz_hamso_tiemcan) throw new Error("Dữ liệu Tiệm cận không tồn tại");
        currentSnippet = snippets_hamso_tiemcan;
        currentQuizSet = quiz_hamso_tiemcan;
        break;
      case "hamso_nhandien":
        if (!snippets_hamso_nhandien || !quiz_hamso_nhandien) throw new Error("Dữ liệu Nhận diện hàm số không tồn tại");
        currentSnippet = snippets_hamso_nhandien;
        currentQuizSet = quiz_hamso_nhandien;
        break;
      case "hamso_tuonggiao":
        if (!snippets_hamso_tuonggiao || !quiz_hamso_tuonggiao) throw new Error("Dữ liệu Tương giao đồ thị không tồn tại");
        currentSnippet = snippets_hamso_tuonggiao;
        currentQuizSet = quiz_hamso_tuonggiao;
        break;
      case "hamso_ungdung":
        if (!snippets_hamso_ungdung || !quiz_hamso_ungdung) throw new Error("Dữ liệu Ứng dụng thực tế không tồn tại");
        currentSnippet = snippets_hamso_ungdung;
        currentQuizSet = quiz_hamso_ungdung;
        break;
      case "xacsuatCoDien":
        if (!snippets_xacsuatCoDien || !quiz_xacsuatCoDien) throw new Error("Dữ liệu Xác suất cổ điển không tồn tại");
        currentSnippet = snippets_xacsuatCoDien;
        currentQuizSet = quiz_xacsuatCoDien;
        break;
      case "thongke":
        if (!snippets_thongke || !quiz_thongke) throw new Error("Dữ liệu Thống kê không tồn tại");
        currentSnippet = snippets_thongke;
        currentQuizSet = quiz_thongke;
        break;
      case "tichphan":
        if (!snippets_tichphan || !quiz_tichphan) throw new Error("Dữ liệu Tích phân không tồn tại");
        currentSnippet = snippets_tichphan;
        currentQuizSet = quiz_tichphan;
        break;
      case "vecto":
        if (!snippets_vecto || !quiz_vecto) throw new Error("Dữ liệu Vecto không tồn tại");
        currentSnippet = snippets_vecto;
        currentQuizSet = quiz_vecto;
        break;
      case "heOxyz":
        if (!snippets_heOxyz || !quiz_heOxyz) throw new Error("Dữ liệu Hệ Oxyz không tồn tại");
        currentSnippet = snippets_heOxyz;
        currentQuizSet = quiz_heOxyz;
        break;
      case "xacsuatDK":
        if (!snippets_xacsuatDK || !quiz_xacsuatDK) throw new Error("Dữ liệu Xác suất có ĐK không tồn tại");
        currentSnippet = snippets_xacsuatDK;
        currentQuizSet = quiz_xacsuatDK;
        break;

  case "logarit_coban":
    if (!snippets_logarit_coban || !quiz_logarit_coban) throw new Error("Dữ liệu Logarit cơ bản không tồn tại");
    currentSnippet = snippets_logarit_coban;
    currentQuizSet = quiz_logarit_coban;
    break;
  case "logarit_pt":
    if (!snippets_logarit_pt || !quiz_logarit_pt) throw new Error("Dữ liệu Phương trình logarit không tồn tại");
    currentSnippet = snippets_logarit_pt;
    currentQuizSet = quiz_logarit_pt;
    break;
  case "logarit_bt":
    if (!snippets_logarit_bt || !quiz_logarit_bt) throw new Error("Dữ liệu Bất phương trình logarit không tồn tại");
    currentSnippet = snippets_logarit_bt;
    currentQuizSet = quiz_logarit_bt;
    break;

  // ĐẠO HÀM
  case "daoham_dinhnghia":
    if (!snippets_daoham_dinhnghia || !quiz_daoham_dinhnghia) throw new Error("Dữ liệu Định nghĩa đạo hàm không tồn tại");
    currentSnippet = snippets_daoham_dinhnghia;
    currentQuizSet = quiz_daoham_dinhnghia;
    break;
  case "daoham_quytac":
    if (!snippets_daoham_quytac || !quiz_daoham_quytac) throw new Error("Dữ liệu Quy tắc đạo hàm không tồn tại");
    currentSnippet = snippets_daoham_quytac;
    currentQuizSet = quiz_daoham_quytac;
    break;
  case "daoham_ungdung":
    if (!snippets_daoham_ungdung || !quiz_daoham_ungdung) throw new Error("Dữ liệu Ứng dụng đạo hàm không tồn tại");
    currentSnippet = snippets_daoham_ungdung;
    currentQuizSet = quiz_daoham_ungdung;
    break;

  // HÀM SỐ (giữ nguyên như bạn đang có: dondon, cuctri, gtln, tiemcan, nhandien, tuonggiao, ungdung)

  // THỐNG KÊ
      case "tk_p1":
        if (!snippets_tk_p1 || !quiz_tk_p1) {
          throw new Error("Dữ liệu Thống kê P1 không tồn tại");
        }
        currentSnippet = snippets_tk_p1;
        currentQuizSet = quiz_tk_p1;
        break;

      case "tk_p2":
        if (!snippets_tk_p2 || !quiz_tk_p2) {
          throw new Error("Dữ liệu Thống kê P2 không tồn tại");
        }
        currentSnippet = snippets_tk_p2;
        currentQuizSet = quiz_tk_p2;
        break;

      case "tk_p3":
        if (!snippets_tk_p3 || !quiz_tk_p3) {
          throw new Error("Dữ liệu Thống kê P3 không tồn tại");
        }
        currentSnippet = snippets_tk_p3;
        currentQuizSet = quiz_tk_p3;
        break;

  // TÍCH PHÂN
  case "tp_nguyenham":
    if (!snippets_tp_nguyenham || !quiz_tp_nguyenham) throw new Error("Dữ liệu Nguyên hàm không tồn tại");
    currentSnippet = snippets_tp_nguyenham;
    currentQuizSet = quiz_tp_nguyenham;
    break;
  case "tp_quytac":
    if (!snippets_tp_quytac || !quiz_tp_quytac) throw new Error("Dữ liệu Quy tắc tích phân không tồn tại");
    currentSnippet = snippets_tp_quytac;
    currentQuizSet = quiz_tp_quytac;
    break;
  case "tp_ungdung":
    if (!snippets_tp_ungdung || !quiz_tp_ungdung) throw new Error("Dữ liệu Ứng dụng tích phân không tồn tại");
    currentSnippet = snippets_tp_ungdung;
    currentQuizSet = quiz_tp_ungdung;
    break;

  // VECTO
      case "vt_coban":
        if (!snippets_vt_coban || !quiz_vt_coban) {
          throw new Error("Dữ liệu Vecto cơ bản không tồn tại");
        }
        currentSnippet = snippets_vt_coban;
        currentQuizSet = quiz_vt_coban;
        break;

      case "vt_tich":
        if (!snippets_vt_tich || !quiz_vt_tich) {
          throw new Error("Dữ liệu Vecto tích không tồn tại");
        }
        currentSnippet = snippets_vt_tich;
        currentQuizSet = quiz_vt_tich;
        break;

      case "vt_ungdung":
        if (!snippets_vt_ungdung || !quiz_vt_ungdung) {
          throw new Error("Dữ liệu Vecto ứng dụng không tồn tại");
        }
        currentSnippet = snippets_vt_ungdung;
        currentQuizSet = quiz_vt_ungdung;
        break;


  // HỆ OXYZ
      case "oxyz_cau":
        if (!snippets_oxyz_cau || !quiz_oxyz_cau) {
          throw new Error("Dữ liệu Mặt cầu không tồn tại");
        }
        currentSnippet = snippets_oxyz_cau;
        currentQuizSet = quiz_oxyz_cau;
        break;

      case "oxyz_mt":
        if (!snippets_oxyz_mt || !quiz_oxyz_mt) {
          throw new Error("Dữ liệu Mặt phẳng không tồn tại");
        }
        currentSnippet = snippets_oxyz_mt;
        currentQuizSet = quiz_oxyz_mt;
        break;

      case "oxyz_dt":
        if (!snippets_oxyz_dt || !quiz_oxyz_dt) {
          throw new Error("Dữ liệu Đường thẳng không tồn tại");
        }
        currentSnippet = snippets_oxyz_dt;
        currentQuizSet = quiz_oxyz_dt;
        break;

      case "oxyz_goc":
        if (!snippets_oxyz_goc || !quiz_oxyz_goc) {
          throw new Error("Dữ liệu Góc trong không gian không tồn tại");
        }
        currentSnippet = snippets_oxyz_goc;
        currentQuizSet = quiz_oxyz_goc;
        break;

      case "xs_codiem":
        if (!snippets_xs_codiem || !quiz_xs_codiem) {
          throw new Error("Dữ liệu Xác suất cổ điển không tồn tại");
        }
        currentSnippet = snippets_xs_codiem;
        currentQuizSet = quiz_xs_codiem;
        break;

      case "xs_codk":
        if (!snippets_xs_codk || !quiz_xs_codk) {
          throw new Error("Dữ liệu Xác suất có điều kiện không tồn tại");
        }
        currentSnippet = snippets_xs_codk;
        currentQuizSet = quiz_xs_codk;
        break;

      case "xs_bayes":
        if (!snippets_xs_bayes || !quiz_xs_bayes) {
          throw new Error("Dữ liệu Biến cố không tồn tại");
        }
        currentSnippet = snippets_xs_bayes;
        currentQuizSet = quiz_xs_bayes;
        break;

      // ==========================
      // SAT Math
      // ==========================
      case "sat_math_algebra1":
        if (!snippets_sat_math_algebra1 || !quiz_sat_math_algebra1) {
          throw new Error("Dữ liệu SAT Math – Algebra 1 không tồn tại");
        }
        currentSnippet = snippets_sat_math_algebra1;
        currentQuizSet = quiz_sat_math_algebra1;
        break;

      case "sat_math_algebra2":
        if (!snippets_sat_math_algebra2 || !quiz_sat_math_algebra2) {
          throw new Error("Dữ liệu SAT Math – Algebra 2 không tồn tại");
        }
        currentSnippet = snippets_sat_math_algebra2;
        currentQuizSet = quiz_sat_math_algebra2;
        break;

      case "sat_math_advanced":
        if (!snippets_sat_math_advanced || !quiz_sat_math_advanced) {
          throw new Error("Dữ liệu SAT Math – Advanced không tồn tại");
        }
        currentSnippet = snippets_sat_math_advanced;
        currentQuizSet = quiz_sat_math_advanced;
        break;

      case "sat_math_problem":
        if (!snippets_sat_math_problem || !quiz_sat_math_problem) {
          throw new Error("Dữ liệu SAT Math – Problem Solving không tồn tại");
        }
        currentSnippet = snippets_sat_math_problem;
        currentQuizSet = quiz_sat_math_problem;
        break;

      case "sat_math_data":
        if (!snippets_sat_math_data || !quiz_sat_math_data) {
          throw new Error("Dữ liệu SAT Math – Data không tồn tại");
        }
        currentSnippet = snippets_sat_math_data;
        currentQuizSet = quiz_sat_math_data;
        break;

      case "sat_math_geometry":
        if (!snippets_sat_math_geometry || !quiz_sat_math_geometry) {
          throw new Error("Dữ liệu SAT Math – Geometry không tồn tại");
        }
        currentSnippet = snippets_sat_math_geometry;
        currentQuizSet = quiz_sat_math_geometry;
        break;

      case "sat_math_trigonometry":
        if (!snippets_sat_math_trigonometry || !quiz_sat_math_trigonometry) {
          throw new Error("Dữ liệu SAT Math – Trigonometry không tồn tại");
        }
        currentSnippet = snippets_sat_math_trigonometry;
        currentQuizSet = quiz_sat_math_trigonometry;
        break;


      // ==========================
      // SAT Reading
      // ==========================
      case "sat_reading_vocab":
        if (!snippets_sat_reading_vocab || !quiz_sat_reading_vocab) {
          throw new Error("Dữ liệu SAT Reading – Vocabulary không tồn tại");
        }
        currentSnippet = snippets_sat_reading_vocab;
        currentQuizSet = quiz_sat_reading_vocab;
        break;

      case "sat_reading_passage1":
        if (!snippets_sat_reading_passage1 || !quiz_sat_reading_passage1) {
          throw new Error("Dữ liệu SAT Reading – Passage 1 (Văn học) không tồn tại");
        }
        currentSnippet = snippets_sat_reading_passage1;
        currentQuizSet = quiz_sat_reading_passage1;
        break;

      case "sat_reading_passage2":
        if (!snippets_sat_reading_passage2 || !quiz_sat_reading_passage2) {
          throw new Error("Dữ liệu SAT Reading – Passage 2 (Khoa học xã hội) không tồn tại");
        }
        currentSnippet = snippets_sat_reading_passage2;
        currentQuizSet = quiz_sat_reading_passage2;
        break;

      case "sat_reading_passage3":
        if (!snippets_sat_reading_passage3 || !quiz_sat_reading_passage3) {
          throw new Error("Dữ liệu SAT Reading – Passage 3 (Khoa học tự nhiên) không tồn tại");
        }
        currentSnippet = snippets_sat_reading_passage3;
        currentQuizSet = quiz_sat_reading_passage3;
        break;

      case "sat_reading_graph":
        if (!snippets_sat_reading_graph || !quiz_sat_reading_graph) {
          throw new Error("Dữ liệu SAT Reading – Đọc hiểu biểu đồ không tồn tại");
        }
        currentSnippet = snippets_sat_reading_graph;
        currentQuizSet = quiz_sat_reading_graph;
        break;


      // ==========================
      // SAT Writing
      // ==========================
      // ==========================
      // SAT Writing
      // ==========================
      case "sat_writing_grammar1":
        if (!snippets_sat_writing_grammar1 || !quiz_sat_writing_grammar1) {
          throw new Error("Dữ liệu SAT Writing – Grammar 1 (Subject & Verb) không tồn tại");
        }
        currentSnippet = snippets_sat_writing_grammar1;
        currentQuizSet = quiz_sat_writing_grammar1;
        break;

      case "sat_writing_grammar2":
        if (!snippets_sat_writing_grammar2 || !quiz_sat_writing_grammar2) {
          throw new Error("Dữ liệu SAT Writing – Grammar 2 (Pronoun & Modifier) không tồn tại");
        }
        currentSnippet = snippets_sat_writing_grammar2;
        currentQuizSet = quiz_sat_writing_grammar2;
        break;

      case "sat_writing_punctuation":
        if (!snippets_sat_writing_punctuation || !quiz_sat_writing_punctuation) {
          throw new Error("Dữ liệu SAT Writing – Punctuation không tồn tại");
        }
        currentSnippet = snippets_sat_writing_punctuation;
        currentQuizSet = quiz_sat_writing_punctuation;
        break;

      case "sat_writing_style":
        if (!snippets_sat_writing_style || !quiz_sat_writing_style) {
          throw new Error("Dữ liệu SAT Writing – Style & Expression không tồn tại");
        }
        currentSnippet = snippets_sat_writing_style;
        currentQuizSet = quiz_sat_writing_style;
        break;

      case "sat_writing_transition":
        if (!snippets_sat_writing_transition || !quiz_sat_writing_transition) {
          throw new Error("Dữ liệu SAT Writing – Transition & Logic không tồn tại");
        }
        currentSnippet = snippets_sat_writing_transition;
        currentQuizSet = quiz_sat_writing_transition;
        break;

// ===============================
// TSA HUST – Tư duy Toán học
// ===============================
case "tsa_math_algebra":
  if (!snippets_tsa_math_algebra || !quiz_tsa_math_algebra) {
    throw new Error("Dữ liệu TSA – Toán học (Đại số & Số học) không tồn tại");
  }
  currentSnippet = snippets_tsa_math_algebra;
  currentQuizSet = quiz_tsa_math_algebra;
  break;

case "tsa_math_function":
  if (!snippets_tsa_math_function || !quiz_tsa_math_function) {
    throw new Error("Dữ liệu TSA – Toán học (Hàm số) không tồn tại");
  }
  currentSnippet = snippets_tsa_math_function;
  currentQuizSet = quiz_tsa_math_function;
  break;

case "tsa_math_geometry":
  if (!snippets_tsa_math_geometry || !quiz_tsa_math_geometry) {
    throw new Error("Dữ liệu TSA – Toán học (Hình học) không tồn tại");
  }
  currentSnippet = snippets_tsa_math_geometry;
  currentQuizSet = quiz_tsa_math_geometry;
  break;

case "tsa_math_probability":
  if (!snippets_tsa_math_probability || !quiz_tsa_math_probability) {
    throw new Error("Dữ liệu TSA – Toán học (Thống kê & Xác suất) không tồn tại");
  }
  currentSnippet = snippets_tsa_math_probability;
  currentQuizSet = quiz_tsa_math_probability;
  break;


// ===============================
// TSA HUST – Tư duy Đọc hiểu
// ===============================
case "tsa_reading_science":
  if (!snippets_tsa_reading_science || !quiz_tsa_reading_science) {
    throw new Error("Dữ liệu TSA – Đọc hiểu (Khoa học – Công nghệ) không tồn tại");
  }
  currentSnippet = snippets_tsa_reading_science;
  currentQuizSet = quiz_tsa_reading_science;
  break;

case "tsa_reading_economy":
  if (!snippets_tsa_reading_economy || !quiz_tsa_reading_economy) {
    throw new Error("Dữ liệu TSA – Đọc hiểu (Kinh tế – Xã hội) không tồn tại");
  }
  currentSnippet = snippets_tsa_reading_economy;
  currentQuizSet = quiz_tsa_reading_economy;
  break;

case "tsa_reading_literature":
  if (!snippets_tsa_reading_literature || !quiz_tsa_reading_literature) {
    throw new Error("Dữ liệu TSA – Đọc hiểu (Văn học – Báo chí) không tồn tại");
  }
  currentSnippet = snippets_tsa_reading_literature;
  currentQuizSet = quiz_tsa_reading_literature;
  break;


// ===============================
// TSA HUST – Tư duy Khoa học / Giải quyết vấn đề
// ===============================
case "tsa_science_graph":
  if (!snippets_tsa_science_graph || !quiz_tsa_science_graph) {
    throw new Error("Dữ liệu TSA – Khoa học (Đồ thị, bảng số liệu) không tồn tại");
  }
  currentSnippet = snippets_tsa_science_graph;
  currentQuizSet = quiz_tsa_science_graph;
  break;

case "tsa_science_experiment":
  if (!snippets_tsa_science_experiment || !quiz_tsa_science_experiment) {
    throw new Error("Dữ liệu TSA – Khoa học (Nghiên cứu & thí nghiệm) không tồn tại");
  }
  currentSnippet = snippets_tsa_science_experiment;
  currentQuizSet = quiz_tsa_science_experiment;
  break;

case "tsa_science_conflict":
  if (!snippets_tsa_science_conflict || !quiz_tsa_science_conflict) {
    throw new Error("Dữ liệu TSA – Khoa học (Quan điểm xung đột) không tồn tại");
  }
  currentSnippet = snippets_tsa_science_conflict;
  currentQuizSet = quiz_tsa_science_conflict;
  break;

// ===============================
// HSA – Math
// ===============================
case "hsa_math_algebra":
  if (!snippets_hsa_math_algebra || !quiz_hsa_math_algebra) {
    throw new Error("❌ Dữ liệu HSA – Math Algebra chưa tồn tại");
  }
  currentSnippet = snippets_hsa_math_algebra;
  currentQuizSet = quiz_hsa_math_algebra;
  break;

case "hsa_math_calculus":
  if (!snippets_hsa_math_calculus || !quiz_hsa_math_calculus) {
    throw new Error("❌ Dữ liệu HSA – Math Calculus chưa tồn tại");
  }
  currentSnippet = snippets_hsa_math_calculus;
  currentQuizSet = quiz_hsa_math_calculus;
  break;

case "hsa_math_geometry":
  if (!snippets_hsa_math_geometry || !quiz_hsa_math_geometry) {
    throw new Error("❌ Dữ liệu HSA – Math Geometry chưa tồn tại");
  }
  currentSnippet = snippets_hsa_math_geometry;
  currentQuizSet = quiz_hsa_math_geometry;
  break;

case "hsa_math_probability":
  if (!snippets_hsa_math_probability || !quiz_hsa_math_probability) {
    throw new Error("❌ Dữ liệu HSA – Math Probability chưa tồn tại");
  }
  currentSnippet = snippets_hsa_math_probability;
  currentQuizSet = quiz_hsa_math_probability;
  break;


// ===============================
// HSA – Language
// ===============================
case "hsa_lang_reading":
  if (!snippets_hsa_lang_reading || !quiz_hsa_lang_reading) {
    throw new Error("❌ Dữ liệu HSA – Language Reading chưa tồn tại");
  }
  currentSnippet = snippets_hsa_lang_reading;
  currentQuizSet = quiz_hsa_lang_reading;
  break;

case "hsa_lang_grammar":
  if (!snippets_hsa_lang_grammar || !quiz_hsa_lang_grammar) {
    throw new Error("❌ Dữ liệu HSA – Language Grammar chưa tồn tại");
  }
  currentSnippet = snippets_hsa_lang_grammar;
  currentQuizSet = quiz_hsa_lang_grammar;
  break;

case "hsa_lang_literature":
  if (!snippets_hsa_lang_literature || !quiz_hsa_lang_literature) {
    throw new Error("❌ Dữ liệu HSA – Literature chưa tồn tại");
  }
  currentSnippet = snippets_hsa_lang_literature;
  currentQuizSet = quiz_hsa_lang_literature;
  break;


// ===============================
// HSA – Science
// ===============================
case "hsa_sci_physics":
  if (!snippets_hsa_sci_physics || !quiz_hsa_sci_physics) {
    throw new Error("❌ Dữ liệu HSA – Physics chưa tồn tại");
  }
  currentSnippet = snippets_hsa_sci_physics;
  currentQuizSet = quiz_hsa_sci_physics;
  break;

case "hsa_sci_chemistry":
  if (!snippets_hsa_sci_chemistry || !quiz_hsa_sci_chemistry) {
    throw new Error("❌ Dữ liệu HSA – Chemistry chưa tồn tại");
  }
  currentSnippet = snippets_hsa_sci_chemistry;
  currentQuizSet = quiz_hsa_sci_chemistry;
  break;

case "hsa_sci_biology":
  if (!snippets_hsa_sci_biology || !quiz_hsa_sci_biology) {
    throw new Error("❌ Dữ liệu HSA – Biology chưa tồn tại");
  }
  currentSnippet = snippets_hsa_sci_biology;
  currentQuizSet = quiz_hsa_sci_biology;
  break;

case "hsa_sci_history":
  if (!snippets_hsa_sci_history || !quiz_hsa_sci_history) {
    throw new Error("❌ Dữ liệu HSA – History chưa tồn tại");
  }
  currentSnippet = snippets_hsa_sci_history;
  currentQuizSet = quiz_hsa_sci_history;
  break;

case "hsa_sci_geography":
  if (!snippets_hsa_sci_geography || !quiz_hsa_sci_geography) {
    throw new Error("❌ Dữ liệu HSA – Geography chưa tồn tại");
  }
  currentSnippet = snippets_hsa_sci_geography;
  currentQuizSet = quiz_hsa_sci_geography;
  break;


// ===============================
// HSA – English
// ===============================
case "hsa_eng_vocab":
  if (!snippets_hsa_eng_vocab || !quiz_hsa_eng_vocab) {
    throw new Error("❌ Dữ liệu HSA – English Vocab chưa tồn tại");
  }
  currentSnippet = snippets_hsa_eng_vocab;
  currentQuizSet = quiz_hsa_eng_vocab;
  break;

case "hsa_eng_reading":
  if (!snippets_hsa_eng_reading || !quiz_hsa_eng_reading) {
    throw new Error("❌ Dữ liệu HSA – English Reading chưa tồn tại");
  }
  currentSnippet = snippets_hsa_eng_reading;
  currentQuizSet = quiz_hsa_eng_reading;
  break;

case "hsa_eng_inference":
  if (!snippets_hsa_eng_inference || !quiz_hsa_eng_inference) {
    throw new Error("❌ Dữ liệu HSA – English Inference chưa tồn tại");
  }
  currentSnippet = snippets_hsa_eng_inference;
  currentQuizSet = quiz_hsa_eng_inference;
  break;


      case "sat_algebra":
        if (!snippets_sat_algebra || !quiz_sat_algebra) throw new Error("Dữ liệu SAT Algebra không tồn tại");
        currentSnippet = snippets_sat_algebra;
        currentQuizSet = quiz_sat_algebra;
        break;
      case "sat_advanced":
        if (!snippets_sat_advanced || !quiz_sat_advanced) throw new Error("Dữ liệu SAT Advanced không tồn tại");
        currentSnippet = snippets_sat_advanced;
        currentQuizSet = quiz_sat_advanced;
        break;
      case "sat_problem":
        if (!snippets_sat_problem || !quiz_sat_problem) throw new Error("Dữ liệu SAT Problem không tồn tại");
        currentSnippet = snippets_sat_problem;
        currentQuizSet = quiz_sat_problem;
        break;
      case "sat_geometry":
        if (!snippets_sat_geometry || !quiz_sat_geometry) throw new Error("Dữ liệu SAT Geometry không tồn tại");
        currentSnippet = snippets_sat_geometry;
        currentQuizSet = quiz_sat_geometry;
        break;
      case "tsa_logic":
        if (!snippets_tsa_logic || !quiz_tsa_logic) throw new Error("Dữ liệu TSA Logic không tồn tại");
        currentSnippet = snippets_tsa_logic;
        currentQuizSet = quiz_tsa_logic;
        break;
      case "tsa_math":
        if (!snippets_tsa_math || !quiz_tsa_math) throw new Error("Dữ liệu TSA Math không tồn tại");
        currentSnippet = snippets_tsa_math;
        currentQuizSet = quiz_tsa_math;
        break;
      case "tsa_reading":
        if (!snippets_tsa_reading || !quiz_tsa_reading) throw new Error("Dữ liệu TSA Reading không tồn tại");
        currentSnippet = snippets_tsa_reading;
        currentQuizSet = quiz_tsa_reading;
        break;
      case "tsa_problem":
        if (!snippets_tsa_problem || !quiz_tsa_problem) throw new Error("Dữ liệu TSA Problem không tồn tại");
        currentSnippet = snippets_tsa_problem;
        currentQuizSet = quiz_tsa_problem;
        break;
      case "hsa_logic":
        if (!snippets_hsa_logic || !quiz_hsa_logic) throw new Error("Dữ liệu HSA Logic không tồn tại");
        currentSnippet = snippets_hsa_logic;
        currentQuizSet = quiz_hsa_logic;
        break;
      case "hsa_math":
        if (!snippets_hsa_math || !quiz_hsa_math) throw new Error("Dữ liệu HSA Math không tồn tại");
        currentSnippet = snippets_hsa_math;
        currentQuizSet = quiz_hsa_math;
        break;
      case "hsa_reading":
        if (!snippets_hsa_reading || !quiz_hsa_reading) throw new Error("Dữ liệu HSA Reading không tồn tại");
        currentSnippet = snippets_hsa_reading;
        currentQuizSet = quiz_hsa_reading;
        break;
      case "hsa_problem":
        if (!snippets_hsa_problem || !quiz_hsa_problem) throw new Error("Dữ liệu HSA Problem không tồn tại");
        currentSnippet = snippets_hsa_problem;
        currentQuizSet = quiz_hsa_problem;
        break;
      default:
        currentSnippet = "<p>❌ Chưa chọn nội dung.</p>";
        currentQuizSet = [];
    }
    box.classList.remove("show");
    setTimeout(() => {
      box.innerHTML = currentSnippet;
      box.classList.add("show");
      if (window.MathJax) MathJax.typesetPromise([box]);
    }, 50);
    if (currentQuizSet.length > 0) {
      document.getElementById("quizBox").classList.remove("show");
      setTimeout(() => {
        document.getElementById("quizBox").style.display = "block";
        document.getElementById("quizBox").classList.add("show");
        loadQuiz();
        updateStats();
      }, 50);
    } else {
      document.getElementById("quizBox").style.display = "none";
    }
    saveQuizState();
  } catch (e) {
    console.error(e);
    box.innerHTML = `<p>❌ Lỗi: ${e.message}</p>`;
    document.getElementById("quizBox").style.display = "none";
  }
}

// Load câu hỏi quiz
function loadQuiz() {
  if (currentQuizSet.length === 0) return;
  const quizBox = document.getElementById("quizBox");
  quizBox.classList.remove("show");
  setTimeout(() => {
    const q = currentQuizSet[currentQuiz];
    document.getElementById("quizQuestion").innerHTML = `<strong>Câu ${currentQuiz + 1}/${currentQuizSet.length}</strong>: ${q.question}`;
    document.getElementById("quizOptions").innerHTML = q.options
      .map(opt => `
        <li>
          <label>
            <input type="radio" name="quizOption" value="${opt}" aria-label="Đáp án: ${opt}">
            <span>${opt}</span>
          </label>
        </li>
      `).join("");
    document.getElementById("quizResult").innerText = "";
    quizBox.classList.add("show");
    if (window.MathJax) {
  MathJax.typesetPromise([
    document.getElementById("quizQuestion"),
    document.getElementById("quizOptions")
  ]);
}

  }, 50);
}

// Kiểm tra đáp án
function checkAnswer() {
  if (currentQuizSet.length === 0) return;
  const options = document.getElementsByName("quizOption");
  let selected = null;
  for (let opt of options) {
    if (opt.checked) {
      selected = opt.value;
      break;
    }
  }
  if (!selected) {
    alert("Hãy chọn một đáp án!");
    return;
  }
  answeredCount++;
  const currentQ = currentQuizSet[currentQuiz];
  const correctAns = currentQ.answer;
  if (selected === correctAns) {
    correctCount++;
    document.getElementById("quizResult").innerHTML =
      "✅ Chính xác!<br>" + currentQ.explanation;
    document.getElementById("quizResult").style.color = "green";
    playSound("correct");
  } else {
    document.getElementById("quizResult").innerHTML =
      "❌ Sai rồi. Đáp án đúng: " + correctAns + "<br>" + currentQ.explanation;
    document.getElementById("quizResult").style.color = "red";
    playSound("wrong");
  }
  const labels = document.querySelectorAll("#quizOptions label");
  labels.forEach(label => {
    const text = label.textContent.trim();
    label.classList.remove("correct", "wrong");
    if (text === correctAns.trim()) label.classList.add("correct");
    if (text === selected.trim() && selected !== correctAns) label.classList.add("wrong");
    const radios = document.querySelectorAll("input[name='quizOption']");
    radios.forEach(r => r.disabled = true);
  });
  updateStats();
  saveQuizState();
  if (window.MathJax) MathJax.typesetPromise();
}

// Chọn câu tiếp theo
function nextQuestion() {
  if (currentQuizSet.length === 0) return;
  if (!document.querySelector("input[name='quizOption']:checked")) {
    alert("Vui lòng trả lời câu hỏi trước khi chuyển tiếp!");
    return;
  }
  currentQuiz++;
  if (currentQuiz >= currentQuizSet.length) {
    alert("🎉 Bạn đã hoàn thành tất cả câu hỏi!");
    currentQuiz = 0;
  }
  loadQuiz();
  saveQuizState();
}

// Quay lại câu trước
function prevQuestion() {
  if (currentQuizSet.length === 0) return;
  if (currentQuiz > 0) {
    currentQuiz--;
    loadQuiz();
    saveQuizState();
  }
}

// Cập nhật thống kê
function updateStats() {
  const total = currentQuizSet.length;
  const progress = total > 0 ? Math.round((answeredCount / total) * 100) : 0;
  document.getElementById("quizStats").innerHTML = `
    <div class="progress-bar">
      <div class="progress" style="width:${progress}%;"></div>
    </div>
    <p>Kết quả: <b>${correctCount}</b>/<b>${answeredCount}</b> (Tổng số câu: ${total})</p>
  `;
  localStorage.setItem("quizStats", JSON.stringify({ correctCount, answeredCount }));
}

// Lưu và tải trạng thái quiz
function saveQuizState() {
  localStorage.setItem("quizState", JSON.stringify({
    currentQuiz,
    correctCount,
    answeredCount,
    currentSnippet
  }));
}

function loadQuizState() {
  const state = JSON.parse(localStorage.getItem("quizState"));
  if (state) {
    currentQuiz = state.currentQuiz || 0;
    correctCount = state.correctCount || 0;
    answeredCount = state.answeredCount || 0;
    if (state.currentSnippet) showSnippet(state.currentSnippet);
  }
}

// Âm thanh
function playSound(type) {
  if (type === "correct") {
    const audio = document.getElementById("soundCorrect");
    if (audio) audio.play();
  } else if (type === "wrong") {
    const audio = document.getElementById("soundWrong");
    if (audio) audio.play();
  }
}
// Xử lý mở popup Donate
function openDonate() {
  const popup = document.getElementById("donatePopup");
  if (popup) popup.style.display = "flex"; // hoặc "block" nếu không dùng flex
}

// Xử lý đóng popup Donate
function closeDonate() {
  const popup = document.getElementById("donatePopup");
  if (popup) popup.style.display = "none";
}

// Đóng popup khi bấm ra ngoài
window.addEventListener("click", function (e) {
  const popup = document.getElementById("donatePopup");
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

// ==========================
// AUTO QUOTE ENGINE
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const quoteBox = document.getElementById("randomQuote");
  if (!quoteBox) return;

    const quotes = [
      "📖 Học, học nữa, học mãi – V.I. Lenin",
      "💡 Kiến thức là sức mạnh – Francis Bacon",
      "🚀 Mỗi ngày một chút, bạn sẽ đi rất xa",
      "🔥 Không có áp lực, không có kim cương",
      "🌱 Học tập là hạt giống cho thành công",
      "🎯 Kỷ luật là cây cầu nối giữa mục tiêu và thành tựu – Jim Rohn",
      "🌟 Thất bại là mẹ của thành công",
      "📚 Đọc một cuốn sách tốt bằng trò chuyện với một người vĩ đại – Descartes",
      "💭 Học mà không suy nghĩ thì uổng phí, suy nghĩ mà không học thì nguy hiểm – Khổng Tử",
      "⚡ Thành công là tổng cộng của những nỗ lực nhỏ được lặp đi lặp lại hàng ngày",
      "✨ Người biết đọc nhưng không đọc cũng chẳng hơn người mù chữ – Mark Twain",
      "🌈 Tương lai thuộc về những ai tin vào vẻ đẹp của giấc mơ – Eleanor Roosevelt",
      "🕰️ Đừng đợi. Thời gian sẽ không bao giờ ‘đúng lúc’ – Napoleon Hill",
      "🎓 Giáo dục là vũ khí mạnh nhất bạn có thể dùng để thay đổi thế giới – Nelson Mandela",
      "🌍 Người học suốt đời là người chưa bao giờ ngừng lớn lên",
      "📝 Viết là cách tốt nhất để học gấp đôi – Seneca",
      "🧠 Trí tuệ đến từ kinh nghiệm. Kinh nghiệm thường đến từ sai lầm",
      "🔑 Chìa khóa của thành công là tập trung vào mục tiêu, không phải chướng ngại",
      "🕊️ Tri thức là tự do",
      "🔥 Nếu bạn có giấc mơ, hãy nắm lấy nó và không bao giờ buông – Carol Burnett"
    ];

  let quoteIndex = 0;

  function cycleQuote() {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteBox.classList.remove("fade-in");
    void quoteBox.offsetWidth; // reset animation
    quoteBox.textContent = quotes[quoteIndex];
    quoteBox.classList.add("fade-in");
  }

  setInterval(cycleQuote, 4000);
});


document.addEventListener("DOMContentLoaded", () => {
  // Accordion
  const parents = document.querySelectorAll(".parent-card");
  parents.forEach(card => {
    const header = card.querySelector(".card-header");
    header.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });
});

function openDonate() {
  document.getElementById("donateModal").style.display = "block";
}
function closeDonate() {
  document.getElementById("donateModal").style.display = "none";
}

// ===============================
// Tab switcher (SAT / TSA / HSA Structure)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const parentSection = btn.closest("section"); // tìm section chứa tab

      // Ẩn tất cả panel trong section đó
      parentSection.querySelectorAll(".tab-panel").forEach(panel => {
        panel.hidden = true;
      });

      // Bỏ active ở tất cả nút trong section
      parentSection.querySelectorAll(".tab-btn").forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });

      // Hiện panel được chọn
      const targetPanel = parentSection.querySelector(targetId);
      if (targetPanel) targetPanel.hidden = false;

      // Active nút
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
    });
  });
});

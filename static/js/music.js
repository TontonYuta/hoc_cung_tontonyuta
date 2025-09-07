// ==========================
// MUSIC CONTROL ENGINE
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const bg = document.getElementById("bgMusic");
  const toggleMusicBtn = document.getElementById("toggleMusicBtn");
  const volumeSlider = document.getElementById("volumeSlider");

  if (!bg || !toggleMusicBtn) return; // Nếu trang không có nhạc thì bỏ qua

  // Lấy âm lượng từ localStorage hoặc mặc định 0.3
  const savedVolume = parseFloat(localStorage.getItem("musicVolume")) || 0.3;
  bg.volume = savedVolume;
  if (volumeSlider) volumeSlider.value = savedVolume;

  // Kiểm tra trạng thái phát
  const isMusicPlaying = localStorage.getItem("musicPlaying") === "true";
  if (isMusicPlaying) {
    toggleMusicBtn.textContent = "🔊 Tắt nhạc";
    bg.play().catch(() => {
      console.log("🎵 Autoplay bị chặn, chờ click...");
    });
  } else {
    toggleMusicBtn.textContent = "🎵 Bật nhạc";
  }

  // Xử lý khi bấm nút
  toggleMusicBtn.addEventListener("click", () => {
    if (bg.paused) {
      bg.play().then(() => {
        toggleMusicBtn.textContent = "🔊 Tắt nhạc";
        localStorage.setItem("musicPlaying", "true");
      }).catch(err => {
        console.log("🎵 Không phát được:", err);
        alert("⚠️ Trình duyệt chặn autoplay, vui lòng click lại!");
      });
    } else {
      bg.pause();
      toggleMusicBtn.textContent = "🎵 Bật nhạc";
      localStorage.setItem("musicPlaying", "false");
    }
  });

  // Dùng Enter hoặc Space để toggle
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

  // Unlock autoplay bằng click đầu tiên
  document.addEventListener("click", () => {
    if (bg.paused && localStorage.getItem("musicPlaying") === "true") {
      bg.play().catch(err => console.log("🎵 Không autoplay được:", err));
    }
  }, { once: true });
});

@echo off
REM ===================================
REM Script push code lên GitHub
REM ===================================

cd /d D:\website_hoc_cung_tontonyuta

echo 🔄 Đang add toàn bộ file...
git add .

echo 📝 Nhập nội dung commit:
set /p msg="Commit message: "

if "%msg%"=="" (
  set msg=Update website
)

echo 🚀 Đang commit với message: "%msg%"
git commit -m "%msg%"

echo 🌍 Đang push lên GitHub...
git push origin main

echo ✅ Hoàn tất!
pause

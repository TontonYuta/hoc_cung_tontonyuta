@echo off
:: ========================================
:: Tạo file rỗng cho HSA (ĐHQGHN)
:: ========================================
cd static\js

:: ===============================
:: Math
:: ===============================
type nul > hsa_math_algebra.js
type nul > hsa_math_calculus.js
type nul > hsa_math_geometry.js
type nul > hsa_math_probability.js

:: ===============================
:: Language
:: ===============================
type nul > hsa_lang_reading.js
type nul > hsa_lang_grammar.js
type nul > hsa_lang_literature.js

:: ===============================
:: Science
:: ===============================
type nul > hsa_sci_physics.js
type nul > hsa_sci_chemistry.js
type nul > hsa_sci_biology.js
type nul > hsa_sci_history.js
type nul > hsa_sci_geography.js

:: ===============================
:: English
:: ===============================
type nul > hsa_eng_vocab.js
type nul > hsa_eng_reading.js
type nul > hsa_eng_inference.js

echo ✅ Đã tạo toàn bộ file rỗng cho HSA trong static\js!
pause

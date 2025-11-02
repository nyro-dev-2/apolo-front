@echo off
setlocal

:: ================================================
:: 📂 Carpeta destino
:: ================================================
set "outdir=D:\apolo-front\public\products"
if not exist "%outdir%" mkdir "%outdir%"

echo ===============================================
echo 🦴 Descargando imágenes Prodorth - Cervical PEEK Cages (PROYSTER)
echo ===============================================

:: ==================================================
:: 💠 PROYSTER™ (una pieza PEEK)
:: ==================================================
powershell -Command "Invoke-WebRequest 'https://img.medicalexpo.com/images_me/photo-mg/108012-17898930.jpg' -OutFile '%outdir%\caja-intersomatica-anterior-peek-proyster-1.jpg'"

:: ==================================================
:: 💠 PROYSTER-M™ (una pieza PEEK + metal)
:: ==================================================
powershell -Command "Invoke-WebRequest 'https://img.medicalexpo.com/images_me/photo-mg/108012-17898930.jpg' -OutFile '%outdir%\caja-intersomatica-anterior-peek-bladed-proyster-m-1.jpg'"

:: ==================================================
:: 💠 PROYSTER-D™ (una pieza PEEK + dos metales)
:: ==================================================
powershell -Command "Invoke-WebRequest 'https://img.medicalexpo.com/images_me/photo-mg/108012-20670433.jpg' -OutFile '%outdir%\caja-intersomatica-anterior-peek-standalone-proyster-d-1.jpg'"
powershell -Command "Invoke-WebRequest 'https://img.medicalexpo.com/images_me/photo-mg/108012-20670434.jpg' -OutFile '%outdir%\caja-intersomatica-anterior-peek-standalone-proyster-d-2.jpg'"

:: ==================================================
:: 🔹 Conversión automática a PNG
:: ==================================================
echo Convirtiendo imágenes a PNG...
for %%F in ("%outdir%\*.jpg") do (
    powershell -Command "Add-Type -AssemblyName System.Drawing; $img=[Drawing.Image]::FromFile('%%~fF'); $png='%%~dpnF.png'; $img.Save($png, [System.Drawing.Imaging.ImageFormat]::Png)"
)

echo ===============================================
echo ✅ Descarga y conversión completadas
echo 📁 Archivos guardados en: %outdir%
echo ===============================================
pause

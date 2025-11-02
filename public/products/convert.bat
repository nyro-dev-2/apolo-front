@echo off
title 🖼️ Conversor a PNG - Apolo Medical HT
color 0a
set "imgdir=D:\apolo-front\public\products"

echo =====================================================
echo 🔍 Buscando imágenes en: %imgdir%
echo =====================================================

powershell -NoExit -NoProfile -ExecutionPolicy Bypass -Command "Add-Type -AssemblyName System.Drawing; Get-ChildItem '%imgdir%' -Recurse | Where-Object { $_.Extension -match 'jpg|jpeg|bmp|gif|webp' } | ForEach-Object { try { $img = [Drawing.Image]::FromFile($_.FullName); $new = ($_.DirectoryName + '\' + $_.BaseName + '.png'); $img.Save($new, [System.Drawing.Imaging.ImageFormat]::Png); $img.Dispose(); Remove-Item $_.FullName -Force; Write-Host ('✅ Convertido: ' + $_.Name) -ForegroundColor Green } catch { Write-Host ('⚠️ Error en ' + $_.Name + ': ' + $_.Exception.Message) -ForegroundColor Yellow } }; Write-Host ''; Write-Host '🎯 Conversión completada en %imgdir%' -ForegroundColor Cyan; pause"

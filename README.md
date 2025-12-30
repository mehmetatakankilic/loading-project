# ⏳ Animated Loading Page (Hareketli Yükleme Ekranı)

Bu proje, JavaScript'in **zamanlama fonksiyonlarını** (`setTimeout`) ve CSS'in **konumlandırma özelliklerini** (`position: absolute`) kullanarak oluşturulmuş dinamik bir yükleme ekranı simülasyonudur.

## 🌟 Proje Özellikleri

- **Senkronize Animasyon:** Yüzdelik sayaç (text) ve ilerleme çubuğu (progress bar) milisaniyeler içinde eş zamanlı artar.
- **Recursive (Özyinelemeli) Yapı:** `For` döngüsü yerine, fonksiyonun belirli aralıklarla kendini tekrar çağırma mantığı kullanılmıştır.
- **Responsive Merkezleme:** İçerik, `Flexbox` kullanılarak ekranın tam ortasına sabitlenmiştir.

## 🛠️ Kullanılan Teknolojiler

- **HTML5**
- **CSS3** (Flexbox, Relative/Absolute Positioning)
- **JavaScript** (DOM Manipülasyonu, Asenkron Fonksiyonlar)

## 🧠 Nasıl Çalışır?

1. **HTML/CSS:** İki adet `hr` etiketi üst üste bindirilir. Alttaki beyaz, üstteki kırmızıdır.
2. **JavaScript:** `updateNumber` fonksiyonu çalışır ve:
   - Sayı değerini artırır.
   - Kırmızı barın `width` (genişlik) değerini günceller.
   - `%100` olana kadar `setTimeout` ile kendini tekrar çağırır.

## 💻 Kurulum

Projeyi bilgisayarınızda görmek için:

1. Dosyaları indirin.
2. `index.html` dosyasını tarayıcınızda açın.

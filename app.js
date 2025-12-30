/**
 * --- SEÇİCİLER (Selectors) ---
 * DOM üzerindeki değiştireceğimiz elemanları seçiyoruz.
 */
const counter = document.querySelector('.counter');
const loadingBarFront = document.querySelector('.loadingBarFront');

// Başlangıç değerimiz
let number = 0;

// Fonksiyonu ilk kez tetikliyoruz
updateNumber();

/**
 * --- ANA FONKSİYON ---
 * Bu fonksiyon kendi kendini tekrar çağırarak (Recursion)
 * sayıyı 100'e kadar artırır.
 */
function updateNumber() {
    
    // 1. Ekrana sayıyı yazdır (Örn: 15%)
    counter.textContent = number + '%';
    
    // 2. Kırmızı barın genişliğini güncelle (Örn: width: 15%)
    loadingBarFront.style.width = number + '%';
    
    // 3. Sayıyı 1 artır
    number++;

    // 4. Kontrol Mekanizması
    // Sayı 101'den küçük olduğu sürece döngü devam etsin.
    if (number < 101) {
        // setTimeout fonksiyonu biraz bekleme süresi ekler.
        // 3 milisaniye sonra updateNumber fonksiyonunu tekrar çalıştırır.
        setTimeout(updateNumber, 30); 
        // Not: 3ms çok hızlıdır, efekti görmek için 30ms civarı daha iyidir.
        // Hızı buradan ayarlayabilirsin.
    }
}
// =============================================
// ADIM 1: var vs let vs const
// =============================================

// var — kaçının, sorun çıkarabilir
var isim = "Ahmet";
var isim = "Mehmet"; // çift tanımlama: hata vermez! (kötü)
console.log("var çift tanımlama:", isim);

// let — değişebilir değer
let skor = 0;
skor = 10;
console.log("let yeniden atama:", skor);

// const — sabit referans
const PI = 3.14;
// PI = 3; // → HATA: const yeniden atanamaz — bu satırı açıp göster
console.log("const PI:", PI);

// const ile nesne: referans sabit, içerik değişebilir
const kullanici = { isim: "Ali", yas: 30 };
kullanici.yas = 31; // OK — içerik değişti
// kullanici = {};   // HATA — referansı değiştiremezsin
console.log("const nesne güncelleme:", kullanici);

// =============================================
// ADIM 2: Arrow Functions (Ok Fonksiyonları)
// =============================================

// Normal fonksiyon
function toplaNormal(a, b) {
  return a + b;
}
console.log("Normal fonksiyon: topla(3, 5) =", toplaNormal(3, 5));

// Arrow function — eşdeğer
const toplaArrow = (a, b) => {
  return a + b;
};
console.log("Arrow function: topla(3, 5) =", toplaArrow(3, 5));

// Kısaltma: tek ifade → {} ve return gereksiz
const toplaKisa = (a, b) => a + b;
console.log("Kısa arrow: topla(3, 5) =", toplaKisa(3, 5));

// Tek parametre — parantez opsiyonel
const karesi = (x) => x * x;
console.log("karesi(4) =", karesi(4));

// Parametresiz
const selamla = () => "Merhaba!";
console.log("selamla() =", selamla());

// Çok satırlı gövde — {} ve return gerekir
const bolumSonucu = (a, b) => {
  if (b === 0) return "Sıfıra bölünemez";
  return a / b;
};
console.log("bolumSonucu(10, 3) =", bolumSonucu(10, 3));
console.log("bolumSonucu(10, 0) =", bolumSonucu(10, 0));

// =============================================
// ADIM 3: Template Literals (Şablon Dizeler)
// =============================================

const ad = "Zeynep";
const yas = 28;

// Eski yöntem — kötü okunurluk
const mesaj1 = "Merhaba, " + ad + "! Yaşın: " + yas;
console.log("Eski yöntem:", mesaj1);

// Template literal — backtick (`) ile yazılır
const mesaj2 = `Merhaba, ${ad}! Yaşın: ${yas}`;
console.log("Template literal:", mesaj2);

// İfade kullanımı
const mesaj3 = `${yas >= 18 ? "Yetişkin" : "Küçük"}: ${ad}`;
console.log("İfade kullanımı:", mesaj3);

// Çok satırlı metin
const html = `
  <div>
    <h1>${ad}</h1>
    <p>Yaş: ${yas}</p>
  </div>
`;
console.log("Çok satırlı template:", html);

// =============================================
// ADIM 1: Object Destructuring
// =============================================

const kullanici = {
  isim: "Can",
  yas: 25,
  sehir: "İstanbul",
};

// Eski yöntem
const isimEski = kullanici.isim;
const yasEski = kullanici.yas;
console.log("Eski yöntem:", isimEski, yasEski);

// Destructuring ile — tek satırda çıkar
const { isim, yas, sehir } = kullanici;
console.log("Destructuring:", isim, yas, sehir);

// Farklı isim vermek (renaming)
const { isim: ad, yas: kacYasinda } = kullanici;
console.log("Renaming:", ad, kacYasinda);

// Varsayılan değer — nesnede olmayan bir alan
const { ulke = "Türkiye" } = kullanici;
console.log("Varsayılan değer:", ulke);

// Fonksiyon parametresinde — React props tam böyle gelir
function KullaniciKarti({ isim, yas }) {
  return `${isim} (${yas})`;
}
console.log("Fonksiyon param:", KullaniciKarti(kullanici));

// =============================================
// ADIM 2: Array Destructuring
// =============================================

const renkler = ["kırmızı", "yeşil", "mavi"];

const [birinci, ikinci] = renkler;
console.log("Array destructuring:", birinci, ikinci);

// Atlama
const [, , ucuncu] = renkler;
console.log("Eleman atlama:", ucuncu);

// React useState tam bu formatı kullanır:
// const [sayi, setSayi] = useState(0);
//        ^değer  ^güncelleyici
console.log("useState formatı: const [sayi, setSayi] = useState(0)");

// =============================================
// ADIM 3: Spread Operatörü (...)
// =============================================

// Dizi spread — birleştirme
const a = [1, 2, 3];
const b = [4, 5, 6];
const hepsi = [...a, ...b];
console.log("Dizi spread:", hepsi);

// Dizi kopyalama (orijinali etkilemez)
const kopya = [...a];
kopya.push(99);
console.log("Orijinal:", a);
console.log("Kopya:", kopya);

// Nesne spread — React state güncelleme böyle yapılır
const profil = { isim: "Ali", yas: 30 };
const guncel = { ...profil, yas: 31 };
console.log("Nesne spread:", guncel);

// Yeni alan ekleme
const genisletilmis = { ...profil, sehir: "Ankara", rol: "Admin" };
console.log("Yeni alan ekleme:", genisletilmis);

// Fonksiyon çağrılarında
const sayilar = [3, 1, 4, 1, 5];
console.log("Math.max(...sayilar):", Math.max(...sayilar));

// =============================================
// ADIM 4: Rest Operatörü (...)
// =============================================

// Fonksiyon parametrelerinde rest
function topla(...sayilar) {
  return sayilar.reduce((acc, n) => acc + n, 0);
}
console.log("Rest param: topla(1,2,3,4) =", topla(1, 2, 3, 4));

// Array destructuring'de rest — kalanları topla
const [ilk, ikinciEleman, ...kalanlar] = [10, 20, 30, 40, 50];
console.log("Array rest — ilk:", ilk, "kalanlar:", kalanlar);

// Object destructuring'de rest
const { isim: kisiAdi, ...digerBilgiler } = {
  isim: "Elif",
  yas: 26,
  sehir: "Ankara",
  meslek: "Mühendis",
};
console.log("Object rest — kisiAdi:", kisiAdi);
console.log("Object rest — digerBilgiler:", digerBilgiler);

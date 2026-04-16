// =============================================
// ADIM 1: .map() — Her Elemanı Dönüştür
// Yeni dizi döndürür, orijinali değiştirmez.
// =============================================

const sayilar = [1, 2, 3, 4, 5];

const kareler = sayilar.map((n) => n * n);
console.log("Kareler:", kareler);

const ciftKati = sayilar.map((n) => n * 2);
console.log("Çift katı:", ciftKati);

// Nesne dizisini dönüştür
const kullanicilar = [
  { id: 1, isim: "Ali", yas: 30 },
  { id: 2, isim: "Veli", yas: 25 },
  { id: 3, isim: "Ayşe", yas: 28 },
];

const isimler = kullanicilar.map((k) => k.isim);
console.log("İsim listesi:", isimler);

// Her elemandan yeni bir nesne oluştur
const ozetler = kullanicilar.map((k) => ({
  tanitim: `${k.isim} (${k.yas} yaşında)`,
}));
console.log("Özetler:", ozetler);

// React'ta böyle kullanılacak:
// kullanicilar.map(k => <li key={k.id}>{k.isim}</li>)

console.log("─".repeat(50));

// =============================================
// ADIM 2: .filter() — Koşulu Sağlayanları Al
// Yeni dizi döndürür, orijinali değiştirmez.
// =============================================

const urunler = [
  { isim: "Kalem", fiyat: 5, stokta: true },
  { isim: "Defter", fiyat: 15, stokta: false },
  { isim: "Silgi", fiyat: 3, stokta: true },
  { isim: "Cetvel", fiyat: 8, stokta: true },
  { isim: "Boya", fiyat: 25, stokta: true },
];

// Stokta olanlar
const stokta = urunler.filter((u) => u.stokta === true);
console.log(
  "Stokta olanlar:",
  stokta.map((u) => u.isim)
);

// 10 TL altı ürünler
const ucuzlar = urunler.filter((u) => u.fiyat < 10);
console.log(
  "10 TL altı:",
  ucuzlar.map((u) => `${u.isim} (${u.fiyat}₺)`)
);

// Arama filtresi — React'ta sık kullanılır
const aranan = "ka";
const sonuclar = urunler.filter((u) =>
  u.isim.toLowerCase().includes(aranan.toLowerCase())
);
console.log(
  `Arama "${aranan}":`,
  sonuclar.map((u) => u.isim)
);

// 25 yaşından büyük kullanıcılar
const buyukler = kullanicilar.filter((k) => k.yas > 25);
console.log(
  "Yaşı > 25:",
  buyukler.map((k) => k.isim)
);

console.log("─".repeat(50));

// =============================================
// ADIM 3: map + filter Zinciri
// =============================================

const stokIsimler = urunler
  .filter((u) => u.stokta)
  .map((u) => u.isim.toUpperCase());
console.log("Stokta + büyük harf:", stokIsimler);

console.log("─".repeat(50));

// =============================================
// ADIM 4: .reduce() — Tek Değere İndir
// =============================================

const fiyatlar = [10, 25, 8, 42, 15];

const toplam = fiyatlar.reduce((birikim, fiyat) => birikim + fiyat, 0);
//                                ^accumulator   ^current       ^initial
console.log("Fiyat toplamı:", toplam);

// Nesne dizisinde toplam
const sepet = [
  { urun: "Kalem", adet: 3, fiyat: 5 },
  { urun: "Defter", adet: 1, fiyat: 15 },
  { urun: "Boya", adet: 2, fiyat: 25 },
];

const sepetToplam = sepet.reduce(
  (acc, item) => acc + item.adet * item.fiyat,
  0
);
console.log("Sepet toplamı:", sepetToplam);

// En büyük sayıyı bul
const enBuyuk = fiyatlar.reduce(
  (max, f) => (f > max ? f : max),
  fiyatlar[0]
);
console.log("En büyük fiyat:", enBuyuk);

console.log("─".repeat(50));

// =============================================
// ADIM 5: Diğer Faydalı Metotlar (kısa)
// =============================================

// find — koşula uyan İLK elemanı döndürür
const veli = kullanicilar.find((k) => k.isim === "Veli");
console.log("find('Veli'):", veli);

// some — en az bir eleman koşulu sağlıyor mu?
const stokVarMi = urunler.some((u) => u.stokta);
console.log("some: stokta var mı?", stokVarMi);

// every — tüm elemanlar koşulu sağlıyor mu?
const hepsiStokta = urunler.every((u) => u.stokta);
console.log("every: hepsi stokta mı?", hepsiStokta);

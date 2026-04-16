// =============================================
// SESSION 2 PRATİK (75–90. dakika)
//
// HEDEF: Katılımcılar sıfırdan yazar.
// Bu dosya bitirilmiş referanstır.
//
// Çalıştır: node 05-api-pratik.js
// =============================================

// Yardımcı: API'den veri çek
async function veriCek(endpoint) {
  const url = `https://jsonplaceholder.typicode.com${endpoint}`;
  console.log(`\nİstek: GET ${url}`);
  console.log("Yükleniyor...\n");

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP hatası: ${response.status}`);
  }

  const data = await response.json();
  console.log(`✅ ${data.length} kayıt geldi.\n`);
  return data;
}

// =============================================
// 1. Kullanıcıları çek ve listele
// =============================================
async function kullanicilariGoster() {
  console.log("═".repeat(50));
  console.log("KULLANICILAR (/users)");
  console.log("═".repeat(50));

  const kullanicilar = await veriCek("/users");

  // map ile her kullanıcıyı oku
  kullanicilar.forEach((k) => {
    console.log(`  👤 ${k.name}`);
    console.log(`     📧 ${k.email}`);
    console.log(`     🏙️  ${k.address.city}`);
    console.log(`     🏢 ${k.company.name}`);
    console.log("");
  });
}

// =============================================
// 2. Postları çek, sadece ilk 10 tanesi
// =============================================
async function postlariGoster() {
  console.log("═".repeat(50));
  console.log("POSTLAR (/posts — ilk 10)");
  console.log("═".repeat(50));

  const postlar = await veriCek("/posts");

  postlar.slice(0, 10).forEach((p) => {
    console.log(`  #${p.id} — ${p.title}`);
  });
  console.log("");
}

// =============================================
// 3. Todo'ları çek, filter ile istatistik çıkar
// =============================================
async function todolariGoster() {
  console.log("═".repeat(50));
  console.log("TODO'LAR (/todos — ilk 20)");
  console.log("═".repeat(50));

  const todolar = await veriCek("/todos");
  const ilk20 = todolar.slice(0, 20);

  ilk20.forEach((t) => {
    const durum = t.completed ? "✅" : "⬜";
    console.log(`  ${durum} #${t.id} — ${t.title}`);
  });

  // filter ile istatistik
  const tamamlanan = ilk20.filter((t) => t.completed).length;
  const bekleyen = ilk20.filter((t) => !t.completed).length;

  console.log("");
  console.log(`  📊 İstatistik: ${tamamlanan} tamamlandı, ${bekleyen} bekliyor`);
  console.log("");
}

// =============================================
// Hepsini sırayla çalıştır
// =============================================
async function main() {
  try {
    await kullanicilariGoster();
    await postlariGoster();
    await todolariGoster();

    console.log("═".repeat(50));
    console.log("Tüm veriler başarıyla yüklendi!");
    console.log("═".repeat(50));
  } catch (hata) {
    console.error("❌ Hata oluştu:", hata.message);
  }
}

main();

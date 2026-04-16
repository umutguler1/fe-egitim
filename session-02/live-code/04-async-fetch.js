// =============================================
// ADIM 1: Senkron vs Asenkron — setTimeout
// =============================================

console.log("── setTimeout Farkı ──");
console.log("1. Başladı");

setTimeout(() => {
  console.log("3. setTimeout bitti (2 saniye sonra)");
}, 2000);

console.log("2. setTimeout beklemedi, bu satır hemen çalıştı!");
console.log("   → JavaScript asenkron işlemi beklemez, devam eder.\n");

// =============================================
// ADIM 2: Promise — temel mantık
// =============================================

console.log("── Promise Temeli ──");

const vaat = new Promise((resolve, reject) => {
  const basarili = true; // false yapıp farkı göster

  setTimeout(() => {
    if (basarili) {
      resolve("Veri başarıyla geldi!");
    } else {
      reject("Bir hata oluştu!");
    }
  }, 1000);
});

console.log("Promise oluşturuldu — bekliyor (pending)...");

vaat
  .then((sonuc) => console.log("✅ Sonuç:", sonuc))
  .catch((hata) => console.error("❌ Hata:", hata));

console.log("Promise dinleyici eklendi, kod devam ediyor...\n");

// =============================================
// ADIM 3: fetch + .then() zinciri
// Zamanlamayla çakışmasın diye 3sn sonra başlat
// =============================================

setTimeout(() => {
  console.log("── fetch + .then() ──");
  console.log("İstek gönderiliyor...");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log("Yanıt geldi — status:", response.status);
      return response.json();
    })
    .then((kullanicilar) => {
      console.log(`${kullanicilar.length} kullanıcı geldi:`);
      kullanicilar.slice(0, 5).forEach((k) => {
        console.log(`  • ${k.name} — ${k.email}`);
      });
      console.log("");

      // Adım 4'ü bundan sonra çalıştır
      asyncAwaitOrnegi();
    })
    .catch((hata) => {
      console.error("❌ Hata:", hata.message);
    });
}, 3000);

// =============================================
// ADIM 4: async/await — aynı işlem daha okunaklı
// =============================================

async function asyncAwaitOrnegi() {
  console.log("── async/await ──");
  console.log("İstek gönderiliyor...");

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  console.log("Yanıt geldi — status:", response.status);

  const postlar = await response.json();
  console.log(`${postlar.length} post geldi. İlk 5 tanesi:`);

  postlar.slice(0, 5).forEach((p) => {
    console.log(`  #${p.id} — ${p.title.substring(0, 40)}...`);
  });
  console.log("");

  // Adım 5'i bundan sonra çalıştır
  await hataYakalama();
}

// =============================================
// ADIM 5: Hata yakalama — try/catch
// =============================================

async function hataYakalama() {
  console.log("── Hata Yakalama (try/catch) ──");

  try {
    console.log("Geçersiz endpoint'e istek atılıyor...");
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/yanlis-endpoint"
    );

    console.log("Status:", response.status);

    if (!response.ok) {
      throw new Error(`HTTP hatası: ${response.status}`);
    }

    const data = await response.json();
    console.log("Veri:", data);
  } catch (hata) {
    console.error("❌ Yakalanan hata:", hata.message);
    console.log("   → Kullanıcıya uygun bir hata mesajı gösterilmeli.\n");
  }
}

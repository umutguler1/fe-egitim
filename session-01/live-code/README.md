# Session 1 — Live Code Rehberi

**Tarih:** 27 Nisan 2026 Pazartesi  
**Süre:** ~90 dakika  
**Hedef:** HTML/CSS temellerini canlı kodlayarak göstermek

---

## Dosyalar ve Kullanım Zamanları

| Dosya | Konu | Dakika |
|---|---|---|
| `01-html-temel.html` | HTML yapısı, semantic tagler, form elementleri | 15–70 |
| `02-css-box-model.html` | Box model, display türleri, renk ve typography | 35–70 |
| `03-flexbox.html` | Flexbox — justify-content, align-items | 55–70 |
| `04-card-ui-pratik.html` | Card UI — pratik uygulama (bitirilmiş hâli) | 70–90 |

---

## Dakikaya Göre Akış

### 0–15 dk — Web Nasıl Çalışır (Slayt + DevTools)
- Slayt üzerinden anlatım
- Tarayıcıda herhangi bir siteye gir → DevTools aç → Network sekmesini göster
- Request/Response → HTML → CSS → JS yükleme sırası

### 15–35 dk — `01-html-temel.html`
1. Dosyayı tarayıcıda aç
2. Sağ tıkla → "Sayfa Kaynağını Görüntüle" → HTML'i göster
3. DevTools → Elements sekmesinde ağaç yapısını göster
4. Semantic elementleri tek tek incele (`header`, `nav`, `main`, `article`, `footer`)
5. Form bölümüne gel → her input türünü dene

> **Canlı kod ipucu:** `01-html-temel.html`'i VS Code'da aç, katılımcılar
> sıfırdan yazarken sen de canlı yaz. Semantic olmayan div örneğini önce
> yorum satırından çıkar, farkı gör, sonra semantic'e geç.

### 35–55 dk — `02-css-box-model.html`
1. Dosyayı tarayıcıda aç
2. DevTools → `.box-model-demo` elementini seç → **Computed** sekmesi
3. Renkli Box Model diyagramını göster (margin/border/padding/content)
4. `box-sizing: border-box` satırını kaldır → boyut farkını göster
5. `display: block` → `display: inline` → `display: inline-block` farkını anlatırken
   kısa bir live demo yap: `<div>` → `<span>` değiştirerek davranışı karşılaştır

### 55–70 dk — `03-flexbox.html`
1. Adım adım ilerle — önce `display: flex` olmadan, sonra ile
2. `flex-direction` row/column geçişini göster
3. `justify-content` değerlerini tek tek değiştir (DevTools Styles üzerinde de yapılabilir)
4. `align-items` için container'ın yüksekliği olmazsa fark görünmez — bunu özellikle vurgula
5. `gap` ile `margin` farkını kısaca karşılaştır

> **DevTools ipucu:** DevTools → Elements → seçili element üzerinde
> `.flex-container`'a tıkla → Styles panelinde flex ikonuna tıkla →
> Flexbox görsel editörü açılır.

### 70–90 dk — `04-card-ui-pratik.html` (Pratik)
Katılımcılar kendi dosyalarını sıfırdan yazar. Bitirilmiş hâli referans için:

**Önerilen adımlar:**
1. Boş bir `pratik.html` dosyası oluştur
2. HTML iskeleti kur (`<!DOCTYPE>`, `head`, `body`)
3. `.card` HTML'ini tek card için yaz (resim, başlık, açıklama, buton)
4. CSS → sıfırla → body stili → `.card` stili (background, border-radius, box-shadow, padding)
5. Görseli ekle (`img`) — `object-fit: cover` neden gerekli?
6. `.card-footer` → `display: flex; justify-content: space-between; align-items: center`
7. 3 card → `.card-grid` → `display: flex; gap; flex-wrap: wrap`

---

## İpuçları

- **DevTools** her zaman açık olsun — görsel değişiklikler anlık yapılabilir
- CSS'i önce DevTools'da dene, sonra dosyaya yaz
- Katılımcılar takip edemiyorsa hız düşürülmeli
- Her adım arasında "neden?" sorusunu sor
- Renk kodları için: [coolors.co](https://coolors.co) veya VS Code renk seçici kullanılabilir

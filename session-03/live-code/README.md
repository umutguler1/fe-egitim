# Session 3 — Live Code Rehberi

**Tarih:** 4 Mayıs 2026 Pazartesi  
**Süre:** ~90 dakika  
**Araç:** Vite + React

---

## Proje Kurulumu (session öncesi hazırla)

```bash
npm create vite@latest react-temelleri -- --template react
cd react-temelleri
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` açılacaktır.

> **Not:** `src/App.css` ve `src/index.css` içeriğini silip temiz başlamak daha iyi olur.
> Her adımda `src/App.jsx` dosyasını güncelleyeceğiz.

---

## Dosyalar ve Kullanım Zamanları

| Dosya | Konu | Dakika | Nasıl Kullanılır |
|---|---|---|---|
| `01-ilk-component.jsx` | İlk component, JSX kuralları, Fragment | 20–30 | `App.jsx`'e kopyala |
| `02-props.jsx` | Props, destructuring, children | 30–45 | `App.jsx`'e kopyala |
| `03-useState-events.jsx` | useState, onClick, onChange, controlled input | 45–70 | `App.jsx`'e kopyala |
| `04-pratik-counter.jsx` | Pratik — Counter (artır/azalt/sıfırla) | 70–80 | Katılımcılar sıfırdan yazar |
| `05-pratik-liste.jsx` | Pratik — Input'tan listeye ekleme | 80–90 | Katılımcılar sıfırdan yazar |

---

## Dakikaya Göre Akış

### 0–20 dk — React Nedir? (Slayt)
- Slayt üzerinden anlatım: SPA, Virtual DOM
- Vite projesi oluşturup çalıştır
- `src/App.jsx` dosyasını aç → içeriği sil → en basit component yaz:

```jsx
function App() {
  return <h1>Merhaba React!</h1>;
}
export default App;
```

- Kaydet → tarayıcıda canlı güncellemeyi göster (Hot Module Replacement)

### 20–30 dk — `01-ilk-component.jsx`
1. **Component = Fonksiyon:** `Greeting` component'i yaz, `App` içinde kullan
2. **JSX kuralları:** Tek kök eleman kuralını boz → hatayı göster → Fragment ile düzelt
3. **JS ifadeleri:** Süslü parantez `{}` içinde değişken, ternary, hesaplama göster
4. **className:** `class` yerine `className` kullanımını göster

> **İpucu:** Her değişiklikten sonra kaydet, tarayıcıdaki sonucu göster.
> JSX kurallarını bilerek ihlal et, hata mesajını oku, sonra düzelt.

### 30–45 dk — `02-props.jsx`
1. **Basit prop:** `Greeting` component'ine `name` prop'u geçir
2. **Birden fazla prop:** `ProductCard` component'i oluştur
3. **Destructuring:** Props objesini destructure et
4. **children:** `Card` wrapper component yaz, `children` kullan

> **İpucu:** Aynı component'i farklı prop'larla 3 kez render et.
> "Aynı component, farklı veri" mantığını vurgula.

### 45–70 dk — `03-useState-events.jsx`
1. **useState tanıt:** Basit sayaç — butona tıkla, sayı artsın
2. **Neden state?** Normal `let` ile dene → ekran güncellenmez → useState ile çöz
3. **onClick:** Inline arrow, ayrı fonksiyon, fonksiyon referansı farkı
4. **onChange + controlled input:** Input'a yazılanı canlı göster
5. **Birden fazla state:** Input + gösterim birlikte

> **Sık yapılan hata demo:** `onClick={handleClick()}` → hemen çalışır! Farkı göster.

### 70–80 dk — `04-pratik-counter.jsx` (Pratik 1)
Katılımcılar kendi dosyalarını sıfırdan yazar.

**Adımlar:**
1. `useState(0)` ile sayaç state'i
2. Artır butonu: `setCount(count + 1)`
3. Azalt butonu: `setCount(count - 1)`
4. Sıfırla butonu: `setCount(0)`
5. Bonus: Negatife düşmesin → `Math.max(0, count - 1)`

### 80–90 dk — `05-pratik-liste.jsx` (Pratik 2)
Katılımcılar kendi dosyalarını sıfırdan yazar.

**Adımlar:**
1. `useState([])` ile boş dizi ve `useState("")` ile input state'i
2. Input → `onChange` ile `text` state güncelle
3. "Ekle" butonu → `[...items, text]` ile diziye ekle, input'u temizle
4. `items.map()` ile listeyi render et
5. Bonus: Boş eklemeyi engelle, eleman sayısını göster

---

## İpuçları

- **Hot reload** büyük avantaj — her kayıtta tarayıcıda sonuç anında görünür
- Hata mesajlarını **birlikte okuyun** — React hataları genellikle çok açıklayıcıdır
- Her yeni kavramı tanıttıktan sonra katılımcılara 1-2 dk deneme süresi verin
- `console.log` ile state değişimlerini terminalde de gösterin
- DevTools → Components sekmesi açıksa props/state'i canlı izleyebilirsiniz (React DevTools eklentisi)

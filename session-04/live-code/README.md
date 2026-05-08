# Session 4 — Live Code Rehberi

**Tarih:** 6 Mayıs 2026 Çarşamba  
**Süre:** ~90 dakika  
**Araç:** Vite + React + TypeScript

---

## Proje Kurulumu (session öncesi hazırla)

Session 3'te oluşturulan Vite projesini kullanmaya devam edin.
Eğer yoksa:

```bash
npm create vite@latest react-derinlesme -- --template react-ts
cd react-derinlesme
npm install
npm run dev
```

> **Not:** `src/App.css` ve `src/index.css` içeriğini temizleyin.
> Her adımda `src/App.tsx` dosyasını güncelleyeceğiz.

---

## Dosyalar ve Kullanım Zamanları

| Dosya | Konu | Dakika | Nasıl Kullanılır |
|---|---|---|---|
| `01-useEffect.tsx` | useEffect, dependency array, cleanup, API fetch | 0–25 | `App.tsx`'e kopyala |
| `02-conditional-list-rendering.tsx` | if/return, ternary, &&, Loading/Error/Data, map, key | 25–50 | `App.tsx`'e kopyala |
| `03-form-handling.tsx` | Form submit, obje state, validation, onBlur | 50–75 | `App.tsx`'e kopyala |
| `04-pratik-todo.tsx` | Pratik — Mini ToDo App (CRUD + localStorage) | 75–90 | Katılımcılar sıfırdan yazar |

---

## Dakikaya Göre Akış

### 0–25 dk — `01-useEffect.tsx`

1. **Adım 1 — Sayfa başlığı güncelleme:** En basit useEffect. Sayaç artınca tarayıcı sekmesindeki başlık değişir. Console.log ile effect'in ne zaman çalıştığını göster.

2. **Adım 2 — Dependency array:** 3 farklı useEffect yan yana. Console'da hangi effect'in ne zaman çalıştığını gözlemle:
   - `[]` → sadece mount
   - `[count]` → count değişince
   - `[name]` → name değişince

3. **Adım 3 — API'den veri çekme:** En yaygın kullanım. `fetch` + `useEffect` + `useState<User[]>`. TypeScript interface tanımını da göster.
   - **DİKKAT:** `useEffect(async () => ...)` yazılmaz. İçeride ayrı async fonksiyon tanımla.

4. **Adım 4 — Cleanup (Timer):** `setInterval` + `clearInterval`. Timer component'ini mount/unmount ederek cleanup'ın ne zaman çalıştığını göster.

5. **Adım 5 — Arama (bonus):** query state'i dependency olarak. Her değişimde effect tetiklenir.

> **İpucu:** Her adımda console'u açık tut. Effect'lerin çalışma zamanını canlı göster.

### 25–50 dk — `02-conditional-list-rendering.tsx`

1. **Adım 1 — if/return:** Login/logout toggle. Tamamen farklı UI döndürme.

2. **Adım 2 — Ternary (? :):** İki alternatif arasında seçim. Aynı return içinde koşullu JSX.

3. **Adım 3 — && operatörü:** Bildirim badge'i. Göster veya hiç gösterme.
   - **Sıfır tuzağı:** `{0 && <span>...</span>}` → ekranda 0 görünür! `{count > 0 && ...}` kullan.

4. **Adım 4 — Loading/Error/Data:** API çağrılarının standart kalıbı. 3 state (loading, error, data) + if/return zinciri. Bu pattern'i vurgula — gerçek projelerde sürekli kullanılacak.

5. **Adım 5 — List rendering + key:** Meyve listesi. Silme butonu ile key'in önemini göster. `key={id}` vs `key={index}` farkını açıkla.

> **İpucu:** Hata gösterimi için fetch URL'ini bilerek yanlış yaz, hata state'ini canlı göster.

### 50–75 dk — `03-form-handling.tsx`

1. **Adım 1 — Form submit:** `onSubmit` + `e.preventDefault()`. Önce preventDefault olmadan göster (sayfa yenilenir), sonra ekle.

2. **Adım 2 — Obje state:** Birden fazla input için tek state objesi. `[e.target.name]: value` computed property name'i açıkla. `select` ve `textarea` de aynı pattern.

3. **Adım 3 — Submit validation:** `validate()` fonksiyonu. Hata varsa errors state'ine yaz, input altında göster. Object.keys ile hata kontrolü.

4. **Adım 4 — onBlur validation (bonus):** Input'tan çıkınca kontrol. Kullanıcı dostu yaklaşım.

> **İpucu:** Validation'da önce boş submit'i dene → hataları göster → sonra doldur → hataların temizlendiğini göster.

### 75–90 dk — `04-pratik-todo.tsx` (Pratik)

Katılımcılar kendi dosyalarını sıfırdan yazar. Eğitimci bunu referans olarak kullanır.

**Temel adımlar (birlikte):**
1. `useState<Todo[]>([])` ve `useState("")` ile state'leri tanımla
2. `interface Todo { id: number; text: string; completed: boolean }` 
3. Form + `onSubmit` + `e.preventDefault()` ile ekleme
4. Boş görev kontrolü (validation)
5. `todos.map(...)` ile listeyi render et + `key={todo.id}`
6. Checkbox ile toggle: `{ ...todo, completed: !todo.completed }`
7. Silme butonu: `todos.filter(t => t.id !== id)`
8. Kalan görev sayısı: `todos.filter(t => !t.completed).length`

**Bonus adımlar (zaman kalırsa):**
9. `useEffect` ile localStorage'a kaydetme
10. `useState(() => ...)` ile localStorage'dan lazy initial state
11. "Tamamlananları sil" butonu

---

## İpuçları

- Session 3'teki kavramları (useState, props, map) tekrar kullandığımız için hatırlatma yapın
- TypeScript interface'lerini basit tutun, karmaşık generic'lere girmeyin
- `useEffect` anlatırken console'u mutlaka açık tutun — görsel kanıt çok önemli
- Cleanup demo'sunda "Timer'ı Kaldır" butonuna tıklayınca console'daki mesajı gösterin
- Validation'da önce bilerek hatalı submit yapın, sonra düzeltin — öğretici etki güçlenir
- ToDo pratiğinde katılımcılara 1-2 dk kendi başlarına deneme süresi verin
- DevTools → Components sekmesi ile state'i canlı izletin

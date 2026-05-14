# Session 5 — Live Code Rehberi

**Tarih:** 7 Mayıs 2026 Perşembe
**Süre:** ~90 dakika
**Araç:** Vite + React + TypeScript

---

## Çalıştırma

`todo-refactored/` klasörü tek başına çalışan bir Vite projesidir:

```bash
cd session-05/live-code/todo-refactored
npm install
npm run dev          # http://localhost:5173

npm run build        # tsc + vite build
npm run preview      # üretim build'ini test et
```

> Session 4'ün tek-dosyalı sürümünü `session-04/live-code/todo-app/`
> klasöründen açabilirsiniz. Session 5'te aynı uygulamayı parçalara bölerek
> refactor ediyoruz.

---

## Klasör Yapısı

```
todo-refactored/
├── package.json              # react@19, vite@6, typescript
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── index.html
└── src/
    ├── main.tsx              # React entry
    ├── App.tsx               # KOORDİNATÖR — state + callbacks
    ├── types.ts              # ortak Todo tipi
    ├── index.css
    ├── vite-env.d.ts
    ├── hooks/
    │   └── useLocalStorage.ts
    └── components/
        ├── Button.tsx        # reusable: primary | danger | ghost
        ├── TodoForm.tsx      # kendi state + validation + onAdd callback
        ├── TodoList.tsx      # boş durum + map(key={todo.id})
        ├── TodoItem.tsx      # presentational (state yok)
        └── TodoStats.tsx     # özet + tamamlananları sil
```

---

## Dakikaya Göre Akış

### 0–25 dk — Component Parçalama

**Anlatılacak:**
- Single Responsibility Principle (SRP) — bir component tek iş yapmalı
- Session 4'te `App.tsx` 200+ satırdı → büyüdükçe okunması zorlaşır
- Component parçalama sinyalleri: çok uzun JSX, tekrarlayan yapı, isim
  verememe, bağımsız davranış, yeniden kullanım
- Reusable component → davranış props ile gelir, içerik `children`'dan gelir

**Canlı demo:** Session 4 todo-app'i ekrana açın
(`session-04/live-code/todo-app/src/App.tsx`). "Bu dosyada kaç ayrı sorumluluk var?"
diye sorun. Sorumlulukları yorum olarak yazın:

1. Form (input + submit + validation)
2. Liste (boş durum + map + key)
3. Tek satır (checkbox + sil)
4. Özet (kalan/tamamlanan + temizle)
5. localStorage senkronizasyonu

> **İpucu:** `Button.tsx`'i bu adımda gösterin. "PrimaryButton" gibi sabit
> bir butondan başlayıp `variant` prop'u ekleyerek esnek hale getirin.

### 25–45 dk — State Yönetimi (Lifting State Up)

**Anlatılacak:**
- State nerede yaşamalı? → en yakın ortak parent
- Lifting state up: aynı veriye ihtiyaç duyan component'lerin ortak
  ata'sına state'i taşı
- Aşağıya **props** ile akar, yukarıya **callback** ile döner
- Props drilling: 3+ katman aynı prop'u taşıyorsa sorun
- Çözüm hiyerarşisi: önce kabul et → composition → Context → state lib

**Canlı demo:** ToDo'da `todos` dizisi nereye konmalı?
- `TodoForm` ekleme yapmak istiyor
- `TodoList` listelemek istiyor
- `TodoStats` saymak istiyor
- → Ortak parent `App.tsx`'te yaşamalı, callback'lerle yukarı bildirilmeli.

> **Not:** `TodoForm` kendi input metnini lokal state'inde tutar — bu
> başka kimseyi ilgilendirmediği için yukarı taşımıyoruz.

### 45–65 dk — Custom Hooks

**Anlatılacak:**
- Custom hook nedir? → `use` ile başlayan, içinde hook çağıran fonksiyon
- Component değil — JSX değil, **mantık** döndürür
- Kurallar: `use` prefix, tepe seviye, sadece component/hook içinde çağrılır
- Yaygın hook'lar: `useToggle`, `useLocalStorage`, `useFetch`, `useDebounce`

**Canlı demo:** `useLocalStorage` hook'unu sıfırdan yazın:

1. Parametreler: `key` ve `initial`
2. `useState` ile lazy initial: `() => localStorage.getItem(key) ?? initial`
3. `useEffect` ile değer değişince yaz
4. `[value, setValue] as const` döndür → tıpkı `useState` gibi kullanılır

> **İpucu:** Hook'un dönüş tipini `[value, setValue]` yapmak
> "drop-in replacement" sağlar — mevcut `useState` çağrısını
> tek satırla `useLocalStorage`'e çevirebilirsiniz.

### 65–90 dk — Pratik: ToDo Refactor

Katılımcılar Session 4'teki tek dosyalık ToDo'yu adım adım refactor eder.
`todo-refactored/` klasörü **eğitimcinin referansıdır**.

**Sıralı adımlar:**

1. `src/hooks/useLocalStorage.ts` dosyasını oluştur
2. `src/types.ts` ile `Todo` tipini ortak yere taşı
3. `src/components/Button.tsx` reusable button'u yaz
4. `src/components/TodoForm.tsx` — `onAdd: (text: string) => void` callback'ini al
5. `src/components/TodoItem.tsx` — `todo`, `onToggle`, `onDelete` props'larını al
6. `src/components/TodoList.tsx` — `TodoItem`'ları map ile render et, `key={todo.id}`
7. `src/components/TodoStats.tsx` — özet + temizle butonu
8. `src/App.tsx` — sadece state ve callback'ler, JSX 4 component'ten ibaret

**Refactor kazanımları (sonunda vurgula):**
- `App.tsx` artık ~50 satır ve ne yaptığı bir bakışta belli
- Her component'in tek sorumluluğu var
- `Button`, `TodoForm`, `TodoItem` başka projelerde de kullanılabilir
- `useLocalStorage` her tür state için yeniden kullanılabilir
- Test yazmak çok daha kolay — her parça bağımsız test edilebilir

---

## İpuçları

- Refactor sırasında uygulama **her adımda çalışır halde** kalmalı.
  Bir component'i çıkardıktan sonra hemen `npm run dev` terminalinde
  HMR ile test edin.
- Önce JSX'i kes-yapıştır yapın, sonra prop'ları belirleyin —
  TypeScript hatalarını rehber olarak kullanın.
- "Bu component todos dizisini görmesi gerekir mi?" diye sorun.
  Çoğu zaman cevap: hayır, sadece tek bir todo veya bir callback yeter.
- Custom hook'tan önce "neden tekrar tekrar yazıyorum?" sorusunu vurgulayın.
  Önce sorun → sonra çözüm.
- `as const` neden gerekli? → Tuple olarak tipini sabitler.
  Olmadan `(T | Dispatch)[]` olur, destructuring kötüleşir. Hızlıca gösterin.
- Süre yetmezse `Button.tsx`'i atlayıp doğrudan `TodoForm`/`TodoStats`
  içinde stilli `<button>` bırakabilirsiniz — refactor yine değerlidir.

---

## Tip İpuçları

- `tsconfig.app.json` strict mode + `noUnusedLocals` açık. Yeni JSX
  transform sayesinde `import React from "react"` **yazmıyoruz**;
  yazarsak "unused" hatası alırız.
- Type-only import'larda `import type { Todo }` kullanın — `verbatimModuleSyntax`
  uyumlu, build'de runtime import oluşturmaz.

# Session 4 — ToDo App (Çalışan Uygulama)

Session 4 pratiğinin (75–90 dk) **çalışır halde** Vite + React + TypeScript projesi.

## Çalıştırma

```bash
cd session-04/live-code/todo-app
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` açılır.

## Build / Önizleme

```bash
npm run build      # tsc + vite build
npm run preview    # üretim build'ini lokal olarak servis et
```

## Özellikler

- Görev ekleme (form submit + boş kontrol)
- Tamamlandı toggle (checkbox)
- Görev silme (filter)
- Kalan görev sayısı + tamamlananları temizleme
- `useEffect` ile localStorage senkronizasyonu (sayfa yenilense de kaybolmaz)

## Dosya Yapısı

```
todo-app/
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── index.html
└── src/
    ├── main.tsx
    ├── App.tsx          ← tüm ToDo mantığı tek dosyada
    ├── index.css
    └── vite-env.d.ts
```

> **Session 5 ile karşılaştırma:** Burada her şey tek dosyada (`App.tsx`).
> Session 5'te bu yapıyı `components/` ve `hooks/` altına bölüp custom hook
> ekleyerek refactor ediyoruz. Bkz. `session-05/live-code/todo-refactored/`.

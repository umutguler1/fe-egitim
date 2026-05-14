// =============================================
// SESSION 5 — Custom Hook: useLocalStorage
//
// Session 4 ToDo'da localStorage'dan okuma/yazma kodu
// useState + useEffect birleşimiydi. Tekrar tekrar yazmamak için
// custom hook'a çıkardık.
//
// Kullanım: tıpkı useState gibi
//   const [value, setValue] = useLocalStorage("anahtar", baslangicDegeri);
// =============================================

import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initial: T) {
  // Lazy initial: localStorage'dan oku.
  // Fonksiyon olarak veriyoruz ki sadece ilk render'da okusun.
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? (JSON.parse(stored) as T) : initial;
    } catch {
      return initial;
    }
  });

  // Değer değiştiğinde localStorage'ı senkronla.
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // localStorage dolu / private mode → sessizce yut
    }
  }, [key, value]);

  return [value, setValue] as const;
}

// =============================================
// SESSION 3 PRATİK 1 (70–80. dakika)
//
// HEDEF: Katılımcılar sıfırdan yazar.
// Bu dosya bitirilmiş referanstır.
//
// Gereksinimler:
//   - Sayaç değerini ekranda göster
//   - Artır butonu (+1)
//   - Azalt butonu (-1)
//   - Sıfırla butonu (0'a döndür)
//   - Bonus: Negatife düşmesin
// =============================================

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const artir = () => setCount(count + 1);
  const azalt = () => setCount(Math.max(0, count - 1));
  const sifirla = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h1>Sayaç</h1>

      <p style={{
        fontSize: 64,
        fontWeight: "bold",
        color: count === 0 ? "#94a3b8" : "#2563eb",
        margin: "20px 0",
      }}>
        {count}
      </p>

      <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
        <button
          onClick={azalt}
          style={{
            padding: "12px 24px",
            fontSize: 18,
            background: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          − Azalt
        </button>

        <button
          onClick={sifirla}
          style={{
            padding: "12px 24px",
            fontSize: 18,
            background: "#94a3b8",
            color: "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          Sıfırla
        </button>

        <button
          onClick={artir}
          style={{
            padding: "12px 24px",
            fontSize: 18,
            background: "#22c55e",
            color: "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          + Artır
        </button>
      </div>

      {count === 0 && (
        <p style={{ color: "#94a3b8", marginTop: 16 }}>
          Sayaç sıfırda — artırmaya başla!
        </p>
      )}
    </div>
  );
}

function App() {
  return <Counter />;
}

export default App;

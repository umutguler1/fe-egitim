// =============================================
// SESSION 3 PRATİK 2 (80–90. dakika)
//
// HEDEF: Katılımcılar sıfırdan yazar.
// Bu dosya bitirilmiş referanstır.
//
// Gereksinimler:
//   - Input'a metin yaz
//   - "Ekle" butonu ile listeye ekle
//   - Listeyi ekranda göster (.map ile)
//   - Ekleme sonrası input'u temizle
//   - Bonus: Boş eklemeyi engelle
//   - Bonus: Eleman sayısını göster
//   - Bonus: Silme butonu
// =============================================

import { useState } from "react";

function ItemList() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;

    setItems([...items, { id: Date.now(), text: text.trim() }]);
    setText("");
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Alışveriş Listem</h1>

      {/* Input + Ekle butonu */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Bir ürün ekle..."
          style={{
            flex: 1,
            padding: 12,
            fontSize: 16,
            borderRadius: 8,
            border: "2px solid #e2e8f0",
            outline: "none",
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            padding: "12px 24px",
            fontSize: 16,
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Ekle
        </button>
      </div>

      {/* Liste */}
      {items.length === 0 ? (
        <p style={{ color: "#94a3b8", textAlign: "center", marginTop: 32 }}>
          Henüz bir şey eklenmedi. Yukarıdan ekle!
        </p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {items.map((item) => (
            <li
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 16px",
                background: "white",
                borderRadius: 8,
                marginBottom: 8,
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
              }}
            >
              <span>{item.text}</span>
              <button
                onClick={() => handleDelete(item.id)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#ef4444",
                  cursor: "pointer",
                  fontSize: 18,
                }}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Eleman sayısı */}
      {items.length > 0 && (
        <p style={{ color: "#64748b", textAlign: "center", marginTop: 12 }}>
          Listede {items.length} ürün var
        </p>
      )}
    </div>
  );
}

function App() {
  return <ItemList />;
}

export default App;

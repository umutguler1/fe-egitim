// =============================================
// ADIM 1: Neden State Gerekli?
// App.jsx içeriğini tamamen sil, bununla değiştir.
//
// Önce let ile dene → butona tıkla → ekran güncellenmez!
// → console.log ile değerin değiştiğini göster
// → Sonra useState'e geç
// =============================================

// ❌ Normal değişken — ekran güncellenmez
function App() {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log("count:", count); // Değişiyor ama ekran güncellenmez!
  };

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h1>Sayaç: {count}</h1>
      <button onClick={handleClick}>Artır</button>
      <p style={{ color: "#94a3b8", marginTop: 10 }}>
        Butona tıkla — konsolu kontrol et.
        Değer değişiyor ama ekran güncellenmez!
      </p>
    </div>
  );
}

export default App;

// =============================================
// ADIM 2: useState ile Çözüm
// App fonksiyonunu bununla değiştir.
//
// → import { useState } from "react";  ← dosyanın en üstüne ekle
// → const [count, setCount] = useState(0);
// → setCount(count + 1) → React ekranı günceller
// =============================================

/*
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h1>Sayaç: {count}</h1>
      <button onClick={handleClick}>Artır</button>
    </div>
  );
}

export default App;
*/

// =============================================
// ADIM 3: Event Handler Çeşitleri
// → Inline arrow function
// → Ayrı fonksiyon (önerilen)
// → Fonksiyon referansı vs çağrısı farkı
// =============================================

/*
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // Ayrı fonksiyon — okunabilirlik için önerilir
  const artir = () => {
    setCount(count + 1);
  };

  const sifirla = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h1>Sayaç: {count}</h1>

      {/* 1. Inline arrow function */}
      <button onClick={() => setCount(count - 1)}>
        Azalt
      </button>

      {/* 2. Ayrı fonksiyon referansı */}
      <button onClick={sifirla}>
        Sıfırla
      </button>

      <button onClick={artir}>
        Artır
      </button>

      {/* ❌ YANLIŞ: handleClick() → render sırasında hemen çalışır! */}
      {/* <button onClick={artir()}>Artır</button> */}
    </div>
  );
}

export default App;
*/

// =============================================
// ADIM 4: onChange + Controlled Input
// → Input'a yazılan metni state'te tut
// → value={...} ile input'u kontrol et
// → Ekranda canlı göster
// =============================================

/*
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h1>Controlled Input</h1>

      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Bir şeyler yaz..."
        style={{
          width: "100%",
          padding: 12,
          fontSize: 16,
          borderRadius: 8,
          border: "2px solid #e2e8f0",
        }}
      />

      <p style={{ marginTop: 16 }}>
        Yazdığın: <strong>{text}</strong>
      </p>
      <p style={{ color: "#94a3b8" }}>
        Karakter sayısı: {text.length}
      </p>
    </div>
  );
}

export default App;
*/

// =============================================
// ADIM 5: Birden Fazla State Bir Arada
// → İsim + yaş inputları
// → State her değiştiğinde ekran güncellenir
// =============================================

/*
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h1>Kullanıcı Bilgisi</h1>

      <div style={{ marginBottom: 12 }}>
        <label>İsim: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Adınız"
          style={{ padding: 8, borderRadius: 6, border: "1px solid #cbd5e1" }}
        />
      </div>

      <div style={{ marginBottom: 12 }}>
        <label>Yaş: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Yaşınız"
          style={{ padding: 8, borderRadius: 6, border: "1px solid #cbd5e1" }}
        />
      </div>

      <div style={{
        marginTop: 20,
        padding: 16,
        background: "#f1f5f9",
        borderRadius: 8,
      }}>
        <h2>Önizleme</h2>
        {name && <p>Merhaba, <strong>{name}</strong>!</p>}
        {age && <p>Yaşınız: <strong>{age}</strong></p>}
        {!name && !age && <p style={{ color: "#94a3b8" }}>Bilgi girilmedi...</p>}
      </div>
    </div>
  );
}

export default App;
*/

// =============================================
// ADIM 6: Toggle (Aç/Kapat) Pattern
// → Boolean state ile bir şeyi göster/gizle
// → React'ta çok sık kullanılan pattern
// =============================================

/*
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h1>Detay Göster/Gizle</h1>

      <button
        onClick={() => setVisible(!visible)}
        style={{
          padding: "10px 20px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          fontSize: 16,
        }}
      >
        {visible ? "Gizle" : "Göster"}
      </button>

      {visible && (
        <div style={{
          marginTop: 16,
          padding: 20,
          background: "#f0fdf4",
          borderRadius: 8,
          border: "1px solid #bbf7d0",
        }}>
          <h2>Gizli İçerik</h2>
          <p>Bu alan sadece butona tıklandığında görünür.</p>
          <p>React'ta conditional rendering böyle yapılır: <code>{`{koşul && <Bileşen />}`}</code></p>
        </div>
      )}
    </div>
  );
}

export default App;
*/

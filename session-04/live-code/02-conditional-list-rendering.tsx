// =============================================
// ADIM 1: Conditional Rendering — if / return
// App.tsx içeriğini tamamen sil, bununla değiştir.
//
// → Farklı durumlar için farklı UI döndür
// → isLoggedIn state'ini toggle butonu ile değiştir
// → Tamamen farklı sayfa göstermek istiyorsan if/return kullan
// =============================================

import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div style={{ textAlign: "center", marginTop: 60 }}>
        <h1>Lütfen Giriş Yapın</h1>
        <p style={{ color: "#64748b" }}>
          Bu sayfayı görmek için giriş yapmalısınız.
        </p>
        <button
          onClick={() => setIsLoggedIn(true)}
          style={{
            padding: "12px 32px",
            fontSize: 16,
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            marginTop: 16,
          }}
        >
          Giriş Yap
        </button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: 60 }}>
      <h1>Dashboard'a Hoş Geldiniz!</h1>
      <p style={{ color: "#059669" }}>Giriş yapıldı.</p>
      <button
        onClick={() => setIsLoggedIn(false)}
        style={{
          padding: "12px 32px",
          fontSize: 16,
          background: "#ef4444",
          color: "white",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          marginTop: 16,
        }}
      >
        Çıkış Yap
      </button>
    </div>
  );
}

export default App;

// =============================================
// ADIM 2: Ternary Operatör (? :) ile Koşullu Render
// App fonksiyonunu bununla değiştir.
//
// → İki alternatif arasında seçim: A mı B mi?
// → JSX içinde if/else yazılamaz, ternary kullanılır
// → Buton metni + içerik aynı anda değişsin
// =============================================

/*
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: 60 }}>
      <h1>
        {isLoggedIn ? "Hoş geldin, Ali!" : "Giriş yapılmadı"}
      </h1>

      {isLoggedIn ? (
        <div style={{
          padding: 20,
          background: "#f0fdf4",
          borderRadius: 8,
          border: "1px solid #bbf7d0",
          maxWidth: 400,
          margin: "16px auto",
        }}>
          <p>Dashboard içeriği burada...</p>
          <p>Profilini düzenleyebilirsin.</p>
        </div>
      ) : (
        <div style={{
          padding: 20,
          background: "#fef2f2",
          borderRadius: 8,
          border: "1px solid #fecaca",
          maxWidth: 400,
          margin: "16px auto",
        }}>
          <p>İçeriği görmek için giriş yap.</p>
        </div>
      )}

      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={{
          padding: "12px 32px",
          fontSize: 16,
          background: isLoggedIn ? "#ef4444" : "#2563eb",
          color: "white",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          marginTop: 16,
        }}
      >
        {isLoggedIn ? "Çıkış Yap" : "Giriş Yap"}
      </button>
    </div>
  );
}

export default App;
*/

// =============================================
// ADIM 3: && (Logical AND) ile Koşullu Render
// App fonksiyonunu bununla değiştir.
//
// → Bir şeyi göster VEYA hiç gösterme
// → koşul && <element> → koşul true ise göster
// → Bildirim badge'i, uyarı mesajı gibi durumlar
// → DİKKAT: {0 && <span>...</span>} → ekranda 0 görünür!
//   Çözüm: {count > 0 && ...} şeklinde boolean karşılaştır
// =============================================

/*
import { useState } from "react";

function App() {
  const [notifications, setNotifications] = useState(3);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={{ maxWidth: 500, margin: "40px auto" }}>
      <h1>Anasayfa</h1>

      {/* Bildirim varsa badge göster */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 16,
      }}>
        <span style={{ fontSize: 20 }}>🔔</span>
        {notifications > 0 && (
          <span style={{
            background: "#ef4444",
            color: "white",
            padding: "2px 10px",
            borderRadius: 12,
            fontSize: 14,
            fontWeight: "bold",
          }}>
            {notifications} yeni bildirim
          </span>
        )}
      </div>

      <button
        onClick={() => setNotifications(0)}
        style={{
          padding: "8px 16px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          marginRight: 8,
        }}
      >
        Bildirimleri Temizle
      </button>

      <button
        onClick={() => setNotifications(notifications + 1)}
        style={{
          padding: "8px 16px",
          background: "#7c3aed",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          marginRight: 8,
        }}
      >
        Bildirim Ekle
      </button>

      <button
        onClick={() => setShowDetails(!showDetails)}
        style={{
          padding: "8px 16px",
          background: "#059669",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        {showDetails ? "Detayları Gizle" : "Detayları Göster"}
      </button>

      {/* Detay alanı — sadece butona tıklayınca görünür */}
      {showDetails && (
        <div style={{
          marginTop: 16,
          padding: 20,
          background: "#f1f5f9",
          borderRadius: 8,
        }}>
          <h3>Detay Bilgisi</h3>
          <p>Bu alan koşullu olarak render ediliyor.</p>
          <code>{`{showDetails && <div>...</div>}`}</code>
        </div>
      )}
    </div>
  );
}

export default App;
*/

// =============================================
// ADIM 4: Loading / Error / Data Pattern
// App fonksiyonunu bununla değiştir.
//
// → API çağrılarında EN SIK kullanılan kalıp
// → 3 state: loading, error, data
// → if/return ile önce loading, sonra error kontrol et
// → Her şey tamam ise veriyi göster
// =============================================

/*
import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string };
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!res.ok) {
          throw new Error(`HTTP hatası: ${res.status}`);
        }

        const data: User[] = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Bilinmeyen hata");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  // 1) Loading durumu
  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: 60 }}>
        <h1>⏳ Yükleniyor...</h1>
      </div>
    );
  }

  // 2) Hata durumu
  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: 60 }}>
        <h1 style={{ color: "#ef4444" }}>Hata!</h1>
        <p>{error}</p>
      </div>
    );
  }

  // 3) Boş veri durumu
  if (users.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: 60 }}>
        <h1>Kullanıcı bulunamadı</h1>
      </div>
    );
  }

  // 4) Başarılı — veriyi göster
  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <h1>Kullanıcılar ({users.length})</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              padding: 16,
              background: "white",
              borderRadius: 8,
              marginBottom: 8,
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            }}
          >
            <strong>{user.name}</strong>
            <br />
            <span style={{ color: "#64748b" }}>{user.email}</span>
            <br />
            <span style={{ color: "#94a3b8", fontSize: 14 }}>
              {user.company.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
*/

// =============================================
// ADIM 5: List Rendering ve key Prop'u
// App fonksiyonunu bununla değiştir.
//
// → .map() ile diziyi UI'a dönüştür
// → key={id} kullan — index NEDEN kötü?
// → Silme butonu ekleyerek key'in önemini göster
// → index ile key versen silme sırasında
//   yanlış eleman silinmiş gibi görünür
// =============================================

/*
import { useState } from "react";

interface Fruit {
  id: number;
  name: string;
  emoji: string;
}

const initialFruits: Fruit[] = [
  { id: 1, name: "Elma",  emoji: "🍎" },
  { id: 2, name: "Muz",   emoji: "🍌" },
  { id: 3, name: "Üzüm",  emoji: "🍇" },
  { id: 4, name: "Çilek", emoji: "🍓" },
  { id: 5, name: "Portakal", emoji: "🍊" },
];

function App() {
  const [fruits, setFruits] = useState<Fruit[]>(initialFruits);

  const handleDelete = (id: number) => {
    // filter ile silme — orijinal dizi değişmez, yeni dizi döner
    setFruits(fruits.filter((f) => f.id !== id));
  };

  const handleReset = () => {
    setFruits(initialFruits);
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h1>Meyve Listesi</h1>

      {fruits.length === 0 ? (
        <p style={{ color: "#94a3b8", textAlign: "center" }}>
          Liste boş! Sıfırla butonuna tıkla.
        </p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {fruits.map((fruit) => (
            <li
              key={fruit.id} // ✅ Benzersiz ve sabit id kullan
              // key={index}  // ❌ index kullanma — silme/sıralama bozulur
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
              <span>
                {fruit.emoji} {fruit.name}
              </span>
              <button
                onClick={() => handleDelete(fruit.id)}
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

      <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
        <button
          onClick={handleReset}
          style={{
            padding: "10px 20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          Sıfırla
        </button>
        <span style={{ color: "#64748b", alignSelf: "center" }}>
          {fruits.length} meyve kaldı
        </span>
      </div>
    </div>
  );
}

export default App;
*/

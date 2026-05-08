// =============================================
// ADIM 1: useEffect Nedir? — Sayfa Başlığını Güncelle
// App.tsx içeriğini tamamen sil, bununla değiştir.
//
// → useEffect render SONRASI çalışır
// → Dependency array: hangi değer değişince tekrar çalışsın?
// → Sayacı artırınca tarayıcı sekmesindeki başlığın değiştiğini göster
// =============================================

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  // count değişince sayfa başlığını güncelle
  useEffect(() => {
    document.title = `Sayaç: ${count}`;
    console.log("useEffect çalıştı! count =", count);
  }, [count]); // ← dependency array: sadece count değişince çalış

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h1>Sayaç: {count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "12px 24px",
          fontSize: 16,
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        Artır
      </button>
      <p style={{ color: "#94a3b8", marginTop: 12 }}>
        Tarayıcı sekmesindeki başlığa bak!
      </p>
    </div>
  );
}

export default App;

// =============================================
// ADIM 2: Dependency Array Davranışları
// App fonksiyonunu bununla değiştir.
//
// → Boş dizi [] = sadece mount'ta çalışır
// → [count] = count değişince çalışır
// → Dizi yok = HER render'da çalışır (tehlikeli!)
// → Console'da farkı gözlemle
// =============================================

/*
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // 1) Sadece ilk mount'ta çalışır
  useEffect(() => {
    console.log("🟢 MOUNT — component ilk kez yüklendi");
  }, []);

  // 2) count değişince çalışır
  useEffect(() => {
    console.log("🔵 count değişti:", count);
  }, [count]);

  // 3) name değişince çalışır
  useEffect(() => {
    console.log("🟣 name değişti:", name);
  }, [name]);

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h1>Dependency Array Demo</h1>

      <div style={{ marginBottom: 16 }}>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Count Artır
        </button>
      </div>

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="İsim yaz..."
          style={{
            padding: 8,
            borderRadius: 6,
            border: "1px solid #cbd5e1",
          }}
        />
        <p>Name: {name}</p>
      </div>

      <p style={{ color: "#94a3b8", marginTop: 16 }}>
        Console'u aç ve hangi effect'in ne zaman çalıştığını gözlemle.
      </p>
    </div>
  );
}

export default App;
*/

// =============================================
// ADIM 3: API'den Veri Çekme (En Yaygın Kullanım)
// App fonksiyonunu bununla değiştir.
//
// → useEffect içinde async fonksiyon tanımla
// → fetch ile JSONPlaceholder'dan kullanıcı çek
// → loading state ile yükleniyor göster
// → DİKKAT: useEffect(async () => ...) YAZILMAZ!
//   İçeride ayrı async fonksiyon tanımlayıp çağır.
// =============================================

/*
import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      console.log("API çağrısı başlıyor...");

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data: User[] = await response.json();

      setUsers(data);
      setLoading(false);
      console.log("Veri geldi:", data.length, "kullanıcı");
    }

    fetchUsers();
  }, []); // boş dizi → sadece mount'ta çalış

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <h1>Yükleniyor...</h1>
      </div>
    );
  }

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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
*/

// =============================================
// ADIM 4: Cleanup — Timer Örneği
// App fonksiyonunu bununla değiştir.
//
// → setInterval ile her saniye sayacı artır
// → return () => clearInterval(...)  ile temizle
// → Cleanup olmazsa ne olur? (memory leak)
// → "Göster/Gizle" butonu ile mount/unmount göster
// =============================================

/*
import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("⏱ Timer başladı");

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup: component kaldırılınca timer durdurulur
    return () => {
      console.log("🛑 Timer temizlendi (cleanup)");
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        padding: 20,
        background: "#f0fdf4",
        borderRadius: 8,
        border: "1px solid #bbf7d0",
        textAlign: "center",
      }}
    >
      <h2>Süre: {seconds} saniye</h2>
      <p style={{ color: "#64748b" }}>Console'u kontrol et — mount/unmount</p>
    </div>
  );
}

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", textAlign: "center" }}>
      <h1>Cleanup Demo</h1>

      <button
        onClick={() => setShowTimer(!showTimer)}
        style={{
          padding: "12px 24px",
          fontSize: 16,
          background: showTimer ? "#ef4444" : "#22c55e",
          color: "white",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          marginBottom: 20,
        }}
      >
        {showTimer ? "Timer'ı Kaldır (Unmount)" : "Timer'ı Göster (Mount)"}
      </button>

      {showTimer && <Timer />}

      <p style={{ color: "#94a3b8", marginTop: 16 }}>
        Timer'ı kaldırınca console'da "cleanup" mesajını gör.
        <br />
        Cleanup olmazsa timer arka planda çalışmaya devam eder → memory leak!
      </p>
    </div>
  );
}

export default App;
*/

// =============================================
// ADIM 5: useEffect ile Arama (Debounce Benzeri)
// App fonksiyonunu bununla değiştir.
//
// → Input'a yazıldıkça API çağrısı yap
// → Dependency array'de [query] olduğu için
//   her query değişiminde effect tekrar çalışır
// → Gerçek projede debounce eklenir ama şimdilik
//   sadece kavramı gösteriyoruz
// =============================================

/*
import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

function App() {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setPosts([]);
      return;
    }

    setLoading(true);

    async function search() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=5`
      );
      const data: Post[] = await res.json();

      // Basit client-side filtreleme
      const filtered = data.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase())
      );
      setPosts(filtered);
      setLoading(false);
    }

    search();
  }, [query]); // query değişince tekrar çalış

  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <h1>Post Ara</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Başlık ara..."
        style={{
          width: "100%",
          padding: 12,
          fontSize: 16,
          borderRadius: 8,
          border: "2px solid #e2e8f0",
          marginBottom: 16,
          boxSizing: "border-box",
        }}
      />

      {loading && <p>Aranıyor...</p>}

      {!loading && query && posts.length === 0 && (
        <p style={{ color: "#94a3b8" }}>Sonuç bulunamadı.</p>
      )}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              padding: 16,
              background: "white",
              borderRadius: 8,
              marginBottom: 8,
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            }}
          >
            <strong>{post.title}</strong>
            <p style={{ color: "#64748b", marginTop: 4 }}>
              {post.body.substring(0, 80)}...
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
*/

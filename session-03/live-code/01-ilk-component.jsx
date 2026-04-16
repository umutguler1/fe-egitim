// =============================================
// ADIM 1: En Basit Component
// App.jsx içeriğini tamamen sil, bununla değiştir.
// =============================================

// Component = JSX döndüren bir fonksiyon.
// İsmi BÜYÜK harfle başlamalı.

function Greeting() {
  return <h1>Merhaba, React!</h1>;
}

function App() {
  return (
    <div>
      <Greeting />
      <Greeting />
      <Greeting />
    </div>
  );
}

export default App;

// =============================================
// ADIM 2: JSX İçinde JavaScript İfadeleri
// App fonksiyonunu bununla değiştir.
// =============================================

/*
function App() {
  const isim = "Ali";
  const yas = 28;
  const isAdmin = true;

  return (
    <div>
      <h1>Merhaba, {isim}!</h1>
      <p>Yaşın: {yas}</p>
      <p>2 + 3 = {2 + 3}</p>
      <p>Rol: {isAdmin ? "Admin" : "Kullanıcı"}</p>
    </div>
  );
}

export default App;
*/

// =============================================
// ADIM 3: className ve Stil
// App fonksiyonunu bununla değiştir.
// index.css'e aşağıdaki stilleri ekle:
//
//   .kart {
//     background: white;
//     border-radius: 12px;
//     padding: 24px;
//     box-shadow: 0 2px 8px rgba(0,0,0,0.1);
//     max-width: 400px;
//     margin: 40px auto;
//   }
//   .baslik { color: #2563eb; }
//   .aciklama { color: #64748b; }
// =============================================

/*
function App() {
  const isim = "Ali";
  const yas = 28;

  return (
    <div className="kart">
      <h1 className="baslik">Merhaba, {isim}!</h1>
      <p className="aciklama">Yaş: {yas}</p>
    </div>
  );
}

export default App;
*/

// =============================================
// ADIM 4: Tek Kök Eleman Kuralı ve Fragment
//
// Önce hatayı göster: iki <h1> yan yana döndür
// → React hata verir.
// Sonra çözümü göster: <> ... </> (Fragment)
// =============================================

/*
// ❌ HATA — birden fazla kök eleman
function Hatali() {
  return (
    <h1>Başlık</h1>
    <p>Açıklama</p>
  );
}
*/

/*
// ✅ DOĞRU — Fragment ile sarma
function Dogru() {
  return (
    <>
      <h1>Başlık</h1>
      <p>Açıklama</p>
    </>
  );
}

function App() {
  return (
    <div>
      <Dogru />
    </div>
  );
}

export default App;
*/

// =============================================
// ADIM 5: Birden Fazla Component Bir Arada
// =============================================

/*
function Header() {
  return (
    <header style={{ background: "#2563eb", color: "white", padding: 20, textAlign: "center" }}>
      <h1>Ürün Kataloğu</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ textAlign: "center", color: "#94a3b8", marginTop: 40 }}>
      <p>© 2026 Şirket Adı</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main style={{ padding: 20 }}>
        <p>Ana içerik buraya gelecek...</p>
      </main>
      <Footer />
    </>
  );
}

export default App;
*/

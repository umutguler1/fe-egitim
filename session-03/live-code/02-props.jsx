// =============================================
// ADIM 1: İlk Prop — Dışarıdan Veri Geçirme
// App.jsx içeriğini tamamen sil, bununla değiştir.
// =============================================

function Greeting(props) {
  return <h1>Merhaba, {props.name}!</h1>;
}

function App() {
  return (
    <div style={{ padding: 20 }}>
      <Greeting name="Ali" />
      <Greeting name="Zeynep" />
      <Greeting name="Can" />
    </div>
  );
}

export default App;

// =============================================
// ADIM 2: Destructuring ile Props
// Greeting fonksiyonunu bununla değiştir.
//
// → props.name yerine doğrudan { name }
// → React'ta en yaygın kullanım bu.
// =============================================

/*
function Greeting({ name }) {
  return <h1>Merhaba, {name}!</h1>;
}
*/

// =============================================
// ADIM 3: Birden Fazla Prop
// App fonksiyonunu bununla değiştir.
//
// Dikkat: string → tırnak, sayı/boolean → süslü parantez
// =============================================

/*
function ProductCard({ title, price, inStock }) {
  return (
    <div style={{
      background: "white",
      borderRadius: 12,
      padding: 20,
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      width: 250,
    }}>
      <h2>{title}</h2>
      <p style={{ color: "#64748b" }}>{price} TL</p>
      <p style={{ color: inStock ? "#059669" : "#dc2626" }}>
        {inStock ? "✅ Stokta" : "❌ Tükendi"}
      </p>
    </div>
  );
}

function App() {
  return (
    <div style={{
      display: "flex",
      gap: 20,
      padding: 40,
      flexWrap: "wrap",
      background: "#f1f5f9",
      minHeight: "100vh",
    }}>
      <ProductCard title="Kalem" price={5} inStock={true} />
      <ProductCard title="Defter" price={15} inStock={true} />
      <ProductCard title="Silgi" price={3} inStock={false} />
    </div>
  );
}

export default App;
*/

// =============================================
// ADIM 4: Props ile Dinamik Veri (Diziden Render)
//
// → Veri dizisi tanımla
// → .map() ile her öğe için component render et
// → key prop'unu tanıt
// =============================================

/*
function ProductCard({ title, price, inStock }) {
  return (
    <div style={{
      background: "white",
      borderRadius: 12,
      padding: 20,
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      width: 250,
    }}>
      <h2>{title}</h2>
      <p style={{ color: "#64748b" }}>{price} TL</p>
      <p style={{ color: inStock ? "#059669" : "#dc2626" }}>
        {inStock ? "✅ Stokta" : "❌ Tükendi"}
      </p>
    </div>
  );
}

const products = [
  { id: 1, title: "Kalem",  price: 5,  inStock: true  },
  { id: 2, title: "Defter", price: 15, inStock: true  },
  { id: 3, title: "Silgi",  price: 3,  inStock: false },
  { id: 4, title: "Cetvel", price: 8,  inStock: true  },
];

function App() {
  return (
    <div style={{
      display: "flex",
      gap: 20,
      padding: 40,
      flexWrap: "wrap",
      background: "#f1f5f9",
      minHeight: "100vh",
    }}>
      {products.map((p) => (
        <ProductCard
          key={p.id}
          title={p.title}
          price={p.price}
          inStock={p.inStock}
        />
      ))}
    </div>
  );
}

export default App;
*/

// =============================================
// ADIM 5: children Prop'u — Wrapper Component
//
// → Card sadece "kutu" görünümü sağlar
// → İçeriği dışarıdan children ile alır
// → Yeniden kullanılabilirlik artar
// =============================================

/*
function Card({ children }) {
  return (
    <div style={{
      background: "white",
      borderRadius: 12,
      padding: 24,
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      width: 280,
    }}>
      {children}
    </div>
  );
}

function App() {
  return (
    <div style={{
      display: "flex",
      gap: 20,
      padding: 40,
      flexWrap: "wrap",
      background: "#f1f5f9",
      minHeight: "100vh",
    }}>
      <Card>
        <h2>Ürün Kartı</h2>
        <p>Bu bir ürün açıklamasıdır.</p>
        <button>Satın Al</button>
      </Card>

      <Card>
        <h2>Kullanıcı Kartı</h2>
        <p>Ali — İstanbul</p>
        <p>ali@email.com</p>
      </Card>

      <Card>
        <h2>İstatistik</h2>
        <p style={{ fontSize: 32, fontWeight: "bold", color: "#2563eb" }}>
          1.234
        </p>
        <p style={{ color: "#64748b" }}>Toplam ziyaretçi</p>
      </Card>
    </div>
  );
}

export default App;
*/

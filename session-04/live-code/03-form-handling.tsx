// =============================================
// ADIM 1: Form Submit — e.preventDefault()
// App.tsx içeriğini tamamen sil, bununla değiştir.
//
// → <form onSubmit={handleSubmit}> kullan
// → e.preventDefault() olmadan ne olur? → Sayfa yenilenir!
// → Önce e.preventDefault() OLMADAN göster → sayfa yenilenir
// → Sonra ekle → form düzgün çalışır
// =============================================

import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // ← bunu kaldırıp farkı göster
    console.log("Form gönderildi:", { email, password });
    alert(`Giriş: ${email}`);
  };

  return (
    <div style={{ maxWidth: 400, margin: "60px auto" }}>
      <h1>Giriş Yap</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: 4, fontWeight: 600 }}
          >
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            style={{
              width: "100%",
              padding: 10,
              fontSize: 16,
              borderRadius: 6,
              border: "1px solid #cbd5e1",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: 4, fontWeight: 600 }}
          >
            Şifre:
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            style={{
              width: "100%",
              padding: 10,
              fontSize: 16,
              borderRadius: 6,
              border: "1px solid #cbd5e1",
              boxSizing: "border-box",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: 12,
            fontSize: 16,
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
}

export default App;

// =============================================
// ADIM 2: Birden Fazla Input — Tek Obje State
// App fonksiyonunu bununla değiştir.
//
// → Her input için ayrı state yerine tek obje state
// → handleChange fonksiyonu hepsini yönetir
// → [e.target.name]: e.target.value → computed property name
// → Spread ile immutable güncelleme: { ...prev, [name]: value }
// =============================================

/*
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  department: string;
  message: string;
}

function App() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    department: "engineering",
    message: "",
  });

  // Tek handleChange — tüm inputlar için çalışır
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,        // önceki değerleri koru
      [name]: value,  // sadece değişen alanı güncelle
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", form);
    alert(JSON.stringify(form, null, 2));
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
    border: "1px solid #cbd5e1",
    boxSizing: "border-box",
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto" }}>
      <h1>Kayıt Formu</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", marginBottom: 4, fontWeight: 600 }}>
            İsim:
          </label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Adınız Soyadınız"
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", marginBottom: 4, fontWeight: 600 }}>
            Email:
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="email@example.com"
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", marginBottom: 4, fontWeight: 600 }}>
            Departman:
          </label>
          <select
            name="department"
            value={form.department}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="engineering">Yazılım</option>
            <option value="design">Tasarım</option>
            <option value="product">Ürün</option>
            <option value="hr">İnsan Kaynakları</option>
          </select>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", marginBottom: 4, fontWeight: 600 }}>
            Mesaj:
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Notunuz..."
            rows={3}
            style={inputStyle}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: 12,
            fontSize: 16,
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Kaydet
        </button>
      </form>

      {/* Canlı önizleme */}
      <div style={{
        marginTop: 24,
        padding: 16,
        background: "#f1f5f9",
        borderRadius: 8,
      }}>
        <h3>Önizleme (state)</h3>
        <pre style={{ fontSize: 14, color: "#475569" }}>
          {JSON.stringify(form, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default App;
*/

// =============================================
// ADIM 3: Temel Form Validation
// App fonksiyonunu bununla değiştir.
//
// → Submit anında kontrol et
// → Hata varsa errors state'ine yaz, ekranda göster
// → Hata yoksa formu gönder
// → Hata mesajları input altında kırmızı olarak görünsün
// =============================================

/*
import { useState } from "react";

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!name.trim()) {
      newErrors.name = "İsim zorunludur";
    }

    if (!email.trim()) {
      newErrors.email = "Email zorunludur";
    } else if (!email.includes("@")) {
      newErrors.email = "Geçerli bir email girin";
    }

    if (!password) {
      newErrors.password = "Şifre zorunludur";
    } else if (password.length < 6) {
      newErrors.password = "Şifre en az 6 karakter olmalı";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return; // hata varsa gönderme
    }

    // Hata yok — formu gönder
    setErrors({});
    setSubmitted(true);
    console.log("Form başarıyla gönderildi:", { name, email, password });
  };

  const inputStyle = (hasError: boolean): React.CSSProperties => ({
    width: "100%",
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
    border: `2px solid ${hasError ? "#ef4444" : "#cbd5e1"}`,
    boxSizing: "border-box",
    outline: "none",
  });

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h1>Kayıt Formu</h1>

      {submitted && (
        <div style={{
          padding: 12,
          background: "#f0fdf4",
          border: "1px solid #bbf7d0",
          borderRadius: 8,
          color: "#059669",
          marginBottom: 16,
        }}>
          Kayıt başarılı!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", marginBottom: 4, fontWeight: 600 }}>
            İsim:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Adınız"
            style={inputStyle(!!errors.name)}
          />
          {errors.name && (
            <span style={{ color: "#ef4444", fontSize: 14 }}>
              {errors.name}
            </span>
          )}
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", marginBottom: 4, fontWeight: 600 }}>
            Email:
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            style={inputStyle(!!errors.email)}
          />
          {errors.email && (
            <span style={{ color: "#ef4444", fontSize: 14 }}>
              {errors.email}
            </span>
          )}
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", marginBottom: 4, fontWeight: 600 }}>
            Şifre:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="En az 6 karakter"
            style={inputStyle(!!errors.password)}
          />
          {errors.password && (
            <span style={{ color: "#ef4444", fontSize: 14 }}>
              {errors.password}
            </span>
          )}
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: 12,
            fontSize: 16,
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Kayıt Ol
        </button>
      </form>
    </div>
  );
}

export default App;
*/

// =============================================
// ADIM 4: onBlur Validation (Bonus)
// App fonksiyonunu bununla değiştir.
//
// → Input'tan çıkınca (blur) o alanı kontrol et
// → Anlık geri bildirim — kullanıcı dostu
// → Submit'te de kontrol devam eder
// =============================================

/*
import { useState } from "react";

interface FormErrors {
  name?: string;
  email?: string;
}

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  // Tek bir alanı doğrula
  const validateField = (field: string, value: string) => {
    let error = "";

    if (field === "name" && !value.trim()) {
      error = "İsim zorunludur";
    }
    if (field === "email") {
      if (!value.trim()) error = "Email zorunludur";
      else if (!value.includes("@")) error = "Geçerli bir email girin";
    }

    setErrors((prev) => ({
      ...prev,
      [field]: error || undefined,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Tüm alanları kontrol et
    validateField("name", name);
    validateField("email", email);

    if (name.trim() && email.includes("@")) {
      alert(`Başarılı: ${name} - ${email}`);
    }
  };

  const inputStyle = (hasError: boolean): React.CSSProperties => ({
    width: "100%",
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
    border: `2px solid ${hasError ? "#ef4444" : "#cbd5e1"}`,
    boxSizing: "border-box",
    outline: "none",
  });

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h1>onBlur Validation</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", marginBottom: 4, fontWeight: 600 }}>
            İsim:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={(e) => validateField("name", e.target.value)}
            placeholder="Adınız"
            style={inputStyle(!!errors.name)}
          />
          {errors.name && (
            <span style={{ color: "#ef4444", fontSize: 14 }}>
              {errors.name}
            </span>
          )}
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", marginBottom: 4, fontWeight: 600 }}>
            Email:
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => validateField("email", e.target.value)}
            placeholder="email@example.com"
            style={inputStyle(!!errors.email)}
          />
          {errors.email && (
            <span style={{ color: "#ef4444", fontSize: 14 }}>
              {errors.email}
            </span>
          )}
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: 12,
            fontSize: 16,
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Gönder
        </button>
      </form>

      <p style={{ color: "#94a3b8", marginTop: 16, fontSize: 14 }}>
        Input'tan çıkınca (tab veya tıkla) o alan kontrol edilir.
      </p>
    </div>
  );
}

export default App;
*/

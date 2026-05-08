// =============================================
// SESSION 4 PRATİK (75–90. dakika)
//
// HEDEF: Katılımcılar sıfırdan yazar.
// Bu dosya bitirilmiş referanstır.
//
// Gereksinimler:
//   - Yeni görev ekleme (input + form submit)
//   - Boş görev eklenemez (validation)
//   - Görev listesini render etme (map + key)
//   - Görevi tamamlandı olarak işaretleme (checkbox + toggle)
//   - Görevi silme (filter ile)
//   - Kalan görev sayısını gösterme
//   - Bonus: localStorage ile kalıcılık (useEffect)
// =============================================

import { useState, useEffect } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  // localStorage'a kaydet — todos değişince çalışır
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // --- Ekleme ---
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim()) {
      setError("Görev boş olamaz!");
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setText("");
    setError("");
  };

  // --- Tamamlandı / geri al ---
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // --- Silme ---
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // --- Tümünü temizle ---
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const remaining = todos.filter((t) => !t.completed).length;
  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "40px auto",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#1e293b" }}>
        Yapılacaklar
      </h1>

      {/* --- Form --- */}
      <form
        onSubmit={handleAdd}
        style={{ display: "flex", gap: 8, marginBottom: 8 }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (error) setError("");
          }}
          placeholder="Yeni görev ekle..."
          style={{
            flex: 1,
            padding: 12,
            fontSize: 16,
            borderRadius: 8,
            border: `2px solid ${error ? "#ef4444" : "#e2e8f0"}`,
            outline: "none",
          }}
        />
        <button
          type="submit"
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
      </form>

      {/* Hata mesajı */}
      {error && (
        <p style={{ color: "#ef4444", fontSize: 14, margin: "0 0 12px" }}>
          {error}
        </p>
      )}

      {/* --- Liste --- */}
      {todos.length === 0 ? (
        <p
          style={{
            color: "#94a3b8",
            textAlign: "center",
            marginTop: 32,
            fontSize: 16,
          }}
        >
          Henüz görev yok. Yukarıdan ekle!
        </p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 16px",
                background: "white",
                borderRadius: 8,
                marginBottom: 8,
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                transition: "opacity 0.2s",
              }}
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style={{
                  width: 20,
                  height: 20,
                  cursor: "pointer",
                  accentColor: "#2563eb",
                }}
              />

              {/* Görev metni */}
              <span
                style={{
                  flex: 1,
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "#94a3b8" : "#1e293b",
                  fontSize: 16,
                }}
              >
                {todo.text}
              </span>

              {/* Sil butonu */}
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#ef4444",
                  cursor: "pointer",
                  fontSize: 20,
                  padding: "0 4px",
                }}
                title="Sil"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* --- Özet --- */}
      {todos.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 16,
            padding: "12px 16px",
            background: "#f1f5f9",
            borderRadius: 8,
          }}
        >
          <span style={{ color: "#64748b" }}>
            {remaining} görev kaldı
            {completedCount > 0 && ` · ${completedCount} tamamlandı`}
          </span>

          {completedCount > 0 && (
            <button
              onClick={clearCompleted}
              style={{
                background: "none",
                border: "none",
                color: "#ef4444",
                cursor: "pointer",
                fontSize: 14,
                textDecoration: "underline",
              }}
            >
              Tamamlananları sil
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function App() {
  return <TodoApp />;
}

export default App;

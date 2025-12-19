import { useEffect } from "react";

export default function WhatsappRedirect() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href =
        "https://chat.whatsapp.com/BqlyhNayNvRASsOBZWmhTN";
    }, 2500); // 2,5 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div style={{ maxWidth: 420 }}>
        <h1 style={{ fontSize: 22, marginBottom: 12 }}>
          Redirecionando para o WhatsApp
        </h1>

        <p style={{ fontSize: 16, color: "#555" }}>
          Você será direcionado automaticamente para nosso grupo exclusivo.
        </p>

        <p style={{ fontSize: 14, color: "#888", marginTop: 16 }}>
          Caso não ocorra, clique no botão abaixo.
        </p>

        <a
          href="https://chat.whatsapp.com/BqlyhNayNvRASsOBZWmhTN"
          style={{
            display: "inline-block",
            marginTop: 20,
            padding: "14px 24px",
            background: "#25D366",
            color: "#fff",
            textDecoration: "none",
            borderRadius: 6,
            fontWeight: "bold",
          }}
        >
          Entrar no grupo do WhatsApp
        </a>
      </div>
    </main>
  );
}

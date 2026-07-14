import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../firebase"; // <-- CORREGIDO: ../ para salir de la carpeta pages
import { signOut, onAuthStateChanged } from "firebase/auth";
import "./Dashboard.css";

const temas = [
  { id: 1, titulo: "Conceptos Básicos de Redes", icon: "🌐", slug: "conceptos-basicos-de-redes", progreso: 0 },
  { id: 2, titulo: "Modelo OSI", icon: "📊", slug: "modelo-osi", progreso: 0 },
  { id: 3, titulo: "Protocolos IP, ICMP, TCP y UDP", icon: "🔌", slug: "protocolos-ip-icmp-tcp-y-udp", progreso: 0 },
  { id: 4, titulo: "Direccionamiento IPV4", icon: "🎯", slug: "direccionamiento-ipv4", progreso: 0 },
  { id: 5, titulo: "Enrutamiento Dinámico", icon: "🔄", slug: "enrutamiento-dinamico", progreso: 0 },
  { id: 6, titulo: "Topologías y Medios TX", icon: "🔗", slug: "topologias-y-medios-tx", progreso: 0 },
  { id: 7, titulo: "Protocolo ARP, RARP", icon: "📍", slug: "protocolo-arp-rarp", progreso: 0 },
  { id: 8, titulo: "Capa Aplicación", icon: "💼", slug: "capa-aplicacion", progreso: 0 },
  { id: 9, titulo: "Cableado Estructurado", icon: "🏗️", slug: "cableado-estructurado", progreso: 0 },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("Estudiante");
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const verificarSesion = onAuthStateChanged(auth, (user) => {
      if (user) {
        setNombre(user.displayName || "Estudiante");
        setCargando(false);
      } else {
        navigate("/login");
      }
    });

    return () => verificarSesion();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  if (cargando) {
    return (
      <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center", color: "#64748b" }}>
        <h3>Verificando credenciales...</h3>
      </div>
    );
  }

  return (
    <div className="dash-container">
      <div className="dash-hero">
        <div className="dash-hero-text">
          <span className="dash-greeting">Bienvenido de vuelta,</span>
          <h1 className="dash-name">{nombre} 👋</h1>
          <p className="dash-subtitle">Continúa aprendiendo donde lo dejaste. Tienes <strong>9 temas</strong> disponibles.</p>
        </div>
        <div className="dash-hero-actions">
          <button className="dash-btn-logout" onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </div>

      <div className="dash-stats">
        <div className="dash-stat">
          <span className="dash-stat-num">9</span>
          <span className="dash-stat-label">Temas</span>
        </div>
        <div className="dash-stat">
          <span className="dash-stat-num">30+</span>
          <span className="dash-stat-label">Subtemas</span>
        </div>
        <div className="dash-stat">
          <span className="dash-stat-num">0%</span>
          <span className="dash-stat-label">Completado</span>
        </div>
        <div className="dash-stat">
          <span className="dash-stat-num">∞</span>
          <span className="dash-stat-label">Recursos</span>
        </div>
      </div>

      <div className="dash-section">
        <h2 className="dash-section-title">Temas del curso</h2>
        <div className="dash-temas-grid">
          {temas.map((tema) => (
            <Link
              key={tema.id}
              to={`/temario/${tema.slug}`}
              className="dash-tema-card"
            >
              <div className="dash-tema-top">
                <span className="dash-tema-icon">{tema.icon}</span>
                <span className="dash-tema-num">#{tema.id}</span>
              </div>
              <h3 className="dash-tema-titulo">{tema.titulo}</h3>
              <div className="dash-tema-footer">
                <span className="dash-tema-badge">Ver tema →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
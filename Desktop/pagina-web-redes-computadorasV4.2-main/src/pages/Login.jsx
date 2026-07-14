import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase"; // <-- CORREGIDO: ../ para salir de la carpeta pages
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import "./Auth.css";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/dashboard");
    } catch (error) {
      alert("Credenciales incorrectas o el usuario no existe.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (error) {
      alert("Error al autenticar con Google.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-avatar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-field">
            <span className="auth-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3,5 12,13 21,5" />
              </svg>
            </span>
            <input
              type="email"
              name="email"
              placeholder="Correo"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="auth-field">
            <span className="auth-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 018 0v4" />
              </svg>
            </span>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="auth-options">
            <label className="auth-remember">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              <span className="auth-checkmark">
                {remember && (
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="2,6 5,9 10,3" />
                  </svg>
                )}
              </span>
              <span>Recuérdame</span>
            </label>
          </div>

          <button type="submit" className="auth-btn-primary">INGRESAR</button>
        </form>

        <button 
          onClick={handleGoogleLogin} 
          className="auth-btn-google" 
          style={{
            marginTop: "12px",
            width: "100%",
            padding: "11px",
            borderRadius: "8px",
            cursor: "pointer",
            border: "1px solid #e2e8f0",
            backgroundColor: "#ffffff",
            color: "#334155",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            fontSize: "14px"
          }}
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" height="18" alt="Google" />
          Ingresar con Google
        </button>

        <Link to="/registro" className="auth-btn-secondary" style={{ display: "block", marginTop: "16px", textAlign: "center" }}>REGISTRARSE</Link>
      </div>
    </div>
  );
}
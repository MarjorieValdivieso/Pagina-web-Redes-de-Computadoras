// src/components/ProtectedRoute.jsx
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

/**
 * Componente que protege rutas privadas.
 * - Mientras Firebase verifica la sesión, muestra un mensaje de carga.
 * - Si el usuario está autenticado, muestra el contenido (children).
 * - Si NO está autenticado, redirige a /login.
 */
export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged se dispara cada vez que cambia el estado de sesión
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Limpiar el listener al desmontar el componente
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <p>Verificando sesión...</p>
      </div>
    );
  }

  if (!user) {
    // No hay usuario logueado -> redirigir al login
    return <Navigate to="/login" replace />;
  }

  // Usuario autenticado -> renderizar el contenido protegido
  return children;
}

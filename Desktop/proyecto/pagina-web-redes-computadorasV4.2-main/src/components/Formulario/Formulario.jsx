import { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import './Formulario.css';

export default function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Guardamos el mensaje del formulario en la colección "mensajes" de Firestore
      await addDoc(collection(db, "mensajes"), {
        nombre: formData.nombre,
        email: formData.email,
        asunto: formData.asunto,
        mensaje: formData.mensaje,
        fecha: serverTimestamp(),
        leido: false,
      });

      setSubmitted(true);
      setError(false);

      setTimeout(() => {
        setFormData({
          nombre: '',
          email: '',
          asunto: '',
          mensaje: ''
        });
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <section id="formulario" className="formulario">
      <div className="container">
        <div className="formulario-header">
          <h2>¿Listo para Aprender?</h2>
          <p>Déjanos tus datos y nos pondremos en contacto</p>
        </div>

        <div className="form-wrapper">
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>¡Mensaje Enviado!</h3>
              <p>Gracias {formData.nombre}, nos pondremos en contacto pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              {error && (
                <p style={{ color: '#ff4a4a', marginBottom: '15px', textAlign: 'center' }}>
                  Ocurrió un error. Por favor, inténtalo de nuevo.
                </p>
              )}

              <div className="form-group">
                <label htmlFor="nombre">Nombre Completo</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="asunto">Asunto</label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  placeholder="¿Cuál es tu consulta?"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group form-group-full">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Cuéntanos más..."
                  rows="5"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary btn-submit">
                Enviar Mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
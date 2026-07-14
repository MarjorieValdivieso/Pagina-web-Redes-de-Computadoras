import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="footer">
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-section">
            <h3 className="footer-brand">Curso Redes de computadoras</h3>
            <p className="footer-desc">
              Plataforma educativa especializada en redes de computadoras con contenido completo y recursos interactivos.
            </p>
            <div className="footer-socials">
              <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="TikTok">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Enlaces Rápidos</h3>
            <ul className="footer-links">
              <li><a href="#hero">Inicio</a></li>
              <li><a href="#about">Nosotros</a></li>
              <li><a href="#temario">Temario</a></li>
              <li><a href="#preguntas">Preguntas FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contacto</h3>
            <div className="contact-info">
              <div className="info-item">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href="mailto:redes@epn.edu.ec">redes@epn.edu.ec</a>
              </div>
              <div className="info-item">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a href="tel:+593979084514">(+593) 979-084-514</a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3>Curso redes de computadoras</h3>
            <p className="footer-desc">Suscríbete para recibir actualizaciones del curso.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Tu correo electrónico"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Curso Redes de computadoras. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
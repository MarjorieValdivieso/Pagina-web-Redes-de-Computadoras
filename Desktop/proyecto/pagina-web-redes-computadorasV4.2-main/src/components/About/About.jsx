import videoRedes from '../../assets/videoa.mp4';
import './About.css';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  const features = [
    {
      icon: '📚',
      titulo: 'Contenido Completo',
      descripcion: 'Explora todos los temas necesarios de forma clara y organizada'
    },
    {
      icon: '🎯',
      titulo: 'Aprendizaje Estructurado',
      descripcion: 'Paso a paso, construyendo conocimiento desde cero'
    },
    {
      icon: '⚡',
      titulo: 'Interactivo',
      descripcion: 'Recursos y herramientas que hacen el aprendizaje dinámico'
    },
    {
      icon: '💡',
      titulo: 'Personalizado',
      descripcion: 'Aprende a tu propio ritmo, en tu horario'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        
        <div className="about-header" data-aos="fade-up">
          <h2>¿Quiénes Somos?</h2>
        </div>

        <div className="about-content" data-aos="fade-up">
          <div className="about-text">
            <p className="lead">
              Somos una plataforma educativa que permite a los estudiantes consultar el temario 
              completo de sus materias de forma clara y organizada.
            </p>
            <p>
              Buscamos brindar una experiencia sencilla e intuitiva, donde el estudiante pueda 
              explorar contenidos, reforzar conocimientos y avanzar a su propio ritmo.
            </p>
            <p>
              Ya sea tu primera vez o estés reforzando conocimientos, aquí encontrarás todo lo 
              que necesitas para dominar la asignatura de Redes de Computadoras.
            </p>
          </div>

          <div className="about-image">
            <div className="video-wrapper">
              <video
                src={videoRedes}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="video-overlay" />
            </div>
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-item" 
              style={{ animationDelay: `${index * 0.1}s` }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="feature-icon-wrapper">
                <span className="feature-icon-large">{feature.icon}</span>
              </div>
              <h3>{feature.titulo}</h3>
              <p>{feature.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="about-cta" data-aos="zoom-in">
          <h3>¿Listo para empezar?</h3>
          <p>Únete a cientos de estudiantes que ya dominan el temario</p>
          {/* Botón que redirige al registro */}
          <button 
            className="btn-primary" 
            onClick={() => navigate("/registro")}
          >
            Comenzar Ahora
          </button>
        </div>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Temario.css';

export default function Temario() {
  const [expandedId, setExpandedId] = useState(null);

  const temas = [
    { id: 1, titulo: 'Conceptos Básicos de Redes', icon: '🌐', descripcion: 'Introducción a los principios fundamentales de la comunicación de datos.', detalles: 'Aprenderás los conceptos esenciales para entender cómo funcionan las redes, incluyendo topologías, tipos de redes y medios de transmisión.' },
    { id: 2, titulo: 'Modelo OSI', icon: '📊', descripcion: 'Estudio de las 7 capas y su funcionamiento en la transmisión de datos.', detalles: 'Comprenderás cada capa del modelo OSI, sus funciones específicas y cómo interactúan entre sí para transmitir información.' },
    { id: 3, titulo: 'Protocolos IP, ICMP, TCP y UDP', icon: '🔌', descripcion: 'Análisis de los mecanismos de transporte y control de flujo de datos.', detalles: 'Estudiarás en profundidad los protocolos de capa de transporte que son fundamentales para la comunicación en redes modernas.' },
    { id: 4, titulo: 'Direccionamiento IPV4', icon: '🎯', descripcion: 'Estructura, clases y segmentación de redes mediante subredes.', detalles: 'Dominarás el sistema de direccionamiento IPv4, incluyendo cálculo de subredes, CIDR y gestión de direcciones IP.' },
    { id: 5, titulo: 'Enrutamiento Dinámico', icon: '🔄', descripcion: 'Protocolos, métricas y toma de decisiones en el envío de paquetes.', detalles: 'Aprenderás cómo funcionan los algoritmos de enrutamiento dinámico y cómo los routers toman decisiones para enviar datos.' },
    { id: 6, titulo: 'Topologías y Medios TX', icon: '🔗', descripcion: 'Configuración física, lógica y medios de transmisión cableados e inalámbricos.', detalles: 'Explorarás las diferentes topologías de red (estrella, malla, árbol) y los medios de transmisión disponibles en redes modernas.' },
    { id: 7, titulo: 'Protocolo ARP, RARP', icon: '📍', descripcion: 'Resolución de direcciones MAC a partir de direcciones IP conocidas.', detalles: 'Entenderás cómo funcionan los protocolos de resolución de direcciones en redes locales y su importancia en la comunicación.' },
    { id: 8, titulo: 'Capa Aplicación', icon: '💼', descripcion: 'Interfaz entre el usuario y la red: HTTP, DNS, DHCP y servicios finales.', detalles: 'Conocerás los protocolos de aplicación más importantes que usamos a diario en internet y cómo funcionan en segundo plano.' },
    { id: 9, titulo: 'Cableado Estructurado', icon: '🏗️', descripcion: 'Normativas, estándares y componentes físicos para la conectividad LAN.', detalles: 'Aprenderás sobre estándares de cableado, infraestructura de red y mejores prácticas para instalaciones profesionales.' }
  ];

  return (
    <section id="temario" className="temario">
      <div className="container">
        <div className="temario-header" data-aos="fade-up">
          <h2>Temario del Semestre</h2>
          <p>Conoce todos los temas que aprenderás durante el curso</p>
        </div>

        <div className="temas-grid">
          {temas.map((tema, index) => (
            <div
              key={tema.id}
              className={`tema-card ${expandedId === tema.id ? 'expanded' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              data-aos-offset="100"
            >
              <div 
                className="tema-header"
                onClick={() => setExpandedId(expandedId === tema.id ? null : tema.id)}
              >
                <div className="tema-icon">{tema.icon}</div>
                <div className="tema-title-wrapper">
                  <h3>{tema.titulo}</h3>
                  <p className="tema-desc">{tema.descripcion}</p>
                </div>
                <div className="expand-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>

              {expandedId === tema.id && (
                <div className="tema-content">
                  <p>{tema.detalles}</p>
                  <Link to={localStorage.getItem("sesion") ? `/temario/${tema.titulo.toLowerCase().replace(/[^a-z0-9]+/g, '-')}` 
                    : "/login"} className="btn-secondary">Iniciar Tema
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="temario-stats" data-aos="fade-up">
          <div className="stat"><div className="stat-number">9</div><div className="stat-label">Temas Principales</div></div>
          <div className="stat"><div className="stat-number">30+</div><div className="stat-label">Subtemas</div></div>
          <div className="stat"><div className="stat-number">100%</div><div className="stat-label">Completitud</div></div>
        </div>
      </div>
    </section>
  );
}
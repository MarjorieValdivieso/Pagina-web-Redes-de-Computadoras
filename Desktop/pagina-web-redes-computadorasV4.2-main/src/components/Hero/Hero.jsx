import { useEffect, useRef, useState } from 'react';
import computadoraFondo from '../../assets/computadora_fondo.jpg'; 
import './Hero.css';

export default function Hero() {
  const parallaxRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.5);
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Parallax Background */}
      <div 
        className="parallax-bg"
        ref={parallaxRef}
        style={{
          transform: `translateY(${offset}px)`,
          backgroundImage: `url(${computadoraFondo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="hero-overlay" />
      
      <div className="floating-orbs">
        <div className="orb orb-1" style={{
          left: `${mousePos.x * 0.05}px`,
          top: `${mousePos.y * 0.05}px`
        }} />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="hero-grid" data-aos="fade-up">
            <div className="hero-text">
              <div className="badge">🚀 Plataforma Educativa</div>
              
              <h1 className="hero-title">
                Aprende <span className="gradient-text">Redes de</span>
                <br/>
                <span className="gradient-text">Computadoras</span> Profesionalmente
              </h1>
              
              <p className="hero-description">
                Domina todos los conceptos con una plataforma interactiva, moderna y diseñada para tu éxito. Desde principiante hasta experto en networking.
              </p>
            </div>

            <div className="hero-visual"></div>
          </div>
        </div>
      </div>


      <svg className="wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'var(--primary-dark)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'var(--secondary-dark)', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="url(#waveGradient)" />
      </svg>
    </section>
  );
}
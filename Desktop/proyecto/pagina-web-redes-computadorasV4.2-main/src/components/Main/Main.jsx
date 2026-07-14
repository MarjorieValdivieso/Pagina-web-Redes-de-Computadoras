import { useState, useEffect } from 'react';
import laptoImg from "../../assets/lapto.png";
import './Main.css'; 

const Main = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <section id="intro">
        <div className="intro-texto">
          <h2>Aprende redes de<br/>computadoras</h2>
          <p>
            Explora todos los temas, paso a paso, con recursos interactivos y personalizados.<br/><br/>
            Ya sea tu primera vez o estas reforzando conocimientos, aquí encontrarás todo lo que necesitas para dominar la asignatura.
          </p>
          <button className="btn-ver-temario">VER TEMARIO</button>
        </div>
        
        <div className="intro-imagen">
          <img 
            src={laptoImg} 
            alt="Laptop Ilustrativa" 
            style={{ 
              transform: `translateY(${offsetY * 0.3}px)`,
              transition: 'transform 0.1s ease-out'
            }} 
          />
        </div>
      </section>
    </main>
  );
};

export default Main;
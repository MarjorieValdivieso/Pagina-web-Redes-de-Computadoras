import { useState } from 'react';
import './Preguntas.css';

export default function Preguntas() {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: 1,
      pregunta: '¿Es este curso adecuado para principiantes?',
      respuesta: 'Absolutamente. El curso está diseñado para estudiantes de todos los niveles, comenzando desde conceptos fundamentales hasta temas avanzados.'
    },
    {
      id: 2,
      pregunta: '¿Cuánto tiempo tarda el curso?',
      respuesta: 'El tiempo depende de tu dedicación y ritmo de aprendizaje. En promedio, con 2-3 horas semanales, podrás completar el temario en un semestre.'
    },
    {
      id: 3,
      pregunta: '¿Hay material de estudio disponible?',
      respuesta: 'Sí, contamos con presentaciones, videos, documentos PDF y recursos interactivos para cada tema del curso.'
    },
    {
      id: 4,
      pregunta: '¿Puedo acceder al curso desde cualquier dispositivo?',
      respuesta: 'Claro, la plataforma es completamente responsive y funciona en computadoras, tablets y dispositivos móviles.'
    },
    {
      id: 5,
      pregunta: '¿Hay soporte si tengo dudas?',
      respuesta: 'Sí, contamos con un foro activo donde puedes hacer preguntas y la comunidad te ayudará a resolverlas.'
    },
    {
      id: 6,
      pregunta: '¿Se otorga certificado al completar el curso?',
      respuesta: 'Sí, al completar todos los temas y evaluaciones, recibirás un certificado digital de participación.'
    }
  ];

  return (
    <section id="preguntas" className="preguntas">
      <div className="container">
        {/* Header */}
        <div className="preguntas-header">
          <h2>Preguntas Frecuentes</h2>
          <p>Resuelve tus dudas y comparte con la comunidad</p>
        </div>

        {/* FAQ List */}
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="faq-wrapper"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <div className={`faq-item ${openId === faq.id ? 'open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                >
                  <span className="faq-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="question-text">{faq.pregunta}</span>
                  <svg className="faq-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {openId === faq.id && (
                  <div className="faq-answer">
                    <p>{faq.respuesta}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="preguntas-cta">
          <div className="cta-content">
            <h3>¿Tienes más preguntas?</h3>
            <p>Contáctanos directamente o visita nuestro foro</p>
          </div>
          <button className="btn-primary">Ir al Foro</button>
        </div>
      </div>
    </section>
  );
}
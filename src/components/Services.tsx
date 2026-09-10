import React from "react";
import { PackageCheck, AlertCircle, Users, MessageSquare } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <PackageCheck size={26} />,
      title: "Reposición en sala",
      description:
        "Mantenemos las góndolas abastecidas y ordenadas según lo acordado con cada cliente.",
    },
    {
      icon: <AlertCircle size={26} />,
      title: "Seguimiento de quiebres de stock",
      description:
        "Atendemos los avisos de productos faltantes en cada local y confirmamos su reposición.",
    },
    {
      icon: <Users size={26} />,
      title: "Coordinación de reponedores",
      description:
        "Asignamos a cada local su reponedor y mantenemos comunicación directa con el equipo en terreno.",
    },
  ];

  return (
    <section id="servicios" className="services-section">
      <div className="wrap">
        <div className="section-header">
          <span className="section-badge">Nuestros Servicios</span>
          <h2 className="section-title">Qué hacemos</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article key={index} className="service-card">
              <div className="service-icon-box">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>

        <div className="operational-note">
          <div className="operational-note-icon">
            <MessageSquare size={24} />
          </div>
          <p>
            <strong>Canal Operacional:</strong> Usamos WhatsApp para enviar a
            nuestros reponedores los avisos de reposición de cada local y
            registrar sus respuestas. Solo contactamos por este medio a
            personas que forman parte de nuestro equipo de trabajo.
          </p>
        </div>
      </div>
    </section>
  );
}

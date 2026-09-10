"use client";

import React from "react";
import ShelfIllustration from "./ShelfIllustration";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <section className="hero">
      <div className="wrap">
        <div>
          <div className="hero-tag">
            <MapPin size={14} />
            <span>Santiago de Chile · Retail</span>
          </div>

          <h1>Reposición y apoyo en sala para proveedores del retail</h1>

          <p>
            Coordinamos equipos de reposición en supermercados para que los
            productos de nuestros clientes estén en la góndola cuando alguien los
            busca.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-accent"
              onClick={() => scrollTo("contacto")}
            >
              <span>Contactar</span>
              <ArrowRight size={18} />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => scrollTo("servicios")}
            >
              <span>Qué hacemos</span>
            </button>
          </div>
        </div>

        <ShelfIllustration />
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { Menu, X, Shield, Layers } from "lucide-react";
import { COMPANY_INFO } from "@/config/company";

interface HeaderProps {
  onOpenPrivacy: () => void;
}

export default function Header({ onOpenPrivacy }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <header className="top">
      <div className="wrap">
        <a href="#" className="brand-container" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          window.history.pushState(null, "", window.location.pathname);
        }}>
          <div className="brand-logo-badge">
            <Layers size={18} />
          </div>
          <span className="brand">{COMPANY_INFO.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" aria-label="Navegación principal">
          <ul>
            <li>
              <a href="#servicios" onClick={(e) => handleNavClick(e, "servicios")}>
                Servicios
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={(e) => handleNavClick(e, "contacto")}>
                Contacto
              </a>
            </li>
            <li>
              <button
                type="button"
                className="nav-link"
                onClick={onOpenPrivacy}
                style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
              >
                <Shield size={16} />
                Privacidad
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="wrap">
          <nav className="nav-mobile" aria-label="Navegación móvil">
            <ul>
              <li>
                <a href="#servicios" onClick={(e) => handleNavClick(e, "servicios")}>
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" onClick={(e) => handleNavClick(e, "contacto")}>
                  Contacto
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPrivacy();
                  }}
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
                >
                  <Shield size={16} />
                  Política de Privacidad
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

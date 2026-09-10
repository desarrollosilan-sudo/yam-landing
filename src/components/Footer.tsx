"use client";

import React from "react";
import { ArrowUp, Shield } from "lucide-react";
import { COMPANY_INFO } from "@/config/company";

interface FooterProps {
  onOpenPrivacy: () => void;
}

export default function Footer({ onOpenPrivacy }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="wrap">
        <div>
          <span>
            © {COMPANY_INFO.year} {COMPANY_INFO.legalName}, RUT {COMPANY_INFO.rut}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <button
            type="button"
            className="footer-link"
            onClick={onOpenPrivacy}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
          >
            <Shield size={14} />
            Política de privacidad
          </button>

          <button
            type="button"
            className="footer-link"
            onClick={scrollToTop}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
            title="Volver arriba"
          >
            <ArrowUp size={14} />
            Volver al inicio
          </button>
        </div>
      </div>
    </footer>
  );
}

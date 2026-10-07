"use client";

import React, { useState } from "react";
import { COMPANY_INFO } from "@/config/company";
import { Copy, Check, Mail, Building2 } from "lucide-react";

export default function CompanyInfo() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  return (
    <section id="contacto" className="company-section">
      <div className="wrap">
        <div className="section-header">
          <span className="section-badge">Contacto</span>
          <h2 className="section-title">Datos de contacto</h2>
        </div>

        <div className="company-card">
          <dl className="company-dl">
            <dt style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Building2 size={18} color="#2F6F73" />
              <span>Empresa</span>
            </dt>
            <dd>
              <strong>{COMPANY_INFO.name}</strong>
            </dd>

            <dt style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Mail size={18} color="#2F6F73" />
              <span>Correo de contacto</span>
            </dt>
            <dd>
              <a href={`mailto:${COMPANY_INFO.email}`}>
                {COMPANY_INFO.email}
              </a>
              <button
                type="button"
                className="copy-btn"
                onClick={() => copyToClipboard(COMPANY_INFO.email, "email")}
                title="Copiar Correo"
              >
                {copiedField === "email" ? (
                  <>
                    <Check size={12} color="#2F6F73" />
                    <span>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </dd>
          </dl>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect } from "react";
import { X, ShieldCheck, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/config/company";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-content">
        <div className="modal-header">
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <ShieldCheck size={24} color="#2F6F73" />
            <h2 id="modal-title">Política de Privacidad</h2>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <p className="meta-date">Última actualización: septiembre de 2026</p>

          <p>
            Esta política explica cómo <strong>{COMPANY_INFO.legalName}</strong>,
            RUT {COMPANY_INFO.rut}, con domicilio en {COMPANY_INFO.address}, trata los
            datos personales de las personas con las que se comunica, incluidas las
            comunicaciones realizadas por WhatsApp.
          </p>

          <h3>Datos que tratamos</h3>
          <ul>
            <li>
              Nombre y número de teléfono de los integrantes de nuestro equipo de
              reposición.
            </li>
            <li>El local o los locales asignados a cada persona.</li>
            <li>
              Las respuestas que cada persona envía a los avisos de reposición,
              con su fecha y hora.
            </li>
          </ul>

          <h3>Para qué los usamos</h3>
          <p>
            Usamos estos datos únicamente para coordinar el trabajo de reposición:
            enviar avisos sobre productos faltantes en los locales asignados,
            registrar su atención y dar seguimiento a la operación. No los usamos
            para publicidad ni los vendemos a terceros.
          </p>

          <h3>Con quién los compartimos</h3>
          <p>
            Los mensajes se envían a través de WhatsApp, servicio de Meta Platforms,
            que procesa la información según sus propias condiciones. La información
            sobre el estado de la reposición se comparte con la empresa cliente para
            la cual se presta el servicio, en la medida necesaria para ejecutarlo. No
            compartimos datos personales con otros terceros, salvo obligación legal.
          </p>

          <h3>Cuánto tiempo los conservamos</h3>
          <p>
            Conservamos los datos mientras la persona forme parte del equipo de
            trabajo o mientras sean necesarios para la operación, y los eliminamos
            una vez que dejan de serlo, salvo que una obligación legal exija
            mantenerlos.
          </p>

          <h3>Sus derechos</h3>
          <p>
            De acuerdo con la legislación chilena sobre protección de datos
            personales, usted puede solicitar acceso a sus datos, su rectificación o
            su eliminación, u oponerse a su tratamiento. También puede pedir en
            cualquier momento que dejemos de contactarle por WhatsApp. Para ejercer
            estos derechos, escríbanos a{" "}
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}
            >
              <Mail size={14} />
              {COMPANY_INFO.email}
            </a>
            .
          </p>

          <h3>Cambios a esta política</h3>
          <p>
            Si modificamos esta política, publicaremos la versión actualizada en esta
            página con su nueva fecha.
          </p>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Entendido y cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

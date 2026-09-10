"use client";

import React, { useState } from "react";
import { RefreshCw, CheckCircle2 } from "lucide-react";

export default function ShelfIllustration() {
  const [animating, setAnimating] = useState(false);
  const [justRefilled, setJustRefilled] = useState(false);

  const triggerRefill = () => {
    if (animating) return;
    setAnimating(true);
    setJustRefilled(true);
    setTimeout(() => {
      setAnimating(false);
    }, 1000);
    setTimeout(() => {
      setJustRefilled(false);
    }, 2800);
  };

  return (
    <div className="shelf-wrapper">
      <div className="shelf-header">
        <span className="shelf-title">Visualización de Góndola</span>
        <button
          type="button"
          onClick={triggerRefill}
          className="shelf-trigger"
          title="Simular reposición de producto en tiempo real"
        >
          {justRefilled ? (
            <>
              <CheckCircle2 size={14} color="#2F6F73" />
              <span>¡Repuesto!</span>
            </>
          ) : (
            <>
              <RefreshCw size={13} className={animating ? "spin" : ""} />
              <span>Simular reposición</span>
            </>
          )}
        </button>
      </div>

      <svg
        className="shelf-svg"
        viewBox="0 0 420 300"
        role="img"
        aria-label="Ilustración de una góndola con productos ordenados y un espacio vacío que se repone"
      >
        {/* Pilares verticales */}
        <rect x="10" y="0" width="6" height="292" fill="#1C2B3A" />
        <rect x="404" y="0" width="6" height="292" fill="#1C2B3A" />

        {/* Nivel Superior */}
        <rect x="20" y="39" width="30" height="56" rx="2" fill="#C9D4D6" />
        <rect x="54" y="47" width="22" height="48" rx="2" fill="#4C8A8E" />
        <rect x="80" y="33" width="22" height="62" rx="2" fill="#4C8A8E" />
        <rect x="106" y="39" width="22" height="56" rx="2" fill="#2F6F73" />
        <rect x="132" y="25" width="22" height="70" rx="2" fill="#C9D4D6" />
        <rect x="158" y="39" width="22" height="56" rx="2" fill="#2F6F73" />
        <rect x="184" y="47" width="34" height="48" rx="2" fill="#4C8A8E" />
        <rect x="222" y="39" width="22" height="56" rx="2" fill="#4C8A8E" />
        <rect x="248" y="25" width="22" height="70" rx="2" fill="#2F6F73" />
        <rect x="274" y="47" width="26" height="48" rx="2" fill="#4C8A8E" />
        <rect x="304" y="33" width="26" height="62" rx="2" fill="#C9D4D6" />
        <rect x="334" y="47" width="26" height="48" rx="2" fill="#4C8A8E" />
        <rect x="364" y="39" width="30" height="56" rx="2" fill="#2F6F73" />
        <rect x="10" y="95" width="400" height="7" fill="#1C2B3A" />

        {/* Nivel Medio */}
        <rect x="20" y="128" width="26" height="62" rx="2" fill="#2F6F73" />
        <rect x="50" y="142" width="22" height="48" rx="2" fill="#4C8A8E" />
        <rect x="76" y="120" width="26" height="70" rx="2" fill="#4C8A8E" />
        <rect x="106" y="128" width="34" height="62" rx="2" fill="#C9D4D6" />
        <rect x="144" y="128" width="34" height="62" rx="2" fill="#8FA9AE" />
        <rect x="212" y="142" width="26" height="48" rx="2" fill="#4C8A8E" />
        <rect x="242" y="120" width="30" height="70" rx="2" fill="#8FA9AE" />
        <rect x="276" y="128" width="34" height="62" rx="2" fill="#4C8A8E" />
        <rect x="314" y="142" width="22" height="48" rx="2" fill="#4C8A8E" />
        <rect x="340" y="134" width="34" height="56" rx="2" fill="#8FA9AE" />
        <rect x="10" y="190" width="400" height="7" fill="#1C2B3A" />

        {/* Nivel Inferior */}
        <rect x="20" y="237" width="34" height="48" rx="2" fill="#2F6F73" />
        <rect x="58" y="223" width="30" height="62" rx="2" fill="#8FA9AE" />
        <rect x="92" y="215" width="34" height="70" rx="2" fill="#2F6F73" />
        <rect x="130" y="223" width="22" height="62" rx="2" fill="#C9D4D6" />
        <rect x="156" y="237" width="22" height="48" rx="2" fill="#8FA9AE" />
        <rect x="182" y="223" width="34" height="62" rx="2" fill="#C9D4D6" />
        <rect x="220" y="237" width="30" height="48" rx="2" fill="#C9D4D6" />
        <rect x="254" y="229" width="30" height="56" rx="2" fill="#4C8A8E" />
        <rect x="288" y="215" width="22" height="70" rx="2" fill="#2F6F73" />
        <rect x="314" y="223" width="26" height="62" rx="2" fill="#1C2B3A" />
        <rect x="344" y="215" width="26" height="70" rx="2" fill="#C9D4D6" />
        <rect x="10" y="285" width="400" height="7" fill="#1C2B3A" />

        {/* Espacio que se repone (Hueco con guiones) */}
        <rect
          x="182"
          y="126"
          width="26"
          height="64"
          rx="2"
          fill="none"
          stroke="#1C2B3A"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0.45"
        />

        {/* Producto repuesto animado */}
        <rect
          key={animating ? "animating" : "idle"}
          className="refill-animated"
          x="182"
          y="126"
          width="26"
          height="64"
          rx="2"
          fill="#F4C542"
        />

        {/* Etiqueta de precio/alerta en el estante */}
        <rect x="176" y="197" width="38" height="14" rx="2" fill="#F4C542" />
      </svg>
    </div>
  );
}

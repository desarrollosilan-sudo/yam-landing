import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Y.A.M SpA | Reposición y apoyo en sala",
  description:
    "Y.A.M SpA presta servicios de reposición y apoyo en sala para proveedores del retail en Santiago de Chile.",
  keywords: [
    "reposición",
    "retail",
    "supermercados",
    "apoyo en sala",
    "reponedores",
    "Santiago de Chile",
    "Y.A.M SpA",
  ],
  authors: [{ name: "Y.A.M SpA" }],
  openGraph: {
    title: "Y.A.M SpA | Reposición y apoyo en sala",
    description:
      "Coordinamos equipos de reposición en supermercados para que los productos de nuestros clientes estén en la góndola cuando alguien los busca.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className={archivo.variable}>
      <head>
        {/* Verificación de dominio de Meta: pega aquí la etiqueta si Meta Business lo requiere */}
        {/* <meta name="facebook-domain-verification" content="CODIGO_ENTREGADO_POR_META" /> */}
      </head>
      <body>{children}</body>
    </html>
  );
}

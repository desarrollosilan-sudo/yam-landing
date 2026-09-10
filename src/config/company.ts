export interface CompanyInfoData {
  name: string;
  legalName: string;
  rut: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  year: number;
}

export const COMPANY_INFO: CompanyInfoData = {
  name: "Y.A.M SpA",
  legalName: "Y.A.M SpA",
  rut: "77.784.467-9",
  address: "Av. Raúl Labbé 12613, oficina 231, piso 2, Lo Barnechea, Región Metropolitana, Chile",
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "+56 9 8765 4321",
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "contacto@yamspa.cl",
  description: "Y.A.M SpA presta servicios de reposición y apoyo en sala para proveedores del retail en Santiago de Chile.",
  year: 2026,
};

// src/data/info.ts

export const siteInfo = {
  name: "Estudio Jurídico Contable M&L",
  url: import.meta.env.PUBLIC_SITE_URL || "https://www.estudiojuridicocontableml.com.ar",
  contact: {
    whatsapp: import.meta.env.PUBLIC_WHATSAPP_NUMBER || "5491127890450",
    whatsappDisplay: import.meta.env.PUBLIC_WHATSAPP_DISPLAY || "+54 9 11 2789-0450",
    email: import.meta.env.PUBLIC_EMAIL || "contacto@estudiojuridicocontableml.com.ar",
    address: "Av. Pres. Bartolomé Mitre 2443, Avellaneda, Buenos Aires",
    schedule: "Lunes a Viernes 12:00 a 18:00 hs"
  },
  social: {
    instagram: import.meta.env.PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/estudiojuridicocontableml",
    tiktok: import.meta.env.PUBLIC_TIKTOK_URL || "https://www.tiktok.com/@majomiguelez",
    linkedin: import.meta.env.PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/company/estudiojuridicocontableml"
  }
};
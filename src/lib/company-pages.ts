export const corporatePaths = [
  "/", "/about", "/services", "/diagnostico", "/contacto", "/regalos",
  "/proyectos/arkos-wear", "/portafolio", "/landings", "/nfc", "/tarjetas-nfc",
  "/soluciones-nfc", "/politica-de-privacidad",
];
const companyPages = new Set([...corporatePaths, "/nfc-demo"]);
export function isCompanyPage(path: string) {
  return companyPages.has(path) || path.startsWith("/proyectos/");
}

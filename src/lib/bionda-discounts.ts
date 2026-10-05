export const BIONDA_DISCOUNT_CODES: Record<string, string> = {
  "discount-5": "RULETABIONDA5",
  "discount-10": "RULETABIONDA10",
  "discount-15": "RULETABIONDA15",
};

export function biondaDiscountUrl(code: string) {
  return `https://biondaymora.com/discount/${encodeURIComponent(code)}?redirect=%2Fcollections%2Fall`;
}

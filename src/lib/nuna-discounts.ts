export const NUNA_DISCOUNT_CODES: Record<string, string> = {
  "discount-10": "RULETANUNA10",
  "discount-15": "RULETANUNA15",
  "discount-20": "RULETANUNA20",
};

export function nunaDiscountUrl(code: string) {
  return `https://nunaamautta.com/discount/${encodeURIComponent(code)}?redirect=%2Fcollections%2Fall`;
}

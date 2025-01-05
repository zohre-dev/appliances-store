export function formatToIranianCurrency(
  price: number,
  unit: "rial" | "toman" = "toman"
) {
  const formatedNumber = new Intl.NumberFormat("fa-IR").format(price);
  return unit === "toman"
    ? `${formatedNumber} تومان`
    : `${formatedNumber} ریال`;
}

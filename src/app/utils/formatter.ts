export const currencyFormat = (
  value: number,
  locale: string,
  currency: string
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  }).format(value);
};

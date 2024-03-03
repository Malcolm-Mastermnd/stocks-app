import { Currency } from "../types/types";

export function formatMoney(number: number | null | undefined, currency: Currency): string {
  if (!number) return 'N/A';

  const convertedNumber = currency === 'USD' ? number : usdToEur(number);
  const currencySymbol = currency === 'USD' ? '$' : '€';
  let formattedNumber = '';

  if (convertedNumber >= 1e12) {
    formattedNumber =`${(convertedNumber / 1e12).toFixed(2)}T`;
  } else if (number >= 1e9) {
    formattedNumber =`${(convertedNumber / 1e9).toFixed(2)}B`;
  } else if (convertedNumber >= 1e6) {
    formattedNumber =`${(convertedNumber / 1e6).toFixed(2)}M`;
  } else if (convertedNumber >= 1e3) {
    formattedNumber =`${(convertedNumber / 1e3).toFixed(2)}K`;
  } else {
    formattedNumber =`${convertedNumber.toFixed(2)}`;
  }

  return `${currencySymbol}${formattedNumber}`;
}

export function formatPercentage(number?: number | null): string {
  if (!number) return 'N/A';
  return `${number.toFixed(2)}%`;
}

export function calculatePercentChange(
  previous?: number | null,
  current?: number | null,
): number {
  if (!previous || !current) return NaN;
  const change = current - previous;
  return (change / previous) * 100;
}

export function usdToEur(usd: number): number {
  return usd * 0.85;
}

export function formatMoney(number?: number | null): string {
  if (!number) return 'N/A';
  if (number >= 1e12) {
    return `$${(number / 1e12).toFixed(2)}T`;
  } else if (number >= 1e9) {
    return `$${(number / 1e9).toFixed(2)}B`;
  } else if (number >= 1e6) {
    return `$${(number / 1e6).toFixed(2)}M`;
  } else if (number >= 1e3) {
    return `$${(number / 1e3).toFixed(2)}K`;
  } else {
    return `$${number.toFixed(2)}`;
  }
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

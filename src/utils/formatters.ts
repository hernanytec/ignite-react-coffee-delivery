import currency from 'currency.js'

export function formatMoney(value: string | number, symbol = 'R$ ') {
  return currency(value, {
    symbol,
    separator: '.',
    decimal: ',',
  }).format()
}

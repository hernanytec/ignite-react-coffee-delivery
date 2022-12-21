import currency from 'currency.js'

export function formatMoney(value: string | number) {
  return currency(value, {
    symbol: '',
    separator: '.',
    decimal: ',',
  }).format()
}

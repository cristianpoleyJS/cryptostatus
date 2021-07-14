export const formatCurrency = (price) => {
  const currency = process.server ? '' : (!!localStorage.getItem('cryptonine-currency') || 'EUR')
  const formatter = new Intl.NumberFormat(navigator.language || navigator.userLanguage, {
    style: 'currency',
    currency
  })

  return formatter.format(currency === 'EUR' ? price * 0.89 : price)
}

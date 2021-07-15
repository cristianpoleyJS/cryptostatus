export const formatCurrency = (price) => {
  const currency = process.server ? '' : (!!localStorage.getItem('cryptoNineCurrency') || 'eur')
  const formatter = new Intl.NumberFormat(navigator.language || navigator.userLanguage, {
    style: 'currency',
    currency: 'USD'
  })

  return formatter.format(currency === 'eur' ? price * 0.89 : price)
}

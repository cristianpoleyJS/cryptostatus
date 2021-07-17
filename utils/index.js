import { CURRENCY_USD, CURRENCY_EURO } from '@/utils/constants'
import Asset from '@/classes/Asset'

export const formatCurrency = (price, currency) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  })

  return formatter.format(price)
}

export const subtractDays = (date, { days = 0, months = 0, years = 0 }) => {
  return new Date(
    date.getFullYear() - years,
    date.getMonth() - months,
    date.getDate() - days,
    0, 0, 0, 0
  )
}

export const formatAssets = (assets, conversionEuroToUsd) => {
  return assets.reduce((result, currentVal) => {
    result.push(formatAsset(currentVal, conversionEuroToUsd))
    return result
  }, [])
}

export const formatAsset = (asset, conversionEuroToUsd) => {
  const priceFormatted = (asset.priceUsd * 1).toFixed(2) * 1
  return new Asset({
    id: asset.id,
    rank: asset.rank,
    symbol: asset.symbol,
    price: {
      [CURRENCY_USD]: priceFormatted,
      [CURRENCY_EURO]: priceFormatted * conversionEuroToUsd
    },
    changePercent24Hr: (asset.changePercent24Hr * 1).toFixed(3) * 1,
    favorite: _calculateIsFavorite(asset.id),
    name: asset.name,
    valuePerCurrency: {
      [CURRENCY_USD]: priceFormatted,
      [CURRENCY_EURO]: priceFormatted * conversionEuroToUsd
    },
    time: asset.date,
    volume24Hr: {
      [CURRENCY_USD]: asset.volumeUsd24Hr,
      [CURRENCY_EURO]: asset.volumeUsd24Hr * conversionEuroToUsd
    },
    marketCap: {
      [CURRENCY_USD]: asset.marketCapUsd,
      [CURRENCY_EURO]: asset.marketCapUsd * conversionEuroToUsd
    },
    explorer: asset.explorer
  })
}

const _calculateIsFavorite = (id) => {
  const objectFavorites = JSON.parse(localStorage.getItem('cryptoNineFavorites'))
  return objectFavorites ? objectFavorites[id] : false
}

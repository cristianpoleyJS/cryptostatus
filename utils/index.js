import { CURRENCY_DOLAR, CURRENCY_EUR } from '@/utils/constants'
import Asset from '@/classes/Asset'

export const formatCurrency = (price, currency) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  })

  return formatter.format(price)
}

export const addDays = (date, { days = 0, month = 0, year = 0 }) => {
  return new Date(
    date.getFullYear() + year,
    date.getMonth() + month,
    date.getDate() + days,
    0, 0, 0, 0
  )
}

export const formatAssets = (assets) => {
  return assets.reduce((result, currentVal) => {
    result.push(formatAsset(currentVal))
    return result
  }, [])
}

export const formatAsset = (asset) => {
  const priceFormatted = (asset.priceUsd * 1).toFixed(2) * 1
  return new Asset({
    id: asset.id,
    rank: asset.rank,
    symbol: asset.symbol,
    price: {
      [CURRENCY_DOLAR]: priceFormatted,
      [CURRENCY_EUR]: priceFormatted * 0.85
    },
    changePercent24Hr: (asset.changePercent24Hr * 1).toFixed(3) * 1,
    favorite: _calculateIsFavorite(asset.id),
    name: asset.name,
    valuePerCurrency: {
      [CURRENCY_DOLAR]: priceFormatted,
      [CURRENCY_EUR]: priceFormatted * 0.85
    },
    time: asset.date,
    volume24Hr: {
      [CURRENCY_DOLAR]: asset.volumeUsd24Hr,
      [CURRENCY_EUR]: asset.volumeUsd24Hr * 0.85
    },
    marketCap: {
      [CURRENCY_DOLAR]: asset.marketCapUsd,
      [CURRENCY_EUR]: asset.marketCapUsd * 0.85
    },
    explorer: asset.explorer
  })
}

const _calculateIsFavorite = (id) => {
  const objectFavorites = JSON.parse(localStorage.getItem('cryptoNineFavorites'))
  if (objectFavorites) {
    return objectFavorites[id]
  }
  return false
}

import {
  THEME_LIGHT,
  CURRENCY_USD
} from '@/utils/constants'
import {
  getters
} from '@/store'

describe('Getters Vuex', () => {
  const state = {
    assets: [],
    assetsFound: [],
    assetsFavorite: [],
    assetSelected: {},
    history: [],
    theme: THEME_LIGHT,
    currency: CURRENCY_USD,
    conversionEuroToUsd: 0.85
  }
  it('"getAssets" returns array empty', () => {
    expect(getters.getAssets(state)).toHaveLength(0)
  })
  it('"getAssetsFound" returns array empty', () => {
    expect(getters.getAssetsFound(state)).toHaveLength(0)
  })
  it('"getAssetsFavorites" returns array empty', () => {
    expect(getters.getAssetsFavorites(state)).toHaveLength(0)
  })
  it('"getAssetSelected" returns object empty', () => {
    expect(getters.getAssetSelected(state)).toEqual({})
  })
  it('"getHistory" returns array empty', () => {
    expect(getters.getHistory(state)).toHaveLength(0)
  })
  it('"getCurrency" returns CURRENCY_USD', () => {
    expect(getters.getCurrency(state)).toEqual(CURRENCY_USD)
  })
  it('"getTheme" returns THEME_LIGHT', () => {
    expect(getters.getTheme(state)).toEqual(THEME_LIGHT)
  })
})

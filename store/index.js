import { getAssets, getAssetById, getRates, getAssetHistoryById } from '@/api'
import { CURRENCY_USD, THEME_LIGHT } from '@/utils/constants'
import { formatAsset, formatAssets } from '@/utils'

export const SET_CONVERSION_EURO_TO_DOLLAR = 'SET_CONVERSION_EURO_TO_DOLLAR'
export const SET_ASSETS_FAVORITE = 'SET_ASSETS_FAVORITE'
export const SET_ASSET_SELECTED = 'SET_ASSET_SELECTED'
export const SET_HISTORY_BY_ID = 'SET_HISTORY_BY_ID'
export const UNCHECK_FAVORITE = 'UNCHECK_FAVORITE'
export const CHECK_FAVORITE = 'CHECK_FAVORITE'
export const RESET_ASSETS = 'RESET_ASSETS'
export const SET_CURRENCY = 'SET_CURRENCY'
export const SET_ASSETS = 'SET_ASSETS'
export const SET_THEME = 'SET_THEME'

export const state = () => ({
  assets: [],
  assetsFavorite: [],
  assetSelected: {},
  history: [],
  theme: THEME_LIGHT,
  currency: CURRENCY_USD,
  conversionEuroToUsd: 0.85
})

export const getters = {

  getAssets: state => state.assets,

  getAssetsFavorites: state => state.assetsFavorite,

  getAssetSelected: state => state.assetSelected,

  getHistory: state => state.history,

  getCurrency: state => state.currency,

  getTheme: state => state.theme
}
export const actions = {

  async actionGetRateEuro ({ commit }) {
    const response = await getRates({ id: 'euro' })
    const { data } = await response.json()
    commit(SET_CONVERSION_EURO_TO_DOLLAR, 1 / data.rateUsd)
  },

  async actionGetAssets ({ commit, dispatch }, { limit, offset }) {
    await dispatch('actionGetRateEuro')
    const response = await getAssets({ limit, offset })
    const { data } = await response.json()
    commit(SET_ASSETS, data)
  },

  async actionGetFavoritesAssets ({ commit, dispatch }) {
    await dispatch('actionGetRateEuro')
    const currentObjectFavorites = JSON.parse(localStorage.getItem('cryptoNineFavorites'))
    if (Object.keys(currentObjectFavorites).length) {
      const response = await getAssets({ ids: Object.keys(currentObjectFavorites).join(',') })
      const { data } = await response.json()
      commit(SET_ASSETS_FAVORITE, data)
    }
  },

  async actionGetAssetById ({ commit, dispatch }, id) {
    await dispatch('actionGetRateEuro')
    const response = await getAssetById(id)
    const { data } = await response.json()
    commit(SET_ASSET_SELECTED, data)
  },

  async actionGetHistoryById ({ state }, { id }) {
    const response = await getAssetHistoryById({ id })
    const { data } = await response.json()
    return formatAssets(data, state.conversionEuroToUsd)
  },

  actionCheckFavorite ({ commit }, assetClicked) {
    commit(CHECK_FAVORITE, assetClicked)
    const currentObjectFavorites = JSON.parse(localStorage.getItem('cryptoNineFavorites'))
    const id = assetClicked.id
    const object = {}
    object[id] = true
    if (!currentObjectFavorites) {
      localStorage.setItem('cryptoNineFavorites', JSON.stringify(object))
    } else {
      localStorage.setItem('cryptoNineFavorites', JSON.stringify({
        ...currentObjectFavorites,
        ...object
      }))
    }
  },

  actionUncheckFavorite ({ commit }, assetClicked) {
    commit(UNCHECK_FAVORITE, assetClicked)
    const currentObjectFavorites = JSON.parse(localStorage.getItem('cryptoNineFavorites'))
    const id = assetClicked.id
    delete currentObjectFavorites[id]
    localStorage.setItem('cryptoNineFavorites', JSON.stringify(currentObjectFavorites))
  }
}

export const mutations = {

  [SET_ASSETS]: (state, assets) => {
    state.assets = state.assets.concat(formatAssets(assets, state.conversionEuroToUsd))
  },
  [SET_ASSETS_FAVORITE]: (state, assets) => {
    state.assetsFavorite = formatAssets(assets, state.conversionEuroToUsd)
  },
  [SET_ASSET_SELECTED]: (state, assetSelected) => {
    state.assetSelected = formatAsset(assetSelected, state.conversionEuroToUsd)
  },
  [SET_CURRENCY]: (state, currency) => {
    state.currency = currency
  },
  [SET_THEME]: (state, theme) => {
    state.theme = theme
  },
  [CHECK_FAVORITE]: (state, asset) => {
    asset.favorite = true
  },
  [UNCHECK_FAVORITE]: (state, asset) => {
    asset.favorite = false
  },
  [RESET_ASSETS]: (state) => {
    state.assets = []
  },
  [SET_CONVERSION_EURO_TO_DOLLAR]: (state, value) => {
    state.conversionEuroToUsd = value
  },
  [SET_HISTORY_BY_ID]: (state, history) => {
    state.history = formatAssets(history, state.conversionEuroToUsd)
  }
}

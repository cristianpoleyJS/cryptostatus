import { getAssets, getAssetById, getRates, getAssetHistoryById } from '@/api'
import { CURRENCY_USD, THEME_LIGHT } from '@/utils/constants'
import { formatAsset, formatAssets } from '@/utils'

export const SET_CONVERSION_EURO_TO_DOLLAR = 'SET_CONVERSION_EURO_TO_DOLLAR'
export const SET_ASSETS_FAVORITE = 'SET_ASSETS_FAVORITE'
export const RESET_ASSETS_FINDED = 'RESET_ASSETS_FINDED'
export const SET_ASSET_SELECTED = 'SET_ASSET_SELECTED'
export const SET_ASSETS_FINDED = 'SET_ASSETS_FINDED'
export const SET_HISTORY_BY_ID = 'SET_HISTORY_BY_ID'
export const UNCHECK_FAVORITE = 'UNCHECK_FAVORITE'
export const CHECK_FAVORITE = 'CHECK_FAVORITE'
export const RESET_ASSETS = 'RESET_ASSETS'
export const SET_CURRENCY = 'SET_CURRENCY'
export const SET_ASSETS = 'SET_ASSETS'
export const SET_THEME = 'SET_THEME'

export const state = () => ({
  assets: [],
  assetsFinded: [],
  assetsFavorite: [],
  assetSelected: {},
  history: [],
  theme: THEME_LIGHT,
  currency: CURRENCY_USD,
  conversionEuroToUsd: 0
})

export const getters = {

  getAssets: state => state.assets,

  getAssetsFinded: state => state.assetsFinded,

  getAssetsFavorites: state => state.assetsFavorite,

  getAssetSelected: state => state.assetSelected,

  getHistory: state => state.history,

  getCurrency: state => state.currency,

  getTheme: state => state.theme
}
export const actions = {

  async actionGetRateEuro ({ commit, state }) {
    // Avoid making a call to get the euro value if it is already updated in the state.
    if (state.conversionEuroToUsd === 0) {
      const { data } = await getRates({ id: 'euro' })
      commit(SET_CONVERSION_EURO_TO_DOLLAR, 1 / data.rateUsd)
    }
  },

  async actionGetAssets ({ commit, dispatch }, { limit, offset, text }) {
    await dispatch('actionGetRateEuro')
    const { data } = await getAssets({ limit, offset, text })
    // If there is text it means that you are looking for an asset
    text
      ? commit(SET_ASSETS_FINDED, data)
      : commit(SET_ASSETS, data)
  },

  async actionGetFavoritesAssets ({ commit, dispatch }) {
    await dispatch('actionGetRateEuro')
    const currentObjectFavorites = JSON.parse(localStorage.getItem('cryptoNineFavorites'))
    if (currentObjectFavorites && Object.keys(currentObjectFavorites).length) {
      const { data } = await getAssets({ ids: Object.keys(currentObjectFavorites).join(',') })
      commit(SET_ASSETS_FAVORITE, data)
    }
  },

  async actionGetAssetById ({ commit, dispatch }, id) {
    await dispatch('actionGetRateEuro')
    const { data } = await getAssetById(id)
    commit(SET_ASSET_SELECTED, data)
  },

  async actionGetHistoryById ({ state }, { id }) {
    const { data } = await getAssetHistoryById({ id })
    return formatAssets(data, state.conversionEuroToUsd)
  },

  actionCheckFavorite ({ commit }, assetClicked) {
    commit(CHECK_FAVORITE, assetClicked)
    const currentObjectFavorites = JSON.parse(localStorage.getItem('cryptoNineFavorites'))
    const id = assetClicked.id
    const object = {}
    object[id] = true
    localStorage.setItem('cryptoNineFavorites', currentObjectFavorites
      ? JSON.stringify({
        ...currentObjectFavorites,
        ...object
      })
      : JSON.stringify(object))
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
    state.assetsFavorite = []
  },
  [SET_CONVERSION_EURO_TO_DOLLAR]: (state, value) => {
    state.conversionEuroToUsd = value
  },
  [SET_HISTORY_BY_ID]: (state, history) => {
    state.history = formatAssets(history, state.conversionEuroToUsd)
  },
  [SET_ASSETS_FINDED]: (state, assetsFinded) => {
    state.assetsFinded = formatAssets(assetsFinded, state.conversionEuroToUsd)
  },
  [RESET_ASSETS_FINDED]: (state) => {
    state.assetsFinded = []
  }
}

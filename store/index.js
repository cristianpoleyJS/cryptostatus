import { getAssets, getAssetById } from '@/api'
import { formatAsset, formatAssets } from '@/utils'
import { CURRENCY_DOLAR, THEME_LIGHT } from '@/utils/constants'

export const SET_ASSETS_FAVORITE = 'SET_ASSETS_FAVORITE'
export const SET_ASSET_SELECTED = 'SET_ASSET_SELECTED'
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
  currency: CURRENCY_DOLAR,
  theme: THEME_LIGHT
})

export const getters = {

  getAssets: state => state.assets,

  getAssetsFavorites: state => state.assetsFavorite,

  getAssetSelected: state => state.assetSelected,

  getCurrency: state => state.currency,

  getTheme: state => state.theme
}
export const actions = {

  async actionGetAssets ({ commit }, { limit, offset }) {
    const response = await getAssets({ limit, offset })
    const { data } = await response.json()
    commit(SET_ASSETS, formatAssets(data))
  },

  async actionGetFavoritesAssets ({ commit }) {
    const currentObjectFavorites = JSON.parse(localStorage.getItem('cryptoNineFavorites'))
    if (Object.keys(currentObjectFavorites).length) {
      const response = await getAssets({ ids: Object.keys(currentObjectFavorites).join(',') })
      const { data } = await response.json()
      commit(SET_ASSETS_FAVORITE, formatAssets(data))
    }
  },

  async actionGetAssetById ({ commit }, id) {
    const response = await getAssetById(id)
    const { data } = await response.json()
    commit(SET_ASSET_SELECTED, formatAsset(data))
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
    state.assets = state.assets.concat(assets)
  },
  [SET_ASSETS_FAVORITE]: (state, assets) => {
    state.assetsFavorite = assets
  },
  [SET_ASSET_SELECTED]: (state, assetSelected) => {
    state.assetSelected = assetSelected
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
  }
}

import { getAssets, getAssetById } from '@/api'

export const SET_ASSET_SELECTED = 'SET_ASSET_SELECTED'
export const SET_CURRENCY = 'SET_CURRENCY'
export const SET_ASSETS = 'SET_ASSETS'
export const SET_THEME = 'SET_THEME'

export const state = () => ({
  assets: [],
  assetSelected: {},
  currency: 'eur',
  theme: 'light'
})

export const getters = {

  getAssets: state => state.assets,

  getAssetSelected: state => state.assetSelected,

  getCurrency: state => state.currency,

  getTheme: state => state.theme
}
export const actions = {
  async actionGetAssets ({ commit }, { limit, offset }) {
    const response = await getAssets({ limit, offset })
    const { data } = await response.json()
    commit(SET_ASSETS, data)
  },

  async actionGetAssetById ({ commit }, id) {
    const response = await getAssetById(id)
    const { data } = await response.json()
    commit(SET_ASSET_SELECTED, data)
  }
}

export const mutations = {

  [SET_ASSETS]: (state, assets) => {
    state.assets = state.assets.concat(assets)
  },
  [SET_ASSET_SELECTED]: (state, assetSelected) => {
    state.assetSelected = assetSelected
  },
  [SET_CURRENCY]: (state, currency) => {
    state.currency = currency
  },
  [SET_THEME]: (state, theme) => {
    state.theme = theme
  }
}

import {
  CURRENCY_USD,
  CURRENCY_EUR,
  THEME_LIGHT,
  THEME_DARK
} from '@/utils/constants'
import {
  exampleAsset
} from '@/tests/mocks'
import {
  mutations,
  SET_ASSETS,
  SET_ASSETS_FAVORITE,
  SET_ASSET_SELECTED,
  SET_CURRENCY,
  SET_THEME,
  CHECK_FAVORITE,
  UNCHECK_FAVORITE,
  RESET_ASSETS,
  SET_CONVERSION_EURO_TO_DOLLAR,
  SET_HISTORY_BY_ID
} from '@/store'

describe('Mutations Vuex', () => {
  let state
  beforeEach(() => {
    state = {
      assets: [],
      assetsFavorite: [],
      assetSelected: {},
      history: [],
      theme: THEME_LIGHT,
      currency: CURRENCY_USD,
      conversionEuroToUsd: 0.85
    }
  })
  it('set assets "state.assets" with [exampleAsset]', () => {
    expect(state.assets).toHaveLength(0)
    mutations[SET_ASSETS](state, [exampleAsset])
    expect(state.assets).toHaveLength(1)
  })
  it('set assetsFavorite "state.assetsFavorite" with [exampleAsset]', () => {
    expect(state.assetsFavorite).toHaveLength(0)
    mutations[SET_ASSETS_FAVORITE](state, [exampleAsset])
    expect(state.assetsFavorite).toHaveLength(1)
  })
  it('set assetSelected "state.assetSelected" with exampleAsset', () => {
    expect(state.assetSelected).toEqual({})
    mutations[SET_ASSET_SELECTED](state, exampleAsset)
    expect(state.assetSelected.id).toEqual(exampleAsset.id)
    expect(state.assetSelected.symbol).toEqual(exampleAsset.symbol)
  })
  it('change theme "state.theme" by DARK', () => {
    expect(state.theme).toBe(THEME_LIGHT)
    mutations[SET_THEME](state, THEME_DARK)
    expect(state.theme).toBe(THEME_DARK)
  })
  it('change currency "state.currency" by EURO', () => {
    expect(state.currency).toBe(CURRENCY_USD)
    mutations[SET_CURRENCY](state, CURRENCY_EUR)
    expect(state.currency).toBe(CURRENCY_EUR)
  })
  it('check "favorite" prop in exampleAsset', () => {
    expect(exampleAsset.favorite).toBe(false)
    mutations[CHECK_FAVORITE](state, exampleAsset)
    expect(exampleAsset.favorite).toBe(true)
  })
  it('uncheck "favorite" prop in exampleAsset', () => {
    mutations[UNCHECK_FAVORITE](state, exampleAsset)
    expect(exampleAsset.favorite).toBe(false)
  })
  it('reset assets "state.assets"', () => {
    expect(state.assets).toHaveLength(0)
    mutations[SET_ASSETS](state, [exampleAsset])
    expect(state.assets).toHaveLength(1)
    mutations[RESET_ASSETS](state)
    expect(state.assets).toHaveLength(0)
  })
  it('set conversionEuroToUsd "state.conversionEuroToUsd" with 1', () => {
    expect(state.conversionEuroToUsd).toEqual(0.85)
    mutations[SET_CONVERSION_EURO_TO_DOLLAR](state, 1)
    expect(state.conversionEuroToUsd).toEqual(1)
  })
  it('set history "state.history" with [exampleAsset]', () => {
    expect(state.history).toHaveLength(0)
    mutations[SET_HISTORY_BY_ID](state, [exampleAsset])
    expect(state.history).toHaveLength(1)
  })
})

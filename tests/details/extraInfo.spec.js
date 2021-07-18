import {
  CURRENCY_EURO,
  CURRENCY_USD
} from '@/utils/constants'
import {
  shallowMount,
  createLocalVue
} from '@vue/test-utils'
import ExtraInfo from '@/components/details/ExtraInfo.vue'
import {
  exampleAsset
} from '@/tests/mocks'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('ExtraInfo', () => {
  it('renders props when passed', () => {
    const store = new Vuex.Store({
      getters: {
        getCurrency: () => CURRENCY_USD
      }
    })
    const wrapper = shallowMount(ExtraInfo, {
      store,
      localVue,
      propsData: {
        asset: exampleAsset
      }
    })
    expect(wrapper.props().asset.symbol).toEqual(exampleAsset.symbol)
    expect(wrapper.props().asset.id).toEqual(exampleAsset.id)
  })

  it('check format currency USD', () => {
    const store = new Vuex.Store({
      getters: {
        getCurrency: () => CURRENCY_USD
      }
    })
    const wrapper = shallowMount(ExtraInfo, {
      store,
      localVue,
      propsData: {
        asset: exampleAsset
      }
    })
    expect(wrapper.vm.format(wrapper.props().price)).toMatch('$')
  })

  it('check format currency EURO', () => {
    const store = new Vuex.Store({
      getters: {
        getCurrency: () => CURRENCY_EURO
      }
    })
    const wrapper = shallowMount(ExtraInfo, {
      store,
      localVue,
      propsData: {
        asset: exampleAsset
      }
    })
    expect(wrapper.vm.format(wrapper.props().price)).toMatch('€')
  })
})

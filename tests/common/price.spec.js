import {
  CURRENCY_EURO,
  CURRENCY_USD
} from '@/utils/constants'
import {
  shallowMount,
  createLocalVue
} from '@vue/test-utils'
import Price from '@/components/common/Price.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Price', () => {
  it('renders props when passed', () => {
    const store = new Vuex.Store({
      getters: {
        getCurrency: () => CURRENCY_USD
      }
    })
    const wrapper = shallowMount(Price, {
      store,
      localVue,
      propsData: {
        price: 10000
      }
    })
    expect(wrapper.props().price).toBe(10000)
  })

  it('check format currency USD', () => {
    const store = new Vuex.Store({
      getters: {
        getCurrency: () => CURRENCY_USD
      }
    })
    const wrapper = shallowMount(Price, {
      store,
      localVue,
      propsData: {
        price: 10000
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
    const wrapper = shallowMount(Price, {
      store,
      localVue,
      propsData: {
        price: 10000
      }
    })
    expect(wrapper.vm.format(wrapper.props().price)).toMatch('€')
  })
})

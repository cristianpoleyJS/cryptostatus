import { mount, createLocalVue } from '@vue/test-utils'
import { exampleAsset } from '@/tests/mocks'
import ListAssets from '@/components/dashboard/ListAssets.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('ListAssets.vue', () => {
  const stubs = ['InputSearch', 'Asset', 'EmptyResults', 'SkeletonPlaceholderListAssets', 'ButtonRefresh']

  let actions
  let getters
  let store

  beforeEach(() => {
    actions = {
      actionGetSearchAssets: jest.fn()
    }
    getters = {
      getAssetsFinded: jest.fn()
    }
    store = new Vuex.Store({
      actions,
      getters
    })
  })

  it('renders props when passed', () => {
    const wrapper = mount(ListAssets, {
      stubs,
      store,
      localVue,
      propsData: {
        assets: [exampleAsset]
      }
    })
    expect(wrapper.props().showSeeMore).toBe(true)
    expect(wrapper.props().loading).toBe(false)
  })

  it('check initial value computed', () => {
    const wrapper = mount(ListAssets, {
      stubs,
      store,
      localVue,
      propsData: {
        assets: [exampleAsset]
      }
    })
    expect(wrapper.vm.assetsFiltered.length).toEqual(1)
  })
})

import { mount } from '@vue/test-utils'
import { exampleAsset } from '@/tests/mocks'
import ListAssets from '@/components/dashboard/ListAssets.vue'

describe('ListAssets.vue', () => {
  const stubs = ['InputSearch', 'Asset', 'EmptyResults', 'SkeletonPlaceholderListAssets']

  it('renders props when passed', () => {
    const wrapper = mount(ListAssets, {
      stubs,
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
      propsData: {
        assets: [exampleAsset]
      }
    })
    expect(wrapper.vm.assetsFiltered.length).toEqual(1)
  })

  it('check value computed when typing inputSearch', () => {
    const wrapper = mount(ListAssets, {
      stubs,
      propsData: {
        assets: [exampleAsset]
      }
    })
    wrapper.setData({ inputSearch: 'this is a test' })
    expect(wrapper.vm.assetsFiltered.length).toEqual(0)
  })
})

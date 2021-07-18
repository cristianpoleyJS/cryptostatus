import { mount } from '@vue/test-utils'
import SkeletonPlaceholder from '@/components/common/SkeletonPlaceholder.vue'

describe('SkeletonPlaceholder', () => {
  it('renders props by default', () => {
    const wrapper = mount(SkeletonPlaceholder)
    const elem = wrapper.find('span')
    expect(elem.exists()).toBe(true)
  })
  it('renders props when passed', () => {
    const wrapper = mount(SkeletonPlaceholder, {
      propsData: {
        width: 100,
        height: 40,
        variant: 'circle'
      }
    })
    expect(wrapper.props().width).toEqual(100)
    expect(wrapper.props().height).toEqual(40)
    expect(wrapper.props().variant).toEqual('circle')
  })
})

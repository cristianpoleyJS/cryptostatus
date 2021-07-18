import { mount } from '@vue/test-utils'
import ChangePercent from '@/components/common/ChangePercent.vue'

describe('ChangePercent.vue', () => {
  it('renders props when passed', () => {
    const wrapper = mount(ChangePercent, {
      propsData: {
        percent: 20
      }
    })
    const elem = wrapper.find('span')
    expect(elem.exists()).toBe(true)
  })

  it('check positive symbol number', () => {
    const wrapper = mount(ChangePercent, {
      propsData: {
        percent: 20
      }
    })
    const numberFormat = wrapper.vm.format(wrapper.props().percent)
    expect(numberFormat).toMatch('+')
  })

  it('check negative symbol number', () => {
    const wrapper = mount(ChangePercent, {
      propsData: {
        percent: -20
      }
    })
    const numberFormat = wrapper.vm.format(wrapper.props().percent)
    expect(numberFormat).toMatch('-')
  })
})

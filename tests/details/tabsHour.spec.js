import { mount } from '@vue/test-utils'
import TabsHours from '@/components/details/TabsHours.vue'
import { TAB_ALL, TAB_1Y, TAB_3M, TAB_1M, TAB_7D, TAB_1D } from '@/utils/constants'

describe('TabsHours.vue', () => {
  it('check if prop "tabSelected" is TAB_ALL by default', () => {
    const wrapper = mount(TabsHours)
    expect(wrapper.props().tabSelected).toEqual(TAB_ALL)
  })

  it('check value data "tabs"', () => {
    const wrapper = mount(TabsHours)
    expect(wrapper.vm.$data.tabs).toContain(TAB_ALL)
    expect(wrapper.vm.$data.tabs).toContain(TAB_1Y)
    expect(wrapper.vm.$data.tabs).toContain(TAB_3M)
    expect(wrapper.vm.$data.tabs).toContain(TAB_1M)
    expect(wrapper.vm.$data.tabs).toContain(TAB_7D)
    expect(wrapper.vm.$data.tabs).toContain(TAB_1D)
  })
})

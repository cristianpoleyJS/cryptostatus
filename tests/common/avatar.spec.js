import { mount } from '@vue/test-utils'
import AvatarUser from '@/components/common/AvatarUser.vue'

describe('AvatarUser', () => {
  it('check if render component', () => {
    const wrapper = mount(AvatarUser)
    const elem = wrapper.find('span')
    expect(elem.exists()).toBe(true)
  })
})

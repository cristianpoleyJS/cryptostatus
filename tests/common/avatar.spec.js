import { mount } from '@vue/test-utils'
import AvatarUser from '@/components/common/AvatarUser.vue'

describe('AvatarUser', () => {
  it('renders props when passed', () => {
    const wrapper = mount(AvatarUser)
    const elem = wrapper.find('span')
    expect(elem.exists()).toBe(true)
  })
})

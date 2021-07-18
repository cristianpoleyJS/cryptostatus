import {
  mount,
  shallowMount,
  createLocalVue
} from '@vue/test-utils'
import Favorite from '@/components/common/Favorite.vue'
import {
  exampleAsset
} from '@/tests/mocks'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Favorite', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      actionCheckFavorite: jest.fn(),
      actionUncheckFavorite: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('isFavorite is false by default', () => {
    const wrapper = mount(Favorite, {
      propsData: {
        assetClicked: exampleAsset
      }
    })
    expect(wrapper.vm.isFavorite).toBe(false)
  })

  it('check class icon when favorite is True', () => {
    const wrapper = mount(Favorite, {
      propsData: {
        isFavorite: true,
        assetClicked: exampleAsset
      }
    })
    const elem = wrapper.find('i')
    expect(elem.classes('is-favorite')).toBe(true)
  })

  it('dispatches "actionUncheckFavorite" when isFavorite prop is False', () => {
    const wrapper = shallowMount(Favorite, {
      store,
      localVue,
      propsData: {
        assetClicked: exampleAsset
      }
    })
    wrapper.trigger('click')
    expect(actions.actionCheckFavorite).toHaveBeenCalled()
  })

  it('dispatches "actionCheckFavorite" when isFavorite prop is True', () => {
    const wrapper = shallowMount(Favorite, {
      store,
      localVue,
      propsData: {
        isFavorite: true,
        assetClicked: exampleAsset
      }
    })
    wrapper.trigger('click')
    expect(actions.actionUncheckFavorite).toHaveBeenCalled()
  })
})

import React from 'react'
import {mount} from 'enzyme'
import CentralBox from '~/l4_templates/central_box'
import SignIn from '~/l3_organisms/forms/sign_in'
import SignInPage from './sign_in'

describe('サインインページについて', () => {
  const dummy = () => {}
  const wrapper = mount(
    <SignInPage
      updateText = {dummy}
    />
  )

  describe('レイアウトについて', () => {
    const target = wrapper.find(CentralBox)

    it('CentralBox であること', () => {
      expect(target).toHaveLength(1)
    })
  })

  describe('サインイパーツについて', () => {
    const target = wrapper.find(SignIn)

    it('SignIn があること', () => {
      expect(target).toHaveLength(1)
    })
    it('パラメータが渡されていること', () => {
      expect(target).toHaveProp({
        handleChange: dummy
      })
    })
  })
})

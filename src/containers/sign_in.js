import React from 'react'
import {useDispatch} from 'react-redux'
import SignInPage from '~/l5_pages/sign_in'
import signInModule from '~/modules/sign_in'


const Container = () => {

  const actions = signInModule.actions
  const dispatch = useDispatch()

  return (
    <SignInPage
      updateText  = {e => dispatch(actions.updateText({name: e.target.name, value: e.target.value}))} />
  )
}

export default Container

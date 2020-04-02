import React from 'react'
import {useDispatch} from 'react-redux'
import SignInPage from '~/l5_pages/sign_in'
import signInModule from '~/modules/sign_in'


const Container = () => {

  const actions = signInModule.actions
  const dispatch = useDispatch()

  const handleChange = e =>
    dispatch(actions.handleChange({name: e.target.name, value: e.target.value}))

  return (
    <SignInPage
      handleChange  = {handleChange}
      handleOK      = {e => {alert('OK')}}
      handleCancel  = {e => {alert('Cancel')}}
    />
  )
}

export default Container

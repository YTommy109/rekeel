import React from 'react'
import {useRecoilState} from 'recoil'
import atoms from './atoms'
import SignInPage from 'l5_pages/sign_in'

const Container = () => {
  const [auth, setAuth] = useRecoilState(atoms.authentication)
  const handleEntry = (e) =>
    setAuth((org) => ({...org, [e.target.name]: e.target.value}))

  return (
    <SignInPage
      {...auth}
      handleChange={handleEntry}
      handleOK={(e) => {
        alert(JSON.stringify(auth))
      }}
      handleCancel={(e) => {
        alert('Cancel')
      }}
    />
  )
}

export default Container

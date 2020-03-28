import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CentralBox from '~/l4_templates/central_box'
import SignIn from '~/l3_organisms/forms/sign_in'

// FIXME: form を使うのは、コンポーネントの実装が漏れてるから NG
const Div = styled.div`
  form {
    width: 480px;
  }
`

const SignInPage = ({...props}) =>
  <Div {...props}>
    <CentralBox>
      <SignIn
        handleChange  = {props.updateText}
        handleOK      = {props.handleOK}
        handleCancel  = {props.handleCancel}
      />
    </CentralBox>
  </Div>

SignInPage.propTypes = {
  updateText:   PropTypes.func.isRequired,
  handleOK:     PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
}

export default SignInPage

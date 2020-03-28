import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CentralBox from '~/l4_templates/central_box'
import SignIn from '~/l3_organisms/forms/sign_in'

export const SignInPagePure = ({className, ...props}) =>
  <div className={className}>
    <CentralBox>
      <SignIn
        handleChange  = {props.updateText}
        handleOK      = {props.handleOK}
        handleCancel  = {props.handleCancel}
      />
    </CentralBox>
  </div>

SignInPagePure.propTypes = {
  className:    PropTypes.string,
  updateText:   PropTypes.func,
  handleOK:     PropTypes.func,
  handleCancel: PropTypes.func
}

const SignInPage = styled(SignInPagePure)`
    [name="sign_in_form"] {
        width: 360px;
    }
`

export default SignInPage

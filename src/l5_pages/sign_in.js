import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CentralBoxPure from '~/l4_templates/central_box'
import SignIn from '~/l3_organisms/forms/sign_in'

export const SignInPagePure = ({className, ...props}) =>
  <div className={className}>
    <CentralBoxPure>
      <SignIn />
    </CentralBoxPure>
  </div>

SignInPagePure.propTypes = {
  className:    PropTypes.string
}

const SignInPage = styled(SignInPagePure)`
    [name="sign_in_form"] {
        width: 360px;
    }
`

export default SignInPage

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TextWithLabel from '~/l2_molecules/forms/text_with_label'
import PswdWithLabel from '~/l2_molecules/forms/pswd_with_label'
import TwoButton from '~/l2_molecules/toolbar/two_button'

export const SignInPure = ({className, ...props}) =>
  <div className={className} name="sign_in_form">
    <form>
      <fieldset>
        <legend>サインイン</legend>
        <TextWithLabel
          id            = "account"
          name          = "account"
          label         = "アカウント"
          handleChange  = {props.handleChange}
        />
        <PswdWithLabel
          id            = "password"
          name          = "password"
          label         = "パスフレーズ"
          handleChange  = {props.handleChange}
        />
        <TwoButton
          config      = {[{
            id:     'cancel',
            name:   'cancel',
            label:  'キャンセル'
          }, {
            id:     'signin',
            name:   'signin',
            label:  'サインイン'
          }]}
        />
      </fieldset>
    </form>
  </div>

SignInPure.propTypes = {
  className:    PropTypes.string,
  handleChange: PropTypes.func
}

const SignIn = styled(SignInPure)`
  fieldset {
    border:         solid medium silver;
    border-radius:  10px;
    display:        grid;
    grid-gap:       30px;
  }
`

export default SignIn

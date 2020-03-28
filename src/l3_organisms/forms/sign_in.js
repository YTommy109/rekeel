import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TextWithLabel from '~/l2_molecules/forms/text_with_label'
import PswdWithLabel from '~/l2_molecules/forms/pswd_with_label'
import TwoButton from '~/l2_molecules/toolbar/two_button'

const Div = styled.div`
  fieldset {
    border:         solid medium silver;
    border-radius:  10px;
    display:        grid;
    grid-gap:       30px;
  }
`

const SignIn = ({handleChange, handleOK, handleCancel, ...props}) =>
  <Div {...props}>
    <form>
      <fieldset>
        <legend data-testid="label">サインインしてください</legend>
        <TextWithLabel
          id            = "account"
          name          = "account"
          label         = "アカウント"
          handleChange  = {handleChange}
          autoComplete  = "username"
        />
        <PswdWithLabel
          id            = "password"
          name          = "password"
          label         = "パスフレーズ"
          handleChange  = {handleChange}
        />
        <TwoButton
          data-testid   = 'buttonbar'
          config        = {[{
            id:           'cancel',
            name:         'cancel',
            label:        'キャンセル',
            handleClick:  handleCancel
          }, {
            id:           'signin',
            name:         'signin',
            label:        'サインイン',
            handleClick:  handleOK
          }]}
        />
      </fieldset>
    </form>
  </Div>

SignIn.propTypes = {
  handleChange: PropTypes.func,
  handleOK:     PropTypes.func,
  handleCancel: PropTypes.func
}
  
export default SignIn

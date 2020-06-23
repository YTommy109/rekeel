import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TextWithLabel from '~/l2_molecules/forms/text_with_label'
import PswdWithLabel from '~/l2_molecules/forms/pswd_with_label'
import Button from '~/l1_atoms/button'
import RightArrangeTray from '~/l4_templates/tray'


const Fieldset = styled.fieldset`
  border:         solid medium silver;
  border-radius:  10px;
  display:        grid;
  grid-gap:       30px;
`

const SignIn = ({handleChange, handleOK, handleCancel, ...props}) =>
  <div>
    <form>
      <Fieldset>
        <legend data-testid="label">サインインしてください</legend>
        <TextWithLabel
          id            = "account"
          name          = "account"
          label         = "アカウント"
          value         = {props.account}
          handleChange  = {handleChange}
          autoComplete  = "username"
        />
        <PswdWithLabel
          id            = "password"
          name          = "password"
          label         = "パスフレーズ"
          handleChange  = {handleChange}
          value         = {props.password}
        />
        <RightArrangeTray data-testid='buttonbar'>
          <Button
            id          = 'cancel'
            name        = 'cancel'
            label       = 'キャンセル'
            handleClick = {handleCancel}
          />
          <Button
            id          = 'signin'
            name        = 'signin'
            label       = 'サインイン'
            btnStyle    = 'primary'
            handleClick = {handleOK}
          />

        </RightArrangeTray>
      </Fieldset>
    </form>
  </div>

SignIn.propTypes = {
  account:      PropTypes.string,
  password:     PropTypes.string,
  handleChange: PropTypes.func,
  handleOK:     PropTypes.func,
  handleCancel: PropTypes.func
}


export default SignIn

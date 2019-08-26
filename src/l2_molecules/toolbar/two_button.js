import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from '~/l1_atoms/button'

export const TwoButtonPure = ({className, config, ...props}) =>
  <div className={className}>
    <Button
      id        = {config[0].id}
      name      = {config[0].name}
      label     = {config[0].label}
      btnStyle  = "normal"
    />
    <Button
      id        = {config[1].id}
      name      = {config[1].name}
      label     = {config[1].label}
      btnStyle  = "primary"
    />
  </div>

TwoButtonPure.propTypes = {
  className:  PropTypes.string,
  config:     PropTypes.arrayOf(PropTypes.shape({
    id:       PropTypes.string.isRequired,
    name:     PropTypes.string.isRequired,
    label:    PropTypes.string.isRequired
  }))
}

const TwoButton = styled(TwoButtonPure)`
    text-align: right;
`

export default TwoButton

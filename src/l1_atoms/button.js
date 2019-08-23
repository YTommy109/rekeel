import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const ButtonPure = ({id, label, btnStyle, className, handleClick, disabled, ...props}) =>
  <button
    className = {className}
    id        = {id}
    onClick   = {handleClick}
    disabled  = {disabled || false}
  >
    {label}
  </button>

ButtonPure.propTypes = {
  id:           PropTypes.string.isRequired,
  label:        PropTypes.string.isRequired,
  btnStyle:     PropTypes.string,
  size:         PropTypes.string,
  className:    PropTypes.string,
  handleClick:  PropTypes.func,
  disabled:     PropTypes.bool
}

const color = {
  primary:  '#38468C',
  danger:   'red'
}

const size = {
  sm: {width: '120px', height: '36px'},
  md: {width: '150px', height: '40px'},
  lg: {width: '180px', height: '44px'}
}
const width = sz => sz ? size[sz].width : size['md'].width
const height = sz => sz ? size[sz].height : size['md'].height
const bgColor = st => st ? color[st] : color['primary']

const Button = styled(ButtonPure)`
  width:              ${props => width(props.size)};
  height:             ${props => height(props.size)};
  color:              white;
  background-color:   ${props => bgColor(props.btnStyle)};
  border-radius:      4px;
  :disabled {
    color:            #38468C;
    border:           1px solid #38468C;
    border-radius:    4px;
    background-color: #FFFFFF;
  }
`

export default Button

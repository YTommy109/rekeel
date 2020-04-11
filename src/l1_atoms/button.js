import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const color = {
  normal:   'skyblue',
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
const bgColor = st => st ? color[st] : color['skyblue']

const ButtonBase = styled.input`
  min-width:          ${props => width(props.size)};
  height:             ${props => height(props.size)};
  color:              white;
  background-color:   ${props => bgColor(props.btnStyle)};
  border-radius:      8px;
  transition:         all .3s ease-out;

  :disabled {
    color:            #38468C;
    border:           1px solid #38468C;
    border-radius:    8px;
    background-color: #FFFFFF;
  }
  :hover {
    color:              ${props => bgColor(props.btnStyle)};
    background-color:   white;
  }
`

const Button = ({label, handleClick, disabled, ...props}) =>
  <ButtonBase
    type      = "button"
    value     = {label}
    onClick   = {handleClick}
    {...props}
  />

Button.propTypes = {
  id:           PropTypes.string.isRequired,
  label:        PropTypes.string.isRequired,
  btnStyle:     PropTypes.oneOf(['normal', 'primary', 'danger']),
  size:         PropTypes.oneOf(['sm', 'md', 'lg']),
  handleClick:  PropTypes.func,
  disabled:     PropTypes.bool
}
Button.defaultProps = {
  disabled: false
}

export default Button

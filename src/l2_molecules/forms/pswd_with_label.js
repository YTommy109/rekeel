import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const PswdWithLabelPure = ({className, id, name, label, value, placeholder, ...props}) =>
  <div className={className}>
    <label htmlFor={id}>{label}</label>
    <input
      type          = "password"
      id            = {id}
      name          = {name}
      value         = {value}
      placeholder   = {placeholder}
      onChange      = {props.handleChange}
    />
  </div>

PswdWithLabelPure.propTypes = {
  className:    PropTypes.string,
  id:           PropTypes.string.isRequired,
  name:         PropTypes.string.isRequired,
  label:        PropTypes.string.isRequired,
  value:        PropTypes.string,
  placeholder:  PropTypes.string,
  handleChange: PropTypes.func
}

const PswdWithLabel = styled(PswdWithLabelPure)`
    display:                grid;
    grid-template-columns:  200px;
    grid-row-gap:           10px;
`

export default PswdWithLabel

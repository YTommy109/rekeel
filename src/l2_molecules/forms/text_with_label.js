import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Div = styled.div`
    display:                grid;
    grid-template-columns:  1fr;
    grid-row-gap:           10px;
`

const TextWithLabel = ({id, label, handleChange, ...props}) =>
  <Div>
    <label htmlFor={id}>{label}</label>
    <input
      type          = "text"
      id            = {id}
      onChange      = {handleChange}
      {...props}
    />
  </Div>

TextWithLabel.propTypes = {
  id:           PropTypes.string.isRequired,
  name:         PropTypes.string.isRequired,
  label:        PropTypes.string.isRequired,
  value:        PropTypes.string,
  placeholder:  PropTypes.string,
  autoComplete: PropTypes.string,
  handleChange: PropTypes.func
}

export default TextWithLabel

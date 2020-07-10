import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SwitchBase = styled.div`
  display:              inline-block;
  font-size:            1.4em;
  background-color:     darkred;
  border-radius:        20px;

  input {
    display: None;
  }

  label {
    margin:             3px;
    display:            inline-block;
    color:              silver;
    text-align:         center;
    width:              80px;
    height:             30px;
    border-radius:      20px;
    transition:         all .3s ease-out;
  }

  input:checked + label {
    background-color:   white;
    color:              black;
  }
`

const Switch = ({id, name, value, items, ...props}) =>
  <SwitchBase {...props}>
    {items.map((it, idx) =>
      <React.Fragment key={idx}>
        <input
          type      = "radio"
          name      = {name}
          id        = {`${id}_${idx}`}
          checked   = {it.value===value}
          onChange  = {props.handleChange}
        />
        <label htmlFor={`${id}_${idx}`}>
          {it.label}
        </label>
      </React.Fragment>
    )}
  </SwitchBase>

Switch.propTypes = {
  id:           PropTypes.string,
  name:         PropTypes.string,
  value:        PropTypes.string,
  items:        PropTypes.arrayOf(PropTypes.shape({
    label:      PropTypes.string.isRequired,
    value:      PropTypes.string.isRequired
  })),
  handleChange: PropTypes.func
}

Switch.defaultProps = {
  id:           'switch001',
  name:         'switch001'
}

export default Switch

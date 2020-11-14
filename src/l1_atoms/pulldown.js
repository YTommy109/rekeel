import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'

const Div = styled.div`
  position:             relative;
  
  svg {
      position:         absolute;
      pointer-events:   none;
      right:            15px;
      top:              10px;
  }

  select {
    outline:            none;
    appearance:         none;
    height:             40px;
    padding:            8px 12px;
    border:             1px solid #ddd;
    width:              100%;
    border-radius:      3px;
  }
`

const PullDown = ({id, name, items, value, ...props}) =>
  <Div>
    <FontAwesomeIcon icon={faAngleDown} size="lg"/>
    <select id={id} name={name} onChange={props.handleChange} value={value} required data-testid="select">
      <option value="" hidden>{props.placeholder}</option>
      {items && items.map((item, idx) =>
        <option key={idx} value={item.value}>
          {item.label}
        </option>
      )}
      
    </select>
  </Div>

PullDown.propTypes = {
  id:           PropTypes.string.isRequired,
  name:         PropTypes.string.isRequired,
  value:        PropTypes.string,
  items:        PropTypes.arrayOf(PropTypes.shape({
    label:      PropTypes.string,
    value:      PropTypes.string
  })),
  placeholder:  PropTypes.string,
  handleChange: PropTypes.func
}
PullDown.defaultProps = {
  value:        ''
}

export default PullDown

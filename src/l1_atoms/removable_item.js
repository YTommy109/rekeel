import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'

const Li = styled.li`
  border-bottom:          1px solid #FFF;
  list-style-position:    inside;
  display:                grid;
  grid-template-columns:  1fr 4rem;
  align-items:            center;
  padding-left:           1rem;

  button {
    width:                2rem;
    height:               2rem;
    text-align:           center;
    :hover {
      background-color:   rgba(0,157,255,0.1);
    }
  }

  svg {
    color:                #FFF;
  }

  svg:hover {
    color:                #2677F8;
  }

  svg::before {
    display:              inline-block;
    line-height:          4rem;
  }
`

const RemovableItem = ({label, index, handleRemove, ...props}) =>
  <Li>
    {label}
    <button onClick={() => handleRemove(index)} data-testid="btn001">
      <FontAwesomeIcon icon={faTimesCircle} size="1x"/>
    </button>
  </Li>

RemovableItem.propTypes = {
  label:                    PropTypes.string,
  index:                    PropTypes.number,
  handleRemove:             PropTypes.func
}


export default RemovableItem

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const FramePure = ({className, ...props}) =>
  <div className={className}>
    {props.children}
  </div>

FramePure.propTypes = {
  className:    PropTypes.string,
  children:     PropTypes.node
}
  
const Frame = styled(FramePure)`
  width:          ${props => props.width || '640px'};
  border:         solid thin gainsboro;
  border-radius:  10px;
  padding:        8px;
`

export default Frame

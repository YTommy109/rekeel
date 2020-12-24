import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FrameBase = styled.div`
  width:          ${props => props.width ?? '640px'};
  border:         solid thin gainsboro;
  border-radius:  10px;
  padding:        8px;
`

const Frame = props =>
  <FrameBase {...props} />

Frame.propTypes = {
  children:     PropTypes.node
}
  
export default Frame

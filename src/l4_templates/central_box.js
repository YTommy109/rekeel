import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const CentralBoxPure = ({className, children, ...props}) =>
  <div className={className}>
    <div>{children}</div>
  </div>

CentralBoxPure.propTypes = {
  className:    PropTypes.string,
  children:     PropTypes.string
}

const CentralBox = styled(CentralBoxPure)`
    display:            grid;
    height:             100vh;
    justify-content:    center;
    align-items:        center;
`

export default CentralBox

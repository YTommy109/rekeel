import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Div = styled.div`
    display:            grid;
    height:             100vh;
    justify-content:    center;
    align-items:        center;
`

const CentralBox = ({children, ...props}) =>
  <Div {...props}>{children}</Div>

CentralBox.propTypes = {
  children:     PropTypes.node
}

export default CentralBox

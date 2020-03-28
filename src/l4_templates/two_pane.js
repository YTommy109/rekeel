import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Div = styled.div`
    display:                grid;
    grid-template-columns:  80% 20%;
    height:                 100vh;
    justify-content:        left;
    div:first-child {
      padding:              5px;
    }
    .pane:nth-child(2) {
      background-color:     whitesmoke;
      text-align:           left;
    }
`

const TwoPain = ({children, drawer, ...props}) =>
  <Div {...props}>
    <div className="pane">{children}</div>
    <div className="pane">{drawer}</div>
  </Div>

TwoPain.propTypes = {
  children:     PropTypes.node,
  drawer:       PropTypes.node
}

export default TwoPain

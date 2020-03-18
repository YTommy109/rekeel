import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const TwoPanePure = ({className, children, drawer, ...props}) =>
  <div className={className}>
    <div className="pane">{children}</div>
    <div className="pane">{drawer}</div>
  </div>

TwoPanePure.propTypes = {
  className:    PropTypes.string,
  children:     PropTypes.node,
  drawer:       PropTypes.node
}

const TwoPain = styled(TwoPanePure)`
    display:                grid;
    grid-template-columns:  80% 20%;
    height:                 100vh;
    justify-content:        left;
    div:first-child {
      padding:       5px;
    }
    .pane:nth-child(2) {
      background-color:     whitesmoke;
      text-align:           left;
    }
`

export default TwoPain

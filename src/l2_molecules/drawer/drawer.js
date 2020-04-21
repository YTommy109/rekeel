import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const Div = styled.div`
  background-color: silver;
  .drawer-enter {
    width:      10px;
  }
  .drawer-enter-active {
    width:      300px;
    transition: all .5s ease-in-out;
  }
  .drawer-exit {
    width:      300px;
    opacity:    1; /* opacityの規定値は1だが、省略不可 */
  }
  .drawer-exit-active {
    width:      10px;
    transition: all .5s ease-in-out;
  }
`

const Drawer = ({children, isShow, ...props}) =>
  <Div>
    <CSSTransition
      in          = {isShow}
      timeout     = {500}
      classNames  = "drawer"
    >
      {children[0]}
    </CSSTransition>
    {children[1]}
  </Div>

Drawer.propTypes = {
  children:     PropTypes.arrayOf(PropTypes.element),
  isShow:       PropTypes.bool
}

Drawer.defaultProps = {
  isShow:       false
}


export default Drawer

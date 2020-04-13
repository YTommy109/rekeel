import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {CSSTransition} from 'react-transition-group'

const style = {
  normal:   {font: 'blue',  bg: 'skyblue'},
  danger:   {font: 'red',   bg: 'pink'}
}

const Div = styled.div`
  p {
    padding:          3px;
    color:            ${props => style[props.msgStyle].font};
    background-color: ${props => style[props.msgStyle].bg};
  }
  .msg-enter {
    opacity:          0;
  }
  .msg-enter-active {
    opacity:          1;
    transition:       opacity 500ms;
  }
  .msg-exit {
    opacity:          1;
  }
  .msg-exit-active {
    opacity:          0;
    transition:       opacity 500ms;
  }
`

const MessageBar = ({message, isShow, ...props}) =>
  <Div {...props}>
    {!isShow && <br />}
    <CSSTransition
      in          = {isShow}
      timeout     = {500}
      classNames  = "msg"
      unmountOnExit
    >
      <p>{message}</p>
    </CSSTransition>
  </Div>

MessageBar.propTypes = {
  message:      PropTypes.string,
  msgStyle:     PropTypes.string,
  isShow:       PropTypes.bool
}

MessageBar.defaultProps = {
  msgStyle:     'normal',
  isShow:       false
}

export default MessageBar

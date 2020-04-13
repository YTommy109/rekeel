import React, {useState} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {CSSTransition} from 'react-transition-group'

const style = {
  normal:   {font: 'blue', bg: 'skyblue'},
  danger:   {font: 'red', bg: 'pink'}
}

const Div = styled.div`
  p {
    padding:          3px;
    color:            ${props => style[props.msgStyle].font};
    background-color: ${props => style[props.msgStyle].bg};
  }
  .alert-enter {
    opacity: 0;
  }
  .alert-enter-active {
    opacity: 1;
    transition: opacity 500ms;
  }
  .alert-exit {
    opacity: 1;
  }
  .alert-exit-active {
    opacity: 0;
    transition: opacity 500ms;
  }
`

const Alert = ({message, ...props}) => {
  return (
    <Div {...props}>
      {!props.isShow && <br />}
      <CSSTransition
        in={props.isShow}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <p>{message}</p>
      </CSSTransition>
    </Div>
  )
}

Alert.propTypes = {
  message:      PropTypes.string,
  msgStyle:     PropTypes.string,
  isShow:       PropTypes.bool
}

Alert.defaultProps = {
  msgStyle:     'normal',
  isShow:       false
}

export default Alert

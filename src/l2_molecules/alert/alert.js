import React, {useState} from 'react'
import styled from 'styled-components'
import {CSSTransition} from 'react-transition-group'
import Button from '~/l1_atoms/button'

const AlertPure = () => {

  const [showButton, setShowButton] = useState(true)
  const [showMessage, setShowMessage] = useState(false)
  return (
    <div style={{paddingTop: '2rem'}}>
      {showButton && (
        <Button
          onClick={() => setShowMessage(true)}
          size="lg"
        >
          Show Message
        </Button>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <div
          variant="primary"
          dismissible
          onClose={() => setShowMessage(false)}
        >
          <h1>
            Animated alert message
          </h1>
          <p>
            This alert message is being transitioned in and
            out of the DOM.
          </p>
          <Button onClick={() => setShowMessage(false)}>
            Close
          </Button>
        </div>
      </CSSTransition>
    </div>
  )
}

const Alert = styled(AlertPure)`
.alert-enter {
  opacity: 0;
  transform: scale(0.9);
}
.alert-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 300ms, transform 300ms;
}
.alert-exit {
  opacity: 1;
}
.alert-exit-active {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 300ms, transform 300ms;
}

`

export default Alert

import React, {useState} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Div = styled.div`
  width:                100%;
  min-height:           10rem;
  display:              grid;
  align-items:          center;
  justify-content:      center;
`

const EmptyBox = ({message, ...props}) =>
  <Div>{message}</Div>

EmptyBox.propTypes = {
  message:  PropTypes.string
}

EmptyBox.defaultProps = {
  message:  'アイテムがありません。'
}


export default EmptyBox

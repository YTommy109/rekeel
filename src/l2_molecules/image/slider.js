import React, {useState} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Div = styled.div`
  position:       relative;
  display:        inline-block;

  div.on-image {
    position:     absolute;
    top:          0;
    bottom:       0;
    left:         0;
    width:        ${props => props.width};
    overflow:     hidden;
  }

  img {
    display:      block;
    user-select:  none;
    max-width:    none !important;
    width:        500px;
  }

  input {
    position:     absolute;
    left:         0;
    bottom:       10px;
    width:        100%;
    margin:       0;
  }

  /* スマホサイズで画像が大きすぎる場合は調整 */
  @media only screen and (max-width: 30em) {
    img {
      width:      300px;
    }
  }
`

const Slider = ({image1, image2, ...props}) => {
  const [width, setWidth] = useState('50%')

  return (
    <Div width={width} {...props}>
      <div className="on-image"><img src={image1} alt="over" /></div>
      <img src={image2} alt="under" />
      <input type="range" onChange={e=>setWidth(`${e.target.value}%`)} role="slider" />
    </Div>
  )
}

Slider.propTypes = {
  image1:       PropTypes.string.isRequired,
  image2:       PropTypes.string.isRequired
}

export default Slider

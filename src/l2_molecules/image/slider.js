import React, {useState} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const SliderPure = ({className, ...props}) =>
  <div className={className}>
    <div className="on-image"><img src={props.image1} data-testid="img1" /></div>
    <img src={props.image2}  data-testid="img2"/>
    <input type="range" onChange={props.handleChange} role="slider" />
  </div>

SliderPure.propTypes = {
  image1:       PropTypes.string,
  image2:       PropTypes.string,
  className:    PropTypes.string,
  handleChange: PropTypes.func
}

const SliderBase = styled(SliderPure)`
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

const Slider = props => {
  const [width, setWidth] = useState('50%')

  return (
    <SliderBase
      image1        = {props.image1}
      image2        = {props.image2}
      handleChange  = {evt => setWidth(`${evt.target.value}%`)}
      width         = {width}
    />
  )
}

Slider.propTypes = {
  image1:       PropTypes.string,
  image2:       PropTypes.string
}

export default Slider

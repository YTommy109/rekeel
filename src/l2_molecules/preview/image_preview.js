import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputBase = styled.div`
`

const ImageWithPreview = ({...props}) => {
  const [imagesrc, setSrc] = useState()
  const readImage = file => {
    if (! file) return setSrc(undefined)
    const reader = new FileReader()
    reader.onload = e => {setSrc(e.target.result)}
    reader.readAsDataURL(file)
  }
  return (
    <InputBase {...props}>
      <input type='file' accept="image/*" onChange={e=>readImage(e.target.files[0])} />
      {imagesrc && <img src={imagesrc} />}
    </InputBase>
  )
}

ImageWithPreview.propTypes = {
  // data:         PropTypes.object.isRequired
}

export default ImageWithPreview

import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputBase = styled.div`
`

const VideoWithPreview = ({time=0.1, ...props}) => {
  const [videosrc, setSrc] = useState()
  const [videotype, setType] = useState()
  const readVideo = file => {
    if (! file) return setSrc(undefined)
    setType(file.type)
    const reader = new FileReader()
    reader.onload = e => {setSrc(e.target.result)}
    reader.readAsDataURL(file)
  }
  return (
    <InputBase {...props}>
      <input type='file' accept="video/*" onChange={e=>readVideo(e.target.files[0])} />
      {videosrc && <video><source src={`${videosrc}#t=${time}`} type={videotype} /></video>}
    </InputBase>
  )
}

VideoWithPreview.propTypes = {
  time:         PropTypes.object.isRequired
}

export default VideoWithPreview

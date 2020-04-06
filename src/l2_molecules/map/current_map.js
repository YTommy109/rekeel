import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import L from 'leaflet'
import {Map, Marker, TileLayer, Polyline} from 'react-leaflet'
import Button from '~/l1_atoms/button'

const icon = new L.Icon({
  iconUrl:  'https://icooon-mono.com/i/icon_11212/icon_112120.svg',
  iconSize: [38, 95]
})

const Div = styled.div`
  width:    100%;
  height:   100%;
  .leaflet-container {
    height: 100%;
  }
`

const getCurrentPosition = options => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  })
}

const CurrentMap = ({points, handleClickOnMap, ...props}) => {
  const [center, setCenter] = useState(['35.685375', '139.752789'])
  const handleCurrent = async () => {
    const data = await getCurrentPosition({timeout: 5000})
    setCenter([`${data.coords.latitude}`, `${data.coords.longitude}`])
  }

  return (
    <Div {...props}>
      <Button
        id          = "current"
        label       = "現在地"
        size        = "sm"
        btnStyle    = "primary"
        handleClick = {handleCurrent}
      />
      <Map
        center      = {center}
        zoom        = {15}
        onClick     = {handleClickOnMap}
      >
        <TileLayer
          url         = "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
          attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          id          = 'mapbox/streets-v11'
          accessToken = {process.env.REACT_APP_MAPBOX_TOKEN || ''}
          tileSize    = {512}
          zoomOffset  = {-1}
          maxZoom     = {18}
        />
        <Polyline
          color       = "blue"
          positions   = {points}
        />
        {points.map((it, idx) =>
          <Marker key={idx} position={it} icon={icon} data-testid="point" />
        )}
      </Map>
    </Div>
  )
}

CurrentMap.propTypes = {
  center:           PropTypes.array.isRequired,
  points:           PropTypes.array.isRequired,
  handleClickOnMap: PropTypes.func
}

export default CurrentMap

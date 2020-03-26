import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import L from 'leaflet'
import {Map, Marker, TileLayer, Polyline} from 'react-leaflet'
import Button from '~/l1_atoms/button'

const icon = new L.Icon({
  iconUrl: 'https://icooon-mono.com/i/icon_11212/icon_112120.svg',
  iconSize: [38, 95]
})

export const CurrentMapPure = ({className, center, points, ...props}) =>
  <Fragment>
    <Button
      id          = "current"
      label       = "現在地"
      size        = "sm"
      btnStyle    = "primary"
      handleClick = {props.handleCurrent}
    />
    <Map className={className}
      center  = {center}
      zoom    = {15}
      onClick = {props.mapClickHandle}
    >
      <TileLayer
        url         = "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
        attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        id          = 'mapbox/streets-v11'
        accessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
        tileSize    = {512}
        zoomOffset  = {-1}
        maxZoom     = {18}
      />
      <Polyline
        color     = "blue"
        positions = {points}
      />
      {points.map((it, idx) =>
        <Marker key={idx} position={it} icon={icon} data-testid="point" />
      )}
    </Map>
  </Fragment>

CurrentMapPure.propTypes = {
  className:      PropTypes.string,
  center:         PropTypes.array,
  points:         PropTypes.array,
  handleCurrent:  PropTypes.func,
  mapClickHandle: PropTypes.func
}

const CurrentMap = styled(CurrentMapPure)`
  width:  600px;
  height: 400px;
  .leaflet-container {
    height: 400px;
  }
`

export default CurrentMap

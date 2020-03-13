import React from 'react'
import {shallow} from 'enzyme'
import {Map, TileLayer, Polyline, Marker} from 'react-leaflet'
import {CurrentMapPure} from './current_map'

describe('現在地マップについて', () => {
  const point = [35.651687, 139.789177]
  const points = [
    new L.LatLng(35.655640, 139.790989),
    new L.LatLng(35.652031, 139.793092),
    new L.LatLng(35.649076, 139.790860)
  ]
  const handle = () => {}
  
  const wrapper = shallow(
    <CurrentMapPure
      center          = {point}
      points          = {points}
      mapClickHandle  = {handle}
    />
  )

  it('Map があること', () => {
    const target = wrapper.find(Map)

    expect(target).toHaveProp({
      center:   point,
      onClick:  handle
    })
  })

  it('TileLayer があること', () => {
    const target = wrapper.find(TileLayer)

    expect(target).toHaveLength(1)
  })

  it('Polyline があること', () => {
    const target = wrapper.find(Polyline)

    expect(target).toHaveLength(1)
    expect(target).toHaveProp({
      positions: points
    })
  })

  it('Marker があること', () => {
    const target = wrapper.find(Marker)

    expect(target).toHaveLength(points.length)
  })
})

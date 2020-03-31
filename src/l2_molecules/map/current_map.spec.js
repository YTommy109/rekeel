import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import CurrentMap from './current_map'
jest.mock('leaflet')

describe('現在地マップについて', () => {
  const center = [35.651687, 139.789177]
  const points = [
    [35.655640, 139.790989],
    [35.652031, 139.793092],
    [35.649076, 139.790860]
  ]
  const handle = jest.fn()
  beforeEach(() => {
    handle.mockClear()
    render(
      <CurrentMap
        center = {center}
        points = {points}
      />
    )
  })

  // FIXME: React-leaflet が data-testid を消してしまう問題をどうするか?
  it.todo('Map があること')
  it.todo('TileLayer があること')
  it.todo('Polyline があること')
  it.todo('points と同じ数の Marker があること')
})

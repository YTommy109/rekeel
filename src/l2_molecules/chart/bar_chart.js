import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NVD3Chart from 'react-nvd3'

export const BarChartPure = ({id, className, ...props}) =>
  <div className={className}>
    <NVD3Chart
      id        = {id}
      type      = "discreteBarChart"
      datum     = {props.datum}
      x         = "label"
      y         = "value"
    />
  </div>

BarChartPure.propTypes = {
  className:    PropTypes.string,
  id:           PropTypes.string,
  datum:        PropTypes.object.isRequired
}

const BarChart = styled(BarChartPure)`
    display:                flex;
    justify-content:        center;
`

export default BarChart

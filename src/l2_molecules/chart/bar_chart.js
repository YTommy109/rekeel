import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NVD3Chart from 'react-nvd3'

const BarChartBase = styled.div`
    display:          flex;
    justify-content:  center;
`

const BarChart = ({datum, ...props}) =>
  <BarChartBase {...props}>
    <NVD3Chart
      type      = "discreteBarChart"
      datum     = {datum}
      x         = "label"
      y         = "value"
    />
  </BarChartBase>

BarChart.propTypes = {
  datum:        PropTypes.object.isRequired
}


export default BarChart

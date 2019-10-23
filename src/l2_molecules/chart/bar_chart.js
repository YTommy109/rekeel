import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NVD3Chart from 'react-nvd3'

const datum = [{
  key: 'Cumulative Return',
  values: [
    {
      'label' : 'A' ,
      'value' : -29.765957771107
    } ,
    {
      'label' : 'B' ,
      'value' : 0
    } ,
    {
      'label' : 'C' ,
      'value' : 32.807804682612
    } ,
    {
      'label' : 'D' ,
      'value' : 196.45946739256
    } ,
    {
      'label' : 'E' ,
      'value' : 0.19434030906893
    } ,
    {
      'label' : 'F' ,
      'value' : -98.079782601442
    } ,
    {
      'label' : 'G' ,
      'value' : -13.925743130903
    } ,
    {
      'label' : 'H' ,
      'value' : -5.1387322875705
    }
  ]
}
]

export const BarChartPure = ({id, className, ...props}) =>
  <div className={className}>
    <NVD3Chart
      id        = "barChart"
      type      = "discreteBarChart"
      datum     = {datum}
      x         = "label"
      y         = "value"
    />
  </div>

BarChartPure.propTypes = {
  className:    PropTypes.string,
  id:           PropTypes.string
}

const BarChart = styled(BarChartPure)`
    display:                flex;
    justify-content:        center;
`

export default BarChart

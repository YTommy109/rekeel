import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'

const LineChartBase = styled.div`
  width:  500px;
  height: 300px;
  margin: 5px 30px 5px 20px;
`

const LineChart2 = ({data, ...props}) =>
  <LineChartBase {...props}>
    <LineChart
      width   = {500}
      height  = {300}
      data    = {data}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}} />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  </LineChartBase>

LineChart2.propTypes = {
  data:         PropTypes.object.isRequired
}

export default LineChart2

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import PropTable from 'l2_molecules/dataview/prop_table'

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.length}, auto);
`

const MultiPropTable = ({data, ...props}) => (
  <Div length={data && data.length}>
    {data && data.map((datum, idx) => <PropTable key={idx} data={datum} />)}
  </Div>
)

MultiPropTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        value: PropTypes.string,
      })
    )
  ).isRequired,
}

export default MultiPropTable

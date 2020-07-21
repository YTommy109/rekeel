import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const DARK    = '#828c9a'
const BRIGHT  = '#FFF'

const Dl = styled.dl`
  border-right:             1px solid ${DARK};
  border-bottom:            1px solid ${DARK};
  display:                  grid;
  grid-template-columns:    repeat(2, auto);

  dt {
    background-color:       ${DARK};
    color:                  ${BRIGHT};
    padding:                1rem;
    border-top:             1px solid  ${DARK};
  }
  
  dd {
    margin-inline-start:    0;
    padding:                1rem;
    border-top:             1px solid  ${DARK};
  }
`

const PropTable = ({data, ...prop}) =>
  <Dl>
    {data.map((item, idx) =>
      <React.Fragment key={idx}>
        <dt>{item.title}</dt>
        <dd>{item.value}</dd>
      </React.Fragment>
    )}
  </Dl>

PropTable.propTypes = {
  data:           PropTypes.arrayOf(PropTypes.shape({
    title:        PropTypes.string.isRequired,
    value:        PropTypes.string,
  })).isRequired
}


export default PropTable

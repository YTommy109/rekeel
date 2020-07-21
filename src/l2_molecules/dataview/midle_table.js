import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const COLOR = {
  BASIC:  {
    FONT: '#FFF',
    BGC:  '#828c9a'
  },
  SELECT: {
    BGC:  'rgba(0,157,255,0.1)'
  }
}

const Table = styled.table`
  width:                  100%;
  height:                 100%;
  border-spacing:         0;
  border-collapse:        collapse;
  display:                grid;
  grid-template-rows:     4.5rem 1fr;
  
  tbody {
    overflow-y:           scroll;
  }

  tr {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(${props=>props.length}, 1fr);
    border-bottom:        1px solid #828c9a;;
    :hover{
      background-color:   ${COLOR.SELECT.BGC}; 
    }
  }

  th,td {
    padding:              1rem;
  }
  
  th {
    background-color:     ${COLOR.BASIC.BGC};
    color:                ${COLOR.BASIC.FONT};
    text-align:           left;
  }

  .active td {
    background-color:     ${COLOR.SELECT.BGC};    
  }

  
`

const MidleTable = ({header, data, focus, ...props}) =>
  <Table {...props} length={header?header.length:2}>
    <thead>
      <tr>
        {header.map((datum, idx) => <th key={idx}>{datum}</th>)}
      </tr>
    </thead>
    <tbody>
      {data && data.map((datum, seq) =>
        <tr
          key       = {seq}
          className = {seq===focus ? 'active' : ''}
          onClick   = {() => props.handleFocus && props.handleFocus(seq)}
        >
          {datum.map((item, idx) =>
            <td key={idx}>{item}</td>
          )}
        </tr>
      )}
    </tbody>
  </Table>

MidleTable.propTypes = {
  header:         PropTypes.arrayOf(PropTypes.string),
  data:           PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  focus:          PropTypes.number,
  handleFocus:    PropTypes.func
}


export default MidleTable

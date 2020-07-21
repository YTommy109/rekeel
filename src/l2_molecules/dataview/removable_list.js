import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import RemovableItem from '~/l1_atoms/removable_item'
import EmptyBox from '~/l1_atoms/empty_box'

const NotEmpty = ({data, handleRemove, ...props}) =>
  <ul>
    {data.map((it, idx) =>
      <RemovableItem
        key           = {idx}
        label         = {it.label}
        index         = {idx}
        handleRemove  = {handleRemove}
      />
    )}
  </ul>

NotEmpty.propTypes = {
  data:           PropTypes.arrayOf(PropTypes.shape({
    label:        PropTypes.string.isRequired
  })),
  handleRemove: PropTypes.func
}

const Div = styled.div`
  border:                   1px solid #FFF;
  height:                   100%;
  overflow:                 scroll;

  ul {
    padding:                0;
  }
`

const RemovableList = ({data, handleRemove, empty_message, ...props}) =>
  <Div>
    {data && data.length>0?
      <NotEmpty
        data          = {data}
        handleRemove  = {handleRemove}
      />:
      <EmptyBox
        message       = {empty_message}
      />
    }
  </Div>

RemovableList.propTypes = {
  empty_message:  PropTypes.string,
  handleRemove:   PropTypes.func,
  data:           PropTypes.arrayOf(PropTypes.shape({
    label:        PropTypes.string.isRequired
  }))
}


export default RemovableList

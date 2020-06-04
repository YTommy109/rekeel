import React from 'react'
import styled from 'styled-components'


/**
 * チルドレンを固定ギャップで右側に配置する。
 */
const RightArrangeTray = styled.div`
  width:                  100%;
  height:                 100%;
  display:                grid;
  grid-template-columns:  repeat(${props=>props.children.length}, auto);
  justify-content:        end;
  grid-column-gap:        1rem;
`

export default RightArrangeTray

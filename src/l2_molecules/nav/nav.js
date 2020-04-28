import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Nav = styled.nav`
  background-color:         darkblue;
  color:                    whitesmoke;
  display:                  grid;
  grid-template-columns:    10rem auto;
  height:                   6rem;
  align-items:              center;

  h1 {
    padding-left:           1rem;
  }
  ul {
    display:                grid;
    grid-template-columns:  8rem 8rem 8rem 8rem auto;
  }
  ul, li, a {
    height:                 100%;
  }
  li {
    display:                table;
  }
  a {
    color:                  whitesmoke;
    display:                table-cell;
    vertical-align:         middle;
    width:                  100%;
    text-decoration:        none;
    white-space:            nowrap;
    text-align:             center;
    transition:             all .3s ease-out;
    :hover {
      background-color:     whitesmoke;
      color:                darkblue;
    }
    &.active {
      border-top:           solid thick brown;
      border-bottom:        solid thick brown;
    }
  }
`

export const NavItem = ({href, id, isActive, children, ...props}) =>
  <li>
    <a id={id} href={href} className={isActive?'active':''}>{children}</a>
  </li>

NavItem.propTypes = {
  id:         PropTypes.string.isRequired,
  href:       PropTypes.string,
  isActive:   PropTypes.bool,
  children:   PropTypes.node
}
NavItem.defaultProps = {
  href:       '#'
}

const NavBar = ({brand, children, ...props}) =>
  <Nav>
    <h1>{brand}</h1>
    <ul>
      {children}
    </ul>
  </Nav>

NavBar.propTypes = {
  brand:      PropTypes.string,
  children:   PropTypes.node
}


export default NavBar

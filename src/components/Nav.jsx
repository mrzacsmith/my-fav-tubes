import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  background: rosybrown;
  display: flex;
  justify-content: space-between;
  h1 {
    margin: 1% 0 1% 1%;
  }
  ul {
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  li {
    list-style-type: none;
  }
`

const Nav = () => {
  return (
    <StyledNav>
      <h1>My Fav Tubes</h1>
      <ul>
        <li>YouTube</li>
        <li>Contact</li>
      </ul>
    </StyledNav>
  )
}

export default Nav

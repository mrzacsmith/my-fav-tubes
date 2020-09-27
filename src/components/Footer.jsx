import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  p {
    margin: ${(pr) => pr.theme.marginLarge};
  }
`

const Footer = () => {
  return (
    <StyledDiv>
      <p>Copyright &copy; 2020</p>
    </StyledDiv>
  )
}

export default Footer

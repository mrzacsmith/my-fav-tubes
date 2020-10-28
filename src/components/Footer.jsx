import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  background: ${(pr) => pr.theme.manatee};
  padding: ${(pr) => pr.theme.paddingLarge};
`

const Footer = () => {
  return (
    <StyledDiv>
      <p>
        Copyright &copy; 2020{' '}
        <a href="https://github.com/mrzacsmith" rel="noopener">
          @MrZacSmith
        </a>
      </p>
    </StyledDiv>
  )
}

export default Footer

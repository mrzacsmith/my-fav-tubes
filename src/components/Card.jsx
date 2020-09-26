import React from 'react'
import cuid from 'cuid'
import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 45%;
  height: 220px;
  background: #e9e9e9;
  border: ${(pr) => pr.theme.border};
  border-radius: ${(pr) => pr.theme.borderRadius};
  margin: 1% 0;
  padding: ${(pr) => pr.theme.paddingSmall} 0;
  p {
    margin-top: 2%;
  }
  &:hover {
    background: #c3c3c3;
    border: ${(pr) => pr.theme.borderHover};
    transition-timing-function: ease-in-out;
    transition-duration: 1s;
    cursor: pointer;
  }
`

const Card = ({ data }) => {
  const { url, votes } = data
  let urlFixed = url.replace('watch?v=', 'embed/')
  return (
    <StyledDiv>
      <iframe
        title={cuid()}
        width="90%"
        src={urlFixed}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>{votes}</p>
    </StyledDiv>
  )
}

export default Card

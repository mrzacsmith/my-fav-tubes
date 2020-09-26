import React from 'react'
import styled from 'styled-components'
import CardList from './CardList'

const StyledDiv = styled.div`
  height: 90vh;
  form {
    width: 80%;
    margin: ${(pr) => pr.theme.marginLarge} auto 0;
    display: flex;
    justify-content: space-between;
  }
  input {
    width: 70%;
    height: 35px;
    font-size: 1.2rem;
    padding-left: 1%;
  }
  button {
    width: 25%;
    font-size: 1.3rem;
    cursor: pointer;
  }
`

const Submit = () => {
  return (
    <StyledDiv>
      <form>
        <input type="text" placeholder="Enter your YouTube URL" />
        <button type="submit">submit</button>
      </form>
      <CardList />
    </StyledDiv>
  )
}

export default Submit

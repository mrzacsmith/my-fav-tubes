import React from 'react'

import Footer from './components/Footer'
import Nav from './components/Nav'
import Submit from './components/Submit'
import styled from 'styled-components'
import './App.css'

const StyledDiv = styled.div`
  max-width: 1000px;
  width: 100%;
  background: #f3f3f3;
  margin: 0 auto;
`

const App = () => {
  return (
    <StyledDiv className="App">
      <Nav />
      <Submit />
      <Footer />
    </StyledDiv>
  )
}

export default App

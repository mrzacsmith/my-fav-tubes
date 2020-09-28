import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Submit from './components/Submit'
import Contact from './components/Contact'
import styled from 'styled-components'
import './App.css'

const StyledDiv = styled.div`
  max-width: 1000px;
  width: 100%;
  background: ${(pr) => pr.theme.aliceBlue};
  margin: 0 auto;
`

const App = () => {
  return (
    <StyledDiv className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Submit />
        <Footer />
      </Router>
    </StyledDiv>
  )
}

export default App

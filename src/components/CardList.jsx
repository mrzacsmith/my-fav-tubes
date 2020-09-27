import React from 'react'
import styled from 'styled-components'
import Card from './Card.jsx'

const StyledDiv = styled.div`
  margin: ${(pr) => pr.theme.marginLarge} 0 0 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
// const data = [
//   {
//     _id: 1,
//     url: 'https://www.youtube.com/watch?v=ObZwFExwzOo',
//     votes: 1,
//   },
//   {
//     _id: 2,
//     url: 'https://www.youtube.com/watch?v=sN93DRYkCO8',
//     votes: 0,
//   },
//   {
//     _id: 3,
//     url: 'https://www.youtube.com/watch?v=W2Z7fbCLSTw',
//     votes: 10,
//   },
//   {
//     _id: 4,
//     url: 'https://www.youtube.com/watch?v=PJ0QSJpJn2U',
//     votes: 3,
//   },
// ]

const CardList = ({ data }) => {
  return (
    <StyledDiv>
      {data.map((card) => (
        <Card key={card._id} data={card} />
      ))}
    </StyledDiv>
  )
}

export default CardList

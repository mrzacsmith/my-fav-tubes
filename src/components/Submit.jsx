import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import CardList from './CardList'

const StyledDiv = styled.div`
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
    border-radius: 5px;
    border: 1px solid ${(pr) => pr.theme.manatee};
  }
  button {
    width: 25%;
    font-size: 1.3rem;
    background: ${(pr) => pr.theme.manatee};
    cursor: pointer;
    border: none;
    border-radius: 5px;
  }
  button:hover {
    background: ${(pr) => pr.theme.amaranthRed};
    transition: linear 0.5s;
  }
`

const Submit = () => {
  const [videos, setVideos] = useState([])
  const [update, setUpdate] = useState(false)
  const { handleSubmit, register, errors } = useForm()
  const url = 'http://localhost:5555/api/videos/'
  const onSubmit = (values) => {
    console.log('values', typeof values)
    axios
      .post(url, values)
      .then((res) => {
        setVideos(res.data)
        setUpdate(!update)
      })
      .catch((err) => console.log(`Error: ${err}`))
      .finally()
  }

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setVideos(res.data)
      })
      .catch((err) => console.log(`Error: ${err}`))
  }, [update])
  console.log('videos', videos)

  return (
    <StyledDiv>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter your YouTube URL"
          name="url"
          ref={register({
            required: 'Required',
            pattern: {
              // value: '',
              message: 'invalid YouTube url',
            },
          })}
        />
        {errors.url && errors.url.message}
        <button type="submit">submit</button>
      </form>
      <CardList data={videos} />
    </StyledDiv>
  )
}

export default Submit

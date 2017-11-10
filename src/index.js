import React from 'react'
import { render } from 'react-dom'
import { Page } from 'components'
import { observable } from 'mobx'
import styled from 'styled-components'
import EmailAutocompleteInput from './EmailAutocompleteInput'


const Col = styled.div`
  display:        flex;
  flex-direction: column;
  color:          white;
`

const Title = styled.h1`
  text-shadow: 1px 1px grey;
  font-weight: 100;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
`

const Input = styled(EmailAutocompleteInput)`
  font-family:      Helvetica, Arial, sans-serif;
  letter-spacing:   0.5px;
  line-height:      1.3em;
  display:          inline-block;
  box-sizing:       border-box;
  background-color: off-white;
  border-radius:    5px;
  outline:          none;
  border:           1px solid lightgray;
  border-image:     initial;
  padding:          0.5rem;
  border-radius:    3px;
  background:       white;
  width:            100%;
  font-size:        12pt;
`

const email = observable('')

render(
  <Page>
    <Col>
      <Title>Email Autocomplete Input</Title>
      <Input value={email} onChange={value => email.set(value)} />
    </Col>
  </Page>,
  document.getElementById('root')
)
import React from 'react'
import { render } from 'react-dom'
import { Page, Row, Col, Title, GithubLink as Link, Heart as Love } from 'components'
import { observable } from 'mobx'
import styled from 'styled-components'
import EmailAutocompleteInput from './EmailAutocompleteInput'


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

window.onload = () => {
  const input = document.getElementsByClassName('email-autocomplete-input')[0]
  input.focus()
}

const email = observable('')

render(
  <Page>
    <Col>
      <Title>Email Autocomplete Input</Title>
      <Input value={email} onChange={value => email.set(value)} />
      <Row>Made with <Love /> by <Link>@alex-cory</Link></Row>
    </Col>
  </Page>,
  document.getElementById('root')
)
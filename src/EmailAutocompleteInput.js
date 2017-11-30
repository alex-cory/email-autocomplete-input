import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { observer } from 'mobx-react'
import { observable, toJS } from 'mobx'


@observer
export default class EmailAutocompleteInput extends Component {
  @observable email = this.props.value || ''
  @observable isValid = null // yes, no, maybe, null
  domains = [...(this.props.domains || []), 'yahoo.com', 'hotmail.com', 'gmail.com', 'me.com', 'aol.com', 'mac.com', 'live.com', 'googlemail.com', 'msn.com', 'facebook.com', 'verizon.net', 'outlook.com', 'icloud.com', 'table.co']
  prevValue = ''
  prevEmail = ''


  handleChange = ({ target: { value } }) => {
    const suggestion = this.suggest(value)
    this.email = value + suggestion
    if (suggestion) this.highlight(suggestion)
    this.props.onChange(this.email)
    if (this.props.validate) this.validate()
    this.prevEmail = value + suggestion
    this.prevValue = value
  }

  suggest(email) {
    const [ emailName, partialDomain ] = email.split('@')  // eslint-disable-line
    if (!partialDomain || email.length <= this.prevValue.length) return ''
    const domain = this.domains.find(d => d.indexOf(partialDomain) === 0) || ''
    return domain.replace(partialDomain, '')
  }

  highlight(suggestion) {
    setTimeout(() => {
      const startPos = this.email.lastIndexOf(suggestion)
      const endPos = startPos + suggestion.length
      this._input.setSelectionRange(startPos, endPos)
    }, 0)
  }

  validate = () => {
    if (this.props.isValid === false) return 'no'
    const inputIsFocused = this._input === document.activeElement
    const isValidEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i  // eslint-disable-line
    if (!toJS(this.email)) {
      this.isValid = null
    } else if (isValidEmail.test(this.email)) {
      this.isValid = 'yes'
    } else if (inputIsFocused && this.prevEmail.length !== this.email.length) {
      this.isValid = 'maybe'
    } else {
      this.isValid = 'no'
    }
  }

  handleBlur = e => {
    if (this.props.validate) this.validate()
    if (this.props.onBlur) this.props.onBlur(e)
  }

  handleFocus = e => {
    if (this.props.validate) this.validate()
    if (this.props.onFocus) this.props.onFocus(e)
  }

  render() {
    const { className, ...props } = this.props
    return (
      <Input
        {...props}
        isValid={this.isValid}
        className={`${className} email-autocomplete-input`}
        value={this.email}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        innerRef={r => this._input = r}
      />
    )
  }
}

const borderColors = {
  yes: '#28a745',
  maybe: '#cfdc00',
  no: '#dc3545'
}

const outlineColors = { // source: http://bit.ly/2j2sbyx
  yes: 'rgba(40, 167, 69, .25)',
  maybe: 'rgba(207, 220, 0, .25)',
  no: 'rgba(220, 53, 69, .25)'
}

const Input = styled.input`
  ${({ validate, isValid }) => validate && css`
    outline: none;
    ${isValid && css`
      &:focus {
        box-shadow: 0 0 0 0.2rem ${outlineColors[isValid]};
      }
      border: 1px solid ${borderColors[isValid]} !important;
      transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    `}
  `}
`
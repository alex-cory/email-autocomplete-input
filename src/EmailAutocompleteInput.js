import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { observer } from 'mobx-react'
import { observable } from 'mobx'


@observer
export default class EmailAutocompleteInput extends Component {
  @observable email = this.props.value || ''
  @observable isValid = null // yes, no, maybe, null
  domains = [...(this.props.domains || []), 'yahoo.com', 'hotmail.com', 'gmail.com', 'me.com', 'aol.com', 'mac.com', 'live.com', 'googlemail.com', 'msn.com', 'facebook.com', 'verizon.net', 'outlook.com', 'icloud.com', 'table.co']
  prevValue = ''

  handleChange = ({ target: { value } }) => {
    const suggestion = this.suggest(value)
    this.email = value + suggestion
    if (suggestion) this.highlight(suggestion)
    this.props.onChange(this.email)
    this.prevValue = value
    if (this.props.validate) this.validate()
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
    const inputIsFocused = this._input === document.activeElement
    var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i  // eslint-disable-line
    const isValid = regex.test(this.email)
    if (!this.email || !this.prevValue) {
      this.isValid = null
    } else if (inputIsFocused) {
      this.isValid = isValid ? 'yes' : 'maybe'
    } else if (!inputIsFocused) {
      this.isValid = isValid ? 'yes' : 'no'
    }
  }

  render() {
    const { className, ...props } = this.props
    return (
      <Input
        {...props}
        isValid={this.isValid}
        className={`${className} email-autocomplete-input`}
        value={this.email}
        onFocus={this.validate}
        onBlur={this.validate}
        onChange={this.handleChange}
        innerRef={r => this._input = r}
      />
    )
  }
}

const borderColors = {
  maybe: '#cfdc00',
  yes: '#28a745',
  no: '#dc3545'
}

const outlineColors = {
  maybe: 'rgba(207, 220, 0, 0.4)',
  yes: 'rgba(40,167,69,.25)',
  no: 'rgba(220,53,69,.25)'
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
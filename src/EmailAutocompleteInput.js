import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'


@observer
export default class EmailAutocompleteInput extends React.Component {
  domains = this.props.domains || ['yahoo.com', 'hotmail.com', 'gmail.com', 'me.com', 'aol.com', 'mac.com', 'live.com', 'googlemail.com', 'msn.com', 'facebook.com', 'verizon.net', 'outlook.com', 'icloud.com']
  prevValue = ''
  @observable email = this.props.value || ''

  handleChange = ({ target: { value } }) => {
    const suggestion = this.suggest(value)
    this.email = value + suggestion
    if (suggestion) this.highlight(suggestion)
    this.props.onChange(this.email)
    this.prevValue = value
  }

  suggest(email) {
  	const [ emailName, partialDomain ] = email.split('@')
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

  render() {
    const { className, ...props } = this.props
    return (
      <input
        {...props}
        className={`${className} email-autocomplete-input`}
        value={this.email}
        onChange={this.handleChange}
        ref={r => this._input = r}
      />
    )
  }
}
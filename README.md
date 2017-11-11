Email Autocomplete Input
========================

#### Bult using `mobx`, and `react`

Play with it [here](https://alex-cory.github.io/email-autocomplete-input/)!

![Alt text](./public/email-autocomplete-input.gif)

Installation
------------

`yarn add email-autocomplete-input` or `npm i -S email-autocomplete-input`


Usage
-----
```js
import EmailAutocompleteInput from 'email-autocomplete-input'
import { render } from 'react-dom'
import { observable } from 'mobx'

const email = observable('')

render(
  <EmailAutocompleteInput value={email} onChange={({ target: { value } }) => email.set(value)} />,
  document.body
)
```

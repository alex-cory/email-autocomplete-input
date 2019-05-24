<!--
<img src="https://github.com/alex-cory/email-autocomplete-input/blob/master/public/email-autocomplete-input.gif?raw=true" width="100%">
-->
<a href="https://alex-cory.github.io/email-autocomplete-input/"><img src="https://github.com/alex-cory/email-autocomplete-input/blob/master/public/email-autocomplete-input-validation.gif?raw=true" width="100%"></a>

Email Autocomplete Input
========================

[![Greenkeeper badge](https://badges.greenkeeper.io/alex-cory/email-autocomplete-input.svg)](https://greenkeeper.io/)

#### Bult using `mobx`, and `react`

Play with it [here](https://alex-cory.github.io/email-autocomplete-input/)!

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
  <EmailAutocompleteInput value={email} onChange={value => email.set(value)} />,
  document.body
)
```

Props
-----
| Props      | Description                                                                              |
| ---------- | ---------------------------------------------------------------------------------------- |
| `validate` | This will highlight the input with a red, yellow, or green border if the email is valid. |
| `domains`  | This will add additional domains to the autocomplete.                                    |

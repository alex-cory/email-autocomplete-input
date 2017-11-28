import styled from 'styled-components'


export const GithubLink = styled.a.attrs({
  href: props => `https://github.com/${props.children.replace('@', '')}`,
})`
  margin: 0 3px;
  color: #ea6b2b;
  text-decoration: none;
`

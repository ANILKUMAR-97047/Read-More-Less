// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  Heading,
  Description,
  Image,
  ContentOfHooks,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [sentens, setFullSentense] = useState(false)
  const first =
    'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components.'
  const content = sentens ? reactHooksDescription : first
  const buttonText = sentens ? 'Read Less' : 'Read More'

  const onCLickReadMorebutton = () => {
    setFullSentense(prevState => !prevState)
  }
  return (
    <AppContainer>
      <Heading>React Hooks</Heading>
      <Description>Hooks are a new addition to React</Description>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <ContentOfHooks>{content}</ContentOfHooks>
      <Button type="button" onClick={onCLickReadMorebutton}>
        {buttonText}
      </Button>
    </AppContainer>
  )
}
export default ReadMore

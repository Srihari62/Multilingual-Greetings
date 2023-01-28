import {Component} from 'react'
import LanguageGreetingsItem from '../LanguageGreetingsItem'
import {
  BgContainer,
  Heading,
  ButtonsContainer,
  ImageItem,
} from './styledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {
    activeLanguageId: languageGreetingsList[0].id,
  }

  onClickChangeLanguage = id => {
    this.setState({activeLanguageId: id})
  }

  renderSelectedLanguage = () => {
    const {activeLanguageId} = this.state
    const {imageUrl, imageAltText} = languageGreetingsList[
      languageGreetingsList.findIndex(each => each.id === activeLanguageId)
    ]
    return <ImageItem src={imageUrl} alt={imageAltText} key={imageUrl} />
  }

  render() {
    const {activeLanguageId} = this.state
    return (
      <BgContainer>
        <Heading>Multilingual Greetings</Heading>
        <ButtonsContainer>
          {languageGreetingsList.map(eachItem => (
            <LanguageGreetingsItem
              key={eachItem.id}
              LanguageItemDetails={eachItem}
              isActive={activeLanguageId === eachItem.id}
              onClickChangeLanguage={this.onClickChangeLanguage}
            />
          ))}
        </ButtonsContainer>
        {this.renderSelectedLanguage()}
      </BgContainer>
    )
  }
}

export default Greetings

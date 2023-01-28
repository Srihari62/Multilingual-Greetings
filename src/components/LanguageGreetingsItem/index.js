import {ButtonsListContainer, Button} from './styledComponents'

const LanguageGreetingsItem = props => {
  const {LanguageItemDetails, isActive, onClickChangeLanguage} = props
  const {buttonText, id} = LanguageItemDetails
  const onClickButton = () => {
    onClickChangeLanguage(id)
  }

  return (
    <ButtonsListContainer>
      <Button type="button" active={isActive} onClick={onClickButton}>
        {buttonText}
      </Button>
    </ButtonsListContainer>
  )
}

export default LanguageGreetingsItem

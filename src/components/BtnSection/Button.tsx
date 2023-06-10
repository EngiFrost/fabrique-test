import styled from '@emotion/styled'

type Props = {
  onClick: () => void
  text?: string
  icon?: string // TODO: IconType
}

const BaseButton = styled.button`
  display: flex;
  gap: 10px;
  
  padding: 16px;
  background-color: #FFFFFF;
  border: none;
  box-shadow: 0px 2px 10px rgba(52, 52, 62, 0.24);
  border-radius: 16px;

  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #34343E;

  &:hover {
    cursor: pointer;
  }
`

export function Button(props: Props) {
  const {text = 'Вызов сотрудника', icon, onClick} = props

  // TODO: svg icon by link
  return (
    <BaseButton onClick={onClick}>
      {text}
    </BaseButton>
  )
}

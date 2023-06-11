import styled from '@emotion/styled'
import { Icon, IconName } from '../Icon'

type Props = {
  onClick: () => void
  icon: IconName
  text?: string
}

const BaseButton = styled.button<{hasText?: boolean}>`
  display: flex;
  align-items: center;
  gap: 10px;
  
  padding: ${(p) => p.hasText ? '16px 24px 16px 16px' : '16px' };
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
  const {text, icon, onClick} = props

  return (
    <BaseButton onClick={onClick} hasText={!!text}>
      <Icon name={icon}/>
      {text}
    </BaseButton>
  )
}

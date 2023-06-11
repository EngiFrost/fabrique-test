import { Icon } from '../Icon';
import * as S from './styles'

const price = 820.95 // TODO: move to store


export function Ticket() {
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <Icon name='check'/>
      </S.IconWrapper>

      <S.TicketInfo>
        <S.Title>Стоимость покупок</S.Title>

        <S.PriceInfo>
          <S.BigPrice>
            {`${Math.trunc(price)},`}
            <S.SmallPrice>
              {`${Math.trunc(price % 1 * 100)} `}
            </S.SmallPrice>
            ₽
          </S.BigPrice>
        </S.PriceInfo>

        <S.Description>Приложите или прокатайте карту</S.Description>
      </S.TicketInfo>
    </S.Wrapper>
  )
}
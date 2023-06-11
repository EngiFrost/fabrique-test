import { PRICE } from '../../store/constants';
import { Icon } from '../Icon';
import * as S from './ticketStyles'

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
            {`${Math.trunc(PRICE)},`}
            <S.SmallPrice>
              {`${Math.trunc(PRICE % 1 * 100)} `}
            </S.SmallPrice>
            ₽
          </S.BigPrice>
        </S.PriceInfo>

        <S.Description>Приложите</S.Description> 
        <S.Description>или прокатайте карту</S.Description>
      </S.TicketInfo>
    </S.Wrapper>
  )
}
import styled from '@emotion/styled'
import { DateTimeInfo } from './DateTimeInfo'
import { Ticket } from './Ticket'
import { Arrow } from './Arrow'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 1720px;
  background: #FFFFFF;
  box-shadow: 0px 0px 2px rgba(52, 52, 62, 0.4), 0px 2px 20px rgba(52, 52, 62, 0.16);
  border-radius: 0px 0px 80px 80px;
`

export function Payment() {
  return (
    <Wrapper>
      <DateTimeInfo />
      <Ticket />
      <Arrow />
    </Wrapper>
  )
}

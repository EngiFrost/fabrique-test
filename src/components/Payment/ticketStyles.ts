import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
`
export const IconWrapper = styled.div`
  position: absolute;
  left: 58px;
`

export const TicketInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  margin: 100px auto 436px;
  width: 585px;

  text-align: center;
`

export const Title = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  color: #A0A0A0;
`

export const PriceInfo = styled.div`
  display: flex;
  margin: 24px 0 44px;

  font-weight: 700;
  color: #34343E;
`

export const BigPrice = styled.div`
  display: inline;
  font-size: 104px;
  line-height: 112px;
`

export const SmallPrice = styled.div`
  display: inline;
  font-size: 56px;
  line-height: 79px;
`

export const Description = styled.div`
  font-weight: 600;
  font-size: 56px;
  line-height: 64px;
  color: #00923A;
`
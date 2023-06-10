import styled from '@emotion/styled';
import { Button } from './Button';

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 60px 80px 60px;
`

export function BtnSection() {

  function handleBackBtnClick() {}

  function handleStaffCallBtnClick() {}

  return (
    <Wrapper>
      <Button onClick={handleBackBtnClick}/>
      <Button onClick={handleStaffCallBtnClick}/>
    </Wrapper>
  )
}

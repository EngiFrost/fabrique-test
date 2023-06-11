import styled from '@emotion/styled';
import { Icon } from '../Icon';

const Wrapper = styled.div`
  margin: auto 80px 60px auto;

  &:hover {
    cursor: pointer;
  }
`

export function Arrow() {
  return (
    <Wrapper>
      <Icon name='greenArrow'/>
    </Wrapper>
  )
}
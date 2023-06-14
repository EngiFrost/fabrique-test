import styled from '@emotion/styled';
import { Icon } from '../Icon';

const Wrapper = styled.div`
  margin: auto 80px 60px auto;
  position: relative;

  animation: arrow-bounce 1s linear infinite;

  &:hover {
    cursor: pointer;
  }

  @keyframes arrow-bounce {
    0% {
        top:0;
    }
    50% {
        top: -20px;
    }
    100% {
        top:0;
    }
}
`

export function Arrow() {
  return (
    <Wrapper>
      <Icon name='greenArrow'/>
    </Wrapper>
  )
}
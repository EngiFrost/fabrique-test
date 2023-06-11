import styled from '@emotion/styled';
import { Icon } from '../Icon';

const Wrapper = styled.div`
  margin: auto 80px 60px auto;
  position: relative;

  &:hover {
    cursor: pointer;
    animation: arrow-hover 1s linear infinite;
  }

  @keyframes arrow-hover {
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
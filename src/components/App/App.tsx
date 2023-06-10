import styled from '@emotion/styled';
import { BtnSection } from '../BtnSection';
import { Payment } from '../Payment';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 1920px;
  width: 1080px;
  background-color: #34343E;
  margin: 0 auto;
`

function App() {
  return (
    <AppWrapper>
      <Payment />
      <BtnSection />
    </AppWrapper>
  );
}

export default App;

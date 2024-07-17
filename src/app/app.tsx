import styled from '@emotion/styled';

import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  background: red;
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="test" />
    </StyledApp>
  );
}

export default App;

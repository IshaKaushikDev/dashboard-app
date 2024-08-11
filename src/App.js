import React from 'react';
import styled from 'styled-components';
import Sidebar from './Components/sidebar';
import Topbar from './Components/topbar';
import MainContent from './Components/maincontent';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <ContentContainer>
        <Topbar />
        <MainContent />
      </ContentContainer>
    </AppContainer>
  );
}

export default App;

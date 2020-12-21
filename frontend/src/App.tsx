import React from "react";
import styled from "@emotion/styled";
import Footer from "@components/Footer";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const App: React.FunctionComponent<IProps> = () => {
  return (
    <Root>
      <Footer />
    </Root>
  );
};

export default App;

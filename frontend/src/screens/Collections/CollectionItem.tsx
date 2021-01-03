import styled from "@emotion/styled";
import React from "react";
import Btn from "@components/Btn";
import { ROUTES } from "@stores/RouterStore";
import { useHistory } from "react-router-dom";

interface IProps {
  pic: string;
  type: string;
}

const Root = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  @media (min-width: 1440px) {
    align-items: normal;
  }
`;
const Title = styled.div`
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #ffff;
  transition: color 0.2s ease-in-out;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 22px;
`;
const Img = styled.img`
  max-width: 300px;
  @media (min-width: 1440px) {
  }
`;
const Div = styled.div`
  position: absolute;
  padding: 20px;
`;
const CollectionItem: React.FC<IProps> = ({ pic, type }) => {
  const history = useHistory();

  return (
    <Root>
      <Img src={pic} />
      <Div>
        <Title>{type}</Title>
        <Btn
          backgroundColor="#ffffff"
          color="#363636"
          onClick={() => history.push(`${ROUTES.COLLECTIONS}/${type}`)}
          padding="5px 10px"
        >
          view products
        </Btn>
      </Div>
    </Root>
  );
};
export default CollectionItem;

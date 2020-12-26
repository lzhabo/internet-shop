import styled from "@emotion/styled";
import React from "react";
import close from "../../assets/close.svg";
import { Row } from "../flex";
import { useHistory } from "react-router-dom";
import { ROUTES } from "@stores/RouterStore";

interface IProps {
  onClose: () => void;
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #41545a;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 0 16px;
  z-index: 3;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  @media (min-width: 1440px) {
    width: 640px;
  }
  & > * {
    border-bottom: 0.5px solid #ffff;
  }
`;

const CloseBtn = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  padding: 21px;
`;
const MenuTitle = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #a9afb7;
  padding: 10px 0 10px;
`;
const navData = [
  { route: "rings", displayName: "rings" },
  { route: "anklets", displayName: "anklets" },
  { route: "necklaces", displayName: "necklaces" },
  { route: "bracelets", displayName: "bracelets" },
  { route: "earrings", displayName: "earrings" },
  { route: "all", displayName: "shop all" },
];
const SmallNavbar: React.FC<IProps> = ({ onClose }) => {
  const history = useHistory();

  const handleClose = (v: string) => {
    history.push(`${ROUTES.COLLECTIONS}/${v}`);
    onClose();
  };

  return (
    <Root>
      <CloseBtn onClick={onClose} src={close} />
      <ContentWrapper>
        {navData.map((data, index) => (
          <Row onClick={() => handleClose(data.route)}>
            <MenuTitle>{data.displayName}</MenuTitle>
          </Row>
        ))}
      </ContentWrapper>
    </Root>
  );
};
export default SmallNavbar;

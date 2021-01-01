import styled from "@emotion/styled";
import React from "react";
import { Row } from "../flex";
import { useHistory } from "react-router-dom";
import { ROUTES } from "@stores/RouterStore";
import CloseIconWhite from "@components/icons/CloseIconWhite";

interface IProps {
  onClose: () => void;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background: #41545a;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 25%;
  left: 0;
  padding: 30px 30px;
  z-index: 3;
  @media (min-width: 660px) {
    right: 60%;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  @media (min-width: 1440px) {
    width: 640px;
  }
  & > * {
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.5);
  }
`;
const MenuTitle = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  padding: 12px 0 12px;
  line-height: 30px;
  letter-spacing: 2px;
  color: #ffff;
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
      <CloseIconWhite
        onClick={onClose}
        style={{ paddingBottom: 5, margin: -6 }}
      />
      <ContentWrapper>
        {navData.map((data, index) => (
          <Row onClick={() => handleClose(data.route)} key={index}>
            <MenuTitle>{data.displayName}</MenuTitle>
          </Row>
        ))}
      </ContentWrapper>
    </Root>
  );
};
export default SmallNavbar;

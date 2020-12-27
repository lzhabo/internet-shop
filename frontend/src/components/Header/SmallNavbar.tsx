import styled from "@emotion/styled";
import React from "react";
import close from "../../assets/close.svg";
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
  justify-content: center;
  background: #41545a;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 25%;
  left: 0;
  padding: 0 16px;
  z-index: 3;
  @media (min-width: 660px) {
    right: 50%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
      {/*<CloseBtn onClick={onClose} src={close} />*/}
      <CloseIconWhite onClick={onClose} />
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

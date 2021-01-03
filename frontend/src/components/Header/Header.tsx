import styled from "@emotion/styled";
import React, { useState } from "react";
import SmallNavbar from "@components/Header/SmallNavbar";
import BagIcon from "@components/icons/BagIcon";
import MenuIcon from "@components/icons/MenuIcon";
import SideBasket from "@src/screens/Basket/SideBasket";
import { useStores } from "@stores";
import { useObserver } from "mobx-react-lite";
import DotIcon from "@components/icons/Dot";
import BigNavBar from "@components/Header/BigNavBar";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1;
  background: #ffff;
  @media (min-width: 1440px) {
    padding: 25px 0 0;
  }
`;
const UpPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 20px;
  letter-spacing: 0.1em;
`;

const Header: React.FC<IProps> = () => {
  const { basketStore } = useStores();
  const [openedMenu, setOpenedMenu] = useState(false);
  const [openedBasket, setOpenedBasket] = useState(false);
  return useObserver(() => (
    <Root>
      <UpPart>
        <div>
          <MenuIcon onClick={() => setOpenedMenu(true)} />
        </div>
        <Logo>LOGO</Logo>
        <div style={{ position: "relative" }}>
          <BagIcon onClick={() => setOpenedBasket(true)} />
          {basketStore.basketItems.length > 0 ? <DotIcon /> : <div />}
        </div>
        {openedMenu && <SmallNavbar onClose={() => setOpenedMenu(false)} />}
        {openedBasket && <SideBasket onClose={() => setOpenedBasket(false)} />}
      </UpPart>
      <BigNavBar />
    </Root>
  ));
};
export default Header;

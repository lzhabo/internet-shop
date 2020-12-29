import styled from "@emotion/styled";
import React, { useState } from "react";
import SmallNavbar from "@components/Header/SmallNavbar";
import { ROUTES } from "@stores/RouterStore";
import { useHistory } from "react-router-dom";
import BagIcon from "@components/icons/BagIcon";
import MenuIcon from "@components/icons/MenuIcon";
import SearchIcon from "@components/icons/SearchIcon";
import SideBasket from "@src/screens/Basket/SideBasket";

interface IProps {}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 2;
  background: #ffff;
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
  const history = useHistory();
  const [openedMenu, setOpenedMenu] = useState(false);
  const [openedBasket, setOpenedBasket] = useState(false);
  return (
    <Root>
      <div>
        <MenuIcon onClick={() => setOpenedMenu(true)} />
      </div>
      <Logo>LOGO</Logo>
      <div>
        <SearchIcon onClick={() => history.push(ROUTES.SEARCH)} />
        <BagIcon onClick={() => setOpenedBasket(true)} />
      </div>
      {openedMenu && <SmallNavbar onClose={() => setOpenedMenu(false)} />}
      {openedBasket && <SideBasket onClose={() => setOpenedBasket(false)} />}
    </Root>
  );
};
export default Header;

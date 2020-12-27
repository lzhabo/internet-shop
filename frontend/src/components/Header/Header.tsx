import styled from "@emotion/styled";
import React, { useState } from "react";
import SmallNavbar from "@components/Header/SmallNavbar";
import { ROUTES } from "@stores/RouterStore";
import { useHistory } from "react-router-dom";
import BagIcon from "@components/icons/BagIcon";
import MenuIcon from "@components/icons/MenuIcon";
import SearchIcon from "@components/icons/SearchIcon";
import Basket from "@components/Header/Basket";

interface IProps {}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;
const Logo = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 20px;
  letter-spacing: 0.1em;
  position: absolute;
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
      <div style={{ position: "relative" }}>
        <Logo>LOGO</Logo>
      </div>
      <div>
        <SearchIcon onClick={() => history.push(ROUTES.SEARCH)} />
        <BagIcon onClick={() => setOpenedBasket(true)} />
      </div>
      {openedMenu && <SmallNavbar onClose={() => setOpenedMenu(false)} />}
      {openedBasket && <Basket onClose={() => setOpenedBasket(false)} />}
    </Root>
  );
};
export default Header;

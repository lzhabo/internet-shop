import styled from "@emotion/styled";
import React, { useState } from "react";
import SmallNavbar from "@components/Header/SmallNavbar";
import user from "../../assets/user.svg";
interface IProps {}

const Root = styled.div`
  display: flex;
  //flex-direction: column;
  min-height: 75px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Header: React.FC<IProps> = () => {
  const [opened, setOpened] = useState(false);
  return (
    <Root>
      <div>logo and icons</div>
      <img
        src={user}
        alt="menu"
        style={{ cursor: "pointer" }}
        onClick={() => setOpened(true)}
      />
      {opened && <SmallNavbar onClose={() => setOpened(false)} />}
    </Root>
  );
};
export default Header;

import styled from "@emotion/styled";

interface IProps {
  color?: string;
  backgroundColor?: string;
}

const Btn = styled.div<IProps>`
  width: 200px;
  height: 50px;
  background: ${({ backgroundColor }) => backgroundColor ?? "#ffffff"};
  color: ${({ color }) => color ?? "#000000"};
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  text-transform: uppercase;
`;

export default Btn;

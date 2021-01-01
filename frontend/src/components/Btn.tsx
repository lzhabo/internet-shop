import styled from "@emotion/styled";

interface IProps {
  color?: string;
  backgroundColor?: string;
  padding?: string;
}

const Btn = styled.div<IProps>`
  width: 100%;
  height: 50px;
  background: ${({ backgroundColor }) => backgroundColor ?? "#52b48a"};
  color: ${({ color }) => color ?? "#ffffff"};
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Montserrat;
  letter-spacing: 0.2em;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  text-transform: uppercase;
  padding: ${({ padding }) => padding ?? ""};
`;

export default Btn;

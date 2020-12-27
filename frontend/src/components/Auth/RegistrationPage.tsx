import styled from "@emotion/styled";
import React from "react";
import Title from "@components/Title";
import Subtitle from "@components/Subtitle";
import Btn from "@components/Btn";
import { useStores } from "@stores";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ROUTES } from "@stores/RouterStore";

// import { useForm } from "react-hook-form";

interface IProps {}

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 10px 0;
  }
`;
const RegistrationPage: React.FC<IProps> = () => {
  const { accountStore } = useStores();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (v: IFormValues) => {
    console.log(v);
  };

  return (
    <Root>
      <Title>Login</Title>
      <Subtitle>Please enter your e-mail and password:</Subtitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="firstName" ref={register} placeholder="first name" />

        <input name="lastName" ref={register} placeholder="Last Name" />
        <input name="email" ref={register} placeholder="email" type="email" />
        <input
          name="password"
          ref={register}
          placeholder="password"
          type="password"
        />

        <input type="submit" />
      </form>
    </Root>
  );
};
export default RegistrationPage;

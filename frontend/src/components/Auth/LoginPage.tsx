import styled from "@emotion/styled";
import React from "react";
import Title from "@components/Title";
import Subtitle from "@components/Subtitle";
import Btn from "@components/Btn";
import { useHistory } from "react-router-dom";
import { ROUTES } from "@src/stores/RouterStore";
import { useForm } from "react-hook-form";
import { useStores } from "@stores";

interface IProps {}

interface IFormValues {
  login: string;
  password: string;
  remember?: boolean;
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

const LoginPage: React.FC<IProps> = () => {
  const { accountStore } = useStores();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (v: IFormValues) => {};
  // accountStore.signInWithEmailAndPassword(v.login, v.password, v.remember);

  return (
    <Root>
      <Title>Login</Title>
      <Subtitle>Please enter your e-mail and password:</Subtitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="login" ref={register} placeholder="Email" />

        <input
          name="password"
          ref={register}
          placeholder="Password"
          type={"password"}
        />

        <input
          type="checkbox"
          name="remember"
          ref={register}
          placeholder="Remember me?"
        />
        <input type="submit" />
      </form>

      <Subtitle>
        <span color="#6a6a6a">Don't have an account? </span>
        <span
          onClick={() => history.push(ROUTES.REGISTER)}
          style={{ cursor: "pointer" }}
        >
          Create one
        </span>
      </Subtitle>
    </Root>
  );
};
export default LoginPage;

// {/*<input />*/}
// {/*<input />*/}
// {/*<Btn backgroundColor="#52b48a" color="#ffff">*/}
// {/*  Login*/}
// {/*</Btn>*/}

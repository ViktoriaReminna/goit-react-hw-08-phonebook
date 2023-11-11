import useLogInHook from '../../hook/PageHooks/LoginHook';

import { Div, H2, Form, Input, DivForm, Button } from './Login.styled';

const LogIn = () => {
  const { handleChange, handleSubmit, email, password } = useLogInHook();
  return (
    <Div>
      <H2>Log in</H2>
      <Form onSubmit={handleSubmit}>
        <DivForm>
          Email
          <Input
            type="email"
            name="email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="Enter your email"
            placeholder="Example user@mail.com"
            required
            value={email}
            onChange={handleChange}
          />
        </DivForm>
        <DivForm>
          Password
          <Input
            type="password"
            name="password"
            title="Enter your password"
            required
            value={password}
            onChange={handleChange}
          />
          <Button type="submit">Log In</Button>
        </DivForm>
      </Form>
    </Div>
  );
};

export default LogIn;

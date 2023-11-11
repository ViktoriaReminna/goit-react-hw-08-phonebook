import { useSingUpHook } from '../../hook/PageHooks/SingUpHook';

import { Button, Div, DivForm, Form, H2, Input } from './Register.styled';

const SingUp = () => {
  const { handleSubmit, handleChange, name, email, password } = useSingUpHook();
  return (
    <Div>
      <H2>Please enter your Name and Email for registration</H2>
      <Form onSubmit={handleSubmit}>
        <DivForm>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            placeholder="Example John"
            required
            value={name}
            onChange={handleChange}
          />
        </DivForm>
        <DivForm>
          Email
          <Input
            type="email"
            name="email"
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
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
            required
            value={password}
            onChange={handleChange}
          />
        </DivForm>
        <Button type="submit">Register</Button>
      </Form>
    </Div>
  );
};

export default SingUp;

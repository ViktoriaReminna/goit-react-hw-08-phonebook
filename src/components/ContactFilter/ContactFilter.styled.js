import styled from 'styled-components';

export const InputFilter = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  width: 500px;
  height: 100%;
  padding: 12px 12px 12px 14px;

  margin: 10px auto;
  border-radius: 4px;
  outline: none;
  border: none;
  background-color: #ffffff;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.5);

  &:focus {
    background-color: #00ff7f;
  }
`;

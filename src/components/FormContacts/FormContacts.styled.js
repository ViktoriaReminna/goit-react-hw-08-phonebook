import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: grid;
  gap: 10px;
`;

export const Label = styled.label`
  width: auto;
  display: grid;
  justify-content: center;
`;

export const Button = styled.button`
  display: block;
  margin: 0px 40px 0px 40px;
  padding: 0 25px;

  outline: none;
  border: 3px solid #191970;
  border-radius: 50px;
  height: 46px;

  line-height: 46px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: #444;
  background-color: #fff;
  box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
  cursor: pointer;
  user-select: none;
  appearance: none;
  touch-action: manipulation;
  vertical-align: top;
  transition: box-shadow 0.2s;
  width: fit-content;

  &:focus-visible {
    border: 1px solid #4c51f9;
    outline: none;
  }

  &:hover {
    transition: all 0.2s;
    box-shadow: 0 7px 14px rgb(65 132 144 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
  }

  &:active {
    background-color: #808080;
  }

  &:disabled {
    background-color: #eee;
    border-color: #eee;
    color: #444;
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  display: inline-block;
  box-sizing: border-box;
  padding: 0 25px;
  margin: 0 15px 15px 0;
  outline: none;
  border: 3px solid #191970;
  border-radius: 50px;
  height: 46px;
  width: 300px;
  line-height: 46px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: #444;
  background-color: #fff;
  box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
  cursor: pointer;
  user-select: none;
  appearance: none;
  touch-action: manipulation;
  vertical-align: top;
  transition: box-shadow 0.2s;
`;

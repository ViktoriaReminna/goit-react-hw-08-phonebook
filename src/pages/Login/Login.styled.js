import { styled } from 'styled-components';
export const Div = styled.div`
    position: relative;
    max-width: 400px;
    padding: 60px 50px;
    margin: 50px auto 0;
    background-size: cover;
  background-color: #80808030;
  display: grid;

    &:before {
     content: "";
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
    box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
`;

export const Form = styled.form`
  position: relative;
  display: table-caption;
`;

export const H2 = styled.h2`
  position: relative;
  margin-top: 0;
  color: #444;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 26px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  display: inline-block;
  box-sizing: border-box;
  padding: 0 25px;
  margin: 0 15px 15px 0;
  outline: none;
  border: 1px solid #fff;
  border-radius: 50px;
  height: 46px;
  width: 400px;
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

export const DivForm = styled.div`
  display: inline-grid;
  gap: 10px;
`;

export const Button = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0 25px;
  margin: 0 15px 15px 0;
  outline: none;
  border: 1px solid #fff;
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
  width: 100px;

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
`;

import { styled } from 'styled-components';

export const Ul = styled.ul`
  margin: auto;
  padding: inherit;
  display: flex;
`;

export const Li = styled.li`
  display: flex;
  justify-content: center;
  border: 3px solid #191970;
  gap: 20px;
  font-size: 20px;
  font-family: revert;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;

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
export const Button = styled.div`
  opacity: 0.2;
  cursor: pointer;
  transition: opacity ease 0.5s;
  color: red;
  margin: auto;

  &:hover {
    opacity: 1;
  }

  &::before,
  &::after {
    content: '';
    // position: absolute;
    top: 10px;
    display: block;
    width: 24px;
    height: 3px;
    background: red;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

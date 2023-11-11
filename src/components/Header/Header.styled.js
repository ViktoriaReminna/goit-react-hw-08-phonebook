import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
  border-radius: 10px;
`;

export const DivHeader = styled.div`
  margin-left: 100px;
  margin-right: 100px;
`;

export const Ul2 = styled.ul`
  list-style: none;
  display: flex;
  line-height: 0px;
  gap: 20px;
  align-items: baseline;
`;

export const Ul1 = styled.ul`
  list-style: none;
  display: flex;
  line-height: 0px;
  gap: 20px;
  align-items: end;
`;

export const Navigation = styled(NavLink)`
  display: inline-block;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0 15px 15px 0;
  outline: none;
  border: none;
  border-radius: 3px;
  height: 37px;
  line-height: 37px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: normal;
  text-decoration: none;
  color: #444;
  background-color: #fff;
  cursor: pointer;
  user-select: none;
  appearance: none;
  touch-action: manipulation;
  transition: box-shadow 0.18s ease-out, background 0.18s ease-out,
    color 0.18s ease-out;

  &:focus-visible {
    box-shadow: 0 0 0 3px lightskyblue;
  }
  &:hover {
    box-shadow: 0 1px 1px 0 #cfcfcf, 0 2px 5px 0 #cfcfcf;
  }
  &:active {
    background-color: #efefef !important;
  }
  &:disabled {
    background-color: #eee;
    color: #444;
    pointer-events: none;
  }
`;

export const Img = styled.img`
  border-radius: 50%;
`;

export const H3 = styled.h3`
  display: flex;
  gap: 20px;
  align-items: center;
`;

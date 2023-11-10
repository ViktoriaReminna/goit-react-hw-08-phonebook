import styled from 'styled-components';
export const Wrapper = styled.div`
  margin: 20px auto;
  overflow-y: auto;
  overflow-x: hidden;
  height: 200px;
  width: 500px;
`;

export const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0px 0px 2px 0px #008080;
  border-radius: 4px;
  background-color: #f5fcf6;
  color: #008080;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  button {
    background-color: #add8e6;
    color: white;
    border: none;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: auto;
    font-size: 24px;

    &:hover {
      background-color: #90ee90;
    }
  }
`;

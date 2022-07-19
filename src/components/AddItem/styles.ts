import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #555;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  .image {
    margin-right: 5px;
  }

  input {
    background-color: transparent;
    border: 0;
    color: white;
    font-size: 18px;
    outline: none;
    padding: 5px;
    flex: 1;
  }
`;

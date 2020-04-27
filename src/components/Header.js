import React from "react";
import styled from "styled-components";
import Input from "./atoms/Input";
import Button from "./atoms/Button";

const StyledHomeContainer = styled.div`
  float: right;
  margin-right: 25px;
`;

const StyledHomePanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const Header = () => {
  return (
    <StyledHomeContainer>
      <StyledHomePanel>
        <Input placeholder="Wyszukaj przepis" type="search" />
        <Button>Dodaj przepis</Button>
      </StyledHomePanel>
    </StyledHomeContainer>
  );
};

export default Header;

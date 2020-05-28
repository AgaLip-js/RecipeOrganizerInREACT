import React from "react";
import styled from "styled-components";
import SearchInput from "../atoms/SearchInput/SearchInput";
import Button from "../atoms/Button/Button";
import { useDispatch } from "react-redux";
import { openModal } from "../../actions";

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
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(openModal(null));
  };
  return (
    <StyledHomeContainer>
      <StyledHomePanel>
        <SearchInput placeholder="Wyszukaj przepis" type="search" />
        <Button onClick={() => handleAddClick()}>Dodaj przepis</Button>
      </StyledHomePanel>
    </StyledHomeContainer>
  );
};

export default Header;

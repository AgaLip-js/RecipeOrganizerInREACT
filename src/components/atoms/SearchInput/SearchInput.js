import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const StyledInputContainer = styled.div`
  background-color: rgba(235, 235, 235, 0.425);
  height: 40px;
  border-radius: 40px;
  margin-right: 25px;
  :hover > input {
    width: 240px;
    padding: 0 10px;
  }
`;
const StyledButtonIcon = styled.button`
  color: white;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgb(242, 162, 44);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  border: 1px solid #da7c0c;
  :hover {
    background: #f47c20;
    background: linear, left top, left bottom, from(#f88e11), to(#f06015);
    background: top, #f88e11, #f06015;
  }
  :active {
    color: #fff;
    background: linear, left top, left bottom, from(#f47a20), to(#faa51a);
    background: top, #f47a20, #faa51a;
    top: 1px;
    position: relative;
  }
`;

const StyledInputType = styled.input`
  border: none;
  outline: none;
  float: left;
  padding: 0;
  font-size: 14px;
  transition: 0.4s;
  line-height: 40px;
  width: 0px;
  background: none;
  color: #666666;
  :focus {
    width: 240px;
    padding: 0 10px;
  }
`;
const SearchIcon = {
  color: "#fff",
  cursor: "pointer",
  backgroundColor: "transparent",
  fontSize: "18px",
};

const SearchInput = (props) => {
  return (
    <StyledInputContainer>
      <StyledInputType placeholder={props.placeholder} />
      <StyledButtonIcon type="button">
        <FontAwesomeIcon icon={faSearch} style={SearchIcon} />
      </StyledButtonIcon>
    </StyledInputContainer>
  );
};

export default SearchInput;

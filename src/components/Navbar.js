import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/pictures/PRZEPISOWNIK.png";

const StyledNavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 15;
  background-color: white;
  transition: transform 0.2s linear;
  height: 100px;
  text-align: center;
`;

const StyledNavItem = styled(NavLink)`
  border: none;
  position: relative;
`;

const StyledMainLogo = styled.div`
  background: url(${({ icon }) => icon});
  width: 300px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
`;
const StyledListItemView = styled.ul`
  display: flex;
  justify-content: space-around;
  position: relative;
  margin: 0;
  padding: 0;
  align-items: center;
`;

const StyledItemView = styled.li`
  align-items: center;
  justify-content: space-around;
  text-transform: uppercase;
  color: black;
  font-size: 14px;
  height: 54px;
  margin: 15px;
  padding: 10px;
  list-style-type: none;
  position: relative;
  display: flex;
  text-align: center;
  text-decoration: none;
  transition: transform 0.2s ease-out;

  :hover {
    /* border-bottom: 2px solid #f2a22c; */
    transform: translateY(-2px);
    color: #f2a22c;
  }

  &.active {
    font-weight: 600;
    color: #f2a22c;
    /* border-bottom: 2px solid #f2a22c; */
    transform: translateY(-2px);
  }
`;

const Navbar = () => {
  return (
    <StyledNavBar>
      <StyledNavItem as={NavLink} to="/">
        <StyledMainLogo icon={logo} />
      </StyledNavItem>
      <StyledListItemView>
        <StyledItemView as={NavLink} to="/category" activeclass="active">
          Kategorie Przepisów
        </StyledItemView>
        <StyledItemView as={NavLink} to="/myWeek" activeclass="active">
          Mój Tydzień{" "}
        </StyledItemView>
        <StyledItemView as={NavLink} to="/shoppingList" activeclass="active">
          Lista zakupów
        </StyledItemView>
        <StyledItemView
          as={NavLink}
          to="/kitchenCheatSheet"
          activeclass="active"
        >
          Kuchenna Ściąga
        </StyledItemView>
      </StyledListItemView>
    </StyledNavBar>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/pictures/PRZEPISOWNIK.png";

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
  @media (max-width: 900px) {
    height: 80px;
  }
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
  @media (max-width: 900px) {
    width: 250px;
  }
`;
const StyledListItemView = styled.ul`
  display: flex;
  justify-content: space-around;
  position: relative;
  margin: 0;
  padding: 0;
  align-items: center;
  @media (max-width: 900px) {
    display: none;
  }
`;

const StyledItemView = styled.li`
  align-items: center;
  justify-content: space-around;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.7);
  font-size: 18px;
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
    transform: translateY(-2px);
    color: #f2a22c;
  }

  &.active {
    font-weight: 600;
    color: #f2a22c;
    transform: translateY(-2px);
  }
`;

const Navbar = () => {
  return (
    <StyledNavBar>
      <StyledNavItem as={NavLink} to="/recipe">
        <StyledMainLogo icon={logo} />
      </StyledNavItem>
      <StyledListItemView>
        <StyledItemView as={NavLink} to="/recipe/recipes" activeclass="active">
          Przepisy
        </StyledItemView>
        <StyledItemView as={NavLink} to="/recipe/myWeek" activeclass="active">
          Mój Tydzień
        </StyledItemView>
        <StyledItemView as={NavLink} to="/recipe/shoppingList" activeclass="active">
          Lista zakupów
        </StyledItemView>
      </StyledListItemView>
    </StyledNavBar>
  );
};

export default Navbar;

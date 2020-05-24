import React from "react";
import "./MainView.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled.div``;
const MainView = () => {
  return (
    <main>
      <div className="hero">
        <div className="hero-container">
          <h1>
            Organizuj przepisy w jednym miejscu,
            <br />
            planuj swój tydzień!
          </h1>
        </div>
      </div>
      <div className="articles">
        <article>
          <header>
            <h3>Zarządzaj przepisami</h3>
          </header>
          <p>Dodawaj swoje ulubione przepisy lub twórz własne</p>
          <footer>
            <button className="myButton">
              Przejdź do przepisów
              <StyledNavLink as={NavLink} to="/recipe/recipes">
                <div class="arrow"></div>
              </StyledNavLink>
            </button>
          </footer>
        </article>
        <article>
          <header>
            <h3>Zaplanuj tydzień</h3>
          </header>
          <p>
            Planuj swoje posiłki na cały tydzień, korzystając z wbudowanego
            kalendarza
          </p>
          <footer>
            <button className="myButton">
              Przejdź do mojego tygodnia
              <StyledNavLink as={NavLink} to="/recipe/myWeek">
                <div class="arrow"></div>
              </StyledNavLink>
            </button>
          </footer>
        </article>
        <article>
          <header>
            <h3>Stwórz listę zakupów</h3>
          </header>
          <p>Twórz i edytuj listę zakupów. Bądź przygotowany na każdą okazję</p>
          <footer>
            <button className="myButton">
              Przejdź do listy zakupów
              <StyledNavLink as={NavLink} to="/recipe/shoppingList">
                <div class="arrow"></div>
              </StyledNavLink>
            </button>
          </footer>
        </article>
      </div>
    </main>
  );
};

export default MainView;

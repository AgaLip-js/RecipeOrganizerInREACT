import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faBookOpen,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import "./RecipeInfo.css";

const RecipeInfo = (props) => {
  return (
    <div className="recipe_info">
      <div className="info time">
        <FontAwesomeIcon icon={faClock} />
        <input
          type="number"
          min="1"
          max="999"
          id="preparing_time"
          required="required"
          name={props.firstName}
          value={props.firstValue}
          onChange={props.onChange}
        />
        <p className="acc">Minuty</p>
        <p className="title-info">Czas przygotowania</p>
      </div>
      <div className="info ingr">
        <FontAwesomeIcon icon={faBookOpen} />
        <input
          value={props.secondValue}
          type="number"
          min="1"
          max="99"
          id="ingr_account"
          required="required"
          name={props.secondName}
          onChange={props.onChange}
        />
        <p className="acc">Ilość</p>
        <p className="title-info">Składniki</p>
      </div>
      <div className="info port">
        <FontAwesomeIcon icon={faUserFriends} />
        <input
          type="number"
          min="1"
          max="99"
          id="port_account"
          required="required"
          value={props.thirdValue}
          onChange={props.onChange}
          name={props.thirdName}
        />
        <p className="acc">Ilość</p>
        <p className="title-info">Porcje</p>
      </div>
    </div>
  );
};

export default RecipeInfo;

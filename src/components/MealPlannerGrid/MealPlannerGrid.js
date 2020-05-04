import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MiniModal from "../../components/atoms/MiniModal/MiniModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import MealCard from "../atoms/MealCard/MealCard";
import { openMiniModal, submitModal } from "../../actions";

const StyledDayTimeTitle = styled.p``;
const StyledDayTimeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 7px;
  text-align: center;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px #eee;
  border-radius: 5px;
`;
const StyledMealTimeContainer = styled.div`
  display: grid;
  grid-template-rows: 50px auto;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const MealPlannerGrid = ({ currentDate }) => {
  const dispatch = useDispatch();

  const onAddClick = (date, type) => {
    dispatch(openMiniModal(date, type));
  };
  const { mealPlannerData, open } = useSelector((store) => ({
    mealPlannerData: store.mealPlannerData,
    open: store.open,
  }));

  const types = ["breakfast", "secondBreakfast", "lunch", "snacks", "dinner"];

  const [state, setState] = useState({});

  useEffect(() => {
    console.log(mealPlannerData);
    const foundDay = mealPlannerData.find(({ date }) => {
      return date === currentDate;
    });
    if (foundDay) {
      setState(foundDay);
    }
    return () => {
      setState({});
    };
  }, [currentDate, mealPlannerData]);

  if (state === null) {
    return <p>Loading...</p>;
  }

  return (
    <StyledDayTimeGrid>
      <StyledMealTimeContainer>
        <StyledDayTimeTitle>Śniadanie </StyledDayTimeTitle>
        {state.breakfast ? (
          <MealCard name={state.name} />
        ) : (
          <FontAwesomeIcon
            onClick={() => onAddClick(currentDate, types[0])}
            icon={faPlus}
            style={{ fontSize: "34px", left: "20%", position: "relative" }}
          />
        )}
      </StyledMealTimeContainer>
      <StyledMealTimeContainer>
        <StyledDayTimeTitle>Drugie śniadanie </StyledDayTimeTitle>
        {state.secondBreakfast ? (
          <MealCard name={state.name} />
        ) : (
          <FontAwesomeIcon
            onClick={() => {
              onAddClick(currentDate, types[1]);
            }}
            icon={faPlus}
            style={{ fontSize: "34px", left: "20%", position: "relative" }}
          />
        )}
      </StyledMealTimeContainer>
      <StyledMealTimeContainer>
        <StyledDayTimeTitle>Obiad </StyledDayTimeTitle>
        {state.lunch ? (
          <MealCard name={state.name} />
        ) : (
          <FontAwesomeIcon
            onClick={() => {
              onAddClick(currentDate, types[2]);
            }}
            icon={faPlus}
            style={{ fontSize: "34px", left: "20%", position: "relative" }}
          />
        )}
      </StyledMealTimeContainer>
      <StyledMealTimeContainer>
        <StyledDayTimeTitle>Podwieczorek </StyledDayTimeTitle>
        {state.snacks ? (
          <MealCard name={state.name} />
        ) : (
          <FontAwesomeIcon
            onClick={() => {
              onAddClick(currentDate, types[3]);
            }}
            icon={faPlus}
            style={{ fontSize: "34px", left: "20%", position: "relative" }}
          />
        )}
      </StyledMealTimeContainer>
      <StyledMealTimeContainer>
        <StyledDayTimeTitle>Kolacja </StyledDayTimeTitle>
        {state.dinner ? (
          <MealCard name={state.name} />
        ) : (
          <FontAwesomeIcon
            onClick={() => {
              onAddClick(currentDate, types[4]);
            }}
            icon={faPlus}
            style={{ fontSize: "34px", left: "20%", position: "relative" }}
          />
        )}
      </StyledMealTimeContainer>
      {open && <MiniModal />}
    </StyledDayTimeGrid>
  );
};

export default MealPlannerGrid;

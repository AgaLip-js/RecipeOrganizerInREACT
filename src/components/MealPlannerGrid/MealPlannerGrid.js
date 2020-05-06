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
const StyledGridContainer = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  align-content: center;
  height: 225px;
  margin: 5px;
  width: 200px;
}
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
        <StyledGridContainer>
          {state.breakfast ? (
            <MealCard
              name={state.breakfast.name}
              img={state.breakfast.image}
              link={state.breakfast.link}
              type="breakfast"
              date={state.date}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => onAddClick(currentDate, types[0])}
              icon={faPlus}
              style={{
                fontSize: "34px",
                color: "#00000038",
                cursor: "pointer",
              }}
            />
          )}
        </StyledGridContainer>
      </StyledMealTimeContainer>
      <StyledMealTimeContainer>
        <StyledDayTimeTitle>Drugie śniadanie </StyledDayTimeTitle>
        <StyledGridContainer>
          {state.secondBreakfast ? (
            <MealCard
              name={state.secondBreakfast.name}
              img={state.secondBreakfast.image}
              link={state.secondBreakfast.link}
              type="secondBreakfast"
              date={state.date}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => {
                onAddClick(currentDate, types[1]);
              }}
              icon={faPlus}
              style={{
                fontSize: "34px",
                color: "#00000038",
                cursor: "pointer",
              }}
            />
          )}
        </StyledGridContainer>
      </StyledMealTimeContainer>
      <StyledMealTimeContainer>
        <StyledDayTimeTitle>Obiad </StyledDayTimeTitle>
        <StyledGridContainer>
          {state.lunch ? (
            <MealCard
              name={state.lunch.name}
              img={state.lunch.image}
              link={state.lunch.link}
              type="lunch"
              date={state.date}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => {
                onAddClick(currentDate, types[2]);
              }}
              icon={faPlus}
              style={{
                fontSize: "34px",
                color: "#00000038",
                cursor: "pointer",
              }}
            />
          )}
        </StyledGridContainer>
      </StyledMealTimeContainer>
      <StyledMealTimeContainer>
        <StyledDayTimeTitle>Podwieczorek </StyledDayTimeTitle>
        <StyledGridContainer>
          {state.snacks ? (
            <MealCard
              name={state.snacks.name}
              img={state.snacks.image}
              link={state.snacks.link}
              type="snacks"
              date={state.date}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => {
                onAddClick(currentDate, types[3]);
              }}
              icon={faPlus}
              style={{
                fontSize: "34px",
                color: "#00000038",
                cursor: "pointer",
              }}
            />
          )}
        </StyledGridContainer>
      </StyledMealTimeContainer>
      <StyledMealTimeContainer>
        <StyledDayTimeTitle>Kolacja </StyledDayTimeTitle>
        <StyledGridContainer>
          {state.dinner ? (
            <MealCard
              name={state.dinner.name}
              img={state.dinner.image}
              link={state.dinner.link}
              type="dinner"
              date={state.date}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => {
                onAddClick(currentDate, types[4]);
              }}
              icon={faPlus}
              style={{
                fontSize: "34px",
                color: "#00000038",
                cursor: "pointer",
              }}
            />
          )}
        </StyledGridContainer>
      </StyledMealTimeContainer>
      {open && <MiniModal />}
    </StyledDayTimeGrid>
  );
};

export default MealPlannerGrid;

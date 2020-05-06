import React from "react";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import MealPlannerGrid from "../components/MealPlannerGrid/MealPlannerGrid";

const StyledFrame = styled.div`
  width: 80%;
  margin: 0 auto;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px #eee;
  margin-top: 10px;
  border-radius: 5px;
`;

const StyledHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background-color: #f2a22c;
  color: white;
`;

const StyledButton = styled.div`
  cursor: pointer;
`;

const StyledBody = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, auto);
  column-gap: 50px;
`;

const StyledDay = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${(props) =>
    props.isToday &&
    css`
      border: 1px solid #f2a22c;
    `}

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #f2a22c;
      color: white;
    `}
`;
const StyledRecipeDayView = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s linear;
`;
const StyledTitleRecipeView = styled.h2`
  text-align: center;
`;

const MyWeekView = () => {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const MONTHS = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear ? DAYS_LEAP : DAYS;

  return (
    <>
      <StyledFrame>
        <StyledHeader>
          <StyledButton onClick={() => setDate(new Date(year, month - 1, day))}>
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </StyledButton>
          <StyledButton onClick={() => setDate(new Date(year, month, day - 1))}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </StyledButton>
          <div>
            {MONTHS[month]} {year}
          </div>
          <StyledButton onClick={() => setDate(new Date(year, month, day + 1))}>
            <FontAwesomeIcon icon={faAngleRight} />
          </StyledButton>
          <StyledButton onClick={() => setDate(new Date(year, month + 1, day))}>
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </StyledButton>
        </StyledHeader>
        <StyledBody>
          {DAYS_OF_THE_WEEK.map((d) => (
            <StyledDay key={d}>
              <strong>{d}</strong>
            </StyledDay>
          ))}
          {Array(days[month] + (startDay - 1))
            .fill(null)
            .map((_, index) => {
              const d = index - (startDay - 2);
              return (
                <StyledDay
                  key={index}
                  isToday={d === today.getDate()}
                  isSelected={d === day}
                  id={index}
                  onClick={() => {
                    setDate(new Date(year, month, d));
                    setStatus(true);
                    console.log(date.getTime());
                  }}
                >
                  {d > 0 ? d : ""}
                </StyledDay>
              );
            })}
        </StyledBody>
      </StyledFrame>
      <StyledRecipeDayView>
        {status && (
          <>
            <StyledTitleRecipeView>
              {date.toLocaleDateString()}
            </StyledTitleRecipeView>
            <MealPlannerGrid currentDate={date.getTime()} />
          </>
        )}
      </StyledRecipeDayView>
    </>
  );
};

export default MyWeekView;

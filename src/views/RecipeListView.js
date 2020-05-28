import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

// const StyledWrapper = styled.div`
//   width: 1000px;
//   overflow: auto;
//   overflow-x: hidden;
//   height: 90vh;
//   background-color: white;
//   margin: auto auto;
//   padding: 10px;
//   border: 1px solid #888;
//   color: black;
//   box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
//     0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
//   margin-top: 5vh;
//   @media (max-width: 1000px) {
//     width: 100%;
//   }
// `;
// const StyledTitle = styled.p`
//   font-size: 18px;
//   font-weight: bold;
//   text-align: center;
//   grid-row: 2;
//   margin: 0px;
// `;
// const StyledButtonClose = styled.div`
//   color: black;
//   font-size: 18px;
//   font-weight: bold;
//   cursor: pointer;
//   height: fit-content;
//   text-align: end;
//   width: 18px;
//   position: relative;
//   transform: translateX(940px);
//   :hover,
//   :focus {
//     color: darkgray;
//     text-decoration: none;
//     cursor: pointer;
//   }
//   @media (max-width: 1000px) {
//     position: absolute;
//     right: 3%;
//     transform: none;
//   }
// `;
// const StyledHeader = styled.div`
//   display: grid;
//   grid-auto-columns: 1fr;
//   grid-auto-rows: auto auto;
// `;
// const StyledFirstColumn = styled.div`
//   grid-column: 1;
//   grid-row: 1;
//   box-shadow: 0 0 10px #ccc;
//   margin: 25px;
//   padding: 10px 15px 10px 10px;
//   vertical-align: top;
//   margin-right: 0;
//   height: 100%;
//   @media (max-width: 600px) {
//     grid-column: 1;
//     grid-row: 1;
//     margin-left: auto;
//     margin-right: auto;
//     width: auto;
//   }
// `;
// const StyledSecondColumn = styled.div`
//   grid-column: 2;
//   grid-row: 1;
//   box-shadow: 0 0 10px #ccc;
//   margin: 25px;
//   padding: 10px 10px 10px 15px;
//   vertical-align: top;
//   margin-left: 0;
//   height: 100%;
//   @media (max-width: 600px) {
//     grid-column: 1;
//     grid-row: 2;
//     margin-left: auto;
//     margin-right: auto;
//     width: auto;
//     margin-top: 50px;
//     margin-bottom: 50px;
//   }
// `;

// const RecipeListView = ({
//   image,
//   ingredientsQuantity,
//   portion,
//   preparingTime,
//   title,
//   date,
// }) => {
//   const [open, setOpen] = useState(false);
//   const handleCloseClick = () => {
//     setOpen(true);
//   };
//   return (
//     <StyledWrapper>
//       <StyledHeader>
//         <StyledTitle>{title}</StyledTitle>
//         <StyledButtonClose onClick={handleCloseClick}>
//           <FontAwesomeIcon icon={faWindowClose} />
//         </StyledButtonClose>
//       </StyledHeader>
//       <StyledFirstColumn></StyledFirstColumn>
//       <StyledSecondColumn></StyledSecondColumn>
//     </StyledWrapper>
//   );
// };

// export default RecipeListView;

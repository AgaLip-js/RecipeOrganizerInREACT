import React, { useState } from "react";
import styled from "styled-components";
import picture from "../../../../assets/pictures/default-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const StyledImgWrapper = styled.div`
  position: relative;
  width: 300px;
  height: auto;
`;
const StyledInputImg = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  text-align: center;
  :focus + label {
    background: #f47c20;
    background: linear, left top, left bottom, from(#f88e11), to(#f06015);
    background: top, #f88e11, #f06015;
    outline: 1px dotted #000;
    outline: -webkit-focus-ring-color auto 5px;
  }
`;
const StyledInputLabel = styled.label`
  cursor: pointer;
  text-transform: uppercase;
  max-height: 34px;
  max-width: 250px;
  overflow: hidden;
  font-size: 14px;
  border-radius: 5px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  color: #fff;
  border: solid 1px #da7c0c;
  background: rgb(242, 162, 44);
  display: inline-block;
  z-index: 10;
  position: absolute;
  margin: 0;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 5px;
  cursor: pointer;
  :hover {
    background: #f47c20;
    background: linear, left top, left bottom, from(#f88e11), to(#f06015);
    background: top, #f88e11, #f06015;
  }
`;
const StyledImg = styled.img`
  opacity: 0.5;
`;
const StyledIconContainer = styled.button`
  position: absolute;
  z-index: 15;
  margin: 0;
  top: 50%;
  left: 93%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 5px;
  margin-left: 10px;
  height: 30px;
  font-size: 12px;
  cursor: pointer;
  border-radius: 5px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  color: #fff;
  border: solid 1px #f3a737;
  background: rgb(242, 162, 44);
`;

const InputImg = ({ value, name, fileURL, setfileURL }) => {
  const [fileName, setFileName] = useState("Wybierz zdjęcie");
  let fileInput = React.useRef(fileName);

  const addPhoto = (e) => {
    console.log(fileInput.current.files[0]);
    setFileName(e.target.files[0].name);
    setfileURL(URL.createObjectURL(e.target.files[0]));
    console.log(fileURL);
  };

  const clearPhoto = (e) => {
    fileInput.current.value = "";
    console.log(fileInput);
    setFileName("Wybierz zdjęcie");
    setfileURL(null);
  };

  return (
    <StyledImgWrapper>
      <StyledInputImg
        type="file"
        id="file"
        name={name}
        accept="image/*"
        onChange={addPhoto}
        ref={fileInput}
        value={value}
      />
      {fileName !== "Wybierz zdjęcie" && (
        <StyledIconContainer type="button" onClick={clearPhoto}>
          <FontAwesomeIcon icon={faTrash} />
        </StyledIconContainer>
      )}
      <StyledInputLabel htmlFor="file">{fileName}</StyledInputLabel>
      {fileURL != null ? (
        <StyledImg src={fileURL} width="300px" height="150px" />
      ) : (
        <StyledImg src={picture} width="300px" height="150px" />
      )}
    </StyledImgWrapper>
  );
};

export default InputImg;

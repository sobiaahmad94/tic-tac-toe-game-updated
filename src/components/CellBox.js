import React from "react";
import styled from "styled-components";

// this is for every wee cell box button
const StyledCellBoxButton = styled.button`
    background-color: rgb(0, 0, 0);
    color: rgb(51, 153, 204);
    width: 100px;
    height: 100px;
    border: 2px solid rgb(51, 153, 204);
    font-size: 70px;
    text-align: center;
    cursor: pointer;
    outline: none;
    transition: border-color 0.4s ease-in-out;

&:active {
    border-color: transparent;
  

}

&:focus {
    outline: none;
  }
`;

const CellBox = ({ value, onClick }) => {
  return (
    <div>
    <StyledCellBoxButton className="cell-box" onClick={onClick}>
      {value}
    </StyledCellBoxButton>
    </div>
  );
};

export default CellBox;

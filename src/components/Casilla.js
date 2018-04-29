import React from "react";
import styled from "styled-components";

const StyledCasilla = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font: 24px;
  font: bold;
  line: 34px;
  height: 100px;
  margin 5px;
  text: center;
  flex:1
`;

function Casilla(props) {
    const style={backgroundColor:props.value}
    return (
      <StyledCasilla onClick={() => props.onClick()} style={style}>
       
      </StyledCasilla>
    )

}

export default Casilla;

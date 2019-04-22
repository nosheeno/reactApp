import React from "react";
import { Card } from './styles'
import Fram from "../../img/frame.svg";

export const Cards = (props) => {
  return(
  <Card>
    <div className="relative">
      <img src={Fram} />
      <div className={`img ${props.imgsrc}`}/>
    </div>
    <h3 className="cardHeading">{props.title}</h3>
    <p className="cardPara">
      {props.para}
    </p>
  </Card>
  )
};
export default { Cards }

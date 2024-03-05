import React from "react";
import classes from "./Card.module.scss";

type CardProps = React.PropsWithChildren & {};
const Card: React.FC<CardProps> = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;

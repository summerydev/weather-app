import styled from "styled-components";
import Search from "./Search";
import { useState } from "react";

export default function AddWeather() {
  const [isShown, setIsShown] = useState(false);

  const handleOnClick = () => {
    setIsShown(true);
    console.log(isShown);
    // const weather = document.getElementById("weather") as HTMLDivElement;
    // const newCard = document.createElement("div");
    // newCard.classList.add("card");
    // weather!.appendChild(newCard);
  };

  return (
    <>
      <Add onClick={handleOnClick}>+</Add>
      {isShown && <>{Search()}</>}
    </>
  );
}

const Add = styled.div`
  display: block;
  text-align: center;
  border-radius: 10px;
  background-color: gray;
  width: 300px;
  height: 20px;
  padding: 10px;
  margin: auto;
`;

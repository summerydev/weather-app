import moment from "moment";
import styled from "styled-components";

export default function Header() {
  return (
    <Main>
        <h2>Weather App</h2>
        {moment().format("LL")} {moment().format("ddd")} 
    </Main>
  );
}

const Main = styled.header`
color: white;
text-align : center;
padding : 10px;
font-size: 1.2rem;
margin: 10px
`
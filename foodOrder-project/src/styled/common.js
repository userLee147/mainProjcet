import styled from "styled-components";
import { Link } from "react-router-dom";

//주황 #ff5100

export const CommonBtn = styled(Link)`
padding: 10px 40px;
margin: 5px;
border: 1px solid #ff5100;
border-radius: 8px;
color: #ff5100;
 &:hover{
    opacity: 0.9s;
    color: white;
    background-color: #ff5100;
 }
`
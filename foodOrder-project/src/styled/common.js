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

export const NonebackgroudBtn = styled.button`
background: none;

&:hover{
        outline: none;
        border: none;
        background-color: none;
    }
`



export const SearchSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    padding: 0 10px;
    margin: 10px 0;
    background-color: #f1f3f5;
    border-radius: 8px;


    input {
        width: 90%;
    font-size: 20px;
    padding: 10px;
    margin: 10px;
    border: none;
    background: none;
    
    &:focus{
        outline: none;
        border: none;
        background-color: none;
    }
    }
`

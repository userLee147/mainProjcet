import styled from "styled-components";

export const ModalWrap = styled.div`
    width: 100%;
    min-height: 100vh;
    background:#fff7ebd2;
    box-sizing: border-box;
    display: flex;
    justify-content: center;

    position: fixed;
    margin: auto;
    top: 0;
 left: 0;
`

export const ModalLayOutBox = styled.div`
    position: absolute;
    width: 400px;
    border-radius: 8px;
    background-color: white;
    padding: 5px;
    top: 30%;
`
export const ModalCloseDiv = styled.div`
    display: flex;
    justify-content: end;
`

export const CloseBtn= styled.button`
padding: 0px 10px;
background-color: white;
color: black;
`

export const ModalContent = styled.div`
padding: 5px 0px;
`

export const ModalBtonBox = styled.div`
    padding: 5px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
`
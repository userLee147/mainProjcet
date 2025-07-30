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
    z-index: 20;
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

    :hover{
background-color: ${({theme})=> theme.colors.gray[6]};
}

`

export const CloseBtn= styled.button`
padding: 0px ${({theme})=> theme.spacing[3]}; ;
background-color: white;
color: ${({theme})=> theme.colors.gray[1]};
`
export const CloseBtnV2 = styled.button`
display: flex;
color: ${({theme})=> theme.colors.gray[1]};
border-radius:${({theme})=> theme.borderRadius.md} ;
padding: ${({theme})=> theme.spacing[1]};
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

// 모달 안내문구 div-p
export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const InfoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[3]};
  margin: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};

  a {
    color: ${({ theme }) => theme.colors.orangeMain};
  }
`;

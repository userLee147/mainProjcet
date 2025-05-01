import React, { useState } from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'

const ContentsDiv = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 24px;
    background: #dad5d5;
    max-width: 500px;
    border-radius: 12px;
    box-shadow:  0 4px 6xp #e7e7e7;
`

const Title = styled.h1`
font-size: 48px;
font-weight: bold;
margin-bottom: 24px;
`

const InputContainer = styled.div`
    display:  flex;
    margin-bottom: 24px;
`

const Input = styled.input`
    flex: 1;
    padding:12px;
    border: 1px solid #e2e2e2;
    outline: none;
    border-radius: 4px 0 0 4px ;
    &:focus{
        border-color:#4b7fcc;
    }
`

const AddBtutton = styled.button`
padding: 12px 24px;
background: #4b7fcc;
color: white;
border: none;
border-radius: 0 4px 4px 0  ;
cursor: pointer;
&:hover{
    border-color:#4b7fcc;
}
`

const TodoListContainer = styled.ul`
list-style: none;
`
const Todolist = () => {
    const [text, setText] = useState("")
    const [list, setList] = useState([])

    const addText = () => {
        // input 태그에 입력된 값이 없으면 addTodo 종료
        if (text.trim() === "") return;
        // input태그의 value를 새로운 객체에 넣어서
        const newText = {
            id: Date.now(),
            // input 값을 넣어준다.
            ntext: text,
            checkInfo: false,
        }
        // 기존의 리스트에 담고
        setList([...list, newText])
        // text는 비워준다.
        setText("");
    }
    const addTextEnter = (ev) => {
        if (ev.key === "Enter") {
            addText();
        }
    }

    const changeCheck = (id) => {
        setList(list.map((list) =>
            list.id === id?{...list, checkInfo: !list.checkInfo } : list
        ));
    }
    const remove = (id) => {
        setList(list.filter((list)=> list.id !== id))
    }
    return (
        <ContentsDiv>
            <Title>TodoList</Title>
            <InputContainer>
                <Input type="text"
                    value={text}
                    //함수의 매개변수를 사용해서 이벤트객체와 연결했을 때
                    onChange={(ev) => setText(ev.target.value)}
                    onKeyDown={addTextEnter}
                />
                <AddBtutton onClick={addText}>추가</AddBtutton>
            </InputContainer>
            <TodoListContainer>
                { list.map((list) =>
                    <TodoItem
                        key={list.id}
                        list={list} 
                        changeCheck={changeCheck}
                        remove ={remove}
                    />
                )}
            </TodoListContainer>
        </ContentsDiv>
    )
}

export default Todolist
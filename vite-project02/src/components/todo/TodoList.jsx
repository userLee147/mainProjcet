import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import useTodoStore from '../../store/post/useTodoStore';

const ListContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;
const TodoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  margin: 8px 0;
  border-radius: 4px;
`;
const Checkbox = styled.input`
  margin-right: 12px;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
const TodoText = styled.span`
  flex: 1;
  text-decoration: ${(porps) => (porps.completed ? 'line-through' : 'none')};
`;

const DeletButton = styled.button`
  padding: 6px 12px;
  color: white;
  background-color: red;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
`;

const FilterButton = styled.button`
  padding: 6px 12px;
  color: white;
  background-color: red;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
function TodoList() {
  const { /*todos,*/ toggleTodo, deleteTodo, setFilter, getFilteredTodos } = useTodoStore();

  // const [filter, setFilter] = useState("all");

  // const filterTodos = todos.filter(todo => {
  //     switch(filter){
  //         case "active" :
  //             return !todo.completed;
  //         case "complete" :
  //             return todo.completed;
  //         default:
  //             return true;
  //     }

  // })

  const todos = getFilteredTodos();

  return (
    <ListContainer>
      <FilterContainer>
        <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
          전체
        </FilterButton>
        <FilterButton active={filter === 'active'} onClick={() => setFilter('active')}>
          진행중
        </FilterButton>
        <FilterButton active={filter === 'completed'} onClick={() => setFilter('completed')}>
          완료
        </FilterButton>
      </FilterContainer>
      {todos.map((todo) => (
        <TodoItem key={todo.id}>
          <Checkbox type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)}></Checkbox>
          <TodoText completed={todo.completed}>{todo.text}</TodoText>
          <DeletButton onClick={() => deleteTodo(todo.id)}>삭제</DeletButton>
        </TodoItem>
      ))}
    </ListContainer>
  );
}

export default TodoList;

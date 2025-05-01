import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../components/styled/common';
import PostList from '../../components/post/PostList';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NewPostButton = styled(Link)`
  display: inline-block;
  background-color: #6c6cff;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  margin: 12px;
  &:hover {
    opacity: 0.9s;
    color: white;
  }
`;

const PostListPage = () => {
  return (
    <Container>
      <Header>
        <h1>게시글 목록</h1>
        <NewPostButton>게시글 작성</NewPostButton>
      </Header>
      <PostList></PostList>
    </Container>
  );
};

export default PostListPage;

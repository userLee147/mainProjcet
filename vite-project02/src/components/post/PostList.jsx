import React, { useEffect, useState } from 'react';
import { Button, Container } from '../styled/common';
import usePostStore from '../../store/post/PostStore';
import { Loading, Error, Content, ButtonContainer, PostCard, Title, LoadingOverlay } from '../styled/PostList.styled';
import styled from 'styled-components';

const ControlButton = styled(Button)`
  margin: 0;
`;

const PostList = () => {
  const { posts, loading, getPost, error, deletePost } = usePostStore();
  const [deletePostId, setDeletePostId] = useState();
  useEffect(() => {
    getPost();
  }, [getPost]);

  const handleDelete = async (id) => {
    setDeletePostId(id);
    await deletePost(id);
    setDeletePostId(null);
  };

  if (loading && posts.length === 0) return <Loading>로딩중...</Loading>;
  if (error) return <Error>에러발생 : {error}</Error>;
  return (
    <Container>
      {posts.map((post) => (
        <PostCard key={post.id}>
          <Title>{post.title}</Title>
          <Content>{post.body}</Content>
          <ButtonContainer>
            <ControlButton>수정</ControlButton>
            <ControlButton disabled={loading} onClick={() => handleDelete(post.id)}>
              {deletePostId === post.id ? '삭제중...' : '삭제'}
            </ControlButton>
          </ButtonContainer>
          {deletePostId === post.id && (
            <LoadingOverlay>
              <div>삭제중</div>
            </LoadingOverlay>
          )}
        </PostCard>
      ))}
    </Container>
  );
};

export default PostList;

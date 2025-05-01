import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    // url에 등록되어있는 url 파라미터의 값을 가져옴
    // {}은 자바스크립트 부분이다. 훅에서 Params를 가져와주는 건가..?
    const {username} = useParams();
  return (
    <div>
        <h2>{username}의 프로필 페이지 입니다.</h2>
        <p>여기에 해당 사람의 정보를 보여주는 것</p>
    </div>
  )
}

export default Profile
import React, { useContext } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useUser } from '../components/context/UserContext'

const UserDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const { getUserById, deleteUser } = useUser();
    const user = getUserById(parseInt(id));
    
    const handleDelete = () => {
        if (window.confirm('정말로 이 사용자를 삭제하시겠습니까?')) {
          deleteUser(parseInt(id));
          navigate('/');
        }
    }

    return (

        <div>
            <button onClick={() => navigate('/')}>뒤로가기</button>
            <button onClick={handleDelete}>삭제하기</button>
            <h2>유저상세페이지</h2>
            {
                <>
                    <div>
                        <img src={user.img} />
                    </div>
                    <div>
                        <p>{user.id}</p>
                        <p>{user.login ? "🟢 온라인" : "🔴 오프라인"}</p>
                        <p>{user.name}</p>
                        <p>{user.department}</p>
                    </div>
                </>  
            }

        </div>
    )
}

export default UserDetail
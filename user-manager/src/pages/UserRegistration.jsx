import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../components/context/UserContext';

const UserRegistration = () => {
    const {users , setUsers} = useUser();
    const navigate  = useNavigate()

    
    const [formData, setFormData] = useState({
        name :"",
        age:"",
        department : "",
        isOnline : false,
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newId = users.length + 1;

        setUsers([...users,{
            id : newId,
            name : formData.name.trim(),
            department : formData.department,
            age :parseInt(formData.age),
            isOnline:formData.isOnline
        }]);
        navigate('/');
    }

    const changeValue = (e) => {
        const {name, value, type} = e.target;
        setFormData(prev => (
            {...prev, [name] : value} 
        ));
    }
    


  
    return (
        <div>
             <button onClick={() => navigate('/')}>홈으로 가기</button>
    
            <h2>유저 등록페이지</h2>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">이름</label>
                <input 
                name ="name" 
                id="name" 
                type="text" 
                placeholder='이름를 입력해주세요' 
                value={formData.name} 
                onChange={changeValue}
                required/> 
               
                <label htmlFor="age">나이</label>
                <input 
                name ="age" 
                id="age" 
                type="number" 
                placeholder='나이를 입력해주세요' 
                value={formData.age} 
                onChange={changeValue}
                required/> 
                
                
                <select name="department" id="department" value={formData.department} onChange={changeValue}>부서
                    <option value="행정">행정</option>
                    <option value="영업">영업</option>
                    <option value="회계">회계</option>
                    <option value="전산">전산</option>
                </select>

                <button type="submit">등록하기</button>
                <button type="ret" onClick={() => navigate('/')} >취소</button>
            </form>
        </div>
    )
}

export default UserRegistration
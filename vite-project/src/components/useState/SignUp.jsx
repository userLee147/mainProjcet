import React, { useState } from 'react'
// 이름과 성별을 입력받을 수 있도록 만들고
// submit 클릭시 이름 : ~~ 성별 : ~~ 출력해라

const SignUp = () => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("man");

    const handleChangeName = (ev)=>{
        setName(ev.target.value) 
    }
    const handleChangeGender = (ev)=>{
        setGender(ev.target.value)
    }
    
   const handleSubmit = (ev) => {
        alert(`이름 : ${name}, 성별 ${gender}`);
        ev.preventDefault(); // a 태그나 submit태그 같은 고유동작을 중단하기 위한 이벤트 방지
        //ev.stopPropagation(); 부모엘리먼트에게 이벤트가 전파되는 것을 막을 수 있음
   }
    
  return (
    
    <form onSubmit={handleSubmit}>
        <label htmlFor="">
            이름 : 
                <input type="text" onChange={handleChangeName}
                value={name} /> 
        </label>
        <br /><br />
        <label htmlFor="">
            성별 : 
            <select value={gender} onChange={handleChangeGender}>
                <option value="man">남자</option>
                <option value="woman">여자</option>
            </select>
        </label>
        <br /><br />
        <button type ="submit">제출</button>
        
    </form>

  )
}

export default SignUp
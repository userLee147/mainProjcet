import React, { useState,useRef,useEffect } from 'react'

const UserRefTest = () => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("man");
    const useInput = useRef(null);

    const handleChangeName = (ev) => {
        setName(ev.target.value)
    }
    const handleChangeGender = (ev) => {
        setGender(ev.target.value)
    }

    const handleSubmit = (ev) => {
        alert(`이름 : ${name}, 성별 ${gender}`);
        ev.preventDefault(); // a 태그나 submit태그 같은 고유동작을 중단하기 위한 이벤트 방지
        //ev.stopPropagation(); 부모엘리먼트에게 이벤트가 전파되는 것을 막을 수 있음
    }
    const handleReset = () => {
        setName("")
        setGender("man");
    }
    // 초기화버튼을 눌렀을 때 
    //state가 변경되므로 화면이 렌더링 되면 input의 포커스 설정
    
    // name 또는 gender의 값이 변경되면 해당 함수를 한 번 실행해줘
    // 옵셔널 : ? 를 붙여주면 된다.
    useEffect(() => {
        useInput.current?.focus();
    },[name,gender])

    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                이름 :
                <input type="text" onChange={handleChangeName}
                    value={name}
                    ref={useInput}
                />
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
            <button type="submit">제출</button>
            <button type="button" onClick={handleReset}>초기화</button>

        </form>
    )
}

export default UserRefTest
import React from 'react'


const imgUrl = "data:image/png;base64,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"
const text = "text"
const num = 10;

const loginUser = {
  name : "최지원",
  id : "jiwon001",
  age : 50,
}

const numbers = [1,2,3]

function getImg(){
  return <img src={imgUrl} alt="구글" width={100} />
}

const userList = [{
  name : "최지원",
  id : "jiwon001",
  age : 50,
},
{
  name : "최지투",
  id : "jiwon002",
  age : 40,
},
{
  name : "최지삼",
  id : "jiwon003",
  age : 30,
}]

const JavaScript = () => {
  return (
    <div>
        <h2>변수 넣는 방법</h2>
        <ul>
            <li>{text}</li>
            <li>{text +"TEST"}</li>
        </ul>

        <h2>숫자 및 계산식 사용</h2>
        <ul>
            <li>{num}</li>
            <li>{num + 20}</li>
        </ul>

        <h2>Boolean 값</h2>
        <ul>
            <li>{true}</li>
            <li>{false}</li>
            <li>{undefined}</li>
            <li>{null}</li>
        </ul>

        <h2>Object, Array 값</h2>
        <ul>
          {
            Object.keys(loginUser).map((key) => 
              <li key={key}> {/*반복되는 요소 안에는 무조건 key 라는 속성이 필요함*/}
                {key} : {loginUser[key]}
              </li>
          )}
          <li>{numbers}</li> {/*배열 그대로 출력(문자열로 자동변환)*/}
      
        </ul>

      <h2>태그 속성에 값 넣기</h2>
      <ul>
        <li>
          <img src={imgUrl} alt="구글" width={100} />
        </li>
      </ul>

      <h2>조건부 렌더링</h2>
      <ul>
        <li>{num > 10 ? "10보다 큼" : "10보다 작음"}</li>
        <li>{num == 10 && "조건이 true일때 보임"}</li>
        <li>{num > 10 || "조건이 true일때 보임"}</li>
        <h3>삼항 연산자</h3>
        <li>{1 + 1 === 2? "참입니다" : "거짓입니다."}</li>

        <h3>AND 연산자</h3>
        <li>{1 + 1 === 2 && "AND 연산자1" }</li>
        <li>{1 + 1 !== 2 && "AND 연산자1" }</li>
        <li>{userList.length !== 0  && "user목록" }</li>

        <h3>OR 연산자</h3>
        <li>{1 + 1 === 2 || "OR 연산자1" }</li>
        <li>{1 + 1 !== 2 || "OR 연산자2" }</li>

      </ul>
    
       <h2>함수호출로 태그가 올 수 있음</h2>
        <ul>
          <li>{getImg()}</li>
        </ul>

        <h2>배열을 이용한 동적 리스트</h2>
        <ul>
          {userList.map((user)=> <li key={user.id} >이름 : {user.name}, ID : {user.id}, age : {user.age}</li>)}
        </ul> {/* 동적으로 ui생성시 react가 변경 항목을 식별하기 위해 key 속성이 필요함 */}
            
            

    </div>
    
  )
}

export default JavaScript
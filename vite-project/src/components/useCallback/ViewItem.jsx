import React, { useState, useEffect } from 'react'

//Reack.memo()로 컴포넌트를 감싸면 props 변경될때만 리렌더링을 한다.
//즉 불필요한 리렌더링을 막을 수 있다.

// 단, 부모가 리렌더링되면 함수도 매번 새로 생성됨
// 이게 props가 바뀐 것처럼 감지된다.=> React.memo로 감싸더라도 리렌더링 발생!

const ViewItem = React.memo(({getItems}) => {

  const [items, setItmes] = useState([]);

  useEffect(()=> {
    console.log("viewItem 렌더링 / getItems변경됨")
    setItmes(getItems());
  }, [getItems]);
  return (
    <div>
      <h4>계산된 아이테 목록</h4>
      <ul>
        {items.map((item, idx)=> 
           <li key={idx}> {item} </li>
        )}
      </ul>
    
    </div>
  )
}); 

export default ViewItem
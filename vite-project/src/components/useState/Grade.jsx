import React from 'react'

const Grade = ({ isLogin }) => {
    return (
        <div>
            {
                isLogin ?
                <div>로그인이면 vip</div>
                :
                <div>로그인이 아니면 안됨</div>
            }
        </div>
    )
}

export default Grade
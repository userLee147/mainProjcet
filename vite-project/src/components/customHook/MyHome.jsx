import React, { useState } from 'react'
import useInput from './useInput';

const MyHome = () => {
  
    const name = useInput('');
    const email = useInput('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name)
        alert(`이름 : ${name.value}, 이메일 : ${email.value}`)
    }

    return (
                <form onSubmit={handleSubmit}>
            <input placeholder='이름....' {...name} />
            <input  placeholder='이메일...' {...email}/>
            <button>제출</button>

        </form>
    )
}

export default MyHome
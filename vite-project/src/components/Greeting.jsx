import React from 'react'

  



const Greeting = ({name, age, location}) => {
  return (
    <div>
        <h1>Hello, {name}!</h1>
        <p>Age : {age}</p>
        <p>Location : {location}</p>
    </div>
  )
}

export default Greeting
import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App

import React, {useEffect,useState} from 'react'

export const App = () => {

  const [backendData, setBackendData] =useState([{}])
  useEffect(() => {
    fetch("/api").then(
      Response => Response.json()
    ).then(
      data =>{
        setBackendData(data)
      }
    )
  }, [])
  return (
    <div>App</div>
  )
}
import React, {useEffect,useState} from 'react'

export const App = () => {

  const [backendData, setBackendData] =useState([{}])
  useEffect(() => {
    fetch("/api ")
  })
  return (
    <div>App</div>
  )
}

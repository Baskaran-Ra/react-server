import React, {useEffect,useState} from 'react'

export const App = () => {

  const [backendData, setBackendData] =useState([{}])
  useEffect(() => {
    fetch()
  })
  return (
    <div>App</div>
  )
}

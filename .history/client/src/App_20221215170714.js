import React, {useEffect,useState} from 'react'

export const App = () => {

  const [backendData, setBackendData] =useState([{}])
  useEffect(() => {
    fetch("/api").then(
      res
    )
  })
  return (
    <div>App</div>
  )
}

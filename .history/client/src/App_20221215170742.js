import React, {useEffect,useState} from 'react'

export const App = () => {

  const [backendData, setBackendData] =useState([{}])
  useEffect(() => {
    fetch("/api").then(
      Response => Response.json
    )
  })
  return (
    <div>App</div>
  )
}

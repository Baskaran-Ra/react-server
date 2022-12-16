import React, {useEffect,useState} from 'react'

const App = () => {
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
    <div> 
      {(typeof backendData.users === 'undefined')? (
        <p>Loading...</p>
      ):(
        ba
      )}


    </div>
  )
}

export default App


  
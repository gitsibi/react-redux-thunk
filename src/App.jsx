import { useState } from 'react'
import './App.css'
import store from './components/store'
import { retrieveData } from './components/Action'

function App() {

  const [data,setData]=useState([])

  store.subscribe(()=>{
    console.log(store)
    setData(store.getState().user)
  })


  return (
    <>

    {
      data && data?.map((user)=>{
        return <div key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      })
    }
      <button onClick={retrieveData}>Fetch Data</button>
    </>
  )
}

export default App
import React, { useState } from 'react'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'
import Edit from './Components/Edit'
import Add from './Components/Add'

const App = () => {

  let [user,setUser] = useState([
{
    firstName:"Ajith",
    lastName:"Kumar",
    email:"ajith@gmail.com",
    mobile:"9087654321",
    batch:"B51" 
},
{
    firstName:"Lokesh",
    lastName:"Kumar",
    email:"lokesh@gmail.com",
    mobile:"7890987654",
    batch:"B51" 
},
{
  firstName:"Yogesh",
  lastName:"Waran",
  email:"yohesh@gmail.com",
  mobile:"4567897649",
  batch:"B51" 
} 
  ])

  return <>
  <BrowserRouter>
    <div id="wrapper">
      <Sidebar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard user={user} setUser={setUser} />} />
        <Route path='/add-user' element={<Add user={user} setUser={setUser} />} />
        <Route path='/edit-user/:id' element={<Edit user={user} setUser={setUser} />} />
        <Route path='*' element={<Navigate to ='/dashboard' />} />
      </Routes>
    </div>
  </BrowserRouter>
  </>
}

export default App
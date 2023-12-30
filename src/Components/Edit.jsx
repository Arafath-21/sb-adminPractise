import React,{useEffect, useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const Edit = ({user,setUser}) => {
    let params = useParams()
    let navigate = useNavigate()

    let [firstName,setFName] = useState("")
    let [lastName,setLName] = useState("")
    let [email,setEmail] = useState("")
    let [mobile,setMobile] = useState("")
    let [batch,setBatch] = useState("")

    useEffect(()=>{
        if(params.id<user.length)
        {
            setFName(user[params.id].firstName)
            setLName(user[params.id].lastName)
            setEmail(user[params.id].email)
            setMobile(user[params.id].mobile)
            setBatch(user[params.id].batch)
        }else{
            alert("Invalid user")
            navigate('/dashboard')
        }
    },[])
    
    const handleEdit = ()=>{
      let newArray = [...user];
      newArray.splice(params.id,1,{
        firstName,
        lastName,
        email,
        mobile,
        batch
      })
      setUser(newArray);
      navigate('/dashboard')
    }
  
    return <>
          <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                  <div className="container-fluid">
                      <div className="d-sm-flex align-items-center justify-content-between mb-4">
                              <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
                      </div>
                          <div className="mb-3">
                              <div className="row">
                                  <div className="col-lg-7 offset-2">
                                  <form>
                                      {/* first name */}
                                      <label  className="form-label">First Name</label>
                                      <input type="email" className="form-control" value={firstName} onChange={(e)=>{setFName(e.target.value)}}/>
                                      {/* last name */}
                                      <label  className="form-label">Last Name</label>
                                      <input type="email" className="form-control" value={lastName} onChange={(e)=>{setLName(e.target.value)}}/>
                                      {/* email address */}
                                      <label  className="form-label">Email address</label>
                                      <input type="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                      {/* Mobile */}
                                      <label  className="form-label">Mobile</label>
                                      <input type="email" className="form-control" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>
                                      {/* Batch */}
                                      <label  className="form-label">batch</label>
                                      <input type="email" className="form-control" value={batch} onChange={(e)=>{setBatch(e.target.value)}}/>
                                      
                                      <button type="submit" className="btn btn-primary mt-5" onClick={()=>handleEdit()}>Submit</button>
                                  </form>
                                  </div>
                              </div>
                          </div>
                  </div>
              </div>
          </div>
    </>
}

export default Edit
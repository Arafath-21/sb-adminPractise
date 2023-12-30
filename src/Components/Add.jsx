import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Add = ({user,setUser}) => {
  let [firstName,setFName] = useState("")
  let [lastName,setLName] = useState("")
  let [email,setEmail] = useState("")
  let [mobile,setMobile] = useState("")
  let [batch,setBatch] = useState("")

  let navigate = useNavigate()

  const handleSubmit = ()=>{
    let newArray = [...user];
    newArray.push({
        firstName,lastName,email,batch,mobile
    });
    setUser(newArray);
    navigate('/dashboard')
  }

  return <>
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Add User</h1>
                    </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-lg-7 offset-2">
                                <form>
                                    {/* first name */}
                                    <label  className="form-label">First Name</label>
                                    <input type="email" className="form-control" onChange={(e)=>{setFName(e.target.value)}}/>
                                    {/* last name */}
                                    <label  className="form-label">Last Name</label>
                                    <input type="email" className="form-control" onChange={(e)=>{setLName(e.target.value)}}/>
                                    {/* email address */}
                                    <label  className="form-label">Email address</label>
                                    <input type="email" className="form-control" onChange={(e)=>{setEmail(e.target.value)}}/>
                                    {/* Mobile */}
                                    <label  className="form-label">Mobile</label>
                                    <input type="email" className="form-control" onChange={(e)=>{setMobile(e.target.value)}}/>
                                    {/* Batch */}
                                    <label  className="form-label">batch</label>
                                    <input type="email" className="form-control" onChange={(e)=>{setBatch(e.target.value)}}/>
                                    
                                    <button type="submit" className="btn btn-primary mt-5" onClick={()=>handleSubmit()}>Submit</button>
                                </form>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
  </>
}

export default Add
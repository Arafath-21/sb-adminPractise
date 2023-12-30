import React,{useContext} from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({user,setUser}) => {

    let data = [
        {
            title: "Earnings (Monthly)",
            value: "$40,000",
            icon: "fa-calendar",
            color: "primary",
            isProgress: false
        },
        {
            title: "Earnings (Annual)",
            value: "$215,000",
            icon: "fa-dollar-sign",
            color: "success",
            isProgress: false
        },
        {
            title: "Tasks",
            value: "20%",
            icon: "fa-clipboard-list",
            color: "info",
            isProgress: true
        },
        {
            title: "Pending Requests",
            value: "18",
            icon: "fa-comments",
            color: "warning",
            isProgress: false,
        }
    ]

    const handleDelete = (i)=>{
        let newArray = [...user];
        newArray.splice(i,1);
        setUser(newArray)
    }

    const navigate = useNavigate();
  return <>
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    </div>
                    <div className="row">
                        {
                        data.map((e,i)=>{
                            return <Card key={i}
                            isProgress={e.isProgress}
                                title= {e.title}
                                color={e.color}
                                value={e.value}
                                icon={e.icon} />
                        })
                        }
                    </div>
                    <div className="row">
                        <div className="container-fluid">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Batch</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.map((e,i)=>{
                                        return <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{e.firstName}</td>
                                            <td>{e.lastName}</td>
                                            <td>{e.email}</td>
                                            <td>{e.mobile}</td>
                                            <td>{e.batch}</td>
                                            <td>
                                            <button className='btn btn-info' onClick={()=>navigate(`/edit-user/${i}`)}>Edit</button>
                                            &nbsp;
                                            <button className='btn btn-danger' onClick={()=>handleDelete(i)}>Delete</button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>
}

export default Dashboard
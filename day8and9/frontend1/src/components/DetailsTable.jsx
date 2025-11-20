import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DetailsTable = () => {

    const [details, setDetails] = useState([]);
    const [editId, setEditId] = useState("");
    const [editData, setEditData] = useState({})

    const datafetch = async () => {
        const res = await axios.get("http://localhost:3000/api/auth/tabledata");
        // console.log(res.data.tabledata);
        setDetails(res.data.tabledata)

    }

    useEffect(() => {


        (() => {
            datafetch()
        })()

    }, [details])

    const handleEdit =  (edit) => {
        setEditId(edit._id);
        setEditData({userName:edit.userName, userEmail: edit.userEmail})
    }

    const handleChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value })
    }

    const handleUpdate = async() =>{
        const res = await axios.put(`http://localhost:3000/api/auth/editdata/${editId}`,editData)
        console.log(res);
        alert(res.data.msg)
        setEditId(null)
    }

    const handleDelete = async(id)=>{
        const res = await axios.delete(`http://localhost:3000/api/auth/delete/${id}`)
        alert(res.data.msg)
    }


    return (
        <>
            <table className='w-4xl m-5 border bg-blue-50'>
                <thead>
                    <tr>
                        <th className='border p-1'>S.no</th>
                        <th className='border p-1'>ID</th>
                        <th className='border p-1'>Name</th>
                        <th className='border p-1'>Email</th>
                        <th className='border p-1'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map((e, id) => (
                        <tr key={e._id}>
                            <td className='border p-1'>{id+1}</td>
                            <td className='border p-1'>{e._id}</td>

                            <td className={`border p-1 ${editId == e._id && "bg-white"}`}>
                                {editId == e._id ?
                                    <input type="text" value={editData.userName} name='userName' onChange={handleChange} /> :
                                    e.userName}</td>

                            <td className={`border p-1 ${editId == e._id && "bg-white"}`}>
                                {editId == e._id ?
                                    <input type='email' value={editData.userEmail} name='userEmail' onChange={handleChange}/> :
                                    e.userEmail}</td>

                            <td className='border p-1.5'>
                                {editId == e._id ?
                                    <div className='flex gap-3 justify-evenly'>
                                        <button className='bg-green-200 border border-green-800 text-green-800 px-2 rounded-2xl'  
                                        onClick={handleUpdate}>update</button>
                                        <button className='bg-gray-200 border border-gray-800 text-gray-800 px-2 rounded-2xl'
                                        onClick={()=>(setEditId(null))}>cancel</button>
                                    </div> :
                                    <div className='flex gap-3 justify-evenly'>
                                        <button onClick={() => (handleEdit(e))} className='bg-yellow-200 border border-yellow-800 text-yellow-800 px-2 rounded-2xl'>Edit</button>
                                        <button onClick={()=>(handleDelete(e._id))} className='bg-red-200 border border-red-800 text-red-800 px-2 rounded-2xl'>delete</button>
                                    </div>
                                }
                            </td>
                        </tr>
                    ))
                    }

                </tbody>
            </table>
        </>
    )
}

export default DetailsTable
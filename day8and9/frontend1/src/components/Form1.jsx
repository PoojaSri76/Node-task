import React, { useState } from 'react'
import axios from 'axios';

const Form1 = () => {

    const [formdata, setFormdata] = useState({ userName: "", userEmail: "" });
    const [response, setResponse] = useState({})

    const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.post("http://localhost:3000/api/auth/userdetails", formdata);
        console.log(res.data);
        setResponse(res.data);
        setTimeout(() => {
            setResponse("")
        }, 2000);
        setFormdata({ userName: "", userEmail: "" })

    }


    return (
        <>
            <div className='flex flex-col justify-between m-20 bg-amber-500 p-8'>
                <form onSubmit={handleSubmit}>
                    <input type='text' onChange={handleChange} value={formdata.userName} name='userName' placeholder='Enter Name' className='bg-white p-1 m-3 w-50 border rounded' /> <br />
                    <input type='email' onChange={handleChange}value={formdata.userEmail} name='userEmail' placeholder='Enter email' className='bg-white p-1 m-3 w-50 border rounded' /> <br />
                    <input type='submit' value='Submit' className='bg-black p-2 rounded-md m-3 w-50 text-white' />
                </form>

                <div>
                   <p className='text-sm text-white mx-4'>{response.msg}</p>
                </div>

            </div>

        </>

    )
}

export default Form1
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
        setResponse(res.data)

    }


    return (
        <>
            <div className='flex justify-between m-20 bg-amber-500 p-8'>
                <form onSubmit={handleSubmit}>
                    <input type='text' onChange={handleChange} name='userName' placeholder='Enter Name' className='bg-white p-1 m-4 border rounded' /> <br />
                    <input type='email' onChange={handleChange} name='userEmail' placeholder='Enter email' className='bg-white p-1 m-4 border rounded' /> <br />
                    <input type='submit' value='Submit' className='bg-black mx-15 p-2 rounded-2xl my-2 text-white' />
                </form>

                <div>
                   <p className='text-sm text-blue-600'>{response.msg}</p>
                </div>

            </div>

        </>

    )
}

export default Form1
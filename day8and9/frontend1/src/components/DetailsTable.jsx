import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DetailsTable = () => {

    const [details, setDetails] = useState([])

    const datafetch = async () => {
        const res = await axios.get("http://localhost:3000/api/auth/tabledata");
        // console.log(res.data.tabledata);
        setDetails(res.data.tabledata)

    }

    useEffect(() => {
        datafetch()

    },[])
    

    return (
        <>
            <table className='w-4xl m-5 border bg-blue-50'>
                <thead>
                    <tr>
                        <th className='border p-1'>ID</th>
                        <th className='border p-1'>Name</th>
                        <th className='border p-1'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map((e) => (                    
                        <tr key={e._id}>
                            <td className='border p-1'>{e._id}</td>
                            <td className='border p-1'>{e.userName}</td>
                            <td className='border p-1'>{e.userEmail}</td>
                        </tr>
                    ))
                    }

                </tbody>
            </table>
        </>
    )
}

export default DetailsTable
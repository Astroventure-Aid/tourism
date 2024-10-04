import React, { useEffect, useState } from 'react';
import "./AllForms_Admin.css"
import axios from 'axios';
import { useParams } from 'react-router';

const AllForms_Admin = () => {
    const [data, setData] = useState([]);
    const { tripId } = useParams()

    const getForms = async () => {
        const { data } = await axios.get(`${String(import.meta.env.VITE_APP_BACKEND_URI)}/api/v1/trip/admin/get-forms/${tripId}`)
        setData(data.data);
    }

    // Simulate backend data fetch
    useEffect(() => {
        getForms()
    }, [tripId]);

    return (
        <div className='allForms '>
            <div className='text-4xl text-red-500 font-bold flex justify-center' >
                Dasboard
            </div>
            <div style={{ padding: '20px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#ccc' }}>
                            <th style={{ border: '1px solid #000', padding: '10px' }}>Name</th>
                            <th style={{ border: '1px solid #000', padding: '10px' }}>Email</th>
                            <th style={{ border: '1px solid #000', padding: '10px' }}>Phone</th>
                            <th style={{ border: '1px solid #000', padding: '10px' }}>Optional Phone</th>
                            <th style={{ border: '1px solid #000', padding: '10px' }}>Transaction ID</th>
                            <th style={{ border: '1px solid #000', padding: '10px' }}>Screenshot</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item, index) => (
                            <tr key={index} style={{ textAlign: 'center' }}>
                                <td style={{ border: '1px solid #000', padding: '10px' }}>{item.name}</td>
                                <td style={{ border: '1px solid #000', padding: '10px' }}>{item.email}</td>
                                <td style={{ border: '1px solid #000', padding: '10px' }}>{item.phone}</td>
                                <td style={{ border: '1px solid #000', padding: '10px' }}>{item.optionalPhone || 'N/A'}</td>
                                <td style={{ border: '1px solid #000', padding: '10px' }}>{item.transactionId}</td>
                                <td style={{ border: '1px solid #000', padding: '10px' }}>
                                    <a href={`${item.upiPaymentSS}`} target='_blank'>
                                        <button className=' text-blue-500' >screen shot</button>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllForms_Admin;

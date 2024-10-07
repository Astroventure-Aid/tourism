import React, { useEffect, useState } from 'react';
import "./AllForms_Admin.css"
import axios from 'axios';
import { useParams } from 'react-router';
import NotFound from '../NotFound/NotFound';

const AllForms_Admin = () => {
    const [forms, setForms] = useState([]);
    const [trip, setTrip] = useState(null)
    const { tripId } = useParams()

    const getForms = async () => {
        try {
            const res = await axios.get(`${String(import.meta.env.VITE_APP_BACKEND_URI)}/api/v1/trip/get-trip/${tripId}`)
            setTrip(res.data.data)
    
            const { data } = await axios.get(`${String(import.meta.env.VITE_APP_BACKEND_URI)}/api/v1/trip/admin/get-forms/${tripId}`)
            setForms(data.data);
        } catch (error) {
            // console.log(error);
        }
    }

    // Simulate backend data fetch
    useEffect(() => {
        getForms()
    }, [tripId]);

    return (
        <>
            {
                !trip ? <NotFound /> :

                    <div className='allForms'>
                        <div className='p-4 px-10 rounded-lg borde flex flex-row justify-between mb-2'>
                            <div className="mb-4 flex flex-col">
                                <span className="text-lg font-semibold text-gray-800">
                                    Location: <span className="font-normal">{trip?.location}</span>
                                </span>
                                <div className="mt-1">
                                    <span className="text-sm text-gray-600">
                                        Trip Date: <span className="font-normal">{trip?.tripDate.slice(0, 10)}</span>
                                    </span>
                                </div>
                                <div className="mt-1">
                                    <span className="text-sm text-gray-600">
                                        Origin: <span className="font-normal">{trip?.origin}</span>
                                    </span>
                                </div>
                                <div className="mt-1">
                                    <span className="text-sm text-gray-600">
                                        Price: <span className="font-normal">Rs. {trip?.price}</span>
                                    </span>
                                </div>
                                <div className="mt-1">
                                    <span className="text-sm text-gray-600">
                                        Status: <span className="font-normal">{trip?.status}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='text-4xl text-red-500 font-bold flex justify-center' >
                            Trip Forms
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
                                    {forms?.map((item, index) => (
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
            }
        </>
    );
};

export default AllForms_Admin;

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Category = () => {

    try {
        const token = localStorage.getItem('token');
        const [category, setCategory] = useState();
        const navigate = useNavigate();

        useEffect(() => {
            if (!token) {
                toast.error("Unauthorized Access !");
                navigate('/')
            }
        },[token, navigate]);

        const response = axios.get('http://localhost:5000/allCategory', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        // if (response.status === 200) {
        //     // console.log(formData)
        //     // setCategory(response.data)
        // }
    } catch(error) {
        console.error('Error fetching categories:', error);
        toast.error('Error fetching categories. Please try again.');
    }


    return (
        <div className='px-5 mt-5'>
            <div className='d-flex justify-content-center'>
                <h2> Category List </h2>
            </div>
            <Link to='/Dashboard/Category/AddCategory' className='btn btn-success align-items-left mt-4'> Add Category </Link>

            <div className='category-container mt-4 d-flex justify-content-center'>
                <table>
                    <thread>
                        <tr>
                            <th>
                                Categories
                            </th>
                        </tr>
                    </thread>
                    <tbody>

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Category;

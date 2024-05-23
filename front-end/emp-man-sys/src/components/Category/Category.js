import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
    return (
        <div className='px-5'>
            <div className='d-flex justify-content-center'>
                <h2> Categories </h2>
            </div>
            <Link to='/AddCategory' className='btn btn-success align-items-left mt-4'> Add Category </Link>
        </div>
    )
}

export default Category

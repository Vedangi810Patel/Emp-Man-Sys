import React from 'react'

const LogIn = () => {
    return (
        <div className='login-container d-flex justify-content-center align-items-center vh-100 mt-3 mb-2'>
            <div className='login-form-container '>
                <h2 className='login'> Log In </h2>
                <form className='login-form'>
                    <div className='form-component'>
                        <lable htmlFor="email"> <strong> Email : </strong> </lable>
                        <input type="email" name="email" autoComplete='off' placeholder='Enter Email...'
                            className='form-control rounded-0' />
                    </div>
                    <div className='form-component'>
                        <lable htmlFor="password"> <strong> Password : </strong> </lable>
                        <input type="password" name="password" placeholder='Enter Password...'
                            className='form-control rounded-0' />
                    </div>
                    <div className='form-component'>
                        <button className='btn btn-success w-100 rounded-0 '> LogIn </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LogIn
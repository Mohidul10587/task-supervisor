import React from 'react'
import { Link } from 'react-router-dom';
import Form from './Form';

const Home = () => {
    return (
        <div>
            
            <div className='flex justify-center'>
                <Form></Form>
            </div>
            <div className='flex justify-center'>
            <Link className='m-3 font-bold' to='dataTable'>Data Table</Link>
            </div>
        </div>

    )
}

export default Home
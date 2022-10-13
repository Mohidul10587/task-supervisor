import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Datatable = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {

        fetch('task.json')
            .then(res => res.json())
            .then(data => setTasks(data))

    }, [])


    return (

<div>
     <div className='flex justify-center mt-16'>
            <div className=''>
                <div className='flex'>
                    <p className=' w-36 text-center border border-black font-bold border-l-2 border-t-2'>Folder Name</p>
                    <p className=' w-36 text-center border border-black font-bold border-t-2'>Total Image</p>
                    <p className=' w-36 text-center border border-black font-bold border-t-2'>Amount</p>
                    <p className=' w-36 text-center border border-black font-bold border-t-2'>Google Drive</p>
                    <p className=' w-36 text-center border border-black font-bold border-t-2'>Start Date</p>
                    <p className=' w-36 text-center border border-black font-bold border-r-2 border-t-2'>Deadline</p>

                </div>
                {tasks.map(task => <div key={task._id}>
                    <div className='flex'>
                        <p className=' w-36 text-center border border-black border-l-2 border-b-2'>{task.folderName}</p>
                        <p className=' w-36 text-center border border-black border-b-2'>{task.totalImage}</p>
                        <p className=' w-36 text-center border border-black border-b-2'>{task.amount}</p>
                        <p className=' w-36 text-center border border-black border-b-2'>Google Drive</p>
                        <p className=' w-36 text-center border border-black border-b-2'>Start Date</p>
                        <p className=' w-36 text-center border border-black border-r-2 border-b-2'>Deadline</p>
                    </div>

                </div>)}
            </div>
        </div>
        <div className='flex justify-center'>
            <Link className='m-3 font-bold' to='/'>Go to form</Link>
            </div>
</div>

       
    )
}

export default Datatable
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CounterDown from './CountDown';

const Datatable = () => {

    const [tasks, setTasks] = useState([])


    useEffect(() => {

        fetch('http://localhost:8000/task')
            .then(res => res.json())
            .then(data => setTasks(data))

    }, [])

 
    return (

        <div>
            <h1 className='text-center font-bold text-2xl mt-16'>Task Table</h1>
            <div className='flex justify-center mt-4 '>
                <div className=''>
                    <div className='flex'>
                        <p className=' w-36 p-2 text-center border border-black font-bold border-l-2 border-t-2'>Folder Name</p>
                        <p className=' w-36 p-2 text-center border border-black font-bold border-t-2'>Total Image</p>
                        <p className=' w-36 p-2 text-center border border-black font-bold border-t-2'>Amount</p>
                        <p className=' w-36 p-2 text-center border border-black font-bold border-t-2'>Google Drive</p>
                        <p className=' w-36 p-2 text-center border border-black font-bold border-t-2'>Start Date</p>
                        <p className=' w-36 p-2 text-center border border-black font-bold border-r-2 border-t-2'>Deadline</p>

                    </div>
                    {tasks.map(task => <div key={task._id}>
                        <div className='flex'>
                            <p className=' w-36 p-2 text-center border border-black border-l-2 border-b-1'>{task.folderName}</p>
                            <p className=' w-36 p-2 text-center border border-black border-b-1'>{task.totalImage}</p>
                            <p className=' w-36 p-2 text-center border border-black border-b-1'>{task.amount}</p>
                            <div className=' w-36 p-2 text-center border border-black border-b-1 flex justify-center'><svg width='15px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z" /></svg><span className="pl-4">{task.boolean}</span></div>
                            <p className=' w-36 p-2 text-center border border-black border-b-1'>{task.startTime}</p>
                            <div className=' w-36 p-2 text-center border border-black border-r-2 border-b-1'><CounterDown inputTime={task.deadLine} ></CounterDown></div>
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
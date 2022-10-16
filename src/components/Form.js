import React from 'react'


const Form = () => {

  const formData = (event) => {
    event.preventDefault()
    const folderName = event.target.folderName.value;
    const totalImage = event.target.totalImage.value;
    const amount = event.target.amount.value;
    const boolean = event.target.boolean.value;
    const year = new Date().getFullYear()
    const month = new Date().getMonth()
    const date = new Date().getDate()
    const hour = new Date().getHours()
    const minutes = new Date().getMinutes()
    const startTime = `${hour}:${minutes}-${date}/${month}/${year}`
    const countDownTime = event.target.time.value;
    const timeTime = event.target.timeTime.value

    const deadLine = `${countDownTime}T${timeTime}:00+06:00`


    const formDataObject = { folderName, totalImage, amount, boolean, startTime, deadLine }


    fetch('https://secure-harbor-61507.herokuapp.com/task', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formDataObject)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        alert('New task added')
        event.target.reset()
      }
      )


  }


  return (

    <div className='flex justify-center'>
      <div className='mt-12'>
        <h1 className='text-2xl font-bold text-center'>Put Your Job Info</h1>
        <div className='mt-4'>


          <form onSubmit={formData}>
            <input className='block border border-black my-1 p-2 rounded-lg sm:w-96 w-[260px] mx-2' name='folderName' type="text" placeholder='Folder Name' required />
            <input className='block border border-black my-1 p-2 rounded-lg sm:w-96 w-[260px] mx-2' name='totalImage' type="number" placeholder='Total Image' required />
            <input className='block border border-black my-1 p-2 rounded-lg sm:w-96 w-[260px] mx-2' name='amount' type="number" placeholder='Amount' required />
            <div className='block border border-black my-1 p-2 rounded-lg sm:w-96 w-[260px] mx-2'>
              <span className='mr-4'>Google Drive</span>
              <input type="radio" value="Yes" name="boolean" /> Yes
              <input className='ml-3' type="radio" value="No" name="boolean" /> No
            </div>
            <small className='ml-2'>DeadLine</small>
            <div className='flex justify-between border border-black my-1 p-2 rounded-lg sm:w-96 w-[260px] mx-2'>
             
              <input name='time' type="date" placeholder='Amount'  required />
              <input name='timeTime' type="time" placeholder='Amount' required />
            </div>
            <input className='font-bold block border border-black my-1 p-2 rounded-lg sm:w-96 w-[260px] mx-2 hover:bg-gray-600 hover:text-white' type="submit" value="Submit" />

          </form>



        </div>

      </div>

    </div>
  );
}

export default Form






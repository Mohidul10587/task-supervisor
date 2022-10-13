import React from 'react'

const Form = () => {

const formData =  (event) => {
    event.preventDefault()
    const folderName = event.target.folderName.value;
    const totalImage = event.target.totalImage.value;
    const amount = event.target.amount.value;
    const formDataObject = { folderName, totalImage, amount }
  
  
     fetch('http://localhost:8000/task', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formDataObject)
    })
      .then(response => response.json())
      .then(data =>{
              console.log(data)
              alert('New task added')
              event.target.reset()
      }
  )
  
   
  }

   
  return (
  
    <div className='flex justify-center'>
      <div className='mt-16'>
        <h1 className='text-2xl font-bold text-center'>Put your data here</h1>
        <div className='block'>


          <form onSubmit={formData}>
            <input className='block border border-black my-2 p-3 rounded-xl' name='folderName' type="text" placeholder='Folder Name' />
            <input className='block border border-black my-2 p-3 rounded-xl' name='totalImage' type="number" placeholder='Total Image' />
            <input className='block border border-black my-2 p-3 rounded-xl' name='amount' type="number" placeholder='Amount' />
            <input className='block border border-black my-2 p-3 rounded-xl w-full hover:bg-gray-700 hover:text-white' type="submit" value="Submit" />
          </form>



        </div>

      </div>
    </div>
  );
}

export default Form



  
  
 
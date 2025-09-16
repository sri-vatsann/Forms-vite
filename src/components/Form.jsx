import React from 'react'

const Form = ( {handleFormDataChange, handleSubmit, formData, editIndex} ) => {

  //console.log("props",props);
  return (

    <div className='p-6 m-auto max-w-2xl'>
    <h1 className='text-2xl font-semibold mb-4'>Forms and Table Example </h1>

    <form className='border rounded-lg p-4' onSubmit={handleSubmit}>
      
        <input className="w-full p-2 border rounded mb-2" type="text" placeholder='Name'
         onChange={(e)=> {
          const {value} = e.target;
          handleFormDataChange("name", value);
        }}
        required
        value={formData.name}
         />

        <input className="w-full p-2 border rounded mb-2"type="text" placeholder='Email'
         onChange={(e)=> {
          const {value} = e.target;
          handleFormDataChange("email", value);
        }}
        required
        value={formData.email}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type='submit'>{editIndex===null ? "Add":"Edit"}</button>
    </form>
    </div>
  )
}

export default Form
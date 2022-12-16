import React from 'react'

const Inputs = ({id, type, label, placeholder}) => {
    return (
        <div className='mb-4'>
            <div className="label mb-2">
                <label htmlFor={id}>{label}</label>
            </div>
            <div className="input">
                <input className='border-solid border-2 rounded-md outline-none p-1 w-full' type={type} id={id} placeholder={placeholder} />
            </div>
        </div>
    )
}

export default Inputs
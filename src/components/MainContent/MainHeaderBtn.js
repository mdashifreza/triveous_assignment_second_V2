import React from 'react';

export default function MainHeaderBtn({Icon, title, handlebtn}) {
    const handleClick= ()=>{
        handlebtn();
    }
return (
    <div className='flex text-purple-500 border-2 border-purple-500 space-x-2 font-semibold p-2 rounded-md w-1/2 items-center m-5'onClick={handleClick}> {Icon && <span className='ml-2'><Icon /></span>}{title}</div>
)
}

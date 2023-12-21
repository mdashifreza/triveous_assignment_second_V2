import React from 'react';
import { MdOutlineRemoveRedEye } from "react-icons/md";
export default function FeaturedListCard({ data }) {
return (
    <div>
            <h1 className='font-bold mb-3 mx-2 my-2'>Featured List</h1>
            <div className='flex flex-col lg:flex-row'>
                {
                    data.map((item) => {
                        return (
                            <div key={item.id} className='text-sm p-3 border-2 border-gray-300 rounded-md my-2 mx-2'>
                                <div className='cardHeader flex justify-between'>
                                    <div className='flex'>
                                        <div className="title ml-2 flex-col space-y-4">
                                            <div><h1>{item.title}</h1></div>
                                            <div className='flex space-x-1 text-xs'><h1>{item.organization}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-1 text-gray-500 text-xs p-0.5'>
                                    <p>{item.description}</p>
                                </div>
                                <div className='mt-3 flex space-x-1'>
                                    {item.logo.map((items, index)=>{
                                        return(
                                            <div key={index}>
                                                <img src={items} alt=""  className='h-5 w-5'/>
                                            </div>
                                        )
                                    })}
                                    <span className='text-xs items-center flex text-gray-500'>{"+20 More"}</span>
                                </div>
                                <div className='bottomCard flex justify-between items-center mt-3'>
                                    <div className='flex border-2 border-gray-200 p-1 rounded-md items-center'><img src={item.image} alt="" className='h-5 rounded-full'/><span>{item.badge}</span></div>
                                    <div className='flex items-center space-x-1 text-gray-500'><MdOutlineRemoveRedEye size={20} /><span>{item.views}{item.viewsCount}</span></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
)
}

import React from 'react'
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BiSolidStarHalf } from "react-icons/bi";

const Rating = ({ rating }) => {
  return (

    <div className='flex items-center gap-3'>
      {rating}
      <BsStarFill className='w-5 h-5 text-yellow-500' />
      <BsStarFill className='w-5 h-5 text-yellow-500' />
      <BsStarFill className='w-5 h-5 text-yellow-500' />
      <BiSolidStarHalf className='w-5 h-5 text-yellow-500' />
      <BsStar className='w-5 h-5 text-yellow-500' />


    </div>
  )
}

export default Rating

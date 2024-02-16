import React from 'react'
import { UseCount } from '../hooks/UseCount'
import { GetApi } from '../hooks/UseFetch';



export const MenuMain = () => {

    const {counter,increment,decrement} = UseCount();

    const {data,isLoading,hasError} = GetApi(`https://api.breakingbadquotes.xyz/v1/quotes`, counter);

    const quote = data.length > 0 ? data[0].quote : '';
    const author = data.length > 0 ? data[0].author : '';


  return (
    <>
    <div>
      {counter}
    </div>

    <div className='alert alert-info'>
      {quote}
    </div>

    <p className="text-center">{author}</p>

    <button className='btn btn-primary m-2' onClick={increment} >Next</button>
    
    <button className='btn btn-primary m-2' onClick={decrement} >Previous</button>

    </>
  )
}

import React from 'react'
import { useGlobalContext } from '../context/context'

function Pagination() {
  const {page,nbPages,getNextPage,getPrevPage}=useGlobalContext();
  return (
    <>
    <div className='pagination-btn'>
     <button onClick={()=>getPrevPage()}>Prev</button>
     <p>{page} of {nbPages}</p>
     <button onClick={()=>getNextPage()}>Next</button>
    </div>
    </>
  )
}

export default Pagination;
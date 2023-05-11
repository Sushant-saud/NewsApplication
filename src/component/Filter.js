import React, { useState } from 'react'
import { useGlobalContext } from '../context/context';

function Filter() {
  const { numericFilters,SearchPost}=useGlobalContext();
  const handleChange=(e)=>{
      SearchPost(e.target.value);
  }
  return (
    <div className='main-div'>
        <label className='filter-span'>Filter</label>
            <select onChange={handleChange} defaultValue={numericFilters}>
                    <option defaultChecked>last 24h</option>
                    <option>past week</option>
                    <option>last month</option>
                    <option>last year</option>
            </select>
    </div>
  )
}

export default Filter;
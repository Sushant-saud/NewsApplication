import React from 'react';
import { useGlobalContext } from '../context/context';
function Search() {
  const {query,SearchPost}=useGlobalContext();

  return (
    <div>
      <form onSubmit={(e)=>e.preventDefault()}>
        <div>
          <input type="text" placeholder='search here'
           value={query}
          onChange={(e)=>{SearchPost(e.target.value)}}/>
        </div>
      </form>
    </div>
  )
}

export default Search;
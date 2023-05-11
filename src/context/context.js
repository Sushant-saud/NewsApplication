//context creation 
//contextProducer

//useContext//consumer
import React from "react";
import { useReducer, useEffect, useContext, createContext } from "react";
import Reducer from '../Reducer/Reducer'
let Api = "https://hn.algolia.com/api/v1/search?";
let Apibytime = "https://hn.algolia.com/api/v1/search_by_date?";
const initailState = {
  isLoading:true,
  query: "HTML",
  numericFilters:"last 24h",
  nbPages:"1",
  page:"1",
  hits: []
}
const Appcontext = createContext();
//to create a provider
const AppProvider = ({ children }) => {
  //const [state,setstate]=useState(initailState)
  const [state, dispatch] = useReducer(Reducer, initailState);
  let FetchApi = async (url) => {
    dispatch({type:"SET-LOADING"})
    try {
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      dispatch({
        type: "GET-STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
          numericFilters:data.numericFilters,
        }
      })
    } catch (err) {
      console.log(err);
    }

  };
  //to remove the post
  const removePost=(Post_ID)=>{
    dispatch({type:"REMOVE_POST",payload:Post_ID})
  }
  //Search
  const SearchPost=(SearchQuery)=>{
    dispatch({type:"SEARCH_QUERY",payload:SearchQuery});
  }
  //pagination
  const getNextPage=()=>{
    dispatch({type:"NEXT_PAGE"})
  }
  const getPrevPage=()=>{
    dispatch({type:"PREV_PAGE"})
  }
  useEffect(() => {
    FetchApi(`${Api}query=${state.query}&page=${state.page}`);
  }, [state.query,state.page]);
  
  useEffect(() => {
    FetchApi(`${Apibytime}numericFilters=${state.numericFilters}&query=${state.query}&page=${state.page}`);
  }, [state.numericFilters]);
  

  return <Appcontext.Provider value={{ ...state,removePost,SearchPost,getNextPage,getPrevPage}} >
    {children}
  </Appcontext.Provider>

}
//custom hook create
const useGlobalContext = () => {
  return useContext(Appcontext);
}
export { AppProvider, Appcontext, useGlobalContext };
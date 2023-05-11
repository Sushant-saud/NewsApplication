const Reducer = (state, action) => {
    switch (action.type) {
        case "GET-STORIES":
            return {
                ...state,
                isloading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages
            }
        case "SET-LOADING":
            return {
                ...state,
                isloading: true,
            }
        case "REMOVE_POST":
            return {
                ...state,
                hits: state.hits.filter((currPostId) => currPostId.objectID !== action.payload
                )
            }
        case "SEARCH_QUERY":
            return {
                ...state,
                query: action.payload
            }
        case "NEXT_PAGE":
            let pageNumer=state.page+1;
            if(pageNumer >= state.nbPages)
            {
                pageNumer=0;
            }
            return {
                ...state,
                page:pageNumer
            }
            case "PREV_PAGE":
                let pageNumberDec=state.page-1;
                if(pageNumberDec <= 0)
                {
                    pageNumberDec=50;
                }
                return {
                    ...state,
                    page:pageNumberDec
                }
        default: return state;
    }


};
export default Reducer;
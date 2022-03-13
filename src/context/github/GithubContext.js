import { createContext,useReducer } from "react";
import GithubReducers from "./GithubReducers";

const GithubContext=createContext()

//github provider
export const GithubProvider=({children})=>{
    const initialState={
      users:[],
      user:{},
      repos:[],
      loading:false
    }

    const [state,dispatch]=useReducer(GithubReducers, initialState)


  return <GithubContext.Provider value={{
      ...state,
      dispatch,
  }}>
      {children}
  </GithubContext.Provider>
}

export default GithubContext
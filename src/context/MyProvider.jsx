import React from 'react'
import { useState, useEffect,useRef } from "react";

import MyContext from "./MyContext";
const MyProvider = ({children}) => {
    const [data, setData] = useState({
      results: null,
      loading: true,
      error: null,
    });
      const { results, loading, error } = data;
    const [search, setSearch] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [page, setPage] = useState(1);

    const inputRef = useRef(); //cl gives an object with one property called current.
    //grab .env
    const API_KEY = process.env.REACT_APP_API_KEY; //normally used in backend comes from global variable, but react helps to use it
    const URI = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&per_page=5&query=${search}&page=${page}`;
    const submitHandler = (e) => {
      e.preventDefault();
      setSearch(searchInput);
      setSearchInput("");
      document.querySelector("h1").classList.add("h1Change");
      document.querySelector("form").classList.add("formChange");
    };
    const nextPage = () => {
      setPage((prev) => prev + 1);
      inputRef.current.focus();
    };
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(URI);
          const results = await response.json();
          setData({ results, loading: false, error: null });
        } catch (error) {
          setData({ results: null, loading: false, error });
        }
      };
      fetchData();
    }, [URI]);
   
    
    return (
      <MyContext.Provider
        value={{data, search, searchInput,setSearchInput,setPage, page, inputRef, submitHandler, nextPage }}
      >
        {children}
      </MyContext.Provider>
    );
}

export default MyProvider


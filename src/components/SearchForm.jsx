import React,{useEffect}from 'react'
import { useContext } from "react"
import MyContext from "../context/MyContext"
const SearchForm = () => {
    const {inputRef,searchInput,submitHandler,setSearchInput}=useContext(MyContext)
    useEffect(() => {
        inputRef.current.focus();
        inputRef.current.style.fontSize="20px"
    }, [])
    const searchSubmitHandler = (e) => {
        if (searchInput) {
            submitHandler(e);
        }
       
    }
    return (
        <form>
            <input ref={inputRef} type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            <button onClick={searchSubmitHandler}>Search</button>
        </form>
    )
}

export default SearchForm

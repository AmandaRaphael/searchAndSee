import React,{useEffect}from 'react'

const SearchForm = ({ inputRef, searchInput, setSearchInput, submitHandler }) => {
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

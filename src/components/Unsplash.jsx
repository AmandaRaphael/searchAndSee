import { useContext } from "react";
import MyContext from "../context/MyContext";
import SearchForm from "./SearchForm";
const Unsplash = () => {
 const { data, inputRef,searchInput,setSearchInput,submitHandler,page,setPage,nextPage } = useContext(MyContext);
 const { results, loading, error } = data;
  if (loading) return <p>Loading....</p>;
  if (error) return <p>{error}</p>;
     const imageList = results.results.map((image) => (
       <div className="image_flex">
         <img src={image.urls.thumb} alt="" key={image.id} />
         <span>Image Description:{image.alt_description}</span>
       </div>
     ));
  const totalPages = results.total_pages;
  return (
    <div className="flex">
      <h1>Search and See</h1>
      <SearchForm
        inputRef={inputRef}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        submitHandler={submitHandler}
      />

      <div className="buttonPosition">
        {page > 1 && (
          <button onClick={() => setPage((prevPage) => prevPage - 1)}>
            Previous
          </button>
        )}

        {page < totalPages && (
          <button onClick={nextPage}>
            Next
          </button>
        )}

        {page < totalPages && (
          <span onClick={nextPage}>
            {totalPages - page} pages more
          </span>
        )}
      </div>
      <div className="imageListDiv">{imageList}</div>
    </div>
  );
};

export default Unsplash;

import { useEffect, useState, useRef } from "react";
import SearchForm from "./SearchForm";
const Unsplash = () => {
  const [data, setData] = useState({
    results: null,
    loading: true,
    error: null,
  });
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
      setPage((prev) => prev + 1)
      inputRef.current.focus()
  }
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
  if (data.loading) return <p>Loading....</p>;
  if (data.error) return <p>{data.error}</p>;

  const imageList = data.results.results.map((image) => (
    <div className="image_flex">
      <img src={image.urls.thumb} alt="" key={image.id} />
      <span>Image Description:{image.alt_description}</span>
    </div>
  ));
  const totalPages = data.results.total_pages;

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

import { useEffect, useState } from "react";
const InfiniteLoop = () => {
  const [data, setData] = useState(null);
//   const [count, setCount] = useState();
  // -> componentDidMount  =  only run the side effect once
  // -> componentDidUpdate = will run every time a condition updates
  // -> componentWillUnmount = will run when the component un-mounts
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  //   useEffect(() => {
  //     setCount((prevCount) => prevCount + 1);//this also does the infinite loop
  //   }, [count]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => setData(data));
    }, []);
  return null;
};
export default InfiniteLoop;

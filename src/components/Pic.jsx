import { useEffect,  } from "react";
import motivation from "../assets/motivation.jpg";
const Pic = () => {
  useEffect(() => {
    let interval = setInterval(() => {
      console.log("mounted");
    }, 1000);
      return () => {
          clearInterval(interval)
          console.log("unmounted")
      }
  },[]);

    return <aside>
        <img src={motivation} alt=""/>
  </aside>;
};

export default Pic;

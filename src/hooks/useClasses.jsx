
import { useState, useEffect } from "react";


const useClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(()=>{
        fetch(
          "https://b7a12-summer-camp-server-side-hasan-bakar.vercel.app/Classes"
        )
          .then((res) => res.json())
          .then((data) => setClasses(data));

    },[]);
    return {classes}
};

export default useClasses;
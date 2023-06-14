import { useState, useEffect } from "react";

const useInstructors = () => {
   const [instructors, setInstructors] = useState([]);
   useEffect(() => {
     fetch(
       "https://b7a12-summer-camp-server-side-hasan-bakar.vercel.app/instructors"
     )
       .then((res) => res.json())
       .then((data) => setInstructors(data));
   }, []);
   return { instructors };
};

export default useInstructors;

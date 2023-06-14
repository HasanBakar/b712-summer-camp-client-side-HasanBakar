import { useState, useEffect } from "react";

const usePopularInstructors = () => {
    const [popularInstructors, setPopularInstructors] = useState([]);
    useEffect(() => {
      fetch(
        "https://b7a12-summer-camp-server-side-hasan-bakar.vercel.app/popularInstructors"
      )
        .then((res) => res.json())
        .then((data) => setPopularInstructors(data));
    }, []);
    return { popularInstructors };
};

export default usePopularInstructors;

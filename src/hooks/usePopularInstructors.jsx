import { useState, useEffect } from "react";

const usePopularInstructors = () => {
    const [popularInstructors, setPopularInstructors] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/popularInstructors")
        .then((res) => res.json())
        .then((data) => setPopularInstructors(data));
    }, []);
    return { popularInstructors };
};

export default usePopularInstructors;

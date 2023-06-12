import { useState, useEffect } from "react";

const usePopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/popularClasses")
      .then((res) => res.json())
      .then((data) => setPopularClasses(data));
  }, []);
  return { popularClasses };
};

export default usePopularClasses;

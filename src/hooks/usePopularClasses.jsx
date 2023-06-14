import { useState, useEffect } from "react";

const usePopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  useEffect(() => {
    fetch(
      "https://b7a12-summer-camp-server-side-hasan-bakar.vercel.app/popularClasses"
    )
      .then((res) => res.json())
      .then((data) => setPopularClasses(data));
  }, []);
  return { popularClasses };
};

export default usePopularClasses;

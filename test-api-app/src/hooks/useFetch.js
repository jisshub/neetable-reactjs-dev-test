import { useState, useEffect } from "react";

export const useFetch = (url)=> {
    const [data, setData] = useState(null)
    useEffect(() => {
      const fetchData =async() => {
        const res = await fetch(url);
        const json = await res.json()
        const results = json.results;
        setData(results);
      }
      fetchData();
    }, [url]);
    
  return {data}
}

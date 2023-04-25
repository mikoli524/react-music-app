import {useState, useEffect} from 'react'
import axios from 'axios';

export const FetchData= (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        setData(response.data);
      }
      catch(error) {
        console.error("Error fetching playlist data", error);
      }
      finally {
        setLoading(false);
      }
    }

    fetchData();
  },[url]
  )
  return {data, loading};
}

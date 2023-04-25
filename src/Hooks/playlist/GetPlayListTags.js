import { useState, useEffect } from "react"; 
import axios from "axios";
import API_URL from "../../config";

const api = '/playlist/hot';

const GetPlayListTags = () => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}${api}`);
                setTags(response.data.tags);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    },[]);
    return tags;
}

export default GetPlayListTags;

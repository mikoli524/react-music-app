import { useState, useEffect } from 'react'
import axios from 'axios'
import API_URL from '../../config';

const api = '/top/playlist';
const numOfList = 9;

const GetPlayLists = (cat) => {
    const [lists, setLists] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`${API_URL}${api}?cat=${cat}&limit=${numOfList}`);
            setLists(response.data.playlists);
        } catch (error) {
            console.error(error);
        }
    };

    fetchData();
    },[cat]);
    return lists;
}

export default GetPlayLists;

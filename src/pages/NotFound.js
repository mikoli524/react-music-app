import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate();
    useEffect(() => {
      setTimeout(() => {
        navigate('/home');
      },3000);
    },[]);
    return (<div>404NotFound</div>);
}

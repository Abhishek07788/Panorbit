import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getProfile } from '../Api/api';

const HomePage = () => {
    const [profile, setProfile] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        getProfile().then((res)=>{
            setProfile(res.data.users)
        })
    },[])

    console.log(profile);
  return (
    <div>HomePage</div>
  )
}

export default HomePage
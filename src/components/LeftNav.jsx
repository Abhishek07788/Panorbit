import React from 'react';
import style from '../css/homepage.module.css'

const LeftNav = () => {
  return (
    <div className={style.mainDiv}>
        <p>Profile</p>
        <hr />
        <p>Posts</p>
        <hr />
        <p>Gallery</p>
        <hr />
        <p>ToDo</p>
    </div>
  )
}

export default LeftNav
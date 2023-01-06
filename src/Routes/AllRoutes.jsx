import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../page/HomePage'
import LandingPage from '../page/LandingPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="homepage/:id" element={<HomePage />} />
    </Routes>
  )
}

export default AllRoutes
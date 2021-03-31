import React from 'react'
import { useLocation } from 'react-router-dom'

export default function DetailsPage() {
  let location = useLocation()
  return (
    <div>
      <h3>{console.log(location)}</h3>
    </div>
  )
}

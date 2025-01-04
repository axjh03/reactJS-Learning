import React from 'react'
import { useParams } from 'react-router'


function User() {


    const {someValueInUrl} = useParams()


  return (
    <div>404 not found for url {someValueInUrl}</div>
  )
}

export default User
import React from 'react'
import { Link } from 'react-router-dom'
import Heading from './Heading'
import Userlist from './Userlist'
import  './style.css'

export default function Home() {
  return (
    <div className='home'>
      <Heading/>
      <Userlist/>
    </div>
  )
}

import React from 'react'
import SideBar from '../../components/SideBar'

type Props = {}

export default function index({}: Props) {
  return (<div className='flex w-full'>
    <SideBar />
    <div className='flex items-center justify-center w-full'>
      <p className='text-xl'>Dashboard Page</p>
    </div>
  </div>
  )
}
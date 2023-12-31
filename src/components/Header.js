import React from 'react'
import SearchBar from './SearchBar'
import TypeFilter from './TypeFilter'

const Header = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
       <SearchBar/>
       <TypeFilter/>
    </div>
  )
}

export default Header

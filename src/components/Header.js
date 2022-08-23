import React from 'react'
import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = ({ title, onAdd, showAdd}) => {
  const location = useLocation()

 
  return (
    <header>
       

    <h1 className='header'>{title}</h1>
    {location.pathname==='/' && (<Button 
    color={showAdd ? 'red' : 'green'}
     text={showAdd ? 'Close' : 'Add'}
    onClick={onAdd}
    />
  )}
    </header>
  )
}

Header.defaultProps={
title:'Task Tracker',
description: 'I love this game',
size:'18mb',
age:25,
}

export default Header

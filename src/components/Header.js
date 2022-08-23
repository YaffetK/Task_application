import React from 'react'
import Button from './Button'

const Header = ({ title, onAdd, showAdd}) => {

 
  return (
    <header>
       

    <h1 className='header'>{title}</h1>
    <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'}
    onClick={onAdd}/> 
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

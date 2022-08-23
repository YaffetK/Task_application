import React from 'react'
import Button from './Button'

const Header = ({title}) => {

 
  return (
    <header>
       

    <h1 className='header'>{title}</h1>
    <Button color={'green'} text='Add'/> 
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

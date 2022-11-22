import React from 'react'
import CategoryList from './CategoryList/CategoryList';
import Logo from './Logo/Logo'
import UserLogOut from './UserLogOut/UserLogOut';
import './Nav.css'
function Nav(props) {
  return (
    <div className='component'>
        <div className='container'>
        nav
      <Logo />
      <CategoryList />
      <UserLogOut />
        </div>
    </div>
  )
}
 export default Nav;
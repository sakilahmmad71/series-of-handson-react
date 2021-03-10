import React from 'react'
import Navigation from './navigation/Navigation'
import SaladMaker from './saladMaker/SaladMaker'
import UserContext from './context/UserContext'

const user = {
  name: 'Sakil',
  favorites: ['avocado', 'carrot']
}

const Wrapper = () => {
  return (
    <UserContext.Provider value={user}>
      <Navigation />
      <SaladMaker />
    </UserContext.Provider>
  )
}

export default Wrapper

import React from 'react'
import UserContext from './UserContext'
import { useState } from 'react'

const UserContextProvider =({children}) => {
    const [user, stateUser] = React.useState(null)
    return (
        <UserContext.Provider value={{user, stateUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider


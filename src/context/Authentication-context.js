import React from 'react'

const authContext = React.createContext({
    inPrivateKeyChanged: (event) => { },
    inEmailChanged: (event) => { },
    inPasswordChanged: (event) => { },
    upUsernameChanged: (event) => { },
    upEmailChanged: (event) => { },
    upPasswordChanged: (event) => { },
    upPasswordConfChanged: (event) => { },
    setAccountInfo: (address, privatekey) => { },
    setFR: () => { },
    setEN: () => { },
    t: () => { }
})

export default authContext
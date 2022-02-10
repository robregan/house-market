import  {useEffect, useState, useRef} from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'


export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)
    const isMounted = useRef(true)


    useEffect(() => {
        if(isMounted) {
            const auth = getAuth()
            onAuthStateChanged(auth, (user) => {
                if(user) {
                    setLoggedIn(true)
                }
                setCheckingStatus(false)
            })
       
        }

        return () => {
            isMounted.current = false
        }

    }, [isMounted])
       

  return {loggedIn, checkingStatus}
}



// Protected Routes in Version 6
// https://stackoverflow.com/questions/65506665/protected-routes-with-firebase

// Fix memory leak warning 
// https://stackoverflow.com/questions/59780268/cleanup-memory-leaks-on-an-unmounted-component-in-react-hooks

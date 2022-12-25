import { useEffect } from 'react'
import { useAppSelector } from '../hook'
import { handleTokenValidation } from '../reducers/authReducer'
import { useAppDispatch } from '../hook'

const useUser = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.auth)

    useEffect(() => {
        dispatch(handleTokenValidation())
    }, [])

    return { user }
}

export default useUser
